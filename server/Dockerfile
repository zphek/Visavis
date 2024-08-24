FROM node:20-alpine

WORKDIR workspace/server

COPY package*.json .
COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm", "start"]