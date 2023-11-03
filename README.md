## God_eye

A gap analysis and MOM app

## Prerequisites
- python 3.10
- docker
- docker-compose

Clone repo in you local

#  Way 1

Then, Start database, redis using below command
```
docker-compose up
```

Virtual environment. Always do that when you move on this project
```
python3 -m venv .python
source .python/bin/activate
```

To deactivate virtual enviroment you can run
```
deactivate
```

## Install bench

```
pip3 install frappe-bench
```

## Initial Setup
```
PYENV_VERSION=3.10.5 bench init --skip-redis-config-generation --frappe-branch version-14 frappe-bench
cd frappe-bench
source env/bin/activate
bench set-config -g redis_cache redis://localhost:6379
bench set-config -g redis_queue redis://localhost:6380
bench set-config -g redis_socketio redis://localhost:6381
bench set-config -g developer_mode 1
bench new-site ims.localhost --no-mariadb-socket
bench use ims.localhost
bench get-app erpnext
bench get-app payments
bench get-app hrms
bench get-app god_eye git@github.com:devarshitrivedi01/god-s-eye.git 
bench --site ims.localhost install-app erpnext
bench --site ims.localhost install-app hrms
bench --site ims.localhost install-app god_eye
bench start
```

# Way 2

## Prerequisites

- [VS code dev container extention](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- VS Code

When you will open VS Code, you will see promt at bottom right corner click on `Reopen in container`
![image](image.png)


In VS code terminal you will notice that you are in container. Where you have to type below commands.

```
bench new-site ims.localhost --admin-password erpnext --mariadb-root-password erpnext --no-mariadb-socket --force
bench use ims.localhost
bench --site ims.localhost install-app erpnext hrms payments god_eye
bench start
```

#### License

MIT
