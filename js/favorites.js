var trendingRooms = [
  {'name':'Golden Gate Bridge', 'image':'GBridge', 'price':'2,000','location':'San Francisco',
    'capacity':'980', 'description':'This place is great',  'id':'bridge', 'stars':'4'},
  {'name':'Alcatraz Island', 'image':'prison', 'price':'1,500','location':'San Francisco',
    'capacity':'768', 'description':'This place is great',  'id':'alcatraz', 'stars':'4'},
  {'name':'Pier', 'image':'pier', 'price':'1,250','location':'San Francisco',
    'capacity':'1,000', 'description':'This place is great',  'id':'pier', 'stars':'4'},
];

var indexes = ['bridge','alcatraz','pier','pc'];

var favorites = JSON.parse(localStorage.getItem('favorites'));
var favIndex = JSON.parse(localStorage.getItem('favIndex'));

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

  if( localStorage.getItem('user') != null ){
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
