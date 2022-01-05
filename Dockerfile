FROM node:14.18.1-alpine

WORKDIR /usr/src/api

COPY . .

RUN npm install -g strapi@alpha

RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]