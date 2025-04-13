const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  console.log(user);
  return jwt.sign({ ...user }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

module.exports = { generateToken };
