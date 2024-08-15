const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/error",
  }),
  (req, res) => {
    res.redirect("http://localhost:3000/");
  }
);

router.get("/user", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      isAuthenticated: true,
      user: req.user,
    });
  } else {
    res.status(401).json({
      message: "Not authenticated",
      isAuthenticated: false,
      user: null,
    });
  }
});

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:3000/");
  });
});

module.exports = router;
