FROM mariadb:10.4.13

EXPOSE 3306

# USER mysql

ENV MYSQL_ROOT_PASSWORD password123
ENV MYSQL_USER foo
ENV MYSQL_PASSWORD foo123
ENV MYSQL_DATABASE bar

COPY dump/mariadb.sql /docker-entrypoint-initdb.d/00_db.sql
COPY wait_then_shutdown.sh /tmp/wait_then_shutdown.sh
RUN sed -i 's|/var/lib/mysql|/var/lib/mysql2|g' /etc/mysql/my.cnf \
  && printf "#!/usr/bin/env bash\ntouch /tmp/server_can_shutdown.txt" > /docker-entrypoint-initdb.d/99_last_processed_file.sh \
  && /docker-entrypoint.sh mysqld & /tmp/wait_then_shutdown.sh \
  && rm /docker-entrypoint-initdb.d/00_db.sql
