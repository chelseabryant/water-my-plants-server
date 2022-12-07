const GET_CALENDAR_EVENTS = (id) => `
SELECT * FROM calendar_event
WHERE user_id = ${id}
`
const POST_EVENT = (user, action, start, end, notes, plants) => `
INSERT INTO calendar_event (user_id, title, start_date, end_date, notes, plant_ids)
VALUES ('${user}', '${action}', '${start}', '${end}', '${notes}', '${plants}')
RETURNING *
`

module.exports = { GET_CALENDAR_EVENTS, POST_EVENT }
