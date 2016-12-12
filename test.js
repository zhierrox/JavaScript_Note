// <form id="test-form">
// 	<input type="text" name="test">
// 	<button type="button" onclick="doSubmitForm()">Submit</button>
// </form>

// <script>
// function doSubmitForm() {
// 	var form = document.getElementById('test-form');
// 	form.submit();
// }
// </script>

// <form id="test-form" onsubmit="return checkForm()">
// 	<input type="text" name="test">
// 	<button type="submit">Submit</button>
// </form>

// <script>
// function checkForm() {
// 	var form = document.getElementById('test-form');
// 	return true;
// }
// </script>

// <form id="login-form" method="post" onsubmit="return checkForm()">
// 	<input type="text" id="username" name="username">
// 	<input type="password" id="password" name="password">
// 	<button type="submit">Submit</button>
// </form>

// <script>
// function checkForm() {
// 	var pwd = document.getElementById("password")
// 	pwd.value = toMD5(pwd.value)
// 	reurn true;
// }
// </script>

// <form id="login-form" method="post" onsubmit="return checkForm()">
// 	<input type="text" id="username" name="username">
// 	<input type="password" id="input-password">
// 	<input type="hidden" id="md5-password" name="password">
// 	<button type="submit">Submit</button>
// </form>

// <script>
// function checkForm() {
// 	var input_pwd = document.getElementById('input-password')
// 	var md5_pwd = document.getElementById('md5-password')

// 	md5_pwd.value = toMD5(input_pwd.value);

// 	reuturn true;
// }	
// </script>


// var uname = '/^\w{3,10}$/';
// var p = '^/.{6,20}$/';

// var userElem = document.getElementById('username')
// var psw1 = document.getElementById('password')
// var psw2 = document.getElementById('password-2')

// if (uname.test(userElem.value) && p.test(psw1.value) && p.test(psw2.value) && (psw1.value === psw2.value)) {
// 	return true;
// } else {
// 	alert"input error";
// 	return false;
// }
// }


// var f = document.getElementById('test-file-upload');
// var filename = f.value;
// if(!filename || !(filename.endsWith('.jpg') || filename.endsWith('.png') || filename.endsWith('.gif'))) {
// 	alert('Can only upload image file.');
// 	return false;
// }

// var 
// 	fileInput = document.getElementById('test-image-file'),
// 	info = document.getElementById('test-file-info'),
// 	preview = document.getElementById('test-image-preview');

// fileInput.addEventListener('change', function() {
// 	preview.style.backgroundImage = '';
// 	if(!fileInput.value) {
// 		infor.innerHTML = 'no file choosed';
// 		return ;
// 	}
// 	var file = fileInput.files[0];
// 	info.innerHTML = 'file' + file.name + '<br>' + 'size' + file.size + '<br>' + 'modify' + file.lastModifiedDate;
// 	if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
// 		alert('invalid');
// 		return;
// 	} 
// 	var reader = new FileReader();
// 	reader.onload = function(e) {
// 		var 
// 			data = e.target.result;
// 			preview.style.backgroundImage = 'url(' + data + ')';
// 	};

// 	reader.readAsDataURL(file);
// });

// var 
// 	fileInput = document.getElementById('test-image-file'),
// 	info = document.getElementById('test-file-info'),
// 	preview = document.getElementById(test-image-preview);

// fileInput.addEventListener('change', function () {
// 	preview.style.backgroundImage = '';
// 	if (!fileInput.value) {
// 		info.innerHTML = 'no files';
// 		return;
// 	}
// 	var file = fileInput.files[0];
// 	info.innerHTML = 'file' + file.name + '<br>' + 'size' + file.size + '<br>' +
// 					'modify' + file.lastModifiedDate;
// 	if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
// 		alert('invalid');
// 		return;
// 	}

// 	var reader = new FileReader()；
// 	reader.onload = function (e) {
// 		var 
// 			data = e.target.result;
// 		preview.style.backgroundImage = 'url(' + data + ')';
// 	};
// 	reader.readAsDataURL(file);
// });

// function success(text) {
// 	var text;
// }

// function faile (code) {
// 	var textarea = document.getElementById('test-response-text');
// 	textarea.value = 'Error code: ' + code;
// }

// var request = new XMLHttpRequest();

// request.onreadystatechange = function() {
// 	if (request.readyState === 4) {
// 		if (request.status === 200) {
// 			return success(request.responseText);
// 		} else {
// 			return fail(request.status);
// 		}
// 	} else {

// 	}
// };

// request.open('GET', '/api/categories');
// request.send();

// alert('request have sent, waiting response');

// function success(text) {
// 	var textarea = document.getElementById('test-response-text');
// 	textarea.value = text;
// }

// function fail(code) {
// 	var textarea = document.getElementById('test-response-text');
// 	textarea.value = 'Error code: ' + code;
// }

// var request = new XMLHttpRequest();

// request.onreadystatechange = function () {
// 	if (request.readyState === 4) {
// 		if (request.status === 200) {
// 			return success(request.responseText);
// 		} else {
// 			return fail(request.status);
// 		}
// 	} else {

// 	}
// }

// request.open('GET', 'api/categories');
// request.send();

// alert('sent, response');

// function success(text) {
// 	var textarea = document.getElementById('test-ie-response-text');
// 	textarea.value = text;
// }

// function fail(code) {
// 	var textarea = document.getElementById('test-ie-response-text');
// 	textarea.value = 'Error code: ' + code;
// }

// var request = new ActiveXObject('Microsoft.XMLHTTP');

// request.onreadystatechange = function() {
// 	if (request.readyState === 4) {
// 		if (request.status === 200) {
// 			return success(request.responseText);
// 		} else {
// 			return fail(request.status);
// 		}
// 	} else {

// 	}
// }

// request.open('GET', '/api/categories');
// request.send();

// alert('sent, waiting');


// var request = new ActiveXObject('Microsoft.XMLHTTP');

// var request;
// if (window.XMLHttpRequest) {
// 	request = new XMLHttpRequest();
// } else {
// 	request = new ActiveXObject('Microsoft.XMLHTTP');
// }

// @font-face {
// 	font-family: 'FontAwesome';
// 	src: url('http://.ttf')format('truetype')（'truetype'）;
// }

// OPTIONS /path/to/resource HTTP/1.1
// Host: bar.com 
// Origin: http://my.com
// Access-Control-Request-Method: POST

// HTTP/1.1 200 OK 
// Access-Control-Allow-Origin: http://my.com
// Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS
// Access-Control-Max-Age: 86400

// function callback() {
// 	console.log('Done');
// }

// console.log('before setTimeout()');
// setTimeout(callback, 1000);
// console.log('afger setTimeout()');

// function test(resolve, reject) {
// 	var timeOut = Math.random() * 2;
// 	log('set timeout to: ' + timeOut + ' seconds. ');
// 	setTimeout(function () {
// 		if (timeOut < 1) {
// 			log('call resolve()...');
// 			resolve('200 OK');
// 		} else {
// 			log('call reject()...');
// 			reject('timeout in ' + timeOut + ' seconds.');
// 		}
// 	}, timeOut * 1000);
// }

// function callback() {
// 	console.log('Done');
// }

// function test(resolve, reject) {
// 	var timeOut = Math.random() * 2;
// 	log('set timeout to: ' + timeOut + ' seconds.');
// 	setTimeout(function () {
// 		if (timeOut  < 1) {
// 			log('call resolve()...');
// 			resolve('200 OK');
// 		} else {
// 			log('call reject()...');
// 			reject('timeout in ' + timeOut + ' seconds.');
// 		}
// 	}, timeOut * 1000);
// }

// var p1 = new Promise(test);
// var p2 = p1.then(function (result) {
// 	console.log('success: ' + result);
// });
// var p3 = p2.catch(function (reason) {
// 	console.log('fail: ' + reason);
// });


