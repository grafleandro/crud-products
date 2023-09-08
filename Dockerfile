FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --force

COPY . ./

RUN npm run build

CMD [ "npm", "run", "start:prod" ]