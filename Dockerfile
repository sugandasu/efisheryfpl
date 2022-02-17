FROM node:16.4.2

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
COPY .env .env

ENV NODE_ENV production

RUN npm install -g .