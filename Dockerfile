FROM node:12.18-alpine

COPY ["package.json", "yarn.lock", "./"]
RUN yarn

COPY . .
RUN yarn build

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]