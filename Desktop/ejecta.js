// An Ejecta polyfill for developing in desktop Safari
var ejecta = 
{
	include : function(src)
	{
		var request = new XMLHttpRequest();
		
		request.open('GET', src, false);
		request.send();
		eval(request.responseText + "\n //@ sourceURL=" + src);
	},
	openURL : function(url, message)
	{
		if (window.confirm('Open in Browser? '+message)) window.open(url);
	},
	getText : function(title, message, callback)
	{
		callback(window.prompt(message));
	}
};
window.requestAnimationFrame = window.webkitRequestAnimationFrame;

// use `if (window.Ejecta) console.log('native');` to block native features like GameCenter

ejecta.include('index.js');
