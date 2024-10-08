"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("@avanda/error");
const sequelize_1 = require("sequelize");
let connection;
async function default_1(config) {
    if (connection) {
        return connection;
    }
    connection = new sequelize_1.Sequelize(config.dbName, config.dbUser, config.dbPassword, {
        host: process.env.DB_HOST,
        port: config.port,
        dialect: config.dbDialect
    });
    try {
        await connection.authenticate({ logging: console.log });
    }
    catch (error) {
        throw new error_1.runtimeError('Unable to connect to the database:' + error);
    }
    return connection;
}
exports.default = default_1;
