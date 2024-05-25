# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the Vite project
RUN npm run build

# Expose port 80
EXPOSE 80

# Start the server
CMD [ "npm", "run", "serve" ]