const Chart = require('../models/chart');

const Schema = require('../schema/validate');


exports.createOne = async(req,res,next) =>{
    const usermodel = {
        MetricName: req.body['MetricName'],
        ResourceName: req.body['ResourceName'],
        avg:req.body['avg'],
        TimeGenerated: req.body['TimeGenerated'],
        max:req.body['max'],
        min:req.body['min'],
        P80:req.body['P80'],
        P90:req.body['P90'],
    };
    try{
        console.log("inside create controller")
        const value = await Schema.validate(usermodel);
        console.log(value.error);
        if(value.error){
            res.status(500).json({message: "invalid entry"});
        }else{
            console.log('valid');
            // console.log("temp",value);
            const val = await Chart.create(value.value);
            // console.log(val);
            console.log("created sucessfully");
            res.status(200).json(val);
        }
    }catch(error){
        console.log(error);
    }
};

exports.getAll = async(req,res,next) =>{
    // console.log("am in");
    try {
        const users= await Chart.findAll();
        console.log('datas Created');
        res.status(200).json(users);
    } catch (error) {
        console.log('An error occured', error);
        res.status(200).json(error);
    }
}