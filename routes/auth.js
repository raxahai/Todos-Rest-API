const express = require("express");
const router = express.Router();
const {
  handleUserLogin,
  handlerUserRegistration,
} = require("../controllers/auth");
const setCookies = require("../utils/cookies");

router.post("/register", handlerUserRegistration);
router.post("/login", handleUserLogin);

module.exports = router;
