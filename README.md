# mevn-stack-template
> Template for a new MEVN project (Mongo + Express + VueJS + NodeJS), with Bootstrap 4, Docker setup and examples.

## Build Setup

``` bash
# Build image
docker-compose build

# Install dependencies (only required before running docker-compose up client)
docker-compose up setup

# Serve with hot reload at localhost:8080
docker-compose up client

# Run eslint
docker-compose up lint

# Run unit tests
docker-compose up unit-test

# Run e2e tests
docker-compose up e2e-test

# Build for production with minification
npm run build

# Build for production and view the bundle analyzer report
npm run build --report
```
