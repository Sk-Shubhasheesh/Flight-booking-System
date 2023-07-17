const { StatusCodes } = require('http-status-codes')

const { AirplaneService } = require('../services');
const { response } = require('express');

/** The API shoul look like this
 * it will be a post request so ---> POST: /airplane
 * And the data will be coming inside request body ---> req-body {modelNumber: 'airbus320', capacity: 200}
*/


async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res
                .status(StatusCodes.CREATED)
                .json({
                    success: true,
                    message: 'Successfully create an airplane',
                    data: airplane,
                    error: {}
                });
    } catch (error) {
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success: false,
                    message: 'Something went wrong while creating airplane',
                    data: {},
                    error: error
                });
    }

}

module.exports = {
    createAirplane
}