require('dotenv').config();

var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    flash       = require("connect-flash"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    User        = require("./models/user"), 
    seedDB      = require("./seeds");

var campgroundroute = require("./routes/campgrounds"),
    commentroute    = require("./routes/comments"),
    indexroute       = require("./routes/index");



//seedDB();

mongoose.connect("mongodb://localhost/yelp_camp", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
app.use(flash());

//Passport Configuration

app.use(require("express-session")({
    secret: "Once Again Rusty is best",
    resave: false,
    saveUninitialized: false
}));
app.locals.moment = require('moment');
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user; 
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use("/", indexroute);
app.use("/campgrounds", campgroundroute);
app.use("/campgrounds/:id/comments", commentroute);


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has Started!!!");
});