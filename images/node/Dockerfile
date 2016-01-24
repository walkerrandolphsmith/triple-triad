FROM node:argon

MAINTAINER Walker Randolph Smith, walkerrandolphsmith@gmail.com

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
RUN npm install -g babel-cli
COPY . /usr/src/app
EXPOSE 3000
CMD [ "npm", "start" ]