# ===== Configure =====
FROM node:alpine
# Set working directory to /app in container
WORKDIR /app
# Copy app dependencies
COPY package*.json /app/
# ===== Build =====
RUN npm i
COPY ./ /app/
# ===== Run =====
RUN npm run build
# Expose port on which app will be running (default port is 3000)
EXPOSE 3000
# Start app
CMD ['npx', 'serve', 'build']