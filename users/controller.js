const pool = require("../db")
const { getAllPlants } = require("./queries")

const getUser = (req, res) => {
  pool.query(getAllPlants, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

module.exports = {
  getUser,
}
