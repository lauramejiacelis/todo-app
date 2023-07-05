require('dotenv').config()

const express = require('express')
const session = require('express-session')

const Sequelize = require("sequelize");
const {sequelize} = require('./db/models') //trajimos la instancia
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express()

const cors = require('cors')

const routes = require('./routes')

const PORT = process.env.PORT ?? 5000;

const {errorMiddleware} = require('./middlewares/index')

//middleware
app.use(cors())
app.use(express.json())//req.body

//express session

const sessionStore = new SequelizeStore({
  db: sequelize,
});

app.use(session({
  name: 'sessionId',
  secret: process.env.SESSION_SECRET,
  store: sessionStore ,
  resave: false,
  rolling: true,
  saveUninitialized: false,
  cookie: { 
    secure: false,
    httpOnly: true,
    maxAge:1000*60*60, //1 hora
  }
}))

sessionStore.sync()

//ROUTES//

//simple route
app.get("/", (req, res)=> {
  res.json({message: "Welcome to Laura's App"})
})

app.use('/api', routes)

//error middleware 
app.use(errorMiddleware)


app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`))

