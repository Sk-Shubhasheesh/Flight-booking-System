const { StatusCodes } = require('http-status-codes')

const { FlightService } = require('../services');
const { response } = require('express');
const{SuccessResponce, ErrorResponce} = require('../utils/common');
const { data } = require('../utils/common/error-response');

/** The API shoul look like this
 * it will be a post request so ---> POST: /flights
 * And the data will be coming inside request body ---> req-body {
 *  flightNumber: 'UK 808',
 *  airplaneId: 'a380',
 *  departureAirportId: 12,
 *  arrivalAirportId: 11,
 *  arrivalTime: '11:10:00',
 *  departureTime: '9:10:00',
 *  price: 2000
 *  boardingGate: '12A',
 *  totalSeats: 120
 * }
*/


async function createFlight(req, res) {
    try {
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats

        });
        //to assign the flight object to the data property of the SuccessResponce object.
        SuccessResponce.data = flight; 
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

async function getAllFlights(req, res){
   
    try {
        const flights = await FlightService.getAllFlights(req.query);
        SuccessResponce.data = flights; 
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponce);
    } catch (error) {
        ErrorResponce.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponce); 
    }
}


module.exports = {
    createFlight,
    getAllFlights

   
}