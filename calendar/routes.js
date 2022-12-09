const { Router } = require("express")
const controller = require("./controller")

const router = Router()

router.get("/", controller.getCalendarEvents)

router.post("/post-event", controller.postEvent)

router.put("/update-plant-ids", controller.putPlantIds)

module.exports = router
