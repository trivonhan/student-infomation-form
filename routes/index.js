var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', async function(req,res){
  let insert = {
    ...req.body,
  }
  //console.log(insert);
  await mongoose.model('students').create(insert);
  res.redirect('/')
});

require('./search')(router); // khi require thì e phải chuyền cái router vào cho nó, với lại cái require phải dể dưới cùng như này
//require('./info')(router);
module.exports = router; 
