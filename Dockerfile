FROM node:10-alpine
WORKDIR /selous
COPY . .
RUN npm run deploy
EXPOSE 8080
CMD ["node", "./server/bin/www"]