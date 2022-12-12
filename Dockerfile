FROM node:14.18-alpine

COPY . /tmp
WORKDIR /tmp
RUN npm install 

CMD ["npm", "start"]