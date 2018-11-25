// Get upcoming and listed rooms
var upcoming = JSON.parse(localStorage.getItem('upcoming'));
var listed = JSON.parse(localStorage.getItem('listed'));

$(document).ready(function() {

  //get user from local storage
  var user = JSON.parse(localStorage.getItem('user'));

  //getting proper username
  var username = user['email'];
  if(username.indexOf('@') != -1 ){
    username = username.substring(0,username.indexOf('@'));
  }

  // change user name
  document.getElementById('name').innerHTML = "Welcome back, " + username;

  // If null, set them equal to zero
  if(upcoming == null){
    upcoming = [];
  }
  if(listed == null ){
    listed = [];
  }

  // List any and all upcoming
  if(upcoming.length == 0 ){
    document.getElementById('noFavs').style.display = "inline-block";
    document.getElementById('favHeader').style.display = "none";

  } else{
    var source   = $("#results-template").html();
    var template = Handlebars.compile(source);
    var parentDiv = $("#first-row");

    for (var i = 0; i < 4; i++) {
      if( i < upcoming.length){
        var curData = upcoming[i];
        var curHtml = template(curData);
        parentDiv.append(curHtml);
      }
    }


    // Update the second row
    var parentDiv = $("#second-row");

    for (var i = 4; i < upcoming.length; i++) {
      var curData = upcoming[i];
      var curHtml = template(curData);
      parentDiv.append(curHtml);
    }

  }

  // List any and all listed locations
  var source   = $("#remove-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#third-row");

  // add a no header if no listed items
  if(listed.length == 0){
    document.getElementById('listHeader').style.display = "none";
  }
  for (var i = 0; i < listed.length; i++) {
    var curData = listed[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }
});

// Removing the location from the listed space
function removeList(id){
  id = id.replace("List","");

  console.log(id);
  if(!confirm("Are you sure you wish to remove this space?")){
      return false;
  }
  for( var i = 0; i < listed.length; i++ ){
    if( listed[i]['id'] === id){
      listed.splice(i,1);
      break;
    }
  }

  // update page and list items
  localStorage.setItem('listed',JSON.stringify(listed));
  document.getElementById(id+"List").style.display = "none";

}


// Removing the location from upcoming events
function remove(id){
  id = id.replace("Rem","");

  console.log(id);
  if(!confirm("Are you sure you wish to remove this space?")){
      return false;
  }
  for( var i = 0; i < upcoming.length; i++){
    if( upcoming[i]['id'] === id ){
      upcoming.splice(i,1);
      break;
    }
  }

  // update page and upcoming items
  localStorage.setItem('upcoming',JSON.stringify(upcoming));
  document.getElementById(id+"Rem").style.display = "none";
}
