FROM node:18

COPY ./package.json /app/
COPY ./yarn.lock /app/
WORKDIR /app/
RUN yarn install

COPY . /app/

RUN yarn build
CMD yarn start
