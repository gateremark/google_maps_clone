# Official Node.js runtime as the base image
FROM node:18-alpine

# install pnpm
RUN npm install -g pnpm

# Set the working directory in the container
WORKDIR /app

# Copy the rest of the application files to the container
COPY . .

# Install the application dependencies
RUN pnpm install

# Expose the port that the development server will run on
EXPOSE 5173

# Start the development server
CMD ["pnpm", "start"]