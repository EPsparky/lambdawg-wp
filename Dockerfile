FROM node:16.13
WORKDIR /usr/src/app
COPY . /usr/src/app/
# COPY package*.json ./
RUN npm install
RUN npm run build:dev
EXPOSE 3000
# ENTRYPOINT node ./server/server.js
ENTRYPOINT ["npm", "start"]