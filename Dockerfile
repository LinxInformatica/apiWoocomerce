# Usa una imagen base de Node.js
# FROM node:alpine
FROM stefanscherer/node-windows

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor (solo los necesarios)
COPY package*.json ./
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# Expone el puerto en el que corre tu aplicación Express
EXPOSE 3001

# Comando para iniciar la aplicación cuando se ejecute el contenedor
CMD ["node", "index.js"]  