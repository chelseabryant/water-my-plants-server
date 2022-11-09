const express = require("express")
const bodyParser = require("body-parser")
const next = require("next")
// TODO: Need to change below false if production
const app = next({ dev: true })
const userRoutes = require("./users/routes")
// const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(bodyParser.json())
    server.use(express.json())

    server.get("/a/taco", (req, res) => {
      console.log("server: ", req.url)
      //   return handle(req, res)
      res.send({ success: "This sentence is rendering" })
    })

    server.use("/a/v1/users", userRoutes)

    server.listen(8080, () => {
      console.log("Server started on port 8080")
    })
  })
  .catch((e) => console.log("MY SERVER ERROR", e))
