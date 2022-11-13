const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validateToken = require('../../middleware/auth');
router.post('/',validateToken,controller.createIncident);
router.put('/',validateToken,controller.updateIncident);
router.get('/',controller.findAllIncidents);
router.post('/findIncidentsInZone',controller.findAllIncidentsInMyZone);
module.exports = router;