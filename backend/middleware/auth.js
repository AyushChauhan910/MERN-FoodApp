import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  // 1. Check if token exists
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  
  try {
    // 2. Verify token and decode payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 3. Attach user info to request
    req.user = {
      id: decoded.id,
      role: decoded.role  // Get role directly from token
    };
    
    next();
  } catch (err) {
    // Handle different error types specifically
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    }
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default auth;