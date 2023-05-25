# Base stage
FROM node:alpine as base

WORKDIR /usr/src/app/vite

RUN npm cache clean --force

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

#Development stage
FROM base as dev

CMD ["npm", "run", "start"]

# Test stage
FROM base as test

CMD ["npm", "run", "test:coverage"]

# Build stage
FROM base as build

RUN npm run build

# Copy app build to Nginx server
FROM nginx:1.12-alpine as prod

COPY --from=build /usr/src/app/vite/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
