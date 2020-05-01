#!/bin/bash

echo "******************************"
echo "*** Building Docker Images ***"
echo "******************************"


docker build -f jenkins/build/Dockerfile -t alayahamza/spring-boot-client .
