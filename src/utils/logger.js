const fs = require('fs');
const util = require('util');
// Sobrescribe console.log para agregar fecha y hora
// Configuración para guardar los logs en un archivo
const logFile = fs.createWriteStream('debug.log', { flags: 'a' });
const { LOGGER } = process.env

console.log = function (...args) {
    
    const timestamp = new Date().toLocaleString(); // Obtiene la fecha y hora actual en formato ISO
    const logMessage = `[${timestamp}] ${util.format(...args)}`;

    // Escribe en la consola
    process.stdout.write(logMessage + `\n`);

    // Escribe en el archivo de registro
    if (LOGGER==='true') logFile.write(logMessage + '\n');
};