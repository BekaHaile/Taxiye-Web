FROM node:14

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json .
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm build
EXPOSE 3000

# Running the app
CMD ["npm", "start"]

