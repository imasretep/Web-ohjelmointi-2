module.exports = {
  HOST: "localhost",
  USER: "opiskelija",
  PASSWORD: "salasana12",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
