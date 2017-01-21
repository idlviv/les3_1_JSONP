/**
 * Created by igor on 20.01.17.
 */
window.addEventListener('load', function wListener(){
  var content = document.querySelector('#content');
  var title = document.querySelector('title');
  // var article;
  var script;
  var url;

  if (document.querySelector('.script')){
    document.querySelector('.script').parentNode.removeChild(document.querySelector('.script'));
  }

  script = document.createElement('script');
  // script.className = 'script';
  // article = "java";
  // url = 'http://en.wikipedia.org/w/api.php?action=parse&page='+ article +'&prop=text&section=0&format=json&callback=jp1';
  url = 'https://api.privatbank.ua/p24api/pubinfo?jsonp=success&exchange&coursid=5';
  script.src = url;

  window.success = function (data) {
    content.innerHTML = data[0].ccy +'/'+ data[0].base_ccy + ' купити ' + data[0].sale;
    console.log(JSON.stringify(data));
    // title.innerHTML = article;

  };
  document.head.appendChild(script);
});
