# Triple Triad
[![Codeship][ci-badge]][ci]
[![Twitter][twitter-follow-badge]][twitter]

Web application for playing the card game, triple triad.

##Issues [![GitHub issues][issues-badge]][issues]
Please file issues [here][issues]

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

[ci]: https://codeship.com/projects/132884
[ci-badge]: https://img.shields.io/codeship/d6c1ddd0-16a3-0132-5f85-2e35c05e22b1.svg?style=flat-square

[issues]: https://github.com/walkerrandolphsmith/triple-triad/issues
[issues-badge]: https://img.shields.io/github/issues/badges/shields.svg?style=flat-square

[twitter]: http://twitter.com/intent/user?screen_name=walkerrsmith
[twitter-follow-badge]: https://img.shields.io/twitter/follow/walkerrsmith.svg?style=social
