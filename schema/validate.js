const Joi = require('joi').extend(require('@joi/date'));
const {MetricName,ResourceName,avg,TimeGenerated,max,min,P80,P90} = require('../models/chart');


const schema = Joi.object({
    MetricName: Joi.string().min(2).max(30),
    ResourceName:Joi.string().min(1).max(40),
    avg: Joi.number(),
    TimeGenerated : Joi.date(),
    max:Joi.number(),
    min:Joi.number(),
    P80:Joi.number(),
    P90:Joi.number()
   
});

module.exports = schema;