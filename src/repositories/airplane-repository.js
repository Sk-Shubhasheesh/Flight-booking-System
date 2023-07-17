// Now airplane is a simple crud where i can add a palne i can remove a plane i can get a pln and i can update a plane 
// So whenever is a simple crud i just require the crud-repository

const CrudRepository = require('./crud-repository');
// getting models
const { Airplane } = require('../models')
class AirplaneRepository extends CrudRepository {
    constructor(){
        super(Airplane);
    }
}

module.exports = AirplaneRepository;