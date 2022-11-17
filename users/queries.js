const postUser = (name, email, password) => `
INSERT INTO practice (name, email, password)
VALUES ('${name}', '${email}', '${password}')
RETURNING user_id, name, email;
`
const getUser = (email) => `
SELECT * FROM practice
WHERE email = '${email}'
`

module.exports = {
  postUser,
  getUser,
}
