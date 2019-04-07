#!/bin/bash

# Installation
cd frontend && npm i
cd ../backend && npm i
cd ..

# Running
cd backend
nohup npm start > output.log 2>&1 </dev/null &
cd ../frontend
npm run build 
cd build
nohup http-server -p 3000 > output.log 2>&1 </dev/null &

# Enjoy!
