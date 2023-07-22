const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async() => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    // bad code alert
    const { City, Airport } = require('./models');
    // const city = await City.findByPk(9);
    // await city.createAirport({name: 'Indore airpost', code: 'IND'});
    await City.destroy({
        where: {
            id:9
        }
    });
});


