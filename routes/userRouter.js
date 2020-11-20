const express = require("express");
const userRouter = express.Router();

const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const zxcvbn = require("zxcvbn");

module.exports = userRouter;
