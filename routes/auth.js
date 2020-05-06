const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  forgetPassword,
} = require("../controllers/auth");

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/forget-password", forgetPassword);

module.exports = router;
