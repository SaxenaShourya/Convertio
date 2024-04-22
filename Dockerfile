# Use an official Node.js runtime as a parent image
FROM node:20-alpine3.18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Command to run the development server the React app
CMD ["npm", "run", "dev"]
