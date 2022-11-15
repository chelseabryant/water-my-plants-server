require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const next = require("next")
// TODO: Need to change below false if production
const app = next({ dev: true })
// const userRoutes = require("./users/routes")
const plantRoutes = require("./plants/routes")

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(bodyParser.json())
    server.use(express.json())

    // server.use("/a/users", userRoutes)
    server.use("/a/plants", plantRoutes)

    server.listen(8080, () => {
      console.log("Server started on port 8080")
    })
  })
  .catch((e) => console.log("MY SERVER ERROR", e))
