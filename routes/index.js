var express     = require("express");
var router      = express.Router();
var Campground  = require("../models/campground");
var Comment     = require("../models/comment");
var User        = require("../models/user");
var passport    = require("passport");
var async       = require("async");
var nodemailer  = require("nodemailer");
var crypto      = require("crypto");

router.get("/", function(req, res){
    res.render("landing");
});

//Auth Routes

//Register
router.get("/register", function(req, res) {
    res.render("register");
});

router.post("/register", function(req, res) {
    var newUser = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        avatar: req.body.avatar
    });
    if(req.body.adminCode === "secretcode12"){
        newUser.isAdmin = true;
    }
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register", {error: err.message});
        }     
        passport.authenticate("local")(req, res, function(){
            res.flash("success", "Welcome to "+ currentUser.username);
            res.redirect("/campgrounds");
        });
    });
});

//Login
router.get("/login", function(req, res) {
    res.render("login");
});

router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res){
});

router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "Logged you Out!");
    res.redirect("/campgrounds"); 
});

router.get("/users/:id", function(req, res) {
   User.findById(req.params.id, function(err, foundUser){
      if(err){
          req.flash("error","Something went wrong");
          res.redirect("/");
      } 
      Campground.find().where('author.id').equals(foundUser._id).exec(function(err, campgrounds){
         if(err){
             req.flash("error","Something went Wrong");
             res.redirect("/");
         } 
         res.render("user/show", {user: foundUser, campgrounds: campgrounds});
      });
   });
});

router.get("/forgot", function(req, res) {
   res.render("forgot"); 
});

module.exports = router;