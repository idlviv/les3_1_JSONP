script = document.createElement('script');
div = document.createElement('div');
url = 'https://api.privatbank.ua/p24api/pubinfo?jsonp=success&exchange&coursid=5';
script.src = url;
document.body.insertBefore(div, document.querySelector('#container'));

window.success = function (data) {
  div.innerHTML = data[0].ccy +'/'+ data[0].base_ccy + ' Настя може купити ' + data[0].sale;
  console.log(JSON.stringify(data));
  document.querySelector('title').innerHTML = 'Настя';
};
document.head.appendChild(script);
