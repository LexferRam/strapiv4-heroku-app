# Strapi application

Esta app usa github action para desplagar en el container registry de heroku:

## PASOS:

1. Crear applicacion de strapi V4

```npm 
npx create-strapi-app@latest .
```

2. Agregar Dockerfile y .dockerignore
   
```Dockerfile
FROM node:14.18.1-alpine

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]
```

4. Crear proyecto en Heroku

3. Crear repositorio en Github y en opcion de "actions" agregar el siguiente github action, el cual esta en la documentacion de 'github action deploy to heroku <https://github.com/marketplace/actions/deploy-to-heroku>', en la seccion de **Deploy with Docker**:

```npm
name: Deploy

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: akhileshns/heroku-deploy@v3.12.12 # This is the action
        with:
          heroku_api_key: ${{secrets.HEROKU_API_KEY}} #agregar en github secrets del repositorio creado
          heroku_app_name: "YOUR APP's NAME" #Must be unique in Heroku(same that heroku project)
          heroku_email: "YOUR EMAIL" #(heroku email)
          usedocker: true
```

**NOTA:** Buscar HEROKU_API_KEY en heroku "Account Settings"(arriba a la derecha)> Copiar "API Key", finalmente agregar en github sevcrets del repositorio creado

6. Cada vez que se haga un push a la rama master, se compilara el proyecto y se generara una imagen que se subira al container registry de heroku