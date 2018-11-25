/* The hardcoded rooms we have */
var partyRooms = [
  {'name':'Balboa Park', 'image':'balboa','price':'600', 'location':'La Jolla',
    'capacity':'500', 'description':'This place is great',  'id':'balboa', 'stars':'4'},
  {'name': 'Marriott Beverly Hills', 'image': 'BH', 'price': '5,000',
   'description': 'The Marriott in Beverly Hills is perfect for any event! Stunning ballrooms and a convenient location for all of your guests!',
   'location': 'Los Angeles', 'capacity': '650', 'id': 'BH', 'stars': '5'},
   {'name': 'Waterfront Park', 'image':'waterfront','price': '500',
   'description':'The venue provides spaces for various private or public events. The Waterfront Park features a large field, garden room, and play area.',
   'location': 'San Diego', 'capacity':'1000', 'id': 'waterfront', 'stars':'5'},
   {'name':'Hyatt Regency ', 'image':'regency', 'price':'1,000','location':'La Jolla',
   'capacity':'600', 'description':'This place is great',  'id':'hyatt', 'stars':'3'},
   {'name':'Observatory North Park', 'location': 'San Diego', 'description':
   'The venue includes a 40 x 24’ stage, full staged-size rehearsal room, production office with fully equipped projection booth, and parking lot is adjacent to the theatre.'
   ,'price':'700', 'image':'observatory',
   'capacity':'500', 'id':'observatory', 'stars':'5'}
];

var partyIndex = ['balboa','BH','waterfront','hyatt','observatory'];

var weddingRooms = [
  {'name':'Cityscope Banquet Hall', 'image':'ballroom', 'price':'800', 'location':'San Diego',
    'capacity':'350', 'description':'This place is great',  'id':'ballroom', 'stars':'3'},
  {'name': 'Marriott Gaslamp Quarter', 'price': '1,000',
    'location': 'San Diego', 'capacity':'700', 'id': 'gaslamp',
    'description':' Discover the best banquet halls and ballrooms with modern equipment and flexible layouts. Marriott San Diego offers a variety of options for festive private functions.',
    'image':'gaslamp', 'stars':'5'}
];

var weddingIndex = ['ballroom','gaslamp'];

var corporateRooms = [
  {'name': 'Marriott Beverly Hills', 'image': 'BH', 'price': '5,000',
   'description': 'The Marriott in Beverly Hills is perfect for any event! Stunning ballrooms and a convenient location for all of your guests!',
   'location': 'Los Angeles', 'capacity': '650', 'id': 'BH', 'stars': '5'},
  {'name':'Hyatt Regency ', 'image':'regency', 'price':'1,000','location':'La Jolla',
   'capacity':'600', 'description':'This place is great',  'id':'hyatt', 'stars':'3'},
  {'name': 'Luxe City Center Hotel', 'image': 'Luxe', 'price': '3,000',
  'description': 'Luxe City Center Hotel is conveniently located in the heart of Los Angeles and offers beautiful views of downtown LA. Not only can you guests enjoy the view, but also the pool, ballrooms, food, drinks, wifi, and much more.',
   'location': 'Los Angeles', 'capacity': '700', 'id': 'Luxe', 'stars': '4'}
];

var corporateIndex = ['BH','hyatt','Luxe'];

var concertRooms = [
  {'name':'Price Center', 'image':'pricecenter', 'price':'400', 'location':'La Jolla',
  'capacity':'780', 'description':'This place is great',  'id':'pc', 'stars':'3'},
  {'name': 'Standard Hotel Rooftop', 'image': 'standard', 'price': '6,000',
  'description': 'Enjoy watching the city sunset on the Rooftop at the Standard Hotel in the heart of Los Angeles! Guests can relax on the roof then head inside to ballrooms with beautiful stages, tables, food, bars, and company!',
  'location': 'Los Angeles', 'capacity': '450', 'id': 'standard', 'stars': '5'},
  {'name': 'Piazza della Famiglia','image':'piazza',
  'description':'Little Italy provide space for music, festival, farmers market, you name it. Enjoy beautiful scenery at Piazza della Famiglia, in the heart of Little Italy.',
  'price': '1,000', 'location': 'San Diego', 'capacity':'900', 'id':'piazza', 'stars':'4'}
];

