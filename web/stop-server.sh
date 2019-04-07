#!/bin/bash

lsof -n -i4TCP:3000 | grep LISTEN | awk '{ print $2 }' | xargs kill
lsof -n -i4TCP:3001 | grep LISTEN | awk '{ print $2 }' | xargs kill
