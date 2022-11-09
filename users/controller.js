const { response } = require("express")
const pool = require("../db")

const getUser = (req, res) => {
  console.log("Getting user")
  pool.query("SELECT * FROM accounts;", (error, results) => {
    if (error) throw error
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getUser,
}
