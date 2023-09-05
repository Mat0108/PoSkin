# On utilise la version 20-alpine3.17 de l'image Node 
FROM node:20-alpine3.17 as node

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

CMD ["npm", "start"]