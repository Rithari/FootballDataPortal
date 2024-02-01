# Stage 1: Build the Vue.js application
FROM node:20.11.0-alpine3.19 as build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . ./

# Build the Vue.js application with Vite
RUN pnpm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built app to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]