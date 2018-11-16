var availableRooms = [
  {'name':'Golden Gate Bridge', 'image':'GBridge', 'price':'2,000','location':'San Francisco',
    'capacity':'980', 'description':'This place is great',  'id':'bridge', 'stars':'4'},
  {'name':'Alcatraz Island', 'image':'prison', 'price':'1,500','location':'San Francisco',
    'capacity':'768', 'description':'This place is great',  'id':'alcatraz', 'stars':'4'},
  {'name':'Pier', 'image':'pier', 'price':'1,250','location':'San Francisco',
    'capacity':'1,000', 'description':'This place is great',  'id':'pier', 'stars':'4'},
  {'name':'Price Center', 'image':'pricecenter', 'price':'400', 'location':'La Jolla',
    'capacity':'780', 'description':'This place is great',  'id':'pc', 'stars':'3'},
  {'name':'Cityscope Banquet Hall', 'image':'ballroom', 'price':'800', 'location':'San Diego',
    'capacity':'350', 'description':'This place is great',  'id':'ballroom', 'stars':'3'},
  {'name':'Hyatt Regency ', 'image':'regency', 'price':'1,000','location':'La Jolla',
    'capacity':'600', 'description':'This place is great',  'id':'hyatt', 'stars':'3'},
  {'name':'Balboa Park', 'image':'balboa','price':'600', 'location':'La Jolla',
    'capacity':'500', 'description':'This place is great',  'id':'balboa', 'stars':'4'},
  {'name':'Observatory North Park', 'location': 'San Diego', 'description':
    'The venue includes a 40 x 24’ stage, full staged-size rehearsal room, production office with fully equipped projection booth, and parking lot is adjacent to the theatre.'
   ,'price':'700', 'image':'observatory',
    'capacity':'500', 'id':'observatory', 'stars':'5'},
  {'name': 'Marriott Gaslamp Quarter', 'price': '1,000',
    'location': 'San Diego', 'capacity':'700', 'id': 'gaslamp',
    'description':' Discover the best banquet halls and ballrooms with modern equipment and flexible layouts. Marriott San Diego offers a variety of options for festive private functions.',
    'image':'gaslamp', 'stars':'5'},
  {'name': 'Waterfront Park', 'image':'waterfront','price': '500',
  'description':'The venue provides spaces for various private or public events. The Waterfront Park features a large field, garden room, and play area.',
  'location': 'San Diego', 'capacity':'1000', 'id': 'waterfront', 'stars':'5'},
  {'name': 'Liberty Station Center', 'image':'liberty',
  'description':' The main hall walls is covered with gorgeous wainscoting. Amenities of the main hall include guest Wifi, free parking, registration and check-in area, and projection devices are available for rent.',
  'price':'800', 'location': 'San Diego', 'capacity':'400', 'id': 'liberty', 'stars':'5'},
  {'name': 'Piazza della Famiglia','image':'piazza',
  'description':'Little Italy provide space for music, festival, farmers market, you name it. Enjoy beautiful scenery at Piazza della Famiglia, in the heart of Little Italy.',
  'price': '1,000', 'location': 'San Diego', 'capacity':'900', 'id':'piazza', 'stars':'4'},
  {'name': 'Marriott Beverly Hills', 'image': 'BH', 'price': '5,000',
   'description': 'The Marriott in Beverly Hills is perfect for any event! Stunning ballrooms and a convenient location for all of your guests!',
   'location': 'Los Angeles', 'capacity': '650', 'id': 'BH', 'stars': '5'},
   {'name': 'Luxe City Center Hotel', 'image': 'Luxe', 'price': '3,000',
   'description': 'Luxe City Center Hotel is conveniently located in the heart of Los Angeles and offers beautiful views of downtown LA. Not only can you guests enjoy the view, but also the pool, ballrooms, food, drinks, wifi, and much more.',
    'location': 'Los Angeles', 'capacity': '700', 'id': 'Luxe', 'stars': '4'},
    {'name': 'Standard Hotel Rooftop', 'image': 'standard', 'price': '6,000',
     'description': 'Enjoy watching the city sunset on the Rooftop at the Standard Hotel in the heart of Los Angeles! Guests can relax on the roof then head inside to ballrooms with beautiful stages, tables, food, bars, and company!',
     'location': 'Los Angeles', 'capacity': '450', 'id': 'Standard', 'stars': '5'}

];

if(localStorage.getItem('availableRooms') == null){
  localStorage.setItem('availableRooms',JSON.stringify(availableRooms));
}

var indexes = ['bridge','alcatraz','pier','pc','ballroom',
  'hyatt','balboa','observatory','gaslamp','waterfront',
  'liberty','piazza','BH','Luxe','Standard'];

if(localStorage.getItem('indexes') == null){
  localStorage.setItem('indexes',JSON.stringify(indexes));
}


var firstActivities = [
  {'caption': 'Party', 'actImage':'./images/party.jpg'},
  {'caption': 'Wedding', 'actImage':'./images/wedding.jpg'},
  {'caption': 'Corporate Event', 'actImage':'./images/corp.jpg'},
  {'caption': 'Meeting', 'actImage':'./images/meeting.jpg'}
];

var secondActivities = [
  {'caption': 'Concert', 'actImage':'./images/concert.jpg'},
  {'caption': 'Photoshoot', 'actImage':'./images/photoshoot.jpg'},
  {'caption': 'Reunion', 'actImage':'./images/reunion.jpg'},
  {'caption': 'Workshop', 'actImage':'./images/workshop.jpg'}
];


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

/* This function waits until document is ready*/
$(document).ready(function() {
  console.log('hello world');
  s = document.getElementById("orites");


  // compile the template
  var source   = $("#activities-template").html();
  var template = Handlebars.compile(source);

  var parentDiv = $("#first-row");
  for (var i = 0; i < firstActivities.length; i++) {
    var curData = firstActivities[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }

  var parentDiv = $("#second-row");
  for (var i = 0; i < secondActivities.length; i++) {
    var curData = secondActivities[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }
});

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
