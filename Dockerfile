# Build stage
FROM node:18-alpine as build

WORKDIR /app
RUN apk add --no-cache yarn

# Install required dependencies for PDF generation
RUN apk add --no-cache \
    fontconfig \
    ttf-dejavu

COPY package*.json ./
RUN yarn add gray-matter marked && \
    yarn install --network-timeout 1000000 --no-optional
COPY . .
RUN yarn build

# Production stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
# Copy markdown content to the production image
COPY --from=build /app/src/content /usr/share/nginx/html/content
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 