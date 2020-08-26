var express = require('express')
var eventRouter = express.Router()
var dbpool = require('../db.js');
const Joi = require('joi');
const e = require('express');


function validateGETReqParams(req) {

if (typeof req.evst != "object" && req.evst != undefined)
  req.evst = [req.evst]
if (typeof req.tkst != "object" && req.tkst != undefined) 
  req.tkst = [req.tkst] 

  /*
   GET request parameter schema
 */

 const getEventParamSchema = Joi.object({
    limit: Joi.number()
            .integer()
            .min(1),
    page:  Joi.number()
           .integer()
           .min(1),
    evst:  Joi.array().items(Joi.string().valid("SCHEDULED","STOPPED","ON-HOLD","IN-PROGRESS","COMPLETED","CANCELLED")),
    tkst:  Joi.array().items(Joi.string().valid("SCHEDULED","OPEN","CLOSED")),  
    ven:   Joi.number().integer().min(1),
    ha:    Joi.number().integer().min(1),
    name:  Joi.string().min(1),
    desc:  Joi.bool()
 }).unknown(false);
 
 var {value, error} = getEventParamSchema.validate(req)

 if(error)
   return error.details[0].message
 return value

}


eventRouter.get('/',(req,res,next)=>{

   console.log(validateGETReqParams(req.query))
   
});

eventRouter.use((req,res,next)=>{
  console.log(next)
})

eventRouter.post('/',(req,res,next)=>{
  
});

eventRouter.put('/',(req,res,next)=>{
  
});

eventRouter.get('/:eventId(\\d+)',(req,res,next)=>{
  
})

eventRouter.delete('/:eventId(\\d+)',(req,res,next)=>{
  
})

module.exports = eventRouter