$(document).ready(function() {

  var myFilters = JSON.parse(localStorage.getItem('filters'));
  if(myFilters != null){
    var names = ['location','date', 'hours', 'guest', 'maxCost', 'minCost'];
    for(var i = 0; i <names.length; i++){
      document.getElementById(names[i]).value = myFilters[0][names[i]];
      document.getElementById(names[i]).placeholder = "";

    }
  }
});

function search(){
  var loc = $('#location').val();
  var date = $('#date').val();
  var hours =$('#hours').val();
  var guest = $('#guest').val();
  var min = $('#minCost').val();
  var max = $('#maxCost').val();

  var filters = [
    {'location':loc, 'date':date, 'hours':hours, 'guest':guest, 'minCost':min, 'maxCost':max}
  ];

  localStorage.setItem('filters', JSON.stringify(filters));

  window.location.href='./search.html';
}

var favs = document.getElementById('favorites');

favs.onclick = function(){
  if(localStorage.getItem("status") !== null){
    window.location='./myFavorites.html';
    return false;
  }
}
function loggedIn(){
  localStorage.setItem("status", "loggedIn");
}
function loggedOut(){
  localStorage.removeItem("status");
  window.location.href='./index.html';

}
if(localStorage.getItem("status") !== null){
  document.getElementById('loginbtn').style.display='none';
  document.getElementById('signupbtn').style.display='none';
  document.getElementById('logoutbtn').style.display='inline-block';
}
