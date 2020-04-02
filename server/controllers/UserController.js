const bcrypt = require('bcryptjs')
const Mailer = require('./Mailer')

module.exports = {
  register: async (req, res) => {
    const { email, password, username } = req.body
    const db = req.app.get('db')
    const foundUser = db.get_user(email)
    if (foundUser[0]) {
      res.status(406).send({message: 'Email already registered, try logging in.'})
    }
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const newUser = await db.add_user(email, username, hash)
    res.status(200).send(newUser)
  },
  userLogin: async (req, res) => {
    const { email, password } = req.body
    const db = req.app.get('db')
    const foundUser = await db.get_user(email)
    const user = foundUser[0]
    if (!user) {
      res.status(406).send( 'No user by that email, please register.' )
    }
    const isAuthenticated = bcrypt.compareSync(password, user.password)
    if (!isAuthenticated) return res.status(403).send('Incorrect Password')
    const userExs = await db.get_user_exs(user.user_id)
    req.session.user = {
      userId: user.user_id,
      username: user.username,
      userExercises: userExs
    }
    return res.status(200).send(req.session.user)
  },
  userLogOut: (req, res) => {
    req.session.destroy()
  },
  resetPassword: async (req, res) => {
    const { email } = req.body
    const db = req.app.get('db')
    const foundUser = await db.get_user(email)
    const user = foundUser[0]
    if (!user) {
      res.status(406).send( 'No user by that email.' )
    }
    const {user_id, username, password } = user
    var tempPassword = Math.random().toString(36).slice(-8)
    const tempUserInfo = await db.alter_user(user_id, username, email, password, tempPassword)
    if (tempUserInfo[0]) {
   
      
      Mailer.sendMail(tempUserInfo[0])
      .then((result) => res.status(200).send(result))
      .catch(err => res.status(500).send(err))
    }else {
      res.status(500).send({message: 'Something went wrong.'})
    }

  }
}