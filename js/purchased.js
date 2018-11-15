var paymentInfo = JSON.parse(localStorage.getItem('payment'))[0];

$(document).ready(function() {
  console.log('hello world');

  // compile the template
  console.log("working")
  var card = paymentInfo['card'];
  var replacementCard = "xxxxxxx" + card.substring(card.length-4);
  var result ={
    'email':paymentInfo['email'],
    'phone':paymentInfo['phone'],
    'card':replacementCard,
    'exp':paymentInfo['exp'],
    'ccv':paymentInfo['ccv']
  };

  var source   = $("#template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#details");
  var curData = result;
  var curHtml = template(curData);
  parentDiv.prepend(curHtml);
});
