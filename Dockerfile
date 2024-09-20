FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

CMD ["npm", "run", "start:prod"]
