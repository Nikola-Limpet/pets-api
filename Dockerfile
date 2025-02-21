# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm ci --only=production

# Expose port to all interfaces
EXPOSE 3000

# Set host to listen on all interfaces
ENV HOST=0.0.0.0
ENV PORT=3000

CMD ["node", "dist/main"]