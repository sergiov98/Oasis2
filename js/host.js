var availableRooms = JSON.parse(localStorage.getItem('availableRooms'));

var indexes = JSON.parse(localStorage.getItem('indexes'));

function list(){
  if(JSON.parse(localStorage.getItem('user')) == null){
    window.alert('Please log in before listing a space');
    return false;
  }
  var name = $('#name').val();
  var description = $('#description').val();
  var location = $('#location').val();
  var price =  "1,000";
  var capacity = $('#capacity').val();
  if(name.indexOf(" ") != -1){
    var id = name.substr(0,name.indexOf(" ")).toLowerCase();
  }else{
    var id = name.toLowerCase();
  }

  var added = {'name': name,'image':'template','description':description, 'price': price,
  'location': location, 'capacity':capacity, 'id':id, 'stars':0};

  availableRooms.push(added);

  indexes.push(id);
  localStorage.setItem('availableRooms',JSON.stringify(availableRooms));
  localStorage.setItem('indexes',JSON.stringify(indexes));

  window.location.href='./confirmHost.html';
}
