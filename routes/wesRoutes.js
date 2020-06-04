const express = require('express');
const wesController = require('../controllers/wesController');

const router = express.Router();
router.route('/setNetworkParams/:intfName').post(wesController.executingCommand);

router.route('/getNetworkParams/:intfName').get(wesController.activeRules);

router.route('/resetNetworkParams/:intfName').get(wesController.reset);

module.exports= router ;
