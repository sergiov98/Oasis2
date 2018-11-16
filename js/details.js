var result = JSON.parse(localStorage.getItem('detailLocation'));
var extras = JSON.parse(localStorage.getItem('extras'));
var reviews = JSON.parse(localStorage.getItem('reviews'))
var prev = (localStorage.getItem('prev'));


function goBack(variable){
  window.location.href = prev;
}

window.onclick = function(event) {
    var modal = document.getElementById("planner-modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
    var modal1 = document.getElementById("catering-modal");
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
    var modal2 = document.getElementById("entertainment-modal");
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
    var modal3 = document.getElementById("transportation-modal");
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
    var modal4 = document.getElementById("reviews-modal");
    if (event.target == modal4) {
      modal4.style.display = "none";
    }
}

function submitted(){
  alert("Thank you for your feedback");
  localStorage.setItem('reviews',null);
  var text = $('#reviewText').val();
  var stars = $('#reviewStars').val();

  var myReview = {'name':result['name'], 'text':text, 'stars':stars+""};

  if(reviews != null){
    reviews.push(myReview);
    localStorage.setItem('reviews',JSON.stringify(reviews));
  }else{
    reviews = [myReview];
    localStorage.setItem('reviews',JSON.stringify(reviews));
  }

  for(var i = 0; i < stars; i++ ){
    document.getElementById(i+"-review").classList.add('checked');
  }
  document.getElementById("myReviewh3").innerHTML = "text";
  document.getElementById('myReview').style.display = 'inline';
}

function added(id){
  console.log('add');
  if(document.getElementById(id).innerHTML === "Add to cart"){
    var price = document.getElementById(id+"Price").innerHTML.replace('$','');
    var addExtra = {'name':id,'price':price};
    confirm("Do you wish to add this to cart?");

    if(extras != null){
      extras.push(addExtra);
      localStorage.setItem('extras',JSON.stringify(extras));
    }else{
      extras = [addExtra];
      console.log(addExtra)
      console.log(extras);
      localStorage.setItem('extras',JSON.stringify(extras));
    }
    document.getElementById(id).innerHTML = "Remove from Cart";
    document.getElementById(id+"Btn").style.backgroundColor="green";
  }else{
    var index;
    for(var i = 0; i < extras.length; i++){
      if(extras[i]['name']===id){
        index = i;
        break;
      }
    }
    extras.splice(index,1);
    if(extras.length == 0 ){
      extras = null;
    }
    localStorage.setItem('extras',JSON.stringify(extras));
    document.getElementById(id).innerHTML = "Add to cart";
    document.getElementById(id+"Btn").style.backgroundColor="white";
  }

}
$(document).ready(function() {
  console.log('hello world');
  if(extras != null){
    for(var i = 0; i < extras.length; i++){
      document.getElementById(extras[i]['name']).innerHTML = "Remove from Cart";
      document.getElementById(extras[i]['name']+"Btn").style.backgroundColor="#8cf442";
    }
  }

  var star = parseInt(result['stars']);
  for(var i = 0; i < star; i++){
    document.getElementById(i+"").classList.add('checked');
    document.getElementById(i+"-modal").classList.add('checked');
  }

  // compile the template
  console.log("working")
  var source = $("#details-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#details");

  var curData = result;
  var curHtml = template(curData);
  parentDiv.prepend(curHtml);


  if(reviews != null){
    for(var i = 0; i < reviews.length; i++){
      if(reviews[i]['name']==result['name']){
        for(var j = 0; j < parseInt(reviews[i]['stars']); j++ ){
          document.getElementById(j+"-review").classList.add('checked');
        }
        document.getElementById("myReviewh3").innerHTML = reviews[i]['text'];
        document.getElementById('myReview').style.display = 'inline';
      }
    }
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
