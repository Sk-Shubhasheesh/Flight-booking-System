const { StatusCodes } = require('http-status-codes');
const { ErrorResponce } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
const { compareTime } = require('../utils/helpers/datatime-helpers')
function validateCreateRequest(req, res, next){
    if(!req.body.flightNumber){
        ErrorResponce.message = 'Something went wrong while creating flights';
        ErrorResponce.error = new AppError(['Flight number not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponce);
          
    }

    if(!req.body.airplaneId){
        ErrorResponce.message = 'Something went wrong while creating flight';
        ErrorResponce.error = new AppError(['AirplaneId not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponce);
          
    }

    if(!req.body.departureAirportId){
        ErrorResponce.message = 'Something went wrong while creating flight';
        ErrorResponce.error = new AppError(['departureAirportId not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponce);
          
    }

    if(!req.body.arrivalAirportId){
        ErrorResponce.message = 'Something went wrong while creating flight';
        ErrorResponce.error = new AppError(['arrivalAirportId not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponce);
          
    }

    if(!req.body.arrivalTime){
        ErrorResponce.message = 'Something went wrong while creating flight';
        ErrorResponce.error = new AppError(['arrivalTime not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponce);
          
    }

    if(!req.body.departureTime){
        ErrorResponce.message = 'Something went wrong while creating flight';
        ErrorResponce.error = new AppError(['departureTime not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponce);
          
    }

    if(!req.body.price){
        ErrorResponce.message = 'Something went wrong while creating flight';
        ErrorResponce.error = new AppError(['price not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponce);
          
    }

    if(!req.body.totalSeats){
        ErrorResponce.message = 'Something went wrong while creating flight';
        ErrorResponce.error = new AppError(['totalSeats not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponce);
          
    }

    if ( !compareTime(req.body.arrivalTime,req.body.departureTime) ) {
        ErrorResponce.message = 'Something went wrong while creating flight';
        ErrorResponce.error = new AppError(['Arrival-Time can not be equal or less than departure-Time'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponce); 
    }



    
    
    next();
}
module.exports = {
    validateCreateRequest,
}