const Exercise = require("../models/exerciseModel")

const getAllExercisesOfAUser = async (req, res) => {
    const exercises = await Exercise.find({ userId: req.params._id })
    res.status(200).json({ exercises })
}

module.exports = getAllExercisesOfAUser