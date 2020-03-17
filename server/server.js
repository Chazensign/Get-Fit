
require("dotenv").config()
const express = require('express')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const exCtrl = require('./controllers/ExerciseController')
const userCtrl = require('./controllers/UserController')
const massive = require('massive')
const session = require('express-session')

const app = express()

app.use(express.json())

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET
  })
)

app.get('/api/all', exCtrl.returnAll)
// app.get('/api/exercise/category', ctrl.getExByCat)
// app.get("/api/exercise/:id", ctrl.getExById)
// app.post('/api/exercise', exCtrl.addEx)
// app.get('/api/user/exercises?', exCtrl.getUserExercises)
app.post('/api/user/exercises', exCtrl.addToUser)
app.put('/api/user/exercise', exCtrl.editUserEx)
app.delete('/api/exercise/:id', exCtrl.removeUserEx)
app.post('/api/register', userCtrl.register)
app.post('/api/user', userCtrl.userLogin)
app.delete('/api/user', userCtrl.userLogOut)

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => console.log(`Self destruct in ${SERVER_PORT}`))
})