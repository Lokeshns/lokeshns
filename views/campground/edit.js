<% include ../partials/header %>
<div class="container">
<div class="row text-center" style="margin-top:150px">
<center>
        <h1>EDIT <%= campground.name %></h1>
</center>
<br>
<div style="width:30%; margin:0 auto;">
<form action="/campgrounds/<%= campground._id %>?_method=PUT" method="POST">
    <div class="form-group">
        <input class="form-control" type="text" name="campground[name]" value="<%= campground.name %>">
    </div>
    <div class="form-group">
        <input class="form-control" type="text" name="campground[price]" value="<%= campground.price %>">
    </div>
    <div class="form-group">
        <input class="form-control" type="text" name="campground[image]" value="<%= campground.image %>">
    </div>
    <div class="form-group">
        <input class="form-control" type="text" name="campground[description]" value="<%= campground.description %>">
    </div>
    <div class="form-group">
        <label for="location">Location</label>
        <input class="form-control" type="text" name="location" id="location" value="<%= campground.location %>">
    </div>
    <div class="form-group">
        <button class="btn btn-primary btn-block">Submit!</button>
    </div>
</form>
</div>
<a href="/campgrounds">Go Back</a>
</div>
</div>
<% include ../partials/footer %>
