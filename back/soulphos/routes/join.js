var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const secretKey = require('../config/secretKey').secretKey;
const options = require('../config/secretKey').options;
//var jwt = require('../modules/jwt');
//const userController = require('../controllers/user');
//const authUtil = require('../middlewares/auth').checkToken

// 회원가입 
router.get('/',  function(req, res, next) {
    //const jwtToken = await jwt.sign(user);
    //return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMsg.LOGIN_SUCCESS, {
       /* 생성된 Token을 클라이언트에게 Response */
        //token: jwtToken.token
    //}))

    const payload = {
        idx: '1',
        phone: '010',
    };
    const result = {
        //sign메소드를 통해 access token 발급!
        token: jwt.sign(payload, secretKey, options),
        //refreshToken: randToken.uid(256)
    };
    res.send(result);
});

module.exports = router;