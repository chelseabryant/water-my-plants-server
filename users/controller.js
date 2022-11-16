const bcrypt = require("bcryptjs")
const pool = require("../db")

const createAccount = (req, res) => {
  console.log("QWERT:::::::::", req.body)
  // var salt = bcrypt.genSaltSync(10)
  // var hash = bcrypt.hashSync(password, salt)
}

module.exports = {
  createAccount,
}
