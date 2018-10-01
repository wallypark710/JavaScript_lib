var http = require('http');

var options = {
	host: '127.0.0.1',
	path: '/',
	port: '3000',
	method: 'POST'
};

function readJSONResponse( response ){
	var responseData = '';

	response.on('data', function(chunk){
		responseData += chunk;
	});

	response.on('end', function(){
		var dataObj = responseData;
		console.log(response.statusCode);
	});
}

var req = http.request(options, readJSONResponse);
req.write('{ keyword : \'Ailbo\' }');
req.end();
