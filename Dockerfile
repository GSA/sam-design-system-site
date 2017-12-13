

FROM dtr-1.prod-iae.bsp.gsa.gov/docker-datacenter/node-nginx:8-alpine

# Delete default nginx config file & index file
RUN rm /etc/nginx/sites-enabled/default
RUN rm /var/www/html/index.nginx-debian.html

#copy configured nginx file
COPY nginx/ /etc/nginx/sites-enabled

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app/

RUN npm config set registry https://artifactory.helix.gsa.gov/artifactory/api/npm/GS-IAE-Npm
RUN npm install --production
RUN npm rebuild node-sass

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
      && ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 8080

# Set the default command to execute
# when creating a new container
CMD npm run prod