// new Promist(test).then(function(result) {
// 	console.log('success: ' + result);
// }).catch(function (reason) {
// 	console.log('fail' + reason);
// });

// var logging = document.getElementById('test-promist2-log');
// while (logging.children.length > 1) {
// 	logging.removeChild(logging.children[logging.children.length - 1]);
// }

// function log(s) {
// 	var p = document.createElement('p');
// 	p.innerHTML = s;
// 	logging.appendChild(p);
// }

// function multiply(input) {
// 	return new Promise(function (resolve, reject) {
// 		log('calculating' + input + ' x ' + input + '...');
// 		setTimeout(resolve, 500, input * input);
// 	});
// }

// function add(input) {
// 	return new Promise(function (resolve, reject) {
// 		log('calculating ' + input + ' + ' + input + '...');
// 		setTimeout(resolve, 500, input + input);
// 	});
// }

// var p = new Promise(function (resolve, reject) {
// 	log('start new Promise...');
// 	resolve(123);
// })；

// p.then(multiply)
//  .then(add)
//  .then(multiply)
//  .then(function(result) {
//  	log('Got value: ' + result);
//  });

// function ajax (method, url, data) {
// 	var request = new XMLHttpRequest();
// 	return new Promise(function (resolve, reject))
// }



// // 0.5秒后返回input*input的计算结果:
// function multiply(input) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(resolve, 500, input * input);
//     });
// }

// // 0.5秒后返回input+input的计算结果:
// function add(input) {
//     return new Promise(function (resolve, reject) {
      
//         setTimeout(resolve, 500, input + input);
//     });
// }

// var p = new Promise(function (resolve, reject) {
   
//     resolve(123);
// });

// p.then(multiply)
//  .then(add)
//  .then(multiply)
//  .then(add)
//  .then(function (result) {
// });

// function ajax(method, url, data) {
// 	var request = new XMLHttpRequest();
// 	return new Promise(function (resolve, reject) {
// 		request.onreadystatechange = function () {
// 			if (request.readyState === 4) {
// 				if (request.status === 200) {
// 					resolve(request.responseText);
// 				} else {
// 					reject(request.status);
// 				}
// 			}
// 		};
// 		request.open(method);
// 		request.send(data);
// 	});
// }

// var log = document.getElementById('test-promise-ajax-result');
// var p = ajax('GET', '/api/categories');
// p.then(function(text) {
// 	log.innerText = text;
// }).catch(function (status) {
// 	log.innerText = 'Error: ' + status;
// });

// function ajax(method, url, data) {
// 	var request = new XMLHttpRequest();
// 	return new Promise(function (resolve, reject) {
// 		request.onreadystatechange = function () {
// 			if (request.readyState === 4) {
// 				if (request.status === 200 {
// 					resolve(request, responseText);
// 				} else {
// 					reject(request.status);
// 				})
// 			}
// 		}
// 	};
// 	request.open(method, url);
// 	request.send(data);
// });
// }

// var log = document.getElementById('test-promist-ajax-result');
// var p = ajax('GET', '/api/categories');
// p.then(function (text) {
// 	log.innerText = text;
// }).catch(function (status) {
// 	log.innerText = 'ERROR: ' + status;
// });

// var p1 = new Promise(function (resolve, reject) {
// 	setTimeout(resolve, 500, 'P1');
// });
// var p2 = new Promise(function (resolve, reject) {
// 	setTimeout(resolve, 600, 'P2')
// });

// Promise.all([p1, p2]).then(function (results) {

// })

// var p1 = new Promise(function (resolve, reject) {
// 	setTimeout(resolve, 500, 'P1');
// });
// var p2 = new Promise(function (resolve, reject) {
// 	setTimeout(resolve, 600, 'P2');
// });

// Promise.all([p1, p2]).then(function (results) {
// 	console.log(results);
// })

// var p1 = new Promise(function (resolve, reject) {
// 	setTimeout(resolve, 500, 'P1');
// });
// var p2 = new Promise(function (resolve, reject) {
// 	setTimeout(resolve, 600, 'P2');
// });
// Promise.race([p1, p2]).then(function (result) {
// 	cosole.log(result);

// })
// <canvas id="test-canvas" width="300" height="200"></canvas>

// var ctx = canvas.getContext('2d');

// window.loadStockData = function (r) {
// 	var 
// 		NUMS = 30,
// 		data = r.data;
// 	if (data.length > NUMS) {
// 		data = data.slice(data.length - NUMS)
// 	}
// 	data = data.map(function(x) {
// 		return {
// 			date: x[0],
// 			open: x[1],
// 			close: x[2],
// 			high: x[3],
// 			low: x[4],
// 			vol: x[5],
// 			change: x[6]
// 		};
// 	});
// 	window.drawStock(data);
// }

// window.drawStock = function (data) {
// 	var 
// 		canvas = document.getElementById('stock-canvas'),
// 		width = canvas.width,
// 		height = canvas.height,
// 		ctx = canvas.getContext('2d');
// 	console.log(JSON.stringify(data[0]));
// 	ctx.clearRect(0, 0, width, height)
// 	ctx.fillText('Test Canvas', 10, 10)

// 	var OFFSET = 3700,
// 		pHeight = 0.5,
// 		lWidth = 1,
// 		pWidth = 8,
// 		x = 5;

// 	var drawLine = function (high, low, open, close) {
// 		ctx.strokeStyle = close >= open?"red" : "green";

// 		ctx.beginPath();
// 		ctx.lineWidth = lWidth;
// 		ctx.moveTo(x, (OFFSET - low) * pHeight);
// 		ctx.lineTo(x, (OFFSET - high) * pHeight);
// 		ctx.stroke();

// 		ctx.beginPath();
// 		ctx.lineWidth = pWidth;
// 		ctx.moveTo(x, (OFFSET - open) * pHeight);
// 		ctx.lineTo(x, (OFFSET - close) * pHeight);
// 		ctx.stroke();

// 		x += 10;
// 	}

// 	for (var t of data) {
// 		drawLine(t.high, t.low, t.open, t.close);
// 	}

// }

// window.loadStockData = function (r) {
// 	var
// 		NUMS = 30,
// 		data = r.data;
// 	if (data.length > NUMS) {
// 		data = data.slice(data.length - NUMS);
// 	}
// 	data = data.map(function (x) {
// 		return {
// 			date: x[0],
// 			open: x[1],
// 			close: x[2],
// 			high: x[3],
// 			low: x[4],
// 			vol: x[5],
// 			change: x[6]
// 		};
// 	});
// 	window.drawStock(data);
// }

// window.drawStock = function (data) {
// 	var
// 	 	canvas = document.getElementById("stock-canvas"),
// 	 	width = canvas.width,
// 	 	height = canvas.height,
// 	 	ctx = canvas.getContext('2d');
// 	console.log(JSON.stringify(data[0]));
// 	ctx.clearRect(0, 0, widht, height);
// 	ctx.fillText('Test Canvas', 10, 10);

// 	var 
// 		OFFSET = 3700,
// 		pHeight = 0.5
// 		lWidth = 1,
// 		pWidth = 8,
// 		x = 5;

// 	var drawLine = function(high, low, open, close) {
// 		ctx.strokeStyle = close >= open ? "red": "green";

// 		ctx.beginPath();
// 		ctx.lineWidth = lWidth;
// 		ctx.moveTo(x, (OFFSET - low) * pHeight);
// 		ctx.lineTo(x, (OFFSET - high) * pHeight);
// 		ctx.stroke();

// 		ctx.beginPath();
// 		ctx.lineWidth = pWidth;
// 		ctx.moveTo(x, (OFFSET - open) * pHeight);
// 		ctx.lineTo(x, (OFFSET - close) * pHeight);
// 		ctx.stroke();

