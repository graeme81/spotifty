var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.send();
};


var requestComplete = function(){
  if (this.status !== 200) return;

  var jsonString = this.responseText;
  var data = JSON.parse(jsonString);
  list(data.albums.items);
};


var list = function(albums){
  //console.log(albums);
  var div = document.getElementById('albums');
  var p = document.createElement('p');

  albums.forEach(function(album){
    //console.log(album);
    //console.log(album.name);
    var li = document.createElement('li');
    li.innerText = album.name;
    p.appendChild(li);
    div.appendChild(p);
    
  })
}


var app = function(){
  var url = "https://api.spotify.com/v1/search?q=metal&type=album"
  makeRequest(url, requestComplete);
};

window.onload = app;