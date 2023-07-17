const { StatusCodes } = require('http-status-codes');
const { ErrorResponce } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber){
        ErrorResponce.message = 'Something went wrong while creating airplane';
        ErrorResponce.error = new AppError(['Model Number not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                 .status(StatusCodes.BAD_REQUEST)
                //  .json({
                //     success: false,
                //     // message: 'Something went wrong while creating airplane',
                //     data: {},
                //     // error: {explanation: 'Model Number not found in the incoming request in the correct form'}
                // });
                .json(ErrorResponce);
          
    }
    next();
}
module.exports = {
    validateCreateRequest
}