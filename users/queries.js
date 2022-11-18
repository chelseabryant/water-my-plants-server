const postUser = (name, email, password) => `
INSERT INTO accounts (username, email, password)
VALUES ('${name}', '${email}', '${password}')
RETURNING id, username, email;
`
const getUser = (email) => `
SELECT * FROM accounts
WHERE email = '${email}'
`

module.exports = {
  postUser,
  getUser,
}
