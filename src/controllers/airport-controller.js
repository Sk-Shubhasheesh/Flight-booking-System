const { StatusCodes } = require('http-status-codes')

const { AirportService } = require('../services');
const { response } = require('express');
const{SuccessResponce, ErrorResponce} = require('../utils/common');
const { data } = require('../utils/common/error-response');

/** The API shoul look like this
 * it will be a post request so ---> POST: /airports
 * And the data will be coming inside request body ---> req-body {name: 'IGI', cityId: '5', code:'DEl',}
*/


async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
           name: req.body.name,
           code: req.body.code,
           address: req.body.address,
           cityId: req.body.cityId,

        });
        //to assign the airplane object to the data property of the SuccessResponce object.
        SuccessResponce.data = airport ; 
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

/** The API shoul look like this
 * it will be a post request so ---> POST: /airports
 * And the data will be coming inside request body ---> req-body { }
*/
async function getAirports(req, res){
    try {
        const airports = await AirportService.getAirports();
        SuccessResponce.data = airports;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponce);

    } catch (error) {
        ErrorResponce.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponce);
    }
}

/** The API shoul look like this
 * it will be a post request so ---> POST: /airports/:id
 * And the data will be coming inside request body ---> req-body {}
*/

async function getAirport(req, res){
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponce.data = airport;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponce);

    } catch (error) {
        ErrorResponce.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponce);
    }
}


/** The API shoul look like this
 * it will be a delete request so ---> DELETE: /airports/:id
 * And the data will be coming inside request body --->  {}
*/
async function destroyAirport(req, res){
    try {
        const response = await AirportService.destroyAirport(req.params.id);
        SuccessResponce.data = response;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponce);

    } catch (error) {
        ErrorResponce.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponce);
    }
}


async function updateAirports(req, res) {
    try {
        const airport = await AirportService.updateAirport(req.params.id, {
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        SuccessResponce.data = airport;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponce);
    }
    catch (error) {
        ErrorResponce.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponce);
    }
}






module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirports
   
}