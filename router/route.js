const express = require("express")
const router = express.Router()

const createUser = require("../controllers/createUser")
const getAllUsers = require("../controllers/getAllUsers")
const createExercise = require("../controllers/createExercise")
const getLogs = require("../controllers/getLogs")
const getAllExercisesOfAUser = require("../controllers/getAllExercisesOfAUser")

router.route("/")
        .post(createUser)
        .get(getAllUsers)
router.route("/:_id/exercises")
        .post(createExercise)
        .get(getAllExercisesOfAUser)
router.route("/:_id/logs")
        .get(getLogs)

module.exports = router