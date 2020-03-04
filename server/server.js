
require("dotenv").config()
const express = require('express')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const ctrl = require('./controllers/Controller')
const userCtrl = require('./controllers/UserController')
const massive = require('massive')
const session = require('express-session')

const app = express()

app.use(express.json())

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
  })
)

app.get('/api/all', ctrl.returnAll)
app.get('/api/exercise/category', ctrl.getExByCat)
app.get("/api/exercise/:id", ctrl.getExById)
app.post('/api/exercise', ctrl.addEx)
app.put('/api/exercise/:id', ctrl.editEx)
app.delete('/api/exercise/:id', ctrl.deleteEx)
app.post('/api/register', userCtrl.register)
app.post('/api/user', userCtrl.userLogin)

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => console.log(`Self destruct in ${SERVER_PORT}`))
})