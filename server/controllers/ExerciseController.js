
module.exports = {
  
  returnAll: async (req, res) => {
    const db = await req.app.get('db')
    const exercises = await db.get_all_exercises()
    if (exercises[0]) {
      res.status(200).send(exercises)
    }else {
      res.sendStatus(500)
    }
  },

  // getUserExercises: async (req, res) => {
  //   const { user, group } = req.query
  //   const db = await req.app.get('db')
  //   const userExs = await db.get_user_exs(user, group)
  //   if (userExs[0]) {
  //     res.status(200).send(userExs)
  //   }else {
  //     res.sendStatus(500)
  //   }
  // },

  addToUser: async (req, res) => {
    const { userId } = req.session.user
    const { ex_id, notes, modifications, reps, sets, weight, time } = req.body
    const db = await req.app.get('db')
    const userExs = await db.save_user_ex(
      userId,
      ex_id,
      notes,
      modifications,
      reps,
      sets,
      weight,
      time
    )
    if (userExs[0]) {
      res.status(200).send(userExs)
    } else {
      res.sendStatus(500)
    }
  },

  editUserEx: (req, res) => {
    let index = exData.findIndex(ex => ex.id === req.params.id)
    exData.splice(index, 1, req.body)
    res.sendStatus(200)
  },

  removeUserEx: (req, res) => {
    let index = exData.findIndex(ex => +req.params.id === +ex.id)
    exData.splice(index, 1)
    res.sendStatus(200)
  }
  
  // addEx: (req, res) => {
  //   let {Exercise, Equipment, ExerciseType, MajorMuscle, MinorMuscle, Example, Notes, Modifications, Weight, Sets, Reps} = req.body
  // const db = req.app.get('db')
  // db.add_exercise(
  //   Exercise,
  //   Equipment,
  //   ExerciseType,
  //   MajorMuscle,
  //   MinorMuscle,
  //   Example,
  //   Notes,
  //   Modifications
  // )
  // res.sendStatus(200)
  // },
  
}