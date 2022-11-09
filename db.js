const Pool = require("pg").Pool

// DONT PUSH THIS CODE UNTIL WE REPLACE PASSWORD WITH .ENV VARIABLE
const pool = new Pool({
  user: "chelsmbryant",
  host: "db.bit.io",
  database: "chelsmbryant/water_my_plants", // public database
  password: "", // key from bit.io database page connect menu
  port: 5432,
  ssl: true,
  connectionString: "",
})

module.exports = pool
