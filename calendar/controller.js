const pool = require("../db")
const { GET_CALENDAR_INFO } = require("./queries")

const getCalendarInfo = (req, res) => {
  pool.query(GET_CALENDAR_INFO(req.query.user_id), (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

module.exports = { getCalendarInfo }
