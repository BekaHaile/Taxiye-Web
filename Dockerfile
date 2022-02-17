
# base image
FROM node:14

# create & set working directory
RUN mkdir -p /usr/src/web_app

WORKDIR /usr/src/web_app

ENV NODE_ENV=production

# copy source files
COPY . /usr/src/web_app

# install dependencies
RUN npm install

# start app
RUN npm run build

EXPOSE 3000

CMD npm run start
