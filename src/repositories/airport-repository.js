const CrudRepository = require('./crud-repository');
// getting models
const { Airport } = require('../models')
class AirportRepository extends CrudRepository {
    constructor(){
        super(Airport);
    }
}

module.exports = AirportRepository;