var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
        {
            name: "Cloud's Rest",
            image: "https://images.unsplash.com/photo-1469292055053-a5ebd1bfc2a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            description: "Bacon ipsum dolor amet salami ham hock brisket pig spare ribs. Picanha drumstick cow meatloaf, corned beef leberkas porchetta kevin beef biltong cupim. Ham hock hamburger prosciutto tongue, strip steak meatball pig kielbasa porchetta short ribs andouille spare ribs beef beef ribs doner. Pork loin burgdoggen pork chop pancetta turkey bresaola. Meatball burgdoggen cow strip steak beef, cupim pork chop sirloin sausage turducken corned beef shoulder." 
        },
        {
            name: "Desert Mesa",
            image: "https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "Bacon ipsum dolor amet salami ham hock brisket pig spare ribs. Picanha drumstick cow meatloaf, corned beef leberkas porchetta kevin beef biltong cupim. Ham hock hamburger prosciutto tongue, strip steak meatball pig kielbasa porchetta short ribs andouille spare ribs beef beef ribs doner. Pork loin burgdoggen pork chop pancetta turkey bresaola. Meatball burgdoggen cow strip steak beef, cupim pork chop sirloin sausage turducken corned beef shoulder."
        },
        {
            name: "Canyon Floor",
            image: "https://images.unsplash.com/photo-1534880606858-29b0e8a24e8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "Bacon ipsum dolor amet salami ham hock brisket pig spare ribs. Picanha drumstick cow meatloaf, corned beef leberkas porchetta kevin beef biltong cupim. Ham hock hamburger prosciutto tongue, strip steak meatball pig kielbasa porchetta short ribs andouille spare ribs beef beef ribs doner. Pork loin burgdoggen pork chop pancetta turkey bresaola. Meatball burgdoggen cow strip steak beef, cupim pork chop sirloin sausage turducken corned beef shoulder."
        }
    ];

function seedDB(){
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // else{
        //     console.log("removed Campgrounds");
        //     data.forEach(function(seed){
        //         Campground.create(seed, function(err, campground){
        //             if(err){
        //                 console.log(err);
        //             }
        //             else{
        //                 console.log("add new Campground");
        //                 Comment.create({
        //                     text: "This place is great, but I wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     }
        //                     else{
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new Comment");
        //                     }
        //                 });
        //             }
        //         });     
        //     });
        // }
    });
}

module.exports = seedDB;