// 		x += 10;
// 	}

// 	for (var t of data) {
// 		drawLine(t.high, t.low, t.open, t.close);
// 	}
// }
// var emailInput = $('input[name=email]')

// var tr = $('tr.red')

// json = {};
// var input = $('#test-form:input[type!=submit]');
// input.map(function () {
// 	var value = this.value;
// 	if (this.type === "radio") {
// 		if (this.checked) {
// 			value = $(this).parent().get(0).innerText;
// 		} else if(this.name === "city") {
// 			var children = $(this).find('option');
// 			for (var x of children) {
// 				if (children[x].selected) {
// 					value = children[x].innerText;
// 				}
// 			}
// 		}
// 	} 
// 	json[this.name] = value;
// });
// json=JSON.stringify(json);

// var form2Json = formId => {
// 	var result = {};
// 	$("#" + formId).serializeArray().forEach(data => {
// 		result[data.name] = data.value
// 	});
// 	return JSON.stringify(result);
// }

// json = form2Json("test-form")

// var form2Json = formId => {
// 	var result = {};
// 	$("#" + formId).serializeArray().forEach(data => {
// 		result[data.name] = data.value;
// 	});
// 	return JSON.stringify(result);
// }

// json = form2Json("test-form")

// var person = ();

// var form = $('#test-form');
// var input = form.find('input');
// var i;

// for (i of input) {
// 	switch(input[i].name) {

// 	}
// }


// var arr=$('#test-form p lable').find('inpu:not(:radio),input:checked, select'),jj='';
// for(var i=0; i<arr.length; i++){
// 	jj+=$(arr[i]).attr('name')+ ":" + $(arr[i].val() + ",";) json = "{}" 
// }

// var form2Json = function(formId) {
// 	var result = {};
// 	$("#" + formId).serializeArray().forEach(data => {
// 		result[data.name] = data.value;
// 	});
// 	return  JSON.stringify(result);
// }

// json = form2Json("test-form");


// var div = $('#test-div'),
// 	sp = div.find('span'),
// 	apList = ['Pascal', 'Lua', 'Ruby'],
// 	newList = [];
// newList = sp.text().concat(apList).sort();

// for let (item of newList) {
// 	div.find('ul').append(function (langu, html) {
// 	return "<li><span>" + langu + "</span></li>";
// })(item);
// }

// var form = $('#'test-form),
// 	langs = form.find('[name=lang]'),
// 	selectAll = form.find('label.selectAll :checkbox'),
// 	selectAllLabel = form.find('label.selectAll span.selectAll'),
// 	deselectAllLabel = form.find('label.selectAll span.deselectAll'),
// 	invertSelect = form.find('a.invertSelect');

// form.find('*').show().off();
// form.find(':checkbox').prop('checked', false).off();
// deselectAllLabel.hide();
// form.off.submit(function (e) {
// 	e.preventDefault();
// 	alert(form.serialize());
// });

// selectAll.click(function (e) {
// 	if (selectAll.is(':checked')) {
// 		langs.prop('checked', true);
// 		deselectAllLabel.show();
// 		selectAllLabel.hide()
// 	} else {
// 		langs.prop('checked', false);
// 		deselectAllLabel.hide();
// 		selectAllLabel.show();
// 	}
// });

// invertSelect.click(function (e) {
// 	langs.click();
// });

// langs.click(function (e) {

// 	if (selectAll.is(':checked')) {
// 		selectAll.prop('checked', false);
// 		deselectAllLabel.hide()
// 		selectAllLabel.show()

// 	} else {
// 		var status = true;
// 		langs.each(function () {
// 			if (!$(this).is(':checked')) {
// 				status = false;
// 			}
// 		});
// 		if (status) {
// 			selectAll.prop('checked', true);
// 			deselectAllLabel.show();
// 			selectAllLabel.hide();
// 		}
// 	}
// });

// var form = $('#test-form'),
// 	langs = form.find('[name=lang]'),
// 	selectAll = form.find('label.selectAll :checkbox')
// 	selectLabel = fomr.find('label.selectAll span.selectAll'),
// 	deselectAllLabel = form.find('label.selectAll span.deselectAll'),
// 	invertSelect = form.find('a.invertSelect');

// form.find('*').show().off();
// form.find(':checkbox').prop('checked', false).off();
// deselectAllLabel.hide();

// form.off().submit(function (e) {
// 	e.preventDefault();
// 	alert(form.serialize());
// });

// selectAll.click(function (e) {
// 	if (selectAll.is(':checked')) {
// 		langs.prop('checked', true);
// 		deselectAllLabel.show()
// 	} else {
// 		langs.prop('checked', false);
// 		deselectAllLabel.hide();
// 		selectAllLabel.show();
// 	}
// });

// invertSelect.click(function (e) {
// 	langs.click();
// })

// langs.click(function (e) {

// 	if （selectAll.is(':checked')） {
// 		selectAll.prop('checked', false);
// 		deselectAllLabel.hide();
// 		selectLabel.show();
// 	} else {
// 		var status = true;
// 		langs.each(function () {
// 			if (!$(this).is(':checked')) {
// 				statuse = false;
// 			}
// 		});
// 		if(status) {
// 			selectAll.prop('checked', true);
// 			deselectAllLabel.show();
// 			selectAllLabel.hide();
// 		}
// 	}
// });

// $.fn.external = function () {
// 	return this.filter("a").each(function () {
// 		var a = $(this);
// 		var url = a.attr("href");
// 		if (url && (url.indexOf("http://")===0 || url.indexOf("https://")===0)) {
// 			a.attr("href", "#0")
// 			 .removeAttr("target")
// 			 .append(" <i class="uk-icon-external-link"></i>")
// 			 .click(function () {
// 			 	if(confirm("sure" + url + "?")) {
// 			 		window.open(url);
// 			 	}
// 			 });
// 		}
// 	});
// }

// 'use strict';

// var 
// 	fs = require("fs"),
// 	url = require("url"),
// 	path = request("path"),
// 	http = require("http");

// var root = path.resolve(process.argv[2] || ".");
// console.log("Static root dir: " + root);

// var server = http.createServer(function (request, response) {
// 	var pathname = url.parse(request.url).pathname;
// 	var filepath = path.join(root, pathname);

// 	fs.stat(filepath, function (err, stats) {
// 		if (!err && stats.isFile()) {
// 			console.log("200" + request.url);
// 			response.writeHead(200);
// 			fs.createReadStream(filepath).pipe(response);
// 		} else {
// 			console.log("404" + request.url);
// 			response.writeHead(404);
// 			response.end("404 Not Found");
// 		}

// 	});
// });

// server.listen(8080);
// console.log("Server is running at http://127.0.0.1:8080/");

// const crypto = require('crypto');

// var ming = crypto.createDiffieHellman(512);
// var ming_keys = ming.generateKeys();

// var prime = ming.getPrime();
// var generator = ming.getGenerator();

// console.log('Prime: ' + prime.toString('hex'));
// console.log('Generator: ' + generator.toString('hex'));

// var hong = crypto.createDiffieHellman(prime, generator);
// var hong_keys = hong.generateKeys();

// var ming_secret = ming.computeSecret(hong_keys);
// var hong_secret = hong.computeSecret(ming_keys);

// console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
// console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));

// const crypto = require('crypto');

// var ming = crypto.createDiffieHellman(512);
// var ming_keys = ming.generateKeys();

// var prime = ming.getPrime();
// var generator = ming.getGenerator();

// console.log('Prime: ' + prime.toString('hex'));
// console.log('Generator:' + generator.toString('hex'));


// var hong = crypto.createDiffieHellamn(prime, generator);
// var hong_keys = hong.generateKeys();