var concertIndex = ['pc', 'standard', 'piazza'];

var meetingRooms = [
  {'name': 'Marriott Beverly Hills', 'image': 'BH', 'price': '5,000',
   'description': 'The Marriott in Beverly Hills is perfect for any event! Stunning ballrooms and a convenient location for all of your guests!',
   'location': 'Los Angeles', 'capacity': '650', 'id': 'BH', 'stars': '5'},
  {'name':'Hyatt Regency ', 'image':'regency', 'price':'1,000','location':'La Jolla',
   'capacity':'600', 'description':'This place is great',  'id':'hyatt', 'stars':'3'},
  {'name': 'Luxe City Center Hotel', 'image': 'Luxe', 'price': '3,000',
  'description': 'Luxe City Center Hotel is conveniently located in the heart of Los Angeles and offers beautiful views of downtown LA. Not only can you guests enjoy the view, but also the pool, ballrooms, food, drinks, wifi, and much more.',
   'location': 'Los Angeles', 'capacity': '700', 'id': 'Luxe', 'stars': '4'}
];

var meetingIndex = ['BH','hyatt','Luxe'];

var photoshootRooms = [
  {'name':'Golden Gate Bridge', 'image':'GBridge', 'price':'2,000','location':'San Francisco',
      'capacity':'980', 'description':'This place is great',  'id':'bridge', 'stars':'4'},
  {'name':'Alcatraz Island', 'image':'prison', 'price':'1,500','location':'San Francisco',
    'capacity':'768', 'description':'This place is great',  'id':'alcatraz', 'stars':'4'},
  {'name':'Pier', 'image':'pier', 'price':'1,250','location':'San Francisco',
    'capacity':'1,000', 'description':'This place is great',  'id':'pier', 'stars':'4'}
];

var photoshootIndex = ['bridge','alcatraz','pier'];

var reunionRooms = [
  {'name':'Hyatt Regency ', 'image':'regency', 'price':'1,000','location':'La Jolla',
  'capacity':'600', 'description':'This place is great',  'id':'hyatt', 'stars':'3'},
  {'name': 'Standard Hotel Rooftop', 'image': 'standard', 'price': '6,000',
  'description': 'Enjoy watching the city sunset on the Rooftop at the Standard Hotel in the heart of Los Angeles! Guests can relax on the roof then head inside to ballrooms with beautiful stages, tables, food, bars, and company!',
  'location': 'Los Angeles', 'capacity': '450', 'id': 'standard', 'stars': '5'},
  {'name':'Observatory North Park', 'location': 'San Diego', 'description':
  'The venue includes a 40 x 24’ stage, full staged-size rehearsal room, production office with fully equipped projection booth, and parking lot is adjacent to the theatre.'
  ,'price':'700', 'image':'observatory',
  'capacity':'500', 'id':'observatory', 'stars':'5'}
];

var reunionIndex = ['hyatt','standard','observatory'];

var workshopRooms = [
   {'name': 'Luxe City Center Hotel', 'image': 'Luxe', 'price': '3,000',
   'description': 'Luxe City Center Hotel is conveniently located in the heart of Los Angeles and offers beautiful views of downtown LA. Not only can you guests enjoy the view, but also the pool, ballrooms, food, drinks, wifi, and much more.',
    'location': 'Los Angeles', 'capacity': '700', 'id': 'Luxe', 'stars': '4'},
  {'name': 'Liberty Station Center', 'image':'liberty',
  'description':' The main hall walls is covered with gorgeous wainscoting. Amenities of the main hall include guest Wifi, free parking, registration and check-in area, and projection devices are available for rent.',
  'price':'800', 'location': 'San Diego', 'capacity':'400', 'id': 'liberty', 'stars':'5'}
];

