const GET_CALENDAR_EVENTS = (id) => `
SELECT * FROM calendar_event
WHERE user_id = ${id}
`
const POST_EVENT = (user, action, start, end, notes, plants) => `
INSERT INTO calendar_event (user_id, title, start_date, end_date, notes, plant_ids)
VALUES ('${user}', '${action}', '${start}', '${end}', '${notes}', '${plants}')
RETURNING *
`
const PUT_PLANT_IDS = (user, event, plants) => `
UPDATE calendar_event
SET plant_ids = '${plants}'
WHERE user_id = '${user}' AND id = '${event}'
RETURNING *
`
const PUT_NOTES = (user, event, notes) => `
UPDATE calendar_event
SET notes = '${notes}'
WHERE user_id = '${user}' AND id = '${event}'
RETURNING *
`

module.exports = { GET_CALENDAR_EVENTS, POST_EVENT, PUT_PLANT_IDS, PUT_NOTES }
