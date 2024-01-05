FROM node:20 AS build-stage

WORKDIR /app

# Copy only package files to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci --no-audit

# Copy the rest of the application
COPY . .

# Build the Angular Universal app
RUN npm run build:ssr

# Serve Stage
FROM node:20

WORKDIR /app

# Copy built app from the build stage
COPY --from=build-stage /app/dist ./dist

# Expose port 4000
EXPOSE 4000

# Start the Angular Universal server
CMD ["node", "dist/os-front/server/main.js"]
