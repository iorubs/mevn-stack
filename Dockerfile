FROM node:9

LABEL maintainer "ruben.vasconcelos3@mail.dcu.ie"

RUN apt-get update \
    && apt-get install curl -y

WORKDIR /app

# Cache npm install
COPY package.json .
RUN npm install

# Copy the rest of the src code
COPY ./ .
