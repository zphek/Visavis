FROM node:20-alpine

WORKDIR workspace/server

COPY package*.json .
COPY . .

RUN npm install
RUN npm i -g @nestjs/cli

VOLUME [ "/var/vvs_api" ]

EXPOSE 4000

CMD ["npm", "start"]