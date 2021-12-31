# Docker Cli Cheatsheet
[docker docs](https://docs.docker.com/get-started/)

### List images
```bash
docker images
```

### Build container from Dockerfile
```bash
# 1. go to directory where your Dockerfile is located and:
docker build -t <container NAME> .
```

### Removing image
```bash
# removing image
docker rmi --force <IMAGE ID>
```

### Get docker images ip address:
```bash
# list containers
docker ps
# inspect container
docker inspect <container ID> | grep IPAddress
```

### Running an image

```bash
docker run -dp 3000:3000 <image NAME>
```

### Network stuff
-p <host port>:<container port>