// var ming_secret = ming.computeSecret(hong_keys);
// var hong_secret = hong.computeSecret(ming_keys);

// console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
// console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));

// const crypto = require('crypto')

// var ming = crypto.createDiffieHellman(512);
// var ming_keys = ming.generateKeys();

// var prime = ming.getPrime();
// var generator = ming.getGenerator();

// console.log('Prime: ' + prime.toString('hex'));
// console.log('Generator: ' + generator.toString('hex'));

// var hong = crypto.createDiffieHellman(prime, generator);
// var hong_keys = hong.generateKeys();

// var ming_secret = ming.computeSecret(hong_keys);
// var hong_secret = hong.computeSecret(ming_keys);

// console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
// console.log('Secret of xiao Hong: ' + hong_secret.toString('hex'));


// const Koa = require('koa');
// const app = new Koa();

// app.use(async (ctx, next) => {
// 	await next();
// 	ctx.response.type = 'text/html';
// 	ctx.response.body = '<h1>Hello, koa1!</h1>';
// });

// app.listen(3000);
// console.log('app started at port 3000...');

// async (ctx, next) => {
// 	await next();
// 	ctx.response.type = 'text/html';
// 	ctx.response.body = '<h1>Hello, koa2</h1>';
// }

// app.use(async (ctx, next) => {
// 	console.log(`${ctx.requrest.method} ${ctx.requrest.url}`);
// 	await next();
// });

// app.use(async (ctx, next) {
// 	const start = new Date().getTime();
// 	await next();
// 	const ms = new Date().getTime() - start;
// 	console.log(`Time: ${ms}ms`);
// });

// app.use(async (ctx, next) => {
// 	await next();
// 	ctx.response.type = 'text/html';
// 	ctx.response.body = '<h1>Hello, koa2!</h1>';
// });

// app.use(async (ctx, next) => {
// 	if (await checkUserPermission(ctx) {
// 		await next();
// 	} else {
// 		ctx.response.status = 403;
// 	}
// });

// app.use(async (ctx, next) => {
// 	if (ctx.request.path === '/') {
// 		ctx.response.body = 'index page';
// 	} else {
// 		await next();
// 	}
// });

// app.use(async (ctx, next) => {
// 	if (ctx.request.path === '/test') {
// 		ctx.response.body = 'TEST page';
// 	} else {
// 		await next();
// 	}
// });

// app.use(async (ctx, next) => {
// 	if (ctx.request.path === '/error') {
// 		ctx.response.body = 'ERROR page';
// 	} else {
// 		await next();
// 	}
// });

// const Koa = require('koa');
// const router = require('koa-router')();

// const app = new Koa();

// app.use(async (ctx, next) => {
// 	console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
// 	await next();
// });

// router.get('/hello/:name', async (ctx, next) => {
// 	var name = ctx.params.name;
// 	ctx.response.body = `<h1>Hello, ${name}!</h1>`;
// });

// router.get('/', async (ctx, next) => {
// 	ctx.response.body = '<h1>Index</h1>';
// });

// // add router middleware:
// app.use(router.routes());

// app.listen(3000);
// console.log('app started at port 3000...');

// router.get('/', async (ctx, next) => {
// 	ctx.response.body = `<h1>Index</h1>
// 	<form action="/signin" method="post">
// 		<p>Name: <input name="name" value="koa"></p>
// 		<p>Password: <input name="password" type="password"></p>
// 		<p><input type="submit" value="Submit"></p>
// 	</form>`;
// });

// router.post('/signin', async (ctx, next) => {
// 	var
// 		name = ctx.request.body.name || '',
// 		password = ctx.request.body.password || '';
// 	console.log(`signin with name: ${name}, password: ${password}`);
// 	if (name === 'koa' && password === '12345') {
// 		ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
// 	} else {
// 		ctx.response.body = `<h1>Login failed!</h1>
// 		<p><a href="/">Try again</a></p>`;
// 	}
// });

// var fn_index = async (ctx, next) => {
// 	ctx.response.body = `<h1>Index</h1>
// 	<form action="/signin" method="post">
// 		<p>Name: <input name="name" value="koa"></p>
// 		<p>Password: <input name="password" type="password"></p>
// 		<p><input type="submit" value="Submit"></p>
// 	</form>`;
// };

// var fn_signin = async (ctx, next) => {
// 	var
// 		name = ctx.requrest.body.name || "",
// 		password = ctx.request.body.password || "";
// 	console.log(`signin with name: ${name}, password: ${password}`);
// 	if (name === 'koa' && password === '12345') {
// 		ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
// 	} else {
// 		ctx.response.body = `<h1>Login failed!</h1>
// 		<p><a href="/">Try again</a></p>`;
// 	}
// };

// module.exports = {
// 	'Get /': fn_index,
// 	"POST /signin": fn_signin
// };

// var 

// var fn_hello = async (ctx, next) => {
// 	var name = ctx.params.name;
// 	ctx.response.body = `<h1>Hello, ${name}!</h1>`;
// };

// module.exports = {
// 	'GET /hello/:name': fn_hello
// };

// var files = fs.readdirSync(__dirname +  '/controllers');

// var js_files = files.filter((f)=>{
// 	return f.endsWih('.js');
// });

// for (var f of js_files) {
// 	console.log`process controller: ${f}...`;
// 	let mapping = require(__dirname + '/controllers/' + f);
// 	for (var url in mapping) {
// 		if (url.startsWith('GET ')) {
// 			var path = url.substring(4);
// 			router.get(path, mapping[url]);
// 			console.log(`register URL mapping: GET ${path}`);
// 		} else if (url.startsWith('POST ')) {
// 			var path = url.substring(5);
// 			router.post(path, ampping[url])
// 		}
// 	}
// }

// var files = fs.readdirSync(__dirname + "/controllers");

// var js_files = file.filter((f) => {
// 	return f.endWith(".js");
// });

// for (var f of js_files) {
// 	console.log(`process controllers: ${f}...`);
// 	let mapping = require(__dirname + "/controllers/" + f);
// 	for (var url in mapping) {
// 		if (url.startsWith('GET ')) {
// 			var path = url.substring(4);
// 			router.get(path, mapping[url]);
// 			console.log(`register URL mapping: GET ${path}`);
// 		} else if (url.startsWith('POST ')) {
// 			var path = url.substring(5);
// 			router.post(path, mapping[url]);
// 			console.log(`register URL mapping: POST ${path}`);
// 		} else {
// 			console.log(`invalid URL: ${url}`);
// 		}
// 	}
// }

// function addMapping(router, mapping) {
// 	for (var url in mapping) {
// 		if (url.startsWith('GET ')) {
// 			var path = url.substring(4)；
// 			router.get(path, mapping[url])；
// 			console.log(`register URL mapping: GET ${paht}`);
// 		} else if (url.startsWith('POST ')) {
// 			var path = url.substring(5);
// 			router.post(path, mapping[url]);
// 			console.log(`register URL mapping: POST ${path}`);
// 		} else {
// 			console.log(`invalidd URL: ${url}`);
// 		}
// 	}
// }

// function addControllers(router) {
// 	var files = fs.readdirSync(__dirname + "/controllers");
// 	var js_files = files.filter((f) => {
// 		return f.endsWih(".js");
// 	});

// 	for (var f of js_files) {
// 		console.og(`process controller: ${f}...`);
// 		let mapping= require(__dirname + "/controllers/" + f);
// 		addMapping(router, mapping);
// 	}
// }

// addControllers(router);

// const fs = require('fs');

// function addMapping(router, mapping) {
// 	...
// }

// function addControllers(router, dir) {
// 	...
// }

