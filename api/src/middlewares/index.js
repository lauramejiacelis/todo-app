//errors
class ValidationError extends Error {
  constructor(message, content){
    super(message)
    this.name = "Validation Error"
    this.content = content
    this.status = 400
  }
}

class AuthenticationError extends Error {
  constructor(message){
    super(message)
    this.name = "Authentication Error"
    this.status = 403
  }
}


//Validation middleware
function validationMiddleware(schemaName) {
  return(req,res,next)=> {
    const schema = schemaName || null;
    if (!schema) {
      return res.sendStatus(500)
    }

    const {error} = schema.validate(req.body)
    if (error){
      return next(new ValidationError("Please verify the input", error))
    }

    next()
  }
}

//auth middleware
function authMiddleware(req, res, next){
  const userId = req.session.userId;
  if(!userId) return next(new AuthenticationError("Please login"))
  return next()
}

//error middleware missing
function errorMiddleware(error, req, res, next){
  if(error instanceof ValidationError){
    return res.status(error.status).send({
      error: true,
      message: error.message,
      content: error.content
    })
  }
  return res.status(error.status ?? 500).send({
    error: true,
    message: error.message ?? "Something went wrong"
  })
}

module.exports = {validationMiddleware, errorMiddleware, authMiddleware}