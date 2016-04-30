FROM node:argon

MAINTAINER Walker Randolph Smith, walkerrandolphsmith@gmail.com

RUN mkdir -p /usr/triple-triad
WORKDIR /usr/triple-triad
COPY package.json /usr/triple-triad
COPY webpack.production.config.js /usr/triple-triad
RUN npm install
COPY ./src /usr/triple-triad/src
RUN npm run build:prod
RUN npm run start:prod