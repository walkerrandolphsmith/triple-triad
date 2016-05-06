# Triple Triad [![Codeship][ci-badge]][ci]

Web application for playing the card game, triple triad.

##Issues [![GitHub issues][issues-badge]][issues]
Please file issues [here][issues]

Include `closes`, `fixes`, or `resolves` in a commit message to close the issue.  
For example `git commit -m "This closes #34, and closes #23"`  

##Playing the game

At the moment there are a couple of ways to play the game.

1. Get the latest docker image by issuing:   
  `docker pull walkerrandolphsmith/triple-triad`
2. Clone the repo and build your own image.  
  `docker-compose up`
3. Clone the repo and build following the development section of this readme.  


##Development
This application requires Node and Mongo.

####Install Node

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

####Install Mongo

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

####Install Node Modules
```bash
npm install
```

####Start App
```bash
mongod
#In another terminal
npm start
```

####Run Linter
```bash
npm run lint
```

####Run Tests
```bash
npm test
npm run test:unit # runs unit tests
rpm run test:integration # runs integration tests
```

[Wallaby](https://wallabyjs.com/) is also supported as a testing tool to continuously run your test and see the results immediately as you change the code.


[ci]: http://img.shields.io/codeship/7a0d0880-b10c-0133-3c40-7ee430441c87.svg?style=flat-square
[ci]: https://codeship.com/projects/7a0d0880-b10c-0133-3c40-7ee430441c87/status?branch=master
[ci-badge]: http://img.shields.io/codeship/7a0d0880-b10c-0133-3c40-7ee430441c87.svg?style=flat-square
  
[issues]: https://img.shields.io/github/issues/walkerrandolphsmith/triple-triad.svg?style=flat-square
[issues]: https://github.com/walkerrandolphsmith/triple-triad/issues
[issues-badge]: https://img.shields.io/github/issues/walkerrandolphsmith/triple-triad.svg?style=flat-square
