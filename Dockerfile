FROM node:16.16-alpine3.16
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build
EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]

