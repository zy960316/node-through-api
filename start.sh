#!/bin/bash
git fetch --all && echo "git fetch --all"
git pull origin master && echo "git pull origin master"
pm2 delete stage_reset_public && echo "pm2 delete all"
pm2 start  && echo "npm start"
