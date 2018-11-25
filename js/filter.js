$(document).ready(function() {

  var text = localStorage.getItem('event');

  //small change for text
  if(text === "Corporate"){
    text = "corporate event";
  }

  // Get the list of locations that match our event
  var ar = JSON.parse(localStorage.getItem('availableRooms'));
  var arIndex = JSON.parse(localStorage.getItem('arIndex'));
  var indexes = JSON.parse(localStorage.getItem('indexes'));

  var filterRooms = ar[arIndex.indexOf(text.toLowerCase())];
  var filterIndexes = indexes[arIndex.indexOf(text.toLowerCase())];

  localStorage.setItem('filterRooms',JSON.stringify(filterRooms));
  localStorage.setItem('filterIndexes',JSON.stringify(filterIndexes));

  document.getElementById('header').innerHTML = "It's time for a " + text.toLowerCase();
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


  /* add a default values */
  if(date === ""){
    date = "2020-04-30";
  }
  if(hours === ""){
    hours = "1";
  }
  if(guest === ""){
    guest = "1";
  }
  if(min === ""){
    min = "0";
  }

  var filters = [
    {'location':loc, 'date':date, 'hours':hours, 'guest':guest, 'minCost':min, 'maxCost':max}
  ];

  localStorage.setItem('filters', JSON.stringify(filters));

  window.location.href='./search.html';
}
