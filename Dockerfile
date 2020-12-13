LABEL maintainer="admin@moe.ph"

FROM node:15.2-alpine3.12 as BUILDER
WORKDIR /app
COPY . .
RUN yarn install
ENV NODE_ENV production
RUN yarn build

# Use an official Python runtime as a parent image
FROM node:15.2-alpine3.12 as IMAGE
ENV NODE_ENV production
WORKDIR /app/
COPY . .
COPY --from=BUILDER /app/__sapper__ /app/__sapper__
COPY --from=BUILDER /app/static /app/static
RUN yarn install --production

EXPOSE 3000
CMD exec node __sapper__/build
