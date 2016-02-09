# Triple Triad
[ ![Codeship Status for walkerrandolphsmith/triple-triad](https://codeship.com/projects/7a0d0880-b10c-0133-3c40-7ee430441c87/status?branch=master)](https://codeship.com/projects/132884)
[![Twitter][twitter-follow-badge]][twitter]

Web application for playing the card game, triple triad.

##Issues [![GitHub issues](https://img.shields.io/github/issues/badges/shields.svg?style=flat-square)]()
Please file issues [triple-triad/issues](https://github.com/walkerrandolphsmith/triple-triad/issues)

##Prerequesites
This application requires Node and Mongo.

###Install Node

Download and run installer from [here](https://nodejs.org/en/download/).

```bash
node --version
```

###Install Mongo

Add the following lines to `.bash_profile`

```
export MONGO_PATH=/usr/local/mongodb
export PATH=$PATH:$MONGO_PATH/bin
```

```bash
cd ~/Downloads
tar xzf mongodb-osx-x86_64-2.2.3.tgz
sudo mv mongodb-osx-x86_64-2.2.3 /usr/local/mongodb
sudo mkdir -p /data/db
whoami #// => <username>
sudo chown <username> /data/db
mongo -version
```

##Getting Started
```bash
npm install
```

##Development

###Run
```bash
mongod
#In another terminal
npm start
```

###Specs
```bash
npm test
npm run test:unit # runs unit tests
rpm run test:integration # runs integration tests
```

##Docker

```bash
#aggregates the output of each container
docker-compose up
```

List containers and show container logs:

```bash
#List containers
docker ps
#View log
docker logs <container id>
```

Stopping containers, deleting containers and images:

```bash
#Stop all containers
docker stop $(docker ps -a -q)
#Delete all containers
docker rm $(docker ps -a -q)
#Delete all images
docker rmi $(docker images -q)
```

Reset

```bash
docker-machine restart default
`eval $(docker-machine env default)
```

[twitter-follow-badge]: https://img.shields.io/twitter/follow/walkerrsmith.svg?style=social
[twitter]: http://twitter.com/intent/user?screen_name=walkerrsmith