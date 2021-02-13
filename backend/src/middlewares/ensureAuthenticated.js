const { verify } = require("jsonwebtoken");

const authConfig = require("../config/auth");

module.exports = {
  async ensureAuthenticated(request, response, next ) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return response.status(401).json({ message: 'JWT token is missing' });
    }

    const [, token] = authHeader.split(' ');

    try {
      const decoded = verify(token, authConfig.default.jwt.secret);

      const { sub } = decoded;

      request.user = {
        id: sub,
      };

      return next();
    } catch {
      return response.status(401).json({ message: 'Invalid JWT token' });
    }
  }
};
