FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app/
RUN npm install
RUN git submodule update --remote https://colinalford:46f500f53ab88fab848bcac814b165c3f3062c32@csp-github.sam.gov/GSA-IAE/sam-ui-elements.git --init

EXPOSE 8080
CMD npm run prod

