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
    // const cron = require('node-cron');
    // import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

    const { PORT, SYNC_FORCE } = process.env;
    const {server} = require('./src/app.js');
    const { conn } = require('./src/db.js');
    
    async function startServer() {
        try {
            await conn.authenticate();
            console.log('Connection successfully established with the database...');

            // Sincronizar el modelo con la base de datos (si es necesario)
            await conn.sync({ alter: SYNC_FORCE });

            console.log('Performing maintenance tasks...');
            // Ejecutar la tarea de actualización al iniciar el servidor
    
            // Resto de la configuración y rutas de tu servidor
            server.listen(PORT, () => {
                console.log(`Server listening at ${PORT}`);
            });

        } catch (error) {
            console.error('Error starting server!', error);
        }
    }

    startServer();