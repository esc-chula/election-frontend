FROM node:12.18-alpine AS build

WORKDIR /app

ARG path_prefix

COPY ["package.json", "yarn.lock", "./"]
RUN yarn

COPY . .
RUN PUBLIC_URL=$path_prefix yarn build

FROM nginx:1.19.1-alpine

COPY --from=build /app/build /var/www
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