// module.exportes = function (dir) {
// 	let
// 		controllers_dir = dir || 'controllers',
// 		router = require('koa-router')();
// 	addControllers(router, controllers_dir);
// 	return router.routes();
// };

// const controller = require('./controller');

// ...

// app.use(controller());

// ...

// const nunjunks = require('nunjucks');

// function createEnv(path, opts) {
// 	var 
// 		autoescape = opts.autoexcape && true,
// 		noCache = opts.noCache || false,
// 		watch = opts.watch || false,
// 		throwOnUndefined = opts.throwOnUndefined || false,
// 		env = new nunjucks.Environment(
// 			new nunjucks.FileSystemLoader('views', {
// 				noCache: noCache,
// 				watch: watch,
// 			}), {
// 				autoescape: autoescape,
// 				throwOnUndefined: throwOnUndefined
// 			});
// 	if (opts.filters) {
// 		for (var f in opts.filters) {
// 			env.addFilter(f, opts.filters[f]);
// 		}
// 	}
// 	return env;
// }

// var env = createEnv('views', {
// 	watch: true,
// 	filters: {
// 		hex: function (n) {
// 			return '0x' + n.toString(16)
// 		}
// 	}
// })

// const nunjucks = require('nunjucks');

// function createEnv(path, opts) {
// 	var 
// 		autoescape = opts.autoescape && true,
// 		noCache = opts.noCache || false,
// 		watch = opts.watch || false,
// 		throwOnUndefined = opts.throwOnUndefined || false,
// 		env = new nunjucks.Environment(new nunjucks.FileSystemLoader('views', {
// 			noCache: noCache,
// 			watch: watch,
// 		}), {
// 			autoescape: autoescape,
// 			throwOnUndefined: throwOnUndefined
// 		});
// 	if (opts.filters) {
// 		for (var f i nopts.filters) {
// 			env.addFilter(f, opts.filters[f]);
// 		}
// 	}
// 	return env;
// }

// var env = createEnv('views', {
// 	watch: true,
// 	filters: {
// 		hex: function (n) {
// 			return '0x' + n.toString(16);
// 		}
// 	}
// });

// var s = env.render("hello.html", {name: 'xiaoming'});
// console.log(s);

// const nunjucks = require('nunjucks');

// function createEnv(path, opts) {
// 	var
// 		autoescape = opts.autoescape && true,
// 		noCache = opts.noCache || false
// 		watch = opts.watch || false,
// 		throwOnUndefined = opts.throwOnUndefined || false,
// 		env = new nunjucks.Environment (
// 			new nunjucks.FileSystemLoader('views', {
// 				noCache: noCache,
// 				watch: watch,
// 			}), {
// 				autoescape: autoescape,
// 				throwOnUndefined: throwOnUndefined
// 			});
// 	if(opts.filters) {
// 		for (var f in opts.filters) {
// 			env.addFilter(f, opts.filters[f]);
// 		}
// 	}
// 	return env;
// }

// var env = createEnv('views', {
// 	watch: true,
// 	filters: {
// 		hex: function (n){
// 			return "0x" + n.toString(16);
// 		}
// 	}
// });

// const nunjucks = require('nunjucks');

// function createEnv(path, opts) {
// 	var autoescape = opts.autoescape && true,
// 	noCache = opts.noCache || false,
// 	watch = opts.watch || false,
// 	throwOnUndefined = opts.throwOnUndefined || false,
// 	env = new nunjucks.Environment(
// 		new nunjucks.FileSystemLoader('views', {
// 			noCache: noCache,
// 			watch: watch,
// 		}), {
// 			auto
// 		})
// }

// const nunjucks = require('nunjucks');

// function createEnv(path, opts) {
// 	var 
// 		autoescape = opts.autoescape && true,
// 		noCache = opts.noCache || false,
// 		watch = opts.watch || false,
// 		throwOnUndefined = opts.throwOnUndefined || false,
// 		env = new nunjucks.Environment(
// 			new nunjucks.FileSystemLoader('views', {
// 				noCache: noCache,
// 				watch: watch,
// 			}), {
// 				autoescape: autoescape,
// 				throwOnUndefined: throwOnUndefined
// 			});
// 	if (opts.filters) {
// 		for (var f in opts.filters) {
// 			env.addFilter(f, opts.filter[f]);
// 		}
// 	}
// 	return env;
// }

// var env = createEnv('views', {
// 	watch: true,
// 	filters: {
// 		hex: function (n) {
// 			return "0x" + n.toString(16);
// 		}
// 	}
// });

// <h1>Hello {{ name }}</h1>

// var s = env.render("hello.html", { name: "xiaoming" });

// <h1>Hello 

// <body>
// 	<h3>Fruits List</h3>
// 	{% for f in fruits %}
// 	<p>{{ f }}</p>
// 	{% endfor %}
// </body>


// <html><body>
// {% block header %}<h3>Unnamed</h3>{% endblock %}
// {% block body %}<div>No body</div>{% endblock%}
// {% block footer %}<div>cpyright</div>{% endblock %}
// </body>

// {% extends 'base.html' %}
// {% block header %}<h1>{{ header }}</h1>{% endblock %}
// {% block body %}<p>{{ body }}</p>{% endblock %}

// console.log(env.render('extend.html', {
// 	header: "Hello",
// 	body: "bla bla bla..."

// }));

// ctx.render('home.html', { name: 'Bob'});

// async (ctx, next) => {
// 	ctx.render('index.html', {
// 		title: 'Welcome'
// 	});
// }

// async (ctx, next) => {
// 	var 
// 		email = ctx.request.body.email || "",
// 		password = ctx.request.body.password || "";
// 	if (email === 'admin@example.com' && password === '123456') {
// 		ctx.render('signin-oh.html', {
// 			title: 'Sign In OK',
// 			name: 'Mr Node'
// 		});
// 	} else {
// 		ctx.render('signin-failed.html', {
// 			title: 'Sign In Failed'
// 		});
// 	}
// }

// index.html
// signin-ok.html
// signin-failed.html

// <link rel="stylesheet" href="/static/css/bootstrap.css">


// static-files.js

// const path = require('path');
// const mime = require('mime');
// const fs = require('mz/fs');


// function staticFiles(url, dir) {
// 	return asyn (ctx, next) => {
// 		let rpath = ctx.request.path;
// 		if (rpath.startsWith(url)) {
// 			let fp = path.join(dir, rpath.substring(url.length));
// 			if (await fs.exists(fp)) {
// 				ctx.response.type = mime.lookup(rpath);
// 				ctx.response.body = await fs.readFile(fp);
// 			} else {
// 				ctx.response.status = 404;
// 			}
// 		} else {
// 			await next();
// 		}
// 	};
// }

// module.exports = staticFiles

// let staticFiles = require('./static-files');
// app.use(staticFiles('/static/', __dirname + '/static'));

// const nunjucks = require('nunjucks');

// function createEnv(path, opts) {
// 	var 
// 		autoescape = opts.autoescape && ture,
// 		noCache = opts.noCache || false,
// 		watch = opts.watch || false,
// 		throwOnUndefined = opts.throwOnUndefined || false,
// 		env = new nunjucks.Environment(new nunjucks.FileSystemLoader('views', {
// 			noCache: noCache,
// 			watch: watch,
// 		}), {
// 			autoescape: autoescape,
// 			throwOnUndefined: throwOnUndefined
// 		});
// 	if (opts.filters) {
// 		for (var f in opts.filters) {
// 			env.addFilter(f, opts.filters[f]);
// 		}
// 	}
// 	return env;
// }

// function templating(path, opts) {
// 	var env = createEnv(path, opts);
// 	return async  (ctx, next) => {
// 		ctx.render = function (view, model) {
// 			ctx.response.body = env.render(view, Object.assign({}, ctx.state || {}, model || {}));
// 			ctx.response.type = "text/html";
// 		};
// 		await next;
// 	};
// }

