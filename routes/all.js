var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/scripts.js', function(req, res, next) {
  res.sendFile('node_modules/govuk-frontend/govuk/all.js');
});

module.exports = router;
