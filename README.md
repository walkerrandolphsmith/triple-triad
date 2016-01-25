# triple-triad
implementation of final fantasy 8's card game for the web


#MongoDB

###Reset
`docker-machine restart default`
`eval $(docker-machine env default)`

`cd ~/Downloads`
`tar xzf mongodb-osx-x86_64-2.2.3.tgz`
`sudo mv mongodb-osx-x86_64-2.2.3 /usr/local/mongodb`

`sudo mkdir -p /data/db`
`whoami` // => <username>
`sudo chown <username> /data/db`

add to `.bash_profile`

```
export MONGO_PATH=/usr/local/mongodb
export PATH=$PATH:$MONGO_PATH/bin
```

`mongo -version`

In separate terminal from the `npm start` run `mongod`

#Docker
Build
`docker build -t walkerrandolphsmith/triple-triad .`

Run
`docker run -p 49160:8080 -d <your username>/node-web-app`

List containers
`docker ps`

View log
`docker logs <container id>`

Curl
`curl -i <container ip>:49160`

Enter container
`docker exec -it <container id> /bin/bash`

Exit container by killing process
`ps -A`
`kill -9 <pid>`

Stop all containers
`docker stop $(docker ps -a -q)`

Delete all containers
`docker rm $(docker ps -a -q)`

Delete all images
`docker rmi $(docker images -q)`
