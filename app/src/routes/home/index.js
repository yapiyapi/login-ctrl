
const express = require('express');
const router = express.Router();
const ctrl = require('./home.ctrl');

router.get('/',ctrl.output.home)       //get => 출력
router.get('/login',ctrl.output.login)
router.post('/login',ctrl.process.login)     //post => 처리


module.exports = router;