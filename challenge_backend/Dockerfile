#create docker file with alpine
FROM node:14-alpine as base

WORKDIR /usr/src/app
COPY ./package.json ./package-lock.json /usr/src/app/
RUN npm install


WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm run build

EXPOSE 9010

ENTRYPOINT ["npm","start"]

