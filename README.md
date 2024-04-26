# React + TypeScript + Vite + RTK + Docker

## Steps run without docker or makefile:

- To install libs : ```npm install ```
- To run test : ```npm run test```/ ```npm run test:ui```
- To format : ```npm run format``` 
- Docker " ```docker build -t `containerName` .``` 

## Make steps: (https://makefiletutorial.com/)

- ```make install``` - install libs
- ```make start``` - start the container
- ```make stop``` - stop the container
- ```make restart``` - restart the container
- ```make clear``` - clear the container

##### Note: if ```npm run test``` doesn't work after ```make``` commands please run the ```npm install``` command

