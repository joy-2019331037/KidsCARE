import mysql from "mysql";

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"dbProject",
});

export default db;