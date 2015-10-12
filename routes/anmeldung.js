var express = require('express');
var router = express.Router();

/* GET anmeldung page. */
router.get('/', function(req, res, next) {
  res.render('anmeldung', { title: 'Anmeldung' });
});

module.exports = router;
