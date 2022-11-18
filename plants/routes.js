const { Router } = require("express")
const controller = require("./controller")

const router = Router()

router.get("/", controller.getAllPlants)

router.get("/my-plants", controller.getMyPlants)

router.post("/add-plant", controller.postMyPlant)

router.get("/added-plants", controller.addedPlants)

router.get("/:id", controller.getPlantById)

module.exports = router
