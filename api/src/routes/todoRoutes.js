const { Todo } = require('../db/models')
const{ Router } = require('express')
const todoSchema = require('../schemas/todo')
const {validationMiddleware} = require('../middlewares')

const router = Router();

//create a todo
router.post(
  '/',
  validationMiddleware(todoSchema),
  (req,res)=>{
    const { description, status } = req.body;
    Todo.create({ description, status }).then((todo)=>{
      res.send(todo)
    })
    console.log(req.body)
})

//get all todos
router.get('/', (req, res)=> {
  try{
      Todo.findAll().then((todo)=>{
          res.send(todo)
      })
  } catch (err) {
      return res.status(500).json({message: err.message})
  }
})

//get a todo
router.get('/:id', (req, res)=> {
  const {id} = req.params;
  try{
      Todo.findOne({ where: {id}}).then((todo)=>{
          res.send(todo)
      })
  } catch (err) {
      return res.status(500).json({message: err.message})
  }
})

//update a todo
router.put('/:id', async (req, res)=> {
  try{
      const {id} = req.params;
      const { description, status }= req.body;
      const todo = await Todo.findOne({ where: {id}})
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
router.delete('/:id', async (req, res)=> {
  const {id} = req.params;
  try{
      await Todo.destroy({ where: {id}})
      res.status(204).json({message: `Todo ${id} was deleted`})
      console.log(`Todo ${id} was deleted`)
  } catch (err) {
      return res.status(500).json({message: err.message})
  }
})

module.exports = router