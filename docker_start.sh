#!/bin/bash
docker run --restart=always --name whateat -p 11103:11103 -v $(pwd)/default.conf:/etc/nginx/conf.d/default.conf -v $(pwd)/:/usr/share/nginx/html/ -d nginx