var workshopIndex = ['Luxe', 'liberty'];

// Put them in the bigger array
var availableRooms = [partyRooms,workshopRooms,reunionRooms,concertRooms, meetingRooms,
                    corporateRooms, weddingRooms];
var indexes = [partyIndex, workshopIndex, reunionIndex, concertIndex ,
                      meetingIndex, corporateIndex, weddingIndex];

var arIndex = ['party', 'workshop', 'reunion','concert', 'meeting', 'corporate', 'wedding'];
/* Adding them to our local storage */
if(localStorage.getItem('availableRooms') == null){
  localStorage.setItem('availableRooms',JSON.stringify(availableRooms));
}

if(localStorage.getItem('indexes') == null){
  localStorage.setItem('indexes',JSON.stringify(indexes));
}

if(localStorage.getItem('arIndex') == null){
  localStorage.setItem('arIndex',JSON.stringify(arIndex));
}


// Create empty array for user
var user;

// get elements from log in
var logEmail = document.getElementById('logEmail');
var logPassword = document.getElementById('logPassword');
var btnLogIn = document.getElementById('btnLogIn');

// Add login event
btnLogIn.addEventListener('click', e=>{
  console.log('logging in');
  var email = logEmail.value;
  var pass = logPassword.value;

  user = {'email':email, 'favorites':null, 'listedSpaces':null};
  localStorage.setItem('user',JSON.stringify(user));
  document.getElementById('login').style.display='none';

  stateChanged();
})

// Get elements from sign up
var signEmail = document.getElementById('signEmail');
var signPassword = document.getElementById('signPassword');
var btnSignUp = document.getElementById('btnSignUp');

// Add sign up event
btnSignUp.addEventListener('click', e=>{
  console.log('signing up');
  var email = signEmail.value;
  var pass = signPassword.value;

  // Log in
  user = {'email':email, 'favorites':null, 'listedSpaces':null};
  localStorage.setItem('user',JSON.stringify(user));
  document.getElementById('signup').style.display='none';

  stateChanged();
});

var btnLogOut = document.getElementById('btnLogOut');

btnLogOut.addEventListener('click', e=>{
  localStorage.removeItem('user');
  stateChanged();
});

// Get profile button
var proLink = document.getElementById('profile');

// Detects changing in log in
function stateChanged(){

  if(localStorage.getItem('user') != null){

    /* Change displays */
    loginbtn.style.display='none';
    signupbtn.style.display='none';
    btnLogOut.style.display='inline-block';
    proLink.style.display='inline';

  } else{
    /* Change displays */
    loginbtn.style.display='inline-block';
    signupbtn.style.display='inline-block';
    btnLogOut.style.display='none';
    proLink.style.display='none';

  }
}

var loginbtn;
var signupbtn;
var btnLogOut;
/* Checks to make sure if user is logged in */
$(document).ready(function() {
  loginbtn = document.getElementById('loginbtn');
  signupbtn = document.getElementById('signupbtn');
  btnLogOut = document.getElementById('btnLogOut');
  if(localStorage.getItem('user') != null){

    /* Change displays */
    loginbtn.style.display='none';
    signupbtn.style.display='none';
    btnLogOut.style.display='inline-block';
    proLink.style.display='inline';


  } else{

    /* Change displays */
    loginbtn.style.display='inline-block';
    signupbtn.style.display='inline-block';
    btnLogOut.style.display='none';
    proLink.style.display='none';


  }

});


/* Close modal if clicking outside of it*/
window.onclick = function(event) {
    var modal = document.getElementById("login");
    if (event.target == modal) {
      modal.style.display = "none";
    }
    var modal1 = document.getElementById("signup");
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
}
