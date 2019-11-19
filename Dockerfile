FROM node:10-alpine
WORKDIR /selous
COPY . .
RUN npm run deploy
CMD ["node", "./server/bin/www"]