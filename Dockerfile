FROM node:16.13
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:dev
EXPOSE 3000
ENTRYPOINT [ "node", "./server/server.js" ]