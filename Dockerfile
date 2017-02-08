FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app/
RUN npm install

CMD git clone https://csp-github.sam.gov/GSA-IAE/sam-ui-elements.git 
CMD ls
CMD ls sam-ui-elements

EXPOSE 8080
CMD npm run prod

