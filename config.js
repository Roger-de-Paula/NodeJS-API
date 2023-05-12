// config.js

module.exports = {
    port: 3000, // Specify the port number for your server
  
    // Database configuration
    mongodb: {
      uri: 'mongodb://localhost:27017/lost-and-found',
    },
  
    // JWT configuration
    jwtSecret: 'your-secret-key-here',
  };
  