const {StatusCodes} = require('http-status-codes');

const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const cityRepository = new CityRepository();

// for creating
async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        if(error.name =='SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
            let explanation = [];
            // statement is used to iterate over the array of errors returned by Sequelize during the validation process
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);

        }
        throw new AppError('Cannot create a new city object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

// for finding all city
async function getCity() {
    try {
        
        const city = await cityRepository.getAll();
        return city;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the cities', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

// finding cities by id
async function getCities(id){
    try {
        const cities = await cityRepository.get(id);
        return cities;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The cities, you request is not present', error.statusCode)
        }
        throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}



module.exports = {
    createCity,
    getCity,
    getCities
}