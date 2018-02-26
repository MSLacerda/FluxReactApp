var express = require('express');
var router = express.Router();
var { settings } = require("../configurations")

/* GET home page. */
router.get('/', function(req, res, next) {
  const config = settings[process.env.NODE_ENV];
  const bundle = require(config.bundle.toString())


  res.render('index', { title: 'Express', bundle});
});

module.exports = router;
