db.createUser(
        {
            user: "admindev",
            pwd: "admindev",
            roles: [
                {
                    role: "readWrite",
                    db: "family-planner-database"
                }
            ]
        }
)
