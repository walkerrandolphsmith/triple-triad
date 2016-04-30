FROM node:argon

MAINTAINER Walker Randolph Smith, walkerrandolphsmith@gmail.com

RUN mkdir -p /usr/triple-triad
WORKDIR /usr/triple-triad
COPY package.json /usr/triple-triad
COPY webpack.production.json /usr/triple-triad
RUN npm install
COPY ./src /usr/triple-triad/src
CMD [ "npm", "run build" ]
CMD [ "npm ", "run start:prod" ]