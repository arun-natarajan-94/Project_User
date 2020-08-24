const Sequelize = require("sequelize");

const connection = new Sequelize(
    process.env.MYSQL_DB, 
    process.env.DB_USER, 
    process.env.DB_PASS, {
    dialect: "mysql",
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

connection.authenticate()
.then(() => {
    console.log("DB Connected Succesfully!")
})
.catch(err => {
    console.log("Unable to connect", err)
})

module.exports = { connection }