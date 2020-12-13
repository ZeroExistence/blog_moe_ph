# Use an official Python runtime as a parent image
FROM node:15.4-alpine3.12
LABEL maintainer="admin@moe.ph"

# Set environment varibles
ENV NODE_ENV production
WORKDIR /app/

# Install any needed packages specified in package.json
COPY package.json .
RUN yarn install

COPY . .
RUN yarn build

EXPOSE 3000 10000
CMD exec node __sapper__/build
