const bcrypt = require("bcryptjs")
const pool = require("../db")
const { postUser, getUser } = require("./queries")

const createAccount = (req, res) => {
  var salt = bcrypt.genSaltSync(10)
  var hash = bcrypt.hashSync(req.body.password, salt)
  pool.query(
    postUser(req.body.name, req.body.email, hash),
    (error, results) => {
      if (error) throw error
      res.status(200).json(results.rows[0])
    }
  )
}

const authenticate = (req, res) => {
  pool.query(getUser(req.body.email), (error, results) => {
    if (error) throw error
    if (results.rows.length) {
      const authenticated = bcrypt.compareSync(
        req.body.password,
        results.rows[0].password
      )
      if (authenticated) {
        delete results.rows[0].password
        res.status(200).json(results.rows[0])
      } else {
        res.send({ error: "Invalid credentials" })
      }
    } else {
      res.send({ error: "Invalid credentials" })
    }
  })
}

module.exports = {
  createAccount,
  authenticate,
}
