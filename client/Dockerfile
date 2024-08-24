FROM node:20-alpine

WORKDIR workspace/client

COPY package*.json .
COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]