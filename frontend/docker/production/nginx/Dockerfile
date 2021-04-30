FROM nginx:1.19.0-alpine

COPY ./docker/common/nginx/conf.d /etc/nginx/conf.d

WORKDIR /app

COPY ./build .
