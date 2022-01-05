FROM node:14.18.1-alpine

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]