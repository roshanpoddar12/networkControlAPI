const express = require('express');
const tcController = require('./../controllers/tcController');

const router = express.Router();
router.route('/execute-commands').post(tcController.latency);

router.route('/active-rules').get(tcController.activeRules);

router.route('/reset').get(tcController.reset);

module.exports= router ;
