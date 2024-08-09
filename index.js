//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
require('dotenv').config();
require('./src/utils/logger.js')


// const cron = require('node-cron');
const cron = require('node-cron');
const ip = require('ip')

const { PORT, SYNC_FORCE, TIMER ,LOGGER} = process.env

const { server } = require('./src/app.js');
const { conn } = require('./src/db.js');
const processCommand = require('./src/utils/processCommand.js');

const timer = TIMER ? TIMER : 10

async function startServer() {
    try {
        console.log(`LOGGER = ${LOGGER}`);

        await conn.authenticate();
        console.log('Connection successfully established with the database...');

        // Sincronizar el modelo con la base de datos (si es necesario)
        await conn.sync({ alter: false });

        console.log('Performing maintenance tasks...');
        // Ejecutar la tarea de actualización al iniciar el servidor

        // Ejecutar control cada 10 segs
        console.log('Loading scheduled tasks...');
        console.log(`Checking updates every ${timer} seconds...`);

        let isRunning = false
        cron.schedule(`*/${timer} * * * * *`, async () => {
            //contorl de age
            if (!isRunning) {
                isRunning = true
                try {
                    await processCommand();
                } catch (error) {
                    console.error('Error en procesarPendientes:', error);
                } finally {
                    isRunning = false;
                }
            }

        });
        // Resto de la configuración y rutas de tu servidor
        server.listen(PORT, () => {
            console.log(`Server listening at ${ip.address()}:${PORT}`);
        });

    } catch (error) {
        console.error('Error starting server!', error);
    }
}

startServer();