 const express = require("express");
 const sequelize = require('./database/db');
 const Chart = require('./models/chart');

 var app = express();

 app.use(express.json());

 app.use('/chart',require('./routes/chart'));


(async () =>{
    try{
        await sequelize.sync({
            force : true
        });
        console.log('DB Connected Succesfully')
        app.listen(2000,()=>{
            console.log("Server Started")
        });
    }
    catch(e){
        console.log('An error occured',e);
    }
})()