const { User } = require('../db/models')
const { Router } = require('express')
const registerSchema = require('../schemas/register')
const loginSchema = require('../schemas/login')
const {validationMiddleware, authMiddleware} = require('../middlewares')

const router = Router();

const SESSION_KEY = "session_id"

router.post(
  '/register',
  validationMiddleware(registerSchema),
  async (req,res, next)=>{
    const { firstName, lastName, email, password } = req.body;
    const user = await User.create({ firstName, lastName, email, password })
    //res.cookie(SESSION_KEY, user.id,{ httpOnly: true})
    req.session.userId= user.id
    res.send(user)
    console.log(req.body)
})

router.post('/login', validationMiddleware(loginSchema),async (req, res, next)=> {
  const {email, password} = req.body;
  const user = await User.findOne({where: {email}});
  if(!user){
    return next(new Error('Authentication error'))
  }

  const result= await User.passwordCompare(password, user.password)

  if(!result){
    return next(new Error('Authentication error'))
  }

  delete user.dataValues.password;

  req.session.userId= user.id

  console.log(user)
  res.send(user)
})

router.get('/me',authMiddleware, async(req, res)=>{
  const userId = req.session.userId;

  const user = await User.findOne({ 
    where: {id: userId}, 
    attributes:["id", "firstName", "lastName", "email"]
  })
  res.send(user)
})

router.post('/logout', (req, res, next)=>{
  //res.clearCookie(SESSION_KEY, user.id,{ httpOnly: true})
  req.session.destroy();
  res.send("ok")
})

module.exports = router