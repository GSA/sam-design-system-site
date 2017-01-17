FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app/
RUN npm install

# update submodules
RUN git submodule update --init --recursive

EXPOSE 8080
CMD npm run prod

