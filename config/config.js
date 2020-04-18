require("dotenv").config();

module.exports=
{
  "development": {
    "username": process.env.username,
    "password": process.env.password,
    "database": "database1",
    "host": process.env.host,
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.username,
    "password": process.env.password,
    "database": "database1",
    "host": process.env.host,
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.username,
    "password": process.env.password,
    "database": "database1",
    "host": process.env.host,
    "port": 3306,
    "dialect": "mysql"
  }
}
