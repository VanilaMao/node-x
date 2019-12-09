FROM node:12-alpine
ARG NODE_ENV=production
RUN echo $NODE_ENV
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i -g @nestjs/cli --slient
RUN npm install --slient
COPY . .
CMD ["npm", "run","start"]