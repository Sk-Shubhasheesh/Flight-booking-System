const CrudRepository = require('./crud-repository');
// getting models
const { Flight } = require('../models')
class FlightRepository extends CrudRepository {
    constructor(){
        super(Flight);
    }
}

module.exports = FlightRepository;