const { Sequelize } = require('sequelize');
const fs = require('fs');
// const path = require('path');

const ApiCabezera = require('./models/apicabezera')
const ApiDatos = require('./models/apidatos')
const GAtributos = require('./models/gatributos')
const Woo_VariacionesAtributos=require('./models/woo_variacionesatributos.js')

const defineRelations = require('../src/relations/relations');

const { DB_PASSWORD} = require('./env/env.js');
const { DB_USER, DB_HOST, DIALECT_OPTIONS, SSL, DB_NAME} = process.env


const sequelize = new Sequelize(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
        logging: false,
        native: false,
        dialect: 'mysql',
        ssl: SSL,
        define: {
            freezeTableName: true,
            timestamps: false,
        },
        dialectOptions:JSON.parse(DIALECT_OPTIONS),
        query: {
            raw: false, // Establece raw: true globalmente
        },
    }
);

// const basename = path.basename(__filename);

const modelDefiners = [];

modelDefiners.push(ApiCabezera)
modelDefiners.push(ApiDatos)
modelDefiners.push(GAtributos)
modelDefiners.push(Woo_VariacionesAtributos)
// Injectamos la conexion (sequelize) a todos los modelos

modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0], entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

defineRelations(sequelize);

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