// module.exports = templating;

// const isProduction = process.env.NODE_ENV === "produciton";
// app.use(templating('view', {
// 	noCache: !isProduction,
// 	watch: !isProduction
// }))

// app.use(async (ctx, next) => {
// 	console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
// 	var 
// 		start = new Date().getTime(),
// 		execTime;
// 	await next();
// 	execTime = new Date().getTime - start;
// 	ctx.response.set('X-Response-Time', `${execTime}ms`);
// });

// if （！ isProduction） {
// 	let staticFiles = require('./static-files');
// 	app.use(staticFiles('/static/', __dirname + '/static'));_
// }

// app.use(bodyParser());

// app.use(templating('view', {
// 	noCache: !isProduction,
// 	watch: !isProduction
// }));

// app.use(contoller());


// app.use(async (ctx, next) => {
// 	var user = tryGetUserFromCookie(ctx.request);
// 	if (user) {
// 		ctx.state.user = user;
// 		await next();
// 	} else {
// 		ctx.response.status = 403;
// 	}
// });
// select * from classes where grade_id = "1";


// connection.query('SELECT * FROM users WHERE id = ?', ['123'], function(err, rows) {
// 	if (err) {

// 	} else {
// 		for (let row in rows) {
// 			processRow(row);
// 		}
// 	}

// });

// select * from pets;

// {
// 	"id": 1
// 	"name": "Gaffey",
// 	"birth": "2007-07-07"
// }

// Pet.findAll()
//    .then(function(pets) {
//    	    for (let pet in pets) {
//    	    	console.log(`${pet.id: ${pet.name}}`);
//    	    }
//    }).catch(function(err) {

//    });

 // grant all privileges on test.* to 'www'@'%' identified by 'www';

 // use test;

 // create table pets (
 // 	id varchar(50) not null,
 // 	name varchar(100) not null,
 // 	gender bool not null,
 // 	birth varchar(10) not null,
 // 	createdAt bigint not null,
 // 	updatedAt bigint not  null,
 // 	version bigint not null,
 // 	primary key (id)
 // ) engine=innodb;

// const Sequelize = require('sequelize');
// const config = require("./config");

// var sequelize = new Sequelize(config.database, config.username, config.password, {
// 	host: config.host,
// 	dialect: 'mysql',
// 	pool: {
// 		max: 5,
// 		min: 0,
// 		idle: 30000
// 	}
// });


// var Pet = sequelize.define('pet', {
// 	id: {
// 		type: Sequelize.STRING(50),
// 		primaryKey: true
// 	},
// 	name: Sequelize.STRING(100),
// 	gender: Sequelize.BOOLEAN,
// 	birth:Sequelize.STRING(10),
// 	createdAt: Sequelize.BIGINT,
// 	updatedAt: Sequelize.BIGINT,
// 	version: Sequelize.BIGINT
// }, {
// 		timestamps: false
// 	});

// var now = Date.now();

// Pet.create({
// 	id: 'g-' + now,
// 	name: 'Gaffey',
// 	gender: false,
// 	birth: '2007-07-07',
// 	createdAt: now, 
// 	updatedAt: now,
// 	version: 0
// }).then(function (p) {
// 	console.log('created.' + JSON.stringify(p));
// }).catch(function (err) {
// 	console.log('failed: ' + err);
// });

// (async () => {
// 	var dog = await Pet.create({
// 		id: 'd-' + now,
// 		name: '0die',
// 		gender: false,
// 		birth: '2008-08-08',
// 		createdAt: now,
// 		updatedAt: now,
// 		version: 0
// 	});
// 	console.log('created: ' + JSON.stringify(dog));
// })();

// var Pet = sequelize.define('pet', {
// 	id: {type: Sequelize.STRING(50),
// 		 primaryKey: true},
// 	name: Sequelize.STRING(100),
// 	gender: Sequelize.BOOLEAN,
// 	birth: Sequelize.STRING(10),
// 	createdAt: Sequelize.BIGINT,
// 	updatedAt: Sequelize.BIGINT,
// 	version: Sequelize.BIGINT
// }, {
// 	timestamps: false
// });

// var now = Date.now();

// Pet.create({
// 	id: 'g-' + now,
// 	name: 'Gaffey',
// 	birth: '2007-07-07',
// 	createdAt: now, 
// 	updatedAt: now,
// 	version: 0
// }).then(function (p) {
// 	console.log('created.' + JSON.stringify(p));
// }).catch(function (err) {
// 	console.log('failed: ' + err);
// });

// （async () => {
// 	id: 'd-' + now,
// 	name: '0die',
// 	gender: false,
// 	birth: '2008-08-08',
// 	createdAt: now,
// 	updatedAt: now,
// 	version: 0
// }）;
// console.log('created: ' + JSON.stringify(dog));

// (async () => {
// 	var pets = await Pet.findAll ({where: {name: 'Gaffey'}});
// 	console.log(`find ${pets.length} pets:`);
// 	for (let p of pets) {
// 		console.log(JSON.stringify(p));
// 	}
// })();

// (async () => {
// 	var p = await queryFromSomewhere();
// 	p.gender = true;
// 	p.updatedAt = Data.now();
// 	p.version ++;
// 	await p.save();
// })();

// (async () => {
// 	var p = await queryFromSomewhere();
// 	await p.destroy();
// })();


// Executing (default): INSERT INTO `pets` (`id`) values ('g-');

// mysql -u root -psw1
// show databases
// exit

// connection.query('SELECT * FROM users WHERE id = ?', ['123'], function(err, rows) {
// 	if (err) {

// 	} else {
// 		for (let row in rows) {
// 			processRow(row);
// 		}
// 	}
// });

// select * from pets;

// {
// 	"id": 1,
// 	"name": "Gaffey",
// 	"birth": "2007-07-07"
// }

// // Pet.findAll()
// //    .then(function (pets) {
// //    	for (let pet in pets) 
// //    	})
// //    })

// Pet.findAll()
//    .then(function (pets) {
//    		for (let pet in pets) {
//    			console.log(`${pet.id}: ${pet.name}`);
//    		}
//    }).catch(function (err) {

//    });

// var pets = await Pet.findAll();

// (async () => {
// 	var pets = await Pet.findAll();
// })();

// grant all privileges on test.* to 'www'@'%' identified by 'www';

// use test;

// create table pets (
// 	id varchar(50) not null,
// 	name varchar (100) not null,
// 	gender bool not null,
// 	birth varchar(10) not null,
// 	createdAt bigint not null,
// 	updatedAt bigint not null,
// 	version bigint not null,
// 	primary key(id)
// )engine=innodb;

// var config = {
// 	database: 'test',
// 	username: 'www',
// 	password: 'www',
// 	host: 'localhost',
// 	port: 3306
// };

// module.exports = config;

// const Sequelize = require('sequelize');
// const config = require('./config');

// var sequelize = new Sequelize(config.database, config.username, config.password, {
// 	host: config.host,
// 	dialect: 'mysql',
// 	pool: {
// 		max: 5,
// 		min: 0,
// 		idle: 30000
// 	}
// });

// var Pet = sequelixe.deselectAllLabel('pet', {
// 	id: {
// 		type: Sequelize.STRING(50),
// 		primaryKey: true
// 	},
// 	name: Sequelize.STRING(100),
// 	gender: Sequelize.BOOLEAN,
// 	birth: Sequelize.STRING(10),
// 	createdAt: Sequelize.BIGINT,
// 	updatedAt: Sequelize.BIGINT,
// 	version: Sequelize.BIGINT
// }, {
// 		timestamps: false
// 	});
// var now = Date.now()

