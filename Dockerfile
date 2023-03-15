FROM node:16.13
WORKDIR /usr/src/app
COPY . /usr/src/app/
# COPY package*.json ./
RUN npm install
RUN npm run build
EXPOSE 3000
# CMD node ./server/server.js
ENTRYPOINT ["npm", "start"]
