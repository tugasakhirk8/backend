import { Sequelize } from "sequelize";

const db = new Sequelize('db_absen', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;