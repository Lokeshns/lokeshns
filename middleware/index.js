var Comment = require("../models/comment");
var Campground = require("../models/campground");

var middlewareObj={};

middlewareObj.checkCommentOwnerShip = function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment) {
           if(err){
               res.flash("error", "Something went Wrong");
               res.redirect("back");
           } else{
               if(foundComment.author.id.equals(req.user._id) || req.user.isAdmin){
                   next(); 
               } else{
                    res.flash("error", "You don't have permission for that");
                    res.redirect("back");
               }
           }
        });
    } else{
        res.flash("error", "You need to be logged in to that");
        res.redirect("back");
    }
}

middlewareObj.checkCampgroundOwnerShip = function(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground) {
           if(err){
               res.flash("error", "Something went Wrong");
               res.redirect("back");
           } else{
               if(foundCampground.author.id.equals(req.user._id) || req.user.isAdmin){
                   next(); 
               } else{
                    res.flash("error", "You don't have permission for that");
                    res.redirect("back");
               }
           }
        });
    } else{
        res.flash("error", "You need to be logged in to that");
        res.redirect("back");
    }
}
middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to that");
    res.redirect("/login");
}

module.exports = middlewareObj;
