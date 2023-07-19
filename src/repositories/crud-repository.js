const {StatusCodes } = require('http-status-codes')
const { Logger } = require("../config");
const AppError = require("../utils/errors/app-error");

class CrudRepository {
  // This class has a constructor method that takes a model parameter
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const responce = await this.model.create(data);
    return responce;
  }

  async destroy(data) {
    const responce = await this.model.destroy({
      where: {
        id: data,
      }
    });
    if(!responce){
      throw new AppError('Not able to find the resourse', StatusCodes.NOT_FOUND);
    }
    return responce;
  }

  // get function is doning something like - select * from airplanes where id = this so where is primary key it put it on where query on that primary key
  async get(data) {
    
      const responce = await this.model.findByPk(data); // findByPk method obtains only a single entry from the table, using the provided primary key.
      if(!responce) {
        throw new AppError('Not able to find the resourse', StatusCodes.NOT_FOUND);
   }
      return responce;
     
  }

  // these function is give to all of data no filtering in nothing . So findAll method is generates a standard SELECT query which will retrieve all entries from the table (unless restricted by something like a where clause,
  async getAll(data) {
 
      const responce = await this.model.findAll(); // we does not pass the data because there in no filtering is done here
      return responce;
    
  }

  // Update the value on id basiss
  async update(id, data) {
    // data -> {col:value, ....}
    
      const responce = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      if(responce[0] == 0) {
        throw new AppError('Not able to find the resourse', StatusCodes.NOT_FOUND);
       } 
       return responce;
    
  }
}

module.exports = CrudRepository;
