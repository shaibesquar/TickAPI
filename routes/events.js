var express = require('express')
var eventRouter = express.Router()

eventRouter.get('/',(req,res,next)=>{
   //console.log(req.baseUrl)
});

eventRouter.post('/',(req,res,next)=>{
  console.log(req.body)
});


module.exports = eventRouter