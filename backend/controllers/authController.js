import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Helper function to generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role  // Include role in token payload
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES }
  );
};

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      role: role || 'user'
    });

    // Generate token with user's role included
    const token = generateToken(user);
    
    // Return token and role in response (without sensitive user data)
    res.status(201).json({ 
      message: 'User registered',
      token,
      role: user.role,
      id: user._id
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token with user's role included
    const token = generateToken(user);
    
    res.json({ 
      token,
      role: user.role,
      id: user._id
    });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
