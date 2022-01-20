var url = 'https://jsonplaceholder.typicode.com/todos/1';

load(url, done);

function done(data) {
  var obj = eval('(' + data + ')')
  document.getElementById("response").innerHTML = obj.title
}

function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr.response);
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}
