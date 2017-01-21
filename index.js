/**
 * Created by igor on 20.01.17.
 */
window.addEventListener('load', function wListener(){
  var content = document.querySelector('#content');
  var title = document.querySelector('title');
  var article;
  var script;
  var url;

  if (document.querySelector('.script')){
    document.querySelector('.script').parentNode.removeChild(document.querySelector('.script'));
  }

  script = document.createElement('script');
  script.className = 'script';
  article = "java";
  url = 'http://en.wikipedia.org/w/api.php?action=parse&page='+ article +'&prop=text&section=0&format=json&callback=jp1';
  script.src = url;
  document.head.appendChild(script);

  window.jp1 = function (data) {
    content.innerHTML = data.parse.text['*'];
    title.innerHTML = article;

  };

});
