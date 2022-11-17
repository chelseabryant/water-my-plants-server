const { Router } = require("express")
const controller = require("./controller")

const router = Router()

router.post("/create", controller.createAccount)
router.post("/login", controller.authenticate)

module.exports = router
