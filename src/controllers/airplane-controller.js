const { StatusCodes } = require('http-status-codes')

const { AirplaneService } = require('../services');
const { response } = require('express');
const{SuccessResponce, ErrorResponce} = require('../utils/common');

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
        //to assign the airplane object to the data property of the SuccessResponce object.
        SuccessResponce.data = airplane; 
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponce);
    } catch(error) {
        ErrorResponce.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponce);
    }

}

module.exports = {
    createAirplane
}