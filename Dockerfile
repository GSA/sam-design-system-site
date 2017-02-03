FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app/
RUN npm install
RUN git submodule update --remote https://colinalford:${GIT_API_TOKEN}@csp-github.sam.gov/GSA-IAE/sam-ui-elements --init

EXPOSE 8080
CMD npm run prod

