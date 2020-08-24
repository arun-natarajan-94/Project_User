const Sequelize = require("sequelize");
const { INTEGER, STRING } = require("sequelize");

const userDetails = Sequelize.define('newUser', {
    userId: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: STRING,
    },
    email: {
        type: STRING,
        unique: true
    },
    password: {
        type: STRING
    },
    phoneNo: {
        type: STRING
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = userDetails;