#!/bin/sh

docker build -t smth .
docker run -p 80:80 --name smth.web -d smth