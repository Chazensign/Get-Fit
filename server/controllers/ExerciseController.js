module.exports = {
  returnAll: async (req, res) => {
    const db = await req.app.get('db')
    const exercises = await db.get_all_exercises()
    if (exercises[0]) {
      res.status(200).send(exercises)
    } else {
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
    const {
      ex_id,
      notes,
      modifications,
      reps,
      sets,
      weight,
      hr,
      min,
      sec
    } = req.body
    const db = await req.app.get('db')
    const userExs = await db.save_user_ex(
      userId,
      ex_id,
      modifications,
      notes,
      reps,
      sets,
      weight,
      hr,
      min,
      sec
    )
    if (userExs[0]) {
      res.status(200).send(userExs)
    } else {
      res.sendStatus(500)
    }
  },

  editUserEx: async (req, res) => {
    const {
      userId,
      user_ex_id,
      notes,
      modifications,
      reps,
      sets,
      weight,
      hr,
      min,
      sec,
      ex_id
    } = req.body
    const db = await req.app.get('db')
    const userExs = await db.update_user_ex(
      user_ex_id,
      notes,
      modifications,
      reps,
      sets,
      weight,
      hr,
      min,
      sec,
      userId,
      ex_id
    )
    res.status(200).send(userExs)
  },

  removeUserEx: (req, res) => {
    let index = exData.findIndex(ex => +req.params.id === +ex.id)
    exData.splice(index, 1)
    res.sendStatus(200)
  },

  addEx: async (req, res) => {
    let userExs
    const {
      exercise,
      equipment,
      exercisetype,
      majormuscle,
      minormuscle,
      example,
      notes,
      modifications,
      weight,
      sets,
      reps,
      hr,
      min,
      sec,
      checked
    } = req.body
    const db = req.app.get('db')
    const newExId = await db.add_exercise(
      exercise,
      equipment,
      exercisetype,
      majormuscle,
      minormuscle,
      example,
      notes,
      modifications
    )
    if (checked) {
      userExs = await db.save_user_ex(
        req.session.user.userId,
        newExId,
        modifications,
        notes,
        reps,
        sets,
        weight,
        hr,
        min,
        sec
      )
    }
    const allExs = await db.get_all_exercises()
    res.status(200).send({ userExs, allExs })
  }
}
