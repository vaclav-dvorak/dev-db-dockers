#!/usr/bin/env bash
while [ ! -f /tmp/server_can_shutdown.txt ]
do
  sleep 2
done
sleep 5
mongo --eval "db.getSiblingDB('admin').shutdownServer()"
