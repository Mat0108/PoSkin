# On utilise la version 20-alpine3.17 de l'image Node 
FROM node:20-alpine3.17 as node

RUN addgroup app  

RUN adduser -S -G app app

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

CMD npm start
