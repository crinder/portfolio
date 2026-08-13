# Construcción
FROM node:lts AS build
WORKDIR /app

ENV VITE_BYPASS_DEV_SERVER=true
COPY package*.json ./
RUN npm install

COPY . .

RUN rm -rf dist .astro
RUN npm run build


FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]