const GET_CALENDAR_INFO = (id) => `
SELECT * FROM calendar
WHERE user_id = ${id}
`

module.exports = { GET_CALENDAR_INFO }
