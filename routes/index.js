var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<h2>API</h2> <p>Jefri Adriansah <p><p>2111016046</p>');
});

module.exports = router;