# On utilise la version 20-alpine3.17 de l'image Node 
FROM node:20-alpine3.17 as node

#On crée un user n'ayant pas les permissions root 
RUN addgroup app  

RUN adduser -S -G app app

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

#On lance l'application
CMD npm start
