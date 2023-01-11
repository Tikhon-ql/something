FROM node:14.18-alpine

COPY . /tmp
WORKDIR /tmp
RUN npm install \
    npm run build

RUN apt install -y apache2
RUN cp -R ./output/* /var/www/html
RUN service apache2 start

CMD ["tail", "-f", "/dev/null"]