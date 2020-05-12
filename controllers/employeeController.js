const express = require('express');
var router = express.Router();
// var pug = require('pug');
//const pug = require('pug');

var {Employee} = require('../models/employee');

router.get('/', (req, res)=>{
    Employee.find((err, docs) => {
        if(!err){
            
            // res.sendFile(global.appRoot+'/views/employee/list.html');
            res.render('employee/filename');
            // var html = pug.renderFile(global.appRoot+'/views/employee/filename.pug');


                // Compile template.pug, and render a set of data
                // console.log(pug.renderFile('template.pug', {
                //     name: 'Timothy'
                // }));

        }else{
            console.log('Error in retrieving employees: '+ JSON.stringify(err, undefined, 2));
        }
    });
});

// router.post('', (req, res)=>{


// });





module.exports = router;