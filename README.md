# Triple Triad [![Codeship](http://img.shields.io/codeship/7a0d0880-b10c-0133-3c40-7ee430441c87.svg?style=flat-square)](https://codeship.com/projects/132884)

Web application for playing the card game, triple triad.

Play the game by cloning the repo and following the instructions below or if using docker get the latest image from:
```docker pull walkerrandolphsmith/triple-triad```

##Issues [![GitHub issues](https://img.shields.io/github/issues/walkerrandolphsmith/triple-triad.svg?style=flat-square)](https://github.com/walkerrandolphsmith/triple-triad/issues)
Please file issues [here][issues]

##Prerequesites
This application requires Node and Mongo.

###Install Node

Add the following line to `.bash_profile`

```
export PATH=$PATH:/usr/local/git/bin:/usr/local/bin
```

```bash
git clone git://github.com/ry/node.git
cd node
./configure
make
sudo make install
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
eval $(docker-machine env default)
```
