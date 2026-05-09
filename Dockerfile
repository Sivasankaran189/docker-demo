FROM node:18-slim
WORKDIR /app
# This line copies the package.json you just made
COPY package*.json ./
# This runs npm INSIDE the container, so you don't need it on your PC
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]