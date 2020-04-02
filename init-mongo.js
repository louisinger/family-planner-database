const roles = [
  {
    name: 'CREATE_STOCK_MANAGER',
    description: 'Allow to create a stock manager account'
  },
  {
    name: 'CREATE_OPERATION_MANAGER',
    description: 'Allow to create an operation mananger account'
  },
  {
    name: 'SCAN',
    description: 'Allow to scan a datamatrix'
  },
  {
    name: 'CREATE_DATAMATRIX',
    description: 'Allow to generate a datamatrix'
  },
  {
    name: 'GET_DATA',
    description: 'Allow to get all the data'
  }
]

const rolesIds = db.roles.insertMany(roles).insertedIds

for (let i = 0; i<rolesIds.length; i++) {
  roles[i]._id = rolesIds[i]
}

const profiles = [
  {
    name: 'OPERATION_MANAGER',
    description: 'the operation manager account = admin',
    roles: roles.map(role => role._id)
  },
  {
    name: 'STOCK_MANAGER',
    description: 'the stock manager = the person who scan datamatrix',
    roles: [roles.find(role => role.name === 'SCAN')._id]
  }
]

const profilesIds = db.profiles.insertMany(profiles).insertedIds

for (let j = 0; j<profilesIds.length; j++) {
  profiles[j]._id = profilesIds[j]
}

const superadmin = {
  username: 'superadmin',
  email: 'tech@venezvit.com',
  passwordHash: '$2b$10$ahs7h0hNH8ffAVg6PwgovO3AVzn1izNFHn.su9gcJnUWUzb2Rcb2W',
  profile: profiles[0]._id
}

db.users.insert(superadmin)



