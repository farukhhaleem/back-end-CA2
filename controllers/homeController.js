const express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    res.render('front/home');
});

module.exports = router;