var express = require('express');
var router = express.Router();
var jwt = require('../modules/jwt');

const user = {
  userIdx : '1',
  userPhone: '010'
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  const jwtToken = jwt.sign(user);
  res.send(jwtToken.token);
});

module.exports = router;
