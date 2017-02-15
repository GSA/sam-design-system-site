FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app/
RUN ls
RUN ls sam-ui-elements
RUN ls sam-ui-elements/config
RUN npm install

EXPOSE 8080
CMD npm run prod

