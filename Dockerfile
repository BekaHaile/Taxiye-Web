FROM node:14

WORKDIR /app

ENV NODE_ENV production

COPY package*.json /app/

RUN npm install --dev typescript && npm install

COPY . /app

RUN npm  run build

EXPOSE 3000

CMD ["npm", "start"]
