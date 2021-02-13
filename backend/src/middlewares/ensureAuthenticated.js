const { verify } = require("jsonwebtoken");

module.exports = {
  async ensureAuthenticated(request, response, next ) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new AppError('JWT token is missing', 401);
    }

    const [, token] = authHeader.split(' ');

    try {
      const decoded = verify(token, authConfig.jwt.secret);

      const { sub } = decoded;

      request.user = {
        id: sub,
      };

      return next();
    } catch {
      return response.json.status(401).json({ message: 'Invalid JWT token' });
    }
  }
};
