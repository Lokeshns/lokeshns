var express     = require("express");
var router      = express.Router({mergeParams: true});
var Campground  = require("../models/campground");
var Comment     = require("../models/comment");
var middleware  = require("../middleware");

router.get("/new", middleware.isLoggedIn, function(req, res){
   Campground.findById(req.params.id, function(err, campground){
       if(err){
           console.log(err);
       }
       else{
           res.render("comment/new", {campground: campground});
       }
   }); 
});

router.post("/", middleware.isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err, campground) {
       if(err){
           res.flash("error", "Something went Wrong");
           console.log(err);
       } 
       else{
           Comment.create(req.body.comment, function(err, comment) {
                if(err){
                    res.flash("error", "Comment creation problem");
                    console.log(err);
                }     
                else{
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    campground.comments.push(comment);
                    campground.save();
                    console.log(comment);
                    res.redirect("/campgrounds/" + campground._id);
                }
            });    
       }
    });
 });

//EDIT
router.get("/:comment_id/edit", middleware.checkCommentOwnerShip, function(req, res) {
    Comment.findById(req.params.comment_id, function(err, foundComment) {
       if(err){
           res.redirect("/campgrounds");
       } else{
           res.render("comment/edit", {campground_id: req.params.id, comment: foundComment});
       }
    });
});

//UPDATE
router.put("/:comment_id", middleware.checkCommentOwnerShip, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedCampground){
        if(err){
            res.redirect("back");
        } else{
            res.redirect("/campgrounds/"+ req.params.id);
        }
    });
});

router.delete("/:comment_id", middleware.checkCommentOwnerShip, function(req, res){
  Comment.findByIdAndRemove(req.params.comment_id, function(err){
      if(err){
          res.redirect("/campgrounds");
      } else{
          res.redirect("/campgrounds");
      }
  }); 
});


module.exports = router;