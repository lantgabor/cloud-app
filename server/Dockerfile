FROM node:16

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY ./index.js /app

CMD ["npm", "start"]
