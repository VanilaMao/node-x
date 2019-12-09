FROM node:12-alpine
WORKDIR /usr/src/ui
COPY package*.json ./
RUN npm install --slient
COPY . .
RUN npm run build
CMD ["npm", "run","start"]