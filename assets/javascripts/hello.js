// hello_plugin/assets/javascripts/hello.js

function sayHello() {
  alert('Привет! Это мой первый плагин для Discourse!');
}

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.innerHTML = 'Привет!';
  button.addEventListener('click', sayHello);
  
  var topicControls = document.querySelector('.topic-controls');
  topicControls.appendChild(button);
});