FROM node:14-alpine

RUN mkdir -p /usr/src/app

ENV PORT 3000

WORKDIR /usr/src/app

COPY *.json /usr/src/app


COPY yarn.lock /usr/src/app

# Production use node instead of root
# USER node

RUN yarn install --production

COPY . /usr/src/app

RUN npx browserslist@latest --update-db

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]
