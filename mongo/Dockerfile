FROM mongo:5.0.7

EXPOSE 27017

# USER mysql

ENV MONGO_INITDB_ROOT_USERNAME: root
ENV MONGO_INITDB_ROOT_PASSWORD: password123

COPY dump/mongodb.js /docker-entrypoint-initdb.d/00_db.js
COPY wait_then_shutdown.sh /tmp/wait_then_shutdown.sh
RUN printf "#!/usr/bin/env bash\ntouch /tmp/server_can_shutdown.txt" > /docker-entrypoint-initdb.d/99_last_processed_file.sh \
  && mkdir -p /data/db2 \
  && chown -R mongodb:mongodb /data/db2 \
  && /usr/local/bin/docker-entrypoint.sh mongod --dbpath "/data/db2" & /tmp/wait_then_shutdown.sh \
  && rm /docker-entrypoint-initdb.d/00_db.js

ENTRYPOINT [ "docker-entrypoint.sh", "mongod", "--dbpath", "/data/db2" ]
