module.exports = {
  getUserExercises: async (req, res) => {
    const { user, group } = req.query
    const db = await req.app.get('db')
    const userExs = await db.get_user_exs(user, group)
    if (userExs[0]) {
      res.status(200).send(userExs)
    }else {
      res.sendStatus(500)
    }
  }
}