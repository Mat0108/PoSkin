# On utilise la version 20-alpine3.17 de l'image Node 
FROM node:20-alpine3.17 as node

#On utilise un user n'ayant pas les permissions root 
USER node  

RUN adduser -S -G app app

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .
#On lance l'application
CMD ["npm", "start"]