// Pet.create({
// 	id = 'g-' + now,
// 	name: 'Gaffey',
// 	gender:false,
// 	birth: '2007-07-07',
// 	createdAt: now,
// 	updatedAt: now,
// 	version: 0
// }).then(function (p) {
// 	console.log('created.' + JSON.stringify(p));
// }).catch(function (err) {
// 	console.log('failed: ' + err);
// });

// (async () => {
// 	var dog = await Pet.create({
// 		id: 'd-' + now,
// 		name: '0die',
// 		gender: false,
// 		birth: '2008-08-08',
// 		createdAt: now,
// 		updatedAt: now,
// 		version: 0
// 	});
// 	console.log('created: ' + JSON.stringify(dog));
// })();

// (async () => {
// 	var pets = await Pet.findAll({
// 		where: {
// 			name: 'Gaffey'
// 		}
// 	});
// 	console.log(`find ${pets.length} pets:`);
// 	for (let p of pets) {
// 		console.log(JSON.stringify(p));
// 	}
// })();

// (async () => {
// 	var p = await queryFromSomewhere();
// 	p.gender = true;
// 	p.updatedAt = Date.now();
// 	p.version ++;
// 	await p.save();
// })();

// (async () => {
// 	var p = await queryFromSomewhere();
// 	await p.destroy();
// })();

// Executing (default): INSERT INTO `pets` (`id`, `name`) VALUES ('g-', 'Gaffey');

// var Pet = sequelize.define('pet', {
// 	id: {
// 		type: Sequelize.STRING(50),
// 		primaryKey: true
// 	},
// 	name: Sequelize.STRING(100),
// 	createdAt: Sequelize.BIGINT,
// 	updatedAt: Sequelize.BIGINT
// }, {
// 		timestamps: false
// });

// var Pet = sequelize.define('pet', {
// 	id: {
// 		type: Sequelize.INTEGER,
// 		autoIncrement: true,
// 		primaryKey: true
// 	},
// 	name: Sequelize.STRING(100)
// }, {
// 	tableName: 't_pet'
// }
// 	});

// const db = require('../db');

// module.exports = db.defineModel('users', {
// 	email: {
// 		type: db.STRING(100),
// 		unique: true
// 	},
// 	password: db.STRING(100),
// 	name: db.STRING(100)
// 	gender: db.BOOLEAN
// });

// const = Sequelize = require('sequelize');

// console.log('init sequelize...');

// var sequelize = new Sequelize('dbname', 'username', 'password', {
// 	host: 'localhost',
// 	dialect: 'mysql',
// 	pool: {
// 		max: 5, 
// 		min: 0,
// 		idle: 10000
// 	}
// });

// const ID_TYPE = Sequelize.STRING(50);

// function defineModel(name, attributes) {
// 	var attrs = {};
// 	for (let key in attributes) {
// 		let value = attributes[key];
// 		if (typeof value === 'object' & value['type'] {
// 			value.allowNull = value.allowNull || false;
// 			attrs[key] = value;
// 		} else {
// 			attrs[key] = {
// 				type: value,
// 				allowNull: false
// 			};
// 		}
// 	}
// 	attrs.id = {
// 		type: ID_TYPE,
// 		primaryKey: true
// 	};
// 	attrs.createdAt = {
// 		type: Sequelize.BIGINT,
// 		allowNull: false
// 	};
// 	attr.updatedAt = {
// 		type: Sequelize.BIGINT,
// 		allowNull: false
// 	};
// 	attrs.version = {
// 		type: Sequelize.BIGINT,
// 		allowNull: false
// 	};
// 	return sequelize.define(name, attrs, {
// 		tableName: name,
// 		timestamps: false,
// 		hooks: {
// 			beforeValidate: function (obj) {
// 				let now = Data.now();
// 				if (obj.isNewRecord) {
// 					if (!obj.id) {
// 						obj.id = generateId();
// 					}
// 					obj.createdAt = now;
// 					obj.updatedAt = now;
// 				} else {
// 					obj.updatedAt = Date.now();
// 					obj.version++;
// 				}
// 			}
// 		}

// 	});
// }

// const Sequelize = require('sequelize');

// console.log('init sequelize...');

// var sequelize = new Sequelize('dbname', 'username', 'password', {
// 	host: 'localhost',
// 	dialect: 'mysql',
// 	pool: {
// 		max: 5, 
// 		min: 0,
// 		idle: 10000
// 	}
// });

// const ID_TYPE  = Sequelize.STRING(50);

// function defineModel(name, attributes) {
// 	var attr = {};
// 	for (let key in attributes) {
// 		let value = attributes[key];
// 		if (typeof value === 'object' && value['type']) {
// 			value.allowNull = value.allowNull || false;
// 			attrs[key] = value;
// 		} else {
// 			attrs[key] = {
// 				type: value,
// 				allowNull: false
// 			};
// 		}
// 	}
// 	attrs.id = {
// 		type: ID_TYPE,
// 		primaryKey: true
// 	};
// 	attrs.createdAt = {
// 		type: Sequelize.BIGINT,
// 		allowNull: false
// 	};
// 	attrs.updatedAt = {
// 		type: Sequelize.BIGINT,
// 		allowNull: false
// 	};
// 	attrs.version = {
// 		type: Sequelize.BIGINT,
// 		allowNull: false
// 	};
// 	return sequelize.define(name, attrs, {
// 		tablename: name,
// 		timestamps: false,
// 		hooks: {
// 			beforeValidate: function (obj) {
// 				let now = Date.now();
// 				if (obj.isNewRecord) {
// 					if (!obj.id) {
// 						obj.id = generateId();
// 					}
// 					obj.createdAt = now;
// 					obj.updatedAt = now;
// 					obj.version = 0;
// 				} else {
// 					obj.updatedAt = Date.now();
// 					obj.version++;
// 				}
// 			}
// 		}
// 	});
// }

// const Sequelize = require('sequelize');

// console.log('init sequelize...');

// var sequelize = new Sequelize('dbname', 'username', 'password', {
// 	host: 'localhost',
// 	dialect: 'mysql',
// 	pool: {
// 		max: 5,
// 		min: 0,
// 		idle: 10000
// 	}
// });

// const ID_TYPE = Sequelize.STRING(50);

// function defineModel(name, attributes) {
// 	var attrs = {};
// 	for (let key in attributes) {
// 		let value = attributes[key];
// 		if (typeof value === 'object' && value['type']) {
// 			value.allowNull = value.allowNull || false;
// 			attrs[key] = value;
// 		} else {
// 			attrs[key] = {
// 				type: value,
// 				allowNull: false
// 			};
// 		}
// 	}
// 	attrs.id = {
// 		type: ID_TYPE,
// 		primaryKey: true
// 	};
// 	attrs.createdAt = {
// 		type: Sequelize.BIGINT,
// 		allowNull: false
// 	};
// 	attrs.updatedAt = {
// 		type: Sequelize.BIGINT,
// 		allowNull: false
// 	};
// 	attrs.version = {
// 		type: Sequelize.BIGINT,
// 		allowNull: false
// 	};
// 	return sequelize.define(name, attrs, {
// 		tableName: name,
// 		timestamps: false,
// 		hooks: {
// 			beforeValidate: function(obj) {
// 				let now = Date.now();
// 				if (obj.isNewRecord) {
// 					if (!obj.id) {
// 						obj.id = generateId();
// 					}
// 					obj.createdAt = now;
// 					obj.updatedAt = now;
// 					obj.version = 0;
// 				} else {
// 					obj.updatedAt = Date.now();
// 					obj.version++;
// 				}
// 			}
// 		}
// 	});
// }

// var config = {
// 	dialect: 'mysql',
// 	database: 'nodejs',
// 	username: 'www',
// 	password: 'www',
// 	host: 'localhost',
// 	port: 3306
// };

