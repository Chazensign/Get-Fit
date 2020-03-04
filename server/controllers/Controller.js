let exData = require('../ExData.json')

module.exports = {
  getExByCat: (req, res) => {
    let filtered = exData.filter(ex => ex.MajorMuscle === req.query.muscle)
    if (filtered.length > 0) {
    res.status(200).send(filtered)
    }else {
      res.status(404).send("No exercises by that muscle.")
    }
  },

  returnAll: (req, res) => {
    res.status(200).send(exData)
  },

  deleteEx: (req, res) => {
    let index = exData.findIndex(ex => +req.params.id === +ex.id)
    exData.splice(index, 1)
    res.sendStatus(200)
  },

  getExById: (req, res) => {
  let exer = exData.filter(ex => req.params.id === ex.id)
  res.status(200).send(exer)
  },

  addEx: (req, res) => {
    let {Exercise, Equipment, ExerciseType, MajorMuscle, MinorMuscle, Example, Notes, Modifications, Weight, Sets, Reps} = req.body
  const db = req.app.get('db')
  db.add_exercise(
    Exercise,
    Equipment,
    ExerciseType,
    MajorMuscle,
    MinorMuscle,
    Example,
    Notes,
    Modifications
  )
  res.sendStatus(200)
  },
  editEx: (req, res) => {
    let index = exData.findIndex(ex => ex.id === req.params.id)
    exData.splice(index, 1, req.body)
    res.sendStatus(200)
  }
}