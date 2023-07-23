const express = require('express');
const { AirportController } = require('../../controllers');
const { AirportMiddlewares } = require('../../middlewares')

const router = express.Router();
//  /api/v1/airports -> POST Request
router
    .post('/', 
        AirportMiddlewares.validateCreateRequest,
        AirportController.createAirport);

// /api/v1/airports  -> GET Request
router
    .get('/', 
        AirportController.getAirports);

// /api/v1/airports /:id -> GET Request
router
    .get('/:id', 
        AirportController.getAirport);


// /api/v1/airports /:id -> DELETE Request
router
    .delete('/:id', 
        AirportController.destroyAirport);


// /api/v1/airports /:id -> UPDATE Request
router
    .patch('/:id', 
        AirportMiddlewares.validateUpdateRequest,
        AirportController.updateAirports);





module.exports = router;