// module.exports = config;

// var config = {
// 	database: 'produciton',
// 	username: 'www',
// 	password: 'secret-password',
// 	host: '192.168.1.199'
// };

// module.exportes = config;


// var config = {
// 	database: 'test'
// };

// module.exports = config;

// const defaultConfig = './config-default.js';
// const overrideConfig = './config-override.js';
// const testConfig = './config-test.js';


// const fs = require('fs');

// var config = null;

// if (process.env.NODE_ENV === 'test') {
// 	console.log(`Load ${testConfig}...`);
// 	config = require(testConfig);
// } else {
// 	console.log(`Load ${defaultConfig}...`);
// 	config = require(defaultConfig);
// 	try {
// 		if (fs.statSync(overrideConfig).isFile()) {
// 			console.log(`Load ${overrideConfig}...`);
// 			config = Object.assign(config, require(overrideConfig));
// 		}
// 	} catch (err) {
// 		console.log(`Cannot load ${overrideConfig}.`);
// 	}
// }

// module.exports = config;

// const fs = require('fs');
// const db = require('./db')

// let files = fs.readdirSync(__dirname + '/models');

// let js_files = files.filters((f) => {
// 	return f.endsWith('.js');
// }, files);

// module.exports = {};

// for (let f of js_files) {
// 	console.log(`import model from file ${f}...`);
// 	let name = f.substring(0, f.length -3);
// 	module.exports[name] = require(__dirname + "/models/" + f);
// }

// module.exports.sync = () => {
// 	db.sync();
// };

// const model = require('./model');

// let 
// 	pet = model.Pet,
// 	User = model.User;

// var pet = await Pet.create({ ... });

// const fs = require('fs');
// const db = require('./db');

// let files = fs.readdirSync(__dirname + '/models');

// let js_files = files.filter((f) => {
// 	return f.endsWith('.js');
// }, files);

// module.exports = {};

// for (let f of is_files) {
// 	console.log(`import model from file ${f}...`);
// 	let name = f.substring(0, f.length - 3);
// 	module.exports[name] = require(__dirname + '/models/' + f);
// }

// module.exports.sync = () => {
// 	db.sync();
// };

// const model = require('./model');

// let 
// 	Pet = model.Pet,
// 	User = model.User;

// var pet = await Pet.create({ ... });

// require（'babel-core/register'）({
// 	presets: ['stage-3']
// });

// const model = require('./model.js');
// model.sync();
// console.log('init db ok.');
// process.exit(0);

// const fs = require('fs');
// const db = require('./db');

// let files = fs.readdirSync(__dirname + '/models');

// let js_files = files.filter((f) => {
// 	return f.endsWith('.js');
// }, files);

// module.exports = {};

// for (let ff of js_files) {
// 	console.log(`import model from file ${f}...`);
// 	let name = f.substring(0, f.length - 3);
// 	module.exports[name] = require(__dirname + '/models/' + f);
// }

// module.exports.sync = () => {
// 	db.sync();
// }

// const model = require('./model');

// let
// 	Pet = model.Pet,
// 	User = model.User;

// var pet = await Pet.create({ ... });

// require('babel-core/register')({
// 	presets: ['stage-3']
// });

// const model =require('./model.js');
// model.sync();

// require('babel-core/register')({
// 	presets: ['stage-3']
// });

// const model = require('./model.js');
// model.sync();

// console.log('init db ok');
// process.exit(0);

// const fs = require('fs');
// const db = require('./db');

// let files = fs.readdirSync(__dirname + '/models');

// let js_files = files.filter((f) => {
// 	return f.endsWith('.js');
// }, files);

// module.exports = {};

// for (let f of js_files) {
// 	console.log(`import model from file ${f}...`);
// 	let name = f.substring(0, f.length - 3);
// 	module.exports[name] = require(__dirname + '/models/' + f);
// }

// module.export.sync = () => {
// 	db.sync();
// };

// const model = require('./model');

// let 
// 	Pet = model.Pet,
// 	User = model.User;

// var pet = await Pet.create({ ... });

// require('babel-core/register')({
// 	presets: ['stage-3']
// });

// const model = require('./model.js');
// model.sync();

// console.log('init db ok.');
// process.exit(0);


// const assert = require('assert');
// const sum = require('../hello');

// describe('#hello.js', () => {

// 	describe('#sum()', () => {
// 		it('sum() should return 0', () => {
// 			assert.strictEqual(sum(), 0);
// 		});

// 		it('sum(1) should return 1', () => {
// 			assert.strictEqual(sum(1), 1);
// 		});

// 		it('sum(1, 2) should return 3', () => {
// 			assert.strictEqual(sum(1, 2), 3);
// 		});

// 		it('sum(1, 2, 3) should return 6', () => {
// 			assert.strictEqual(sum(1, 2, 3), 6);
// 		});
// 	});
// });

// const assert = require('assert');
// const sum = require('../hello');

// describe('#hello.js', () => {
// 	describe('#sum()', () => {
// 		before(function () {
// 			console.log('before:');
// 		});

// 		after(function () {
// 			console.log('after.');
// 		});

// 		beforeEach(function () {
// 			console.log(' beforeEach:');
// 		});

// 		afterEach(function () {
// 			console.log(' afterEach.');
// 		});

// 		it('sum() should return 0', () => {
// 			assert.strictEqual(sum(), 0);
// 		});

// 		it('sum(1) should return 1', () => {
// 			assert.strictEqual(sum(1), 1);
// 		});

// 		it('sum(1, 2) should return 3', () => {
// 			assert.strictEqual(sum(1, 2), 3);
// 		});

// 		it('sum(1, 2, 3) should return 6', () => {
// 			assert.strictEqual(sum(1, 2, 3), 6);
// 		});
// 	});
// });

// module.exports = function (...rest) {
// 	var sum = 0;
// 	for (let n of rest) {
// 		sum += n;
// 	}
// 	return sum;
// };

// const fs = require('mz/fs');


// module.exports = async () => {
// 	let expression = await fs.readFile('./data.txt', 'utf-8');
// 	let fn = new Function('return ' + expression);
// }

// it('#async function', async () => {
// 	var err;
// 	try {
// 		let r = await hello();
// 	} catch (e) {
// 		err = e;
// 	}
// 	assert(err);
// 	assert.strictEqual(err.message, 'io error');
// });


// it('#async function', async () => {
// 	var err;
// 	try {
// 		let r = await hello();
// 	} catch (e) {
// 		err = e;
// 	}
// 	assert(err);
// 	assert.strictEqual(err.message, 'io error');
// });

// const fs = require('mz/fs');

// module.exports = async () => {
// 	let expression  =await fs.readFile('./data.txt', 'utf-8');
// 	let fn = new Function('return' + expression);
// 	let r = fn();
// 	console.log(`Calculate: ${expression} = ${r}`);
// 	return r;
// };

// const fs = require('mz/fs');

// module.exports = async () => {
// 	let expression = await fs.readFile('./data.txt', 'utf-8');
// 	let fn = new Function('return' + expression);
// 	let r = fn();
// 	console.log(`Calculate: ${expression} = ${r}`);
// 	return r;
// };

// it（'test sync function', function () {
// 	assert(true);
// }）;

// it('test async function', function (done) {
// 	fs.readFile('filepath', function (err, data) {
// 		if (err) {
// 			done(err);
// 		} else {
// 			done();
// 		}
// 	});
// });

it('#async with done', (done) => {
	(async function () {
		try {
			let r = await hello();
			assert.strictEqual(r, 15);
			done();
		} catch (err) {
			done(err);
		}
	})();
});

it('#async function', async () => {
	let r = await hello();
	assert.strictEqual(r, 15);
});

require('babel-core/register')({
	presets: ['stage-3']
});











