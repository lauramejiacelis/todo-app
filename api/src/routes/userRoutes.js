const { User, Todo } = require('../db/models')
const { Router } = require('express')
const todoSchema = require('../schemas/todo')
const {validationMiddleware} = require('../middlewares')

const router = Router();

//get all users
router.get('/',(req, res)=> {
  User.findAll().then((users) => {
    res.send(users)
  })
})

//get an user
router.get('/:id',async(req,res)=> {
  const userId = req.session.userId; 

  const user = await User.findOne({ where: {id: userId}})
  
  res.send(user)
})

//get all todos from an user
router.get('/:id/todo', async (req, res)=> {
  const userId = req.session.userId; 
  try{
    const user = await User.findOne({ where: {id: userId} });
    const todos = await user.getTodos();
    res.send(todos)
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
})

//create a todo
router.post(
  '/:id/todo/',
  validationMiddleware(todoSchema),
  async (req,res)=>{
    const userId = req.session.userId; 
    
    const { description, status } = req.body;

    const user = await User.findOne({ where: {id: userId} });

    const todo = await user.createTodo({ description, status })

    res.send(todo)

    console.log(todo)
    
    console.log(req.body)
})

//get a todo
router.get('/:id/todo/:todoId', async (req, res)=> {
  const userId = req.session.userId;
  const {todoId} = req.params;

  const user = await User.findOne({ where: {id: userId} });

  const todo = await Todo.findOne({ where: {id: todoId}})

  res.send(todo)

})

//update a todo
router.put('/:id/todo/:todoId',validationMiddleware(todoSchema), async (req, res)=> {
  try{
    const {todoId} = req.params;
    const { description, status }= req.body;
    const todo = await Todo.findOne({ where: {id: todoId}})
    todo.set({
        description, status 
    })
    await todo.save()
    res.send(todo)
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
})

//deleta a todo
router.delete('/:id/todo/:todoId', async (req, res)=> {
  const {todoId} = req.params;

  await Todo.destroy({ where: {id: todoId}})
  res.status(204).json({message: `Todo was deleted`})

  console.log(`Todo was deleted`)
}) //no funciona el manejo de errores: si le mando mal el id... colapsa el server

module.exports = router