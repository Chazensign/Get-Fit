let exData = require('../ExData.json')
let id = 38

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
    console.log();
    
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
    let newEx = {
      id: id.toString(),
      Exercise: Exercise,
      Equipment: Equipment,
      ExerciseType: ExerciseType,
      MajorMuscle: MajorMuscle,
      MinorMuscle: MinorMuscle,
      Example: Example,
      Notes: Notes,
      Modifications: Modifications,
      Weight: Weight,
      Reps: Reps,
      Sets: Sets
  }
  id++
  exData.push(newEx)
  res.sendStatus(200)
  },
  editEx: (req, res) => {
    let index = exData.findIndex(ex => ex.id === req.params.id)
    exData.splice(index, 1, req.body)
    res.sendStatus(200)
  }
}