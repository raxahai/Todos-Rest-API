const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/token_utils");
const { findUserByEmail, createUser } = require("../models/user");
const CustomError = require("../core/errors/custom_error");

async function handlerUserRegistration(req, res, next) {
  try {
    const { name, email, password } = req.body;

    const existingUser = await findUserByEmail(email);
    if (existingUser) throw new CustomError(400, "User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser({ name, email, hashedPassword });

    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user),
    });
  } catch (err) {
    next(err);
  }
}

async function handleUserLogin(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    //   if (!user) return res.status(401).json({ message: "Invalid credentials" });
    if (!user) throw new CustomError(400, "Invalid credentials");

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user),
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  handleUserLogin,
  handlerUserRegistration,
};
