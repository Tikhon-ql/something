#!/bin/sh

docker stop smth.web
docker rm smth.web

docker build -t smth .
docker run -p 80:80 --name smth.web -d smth