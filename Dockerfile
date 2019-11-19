FROM node:10-alpine
WORKDIR /selous
COPY . .
RUN npm run deploy
EXPOSE 8000
CMD ["node", "./server/bin/www"]