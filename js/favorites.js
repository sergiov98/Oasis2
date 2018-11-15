var trendingRooms = [
  {'name':'Golden Gate Bridge', 'image':'GBridge', 'price':'2,000','location':'San Francisco',
    'id':'bridge'},
  {'name':'Alcatraz Island', 'image':'prison', 'price':'1,500','location':'San Francisco',
     'id':'alcatraz'},
  {'name':'Pier', 'image':'pier', 'price':'1,250','location':'San Francisco',
   'id':'pier'},
  {'name':'Price Center', 'image':'pricecenter', 'price':'400', 'location':'La Jolla',
     'id':'pc'}
];
var indexes = ['bridgeFav','alcatrazFav','pierFav','pcFav'];

var favorites = JSON.parse(localStorage.getItem('favorites'));
var favIndex = JSON.parse(localStorage.getItem('favIndex'));

function addtoFavorite(name){
  if(localStorage.getItem("status") == null){
    window.alert("Please log in before adding items to favorites");
    return false;
  }
  var index = indexes.indexOf(name);
  var space = trendingRooms[index];

  if( document.getElementById(name).innerHTML === "Favorite")
  {

    if( favorites != null ){
      favorites.push(space);
      favIndex.push(space['id']);
    }
    else {
      favorites = [space];
      favIndex = [space['id']];
    }

    document.getElementById(name).innerHTML = "Remove from Favorite";
    localStorage.setItem('favorites',JSON.stringify(favorites));
    localStorage.setItem('favIndex',JSON.stringify(favIndex));
  } else{

    var fIndex = favIndex.indexOf(space['id']);
    favorites.splice(fIndex,1);
    if(favorites.length == 0){
      favorites = null;
    }
    favIndex.splice(fIndex,1);
    localStorage.setItem('favorites',JSON.stringify(favorites));
    localStorage.setItem('favIndex',JSON.stringify(favIndex));
    document.getElementById(name).innerHTML = "Favorite";
  }
}

$(document).ready(function() {

  // compile the template
  console.log("working");
  var source   = $("#favorites-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#first-row");
  for (var i = 0; i < trendingRooms.length; i++) {
    var curData = trendingRooms[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }

  if( localStorage.getItem('status') != null ){
    if( favorites != null){
      for( var i = 0; i <favorites.length; i=i+1){
        var id = favorites[i]["id"];
        if(document.getElementById(id) != null){
          document.getElementById(id+"Fav").innerHTML = "Remove from Favorite";
        }
      }
    }
  }

});

function loggedIn(){
  localStorage.setItem("status", "loggedIn");
}
function loggedOut(){
  localStorage.removeItem("status");
  window.location.href='./favorites.html';

}


if(localStorage.getItem("status") !== null){
  document.getElementById('loginbtn').style.display='none';
  document.getElementById('signupbtn').style.display='none';
  document.getElementById('logoutbtn').style.display='inline-block';
}

var index_details = ['bridge','alcatraz','pier','pc','ballroom','hyatt','balboa'];
/* Function that will lead to details page */
function getDetails(id){
  var index = index_details.indexOf(id);
  var loc = trendingRooms[index];

  localStorage.setItem('detailLocation',JSON.stringify(loc));
  window.location.href='./details.html';
}
