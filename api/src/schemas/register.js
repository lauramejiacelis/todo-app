const Joi = require('joi');

const registerSchema = Joi.object({
  firstName: Joi.string()
    .min(3)
    .max(30)
    .required(),
  lastName: Joi.string()
    .min(3)
    .max(30)
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required()
});

module.exports = registerSchema;