# Challenge

This repository contains the backend and frontend projects for the fullstack developer challenge. The services are orchestrated using Docker Compose.

## Prerequisites

- Docker: Make sure you have Docker installed on your system.

## Project Structure

```
challenge-root/
│
├── challenge_app_fe/
│ ├── Dockerfile
│ ├── Dockerfile-2
│ ├── ... (frontend source files)
│
├── challenge_backend/
│ ├── Dockerfile
│ ├── ... (backend source files)
│
├── project/
| ├── nginx.conf
| ├── nginx-backend.conf
| ├── docker-compose.yml
| └── Makefile
```

# Services
- challenge-front-end: Frontend service using challenge_app_fe/Dockerfile.
- challenge-front-end-2: Second frontend service using challenge_app_fe/Dockerfile-2.
- challenge-back-end: Backend service using challenge_backend/Dockerfile.
- challenge-back-end-2: Backend service using challenge_backend/Dockerfile-2.
- nginx: Nginx service serving as a reverse proxy and load balancer.
- nginx-backend: Nginx service serving as a reverse proxy and load balancer.
  
# Usage

```bash 
git clone https://github.com/fchinch/challenge.git
cd challenge/project
```

Start the services:
```bash 
 docker compose up --build -d
 
 or  
 
 docker-compose up --build -d
```

You can use the Makefile file using(make sure you have make installed):
```bash
make up_build
```

If you need to execute backend and frontend tests all together you can use:
```bash
make tests
```

Run separate tests:
```bash
make backend_test
```

```bash
make app_test 
```



# Access the services:
- Backend(Load balancer): http://localhost:9021
- App(Load balancer): http://localhost:9011

Stop the services:
```bash 
docker-compose down

or

make down
```

 **NOTE**: if the command with make generates an error in docker compose try to change **docker compose** to **docker-compose** in the Makefile file

# Notes
 - The services are connected to the **app_network**  and  **backend_network**  bridge network.
 - Nginx acts as a reverse proxy and load balancer to route traffic to different services.
 - Each folder has its own README.md files, if you want to run the projects independently.

