FROM dtr-1.prod-iae.bsp.gsa.gov/docker-datacenter/node-nginx:10.11.0-alpine-20181128
ARG GIT_SHA
ENV GIT_SHA $GIT_SHA

# Delete default nginx config file & index file
RUN rm /etc/nginx/conf.d/default.conf
#RUN rm /var/www/html/index.nginx-debian.html

#copy configured nginx file
COPY nginx/ /etc/nginx/conf.d

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app/

RUN chmod +x sam-ui-elements-build.sh
RUN ./sam-ui-elements-build.sh

RUN npm config set registry https://artifactory.helix.gsa.gov/artifactory/api/npm/GS-IAE-Npm
RUN npm install --production
RUN npm install tslint
RUN npm install codelyzer
RUN npm rebuild node-sass

RUN npm run lint
RUN npm run build

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
     && ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 8443
RUN mkdir /run/nginx
# Set the default command to execute
# when creating a new container
CMD npm run prod
