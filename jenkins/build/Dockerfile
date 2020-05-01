FROM node

WORKDIR /app

COPY . .

RUN npm ci && \
    npm run build

CMD [ "node", "server.js" ]
