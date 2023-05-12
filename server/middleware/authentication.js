const jwt = require('jsonwebtoken');
const config = require('../../config');

// Middleware to authenticate incoming requests
exports.authenticate = (req, res, next) => {
  try {
    // Get the token from the request header
    const token = req.header('Authorization').replace('Bearer ', '');

    // Verify the token
    const decoded = jwt.verify(token, config.jwtSecret);

    // Attach the decoded token to the request object
    req.userId = decoded.userId;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
