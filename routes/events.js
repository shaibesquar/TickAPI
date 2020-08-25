var express = require('express')
var eventRouter = express.Router()
var dbpool = require('../db.js');
const Joi = require('joi')

const eventReqSchema = Joi.object({
  limit: Joi.number()
            .integer()
            .min(0),
  page:  Joi.number()
           .integer()
           .min(0),
  evst:  Joi.string().valid("SCHEDULED","STOPPED","ON-HOLD","IN-PROGRESS","COMPLETED","CANCELLED"),
  tkst:  Joi.string().valid("OPEN","CLOSED"),  
  ven:   Joi.number().integer(),
  ha:    Joi.number().integer()
})



eventRouter.get('/',(req,res,next)=>{
   var reqParams = {
     limit: req.query.limit || 10,
     offset: req.query.offset || 0,
     evst: req.query.evst,
     tkst: req.query.tkst,
     ven: req.query.ven,
     ha: req.query.ha
   } 
   var validReqParams = eventReqSchema.validate(reqParams); 
  
   console.log(reqParams)

});

eventRouter.post('/',(req,res,next)=>{
  
});

eventRouter.put('/',(req,res,next)=>{
  
});

eventRouter.get('/:eventId(\\d+)',(req,res,next)=>{
  
})

eventRouter.delete('/:eventId(\\d+)',(req,res,next)=>{
  
})

module.exports = eventRouter