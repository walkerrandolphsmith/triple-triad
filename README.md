# triple-triad
implementation of final fantasy 8's card game for the web


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
