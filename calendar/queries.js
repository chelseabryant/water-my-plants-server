const GET_CALENDAR_INFO = (id) => `
SELECT * FROM calendar_event
WHERE user_id = ${id}
`

module.exports = { GET_CALENDAR_INFO }
