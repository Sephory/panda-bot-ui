FROM node:19 

ARG PUBLIC_PANDA_API

WORKDIR /app

COPY . ./
RUN npm install
RUN npm run build

ENTRYPOINT ["node", "build"]
