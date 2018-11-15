var availableRooms = JSON.parse(localStorage.getItem('availableRooms'));

var indexes = JSON.parse(localStorage.getItem('indexes'));

var filters = JSON.parse(localStorage.getItem('filters'));
var results = [];

for(var i = 0; i < availableRooms.length; i++){
  if(availableRooms[i]['location']===filters[0]['location']){
    var max = parseInt(filters[0]['maxCost'].replace(/\,/g,''));
    var roomCost = parseInt(availableRooms[i]['price'].replace(/\,/g,''));
    if( roomCost <= max){
      results.push(availableRooms[i]);
    }
  }
}

var favorites = JSON.parse(localStorage.getItem('favorites'));
var favIndex = JSON.parse(localStorage.getItem('favIndex'));

function addtoFavorite(name){
  var name = name.replace("Fav","");
  if(localStorage.getItem("status") == null){
    window.alert("Please log in before adding items to favorites");
    return false;
  }
  var index = indexes.indexOf(name);
  var space = availableRooms[index];

  if( document.getElementById(name+"Fav").innerHTML === "Favorite")
  {

    if(favorites != null){
      favorites.push(space);
      favIndex.push(space['id']);
    }
    else {
      favorites = [space];
      favIndex = [space['id']];
    }

    document.getElementById(name+"Fav").innerHTML = "Remove from Favorite";
    localStorage.setItem('favorites',JSON.stringify(favorites));
    localStorage.setItem('favIndex',JSON.stringify(favIndex));
  } else{
    console.log('favorite');

    var fIndex = favIndex.indexOf(space['id']);
    favorites.splice(fIndex,1);
    if(favorites.length == 0){
      favorites = null;
    }
    favIndex.splice(fIndex,1);
    localStorage.setItem('favorites',JSON.stringify(favorites));
    localStorage.setItem('favIndex',JSON.stringify(favIndex));

    document.getElementById(name+"Fav").innerHTML = "Favorite";

  }
}

var index_details = ['bridge','alcatraz','pier','pc','ballroom','hyatt','balboa','observatory','gaslamp','waterfront',
'liberty','piazza'];
/* Function that will lead to details page */
function getDetails(id){
  var index = indexes.indexOf(id);
  var loc = availableRooms[index];


  localStorage.setItem('detailLocation',JSON.stringify(loc));
  window.location.href='./details.html';
}


$(document).ready(function() {
  console.log('hello world');

  // compile the template
  console.log("working")
  var source   = $("#results-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#first-row");

  for (var i = 0; i < 4; i++) {
    if( i < results.length){
      var curData = results[i];
      var curHtml = template(curData);
      parentDiv.append(curHtml);
    }
  }
  var parentDiv = $("#second-row");

  for (var i = 4; i < results.length; i++) {
    var curData = results[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }

  if( localStorage.getItem('status') != null){
    if( favorites != null){
      for( var i = 0; i <favorites.length; i=i+1){
        var id = favorites[i]["id"]+"Fav";
        if(document.getElementById(id) != null){
          document.getElementById(id).innerHTML = "Remove from Favorite";
        }
      }
    }
  }


});
