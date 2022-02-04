FROM node:14 AS builder

WORKDIR /app

ENV NODE_ENV production

COPY package*.json /app/

RUN npm install --dev typescript && npm install

COPY . /app

RUN npm  run build

FROM nginx:alpine AS blog-nx-ui

#WORKDIR /usr/share/nginx/html

COPY --from=builder /app/public/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
