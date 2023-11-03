FROM frappe/bench:latest

WORKDIR /workspace/development
ENV NODE_VERSION=16.20.1
RUN sudo chown frappe:frappe .
RUN PYENV_VERSION=3.10.12 bench init --skip-redis-config-generation --frappe-branch version-14 frappe-bench
WORKDIR /workspace/development/frappe-bench
RUN bench set-config -g db_host mariadb
RUN bench set-config -g redis_cache redis://redis-cache:6379
RUN bench set-config -g redis_queue redis://redis-queue:6379
RUN bench set-config -g redis_socketio redis://redis-socketio:6379
RUN bench set-config -g developer_mode 1
RUN bench get-app --branch version-14 --resolve-deps erpnext
RUN bench get-app --branch version-14 payments
RUN bench get-app --branch version-14 hrms
