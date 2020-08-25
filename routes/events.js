var express = require('express')
var eventRouter = express.Router()


eventRouter.get('/',(req,res,next)=>{
   var reqParams = {
     limit: req.query.limit,
     offset: req.query.offset,
     evst: req.query.evst,
     tkst: req.query.tkst,
     ven: req.query.ven,
     ha: req.query.ha
   } 
   console.log(reqParams)
   res.set('Content-Type','application/json')
   res.set('Access-Control-Allow-Origin','*')
   res.send({reqParams})
   res.end()
});

eventRouter.post('/',(req,res,next)=>{
  
});

eventRouter.put('/',(req,res,next)=>{
  
});

eventRouter.delete('/',()=>{

})

eventRouter.get('/:eventId(\\d+)',(req,res,next)=>{
  
})

eventRouter.delete('/:eventId(\\d+)',(req,res,next)=>{
  
})

module.exports = eventRouter