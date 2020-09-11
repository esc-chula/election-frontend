FROM node:12.18-alpine AS build

COPY ["package.json", "yarn.lock", "./"]
RUN yarn

COPY . .
RUN yarn build

FROM nginx:1.19.1-alpine

COPY --from=build /build /var/www
COPY ./nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 9000