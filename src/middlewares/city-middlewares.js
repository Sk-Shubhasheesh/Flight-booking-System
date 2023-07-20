const { StatusCodes } = require('http-status-codes');
const { ErrorResponce } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
function validateCreateRequest(req, res, next){
    if(!req.body.name){
        ErrorResponce.message = 'Something went wrong while creating city';
        ErrorResponce.error = new AppError(['City name not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                 .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponce);
          
    }
    next();
}
module.exports = {
    validateCreateRequest
}