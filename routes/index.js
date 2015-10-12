var nano = require('nano')('http://localhost:5984');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = nano.db.use('personen');
  db.get('einzigartigeID', function(err, body){
    if(!err){
      var list = body.personlist;
      //console.log(list);
      res.render('index', {title: 'Express', "personen":list});
    }else{
      console.log("Error in getting document from database");
      res.render('index', { title: 'Express' });
    }
  });
});

module.exports = router;
