# On utilise la version 20-alpine3.17 de l'image Node 
FROM node:20-alpine3.17 as node

# on utilise le port par default de react
EXPOSE 3000:3000

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

CMD ["npm", "start"]