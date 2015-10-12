var nano = require('nano')('http://localhost:5984');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
  var vorname = req.body.vorname;
  var nachname = req.body.nachname;

  var data = {
    "vorname": vorname,
    "nachname": nachname
  };
  console.log(data);

  var db = nano.db.use('personen');
  db.get('einzigartigeID', function (err, body) {
    if (!err) {
      var list = body.personlist;
      var rev = body._rev;
      console.log("getting data from db");
      console.log(list);
      console.log("pushing data to list");
      list.push(data);
      console.log(list);

      var obj = {
        "_id": "einzigartigeID",
        "_rev": rev,
        "personlist": list
      };
      console.log("creating new object ready to upload to database");
      console.log(obj);

      db.insert(obj, "einzigartigeID", function (err, body) {
        if (!err) {
          console.log("inserted into db");
        } else {
          console.log("error, insert was not successful");
        }
      });


    } else {
      console.log("Error: Could not get Document from Database!");
    }
  });
  res.send('Du hast folgende Daten gesendet: <p> Name: ' + vorname + '</p><p>Nachname: ' + nachname + '</p><a href="http://127.0.0.1:3000">Zurück zur Homepage</a>');
});

module.exports = router;
