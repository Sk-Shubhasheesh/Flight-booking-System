const { Sequelize } = require('sequelize');
const CrudRepository = require('./crud-repository');
// getting models
const { Flight, Airplane, Airport, City } = require('../models')
class FlightRepository extends CrudRepository {
    constructor(){
        super(Flight);
    }

    async getAllFlights(filter, sort){
        const responce = await Flight.findAll({
            where: filter,
            order : sort,
            include: [
                {
                model: Airplane,
                required: true,
                as: 'airplaneDetail'
            },
            {
                model: Airport,
                required:true,
                as: 'departureAirport',
                on: {
                   col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirport.code"))
                 },
                 include: {
                    model: City,
                    require: true,
                 }
                
            },
            {
                model: Airport,
                required:true,
                as: 'arrivalAirport',
                on: {
                   col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code"))
                 } ,
                 include: {
                    model: City,
                    require: true,
                 }
            }
        ]
        });
        return responce;
    }

    async updateRemainingSeats(flightId, seats, dec = true){
        const flight = await Flight.findByPk(flightId);
        if(dec){
            const response = await flight.decrement('totalSeats', {by: seats});
            return response;

        } else {
            const response = await flight.increment('totalSeats', {by: seats});
            return response;

        }

    }
}

module.exports = FlightRepository;