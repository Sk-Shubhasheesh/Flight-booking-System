const express = require('express');
const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares')

const router = express.Router();
//  /api/v1/airplanes -> POST Request
router
    .post('/', 
        AirplaneMiddlewares.validateCreateRequest,
        AirplaneController.createAirplane);

// /api/v1/airplanes -> GET Request
router
    .get('/', 
        AirplaneController.getAirplanes);

// /api/v1/airplanes/:id -> GET Request
router
    .get('/:id', 
        AirplaneController.getAirplane);


// /api/v1/airplanes/:id -> DELETE Request
router
    .delete('/:id', 
        AirplaneController.destroyAirplanes);

module.exports = router;
