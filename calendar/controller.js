const pool = require("../db")
const { GET_CALENDAR_EVENTS, POST_EVENT } = require("./queries")

const getCalendarEvents = (req, res) => {
  pool.query(GET_CALENDAR_EVENTS(req.query.user_id), (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const postEvent = (req, res) => {
  pool.query(
    POST_EVENT(
      req.body.user,
      req.body.action,
      req.body.start,
      req.body.end,
      req.body.notes,
      req.body.plants
    ),
    (error, results) => {
      if (error) throw error
      res.status(200).json(results.rows[0])
    }
  )
}

module.exports = { getCalendarEvents, postEvent }
