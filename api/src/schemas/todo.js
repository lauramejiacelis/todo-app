const Joi = require('joi')

const todoSchema = Joi.object({
  description: Joi.string().required(),
  status: Joi.string().valid('To Do', 'Work in progress', ' Done').required(),
})

module.exports = todoSchema