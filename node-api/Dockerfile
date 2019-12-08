FROM node:10-alpine
ARG NODE_ENV=production
RUN echo $NODE_ENV
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run","start"]