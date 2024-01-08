# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Expose a port to run the application
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]
