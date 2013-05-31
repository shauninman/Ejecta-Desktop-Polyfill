// An Ejecta polyfill for developing in desktop Safari
var ejecta = 
{
	include : function(src)
	{
		var request = new XMLHttpRequest();
		
		request.open('GET', src, false);
		request.send();
		eval.call(window, request.responseText + "\n //@ sourceURL=" + src);
	},
	openURL : function(url, message)
	{
		if (window.confirm('Open in Browser? '+message)) window.open(url);
	},
	getText : function(title, message, callback)
	{
		callback(window.prompt(message));
	},
	loadFont: function(file)
	{
		var name = file.replace(/^.*\/|\.[^\.]*$/g,'');
		var newStyle = document.createElement('style');
		newStyle.appendChild(document.createTextNode(
			"@font-face {\n" +
				"font-family: '" + name + "';\n" +
				"src: url('" + file + "');\n" +
			"}"
		));
		
		document.head.appendChild(newStyle);
	}
};
window.requestAnimationFrame = window.webkitRequestAnimationFrame;

// use `if (window.Ejecta) console.log('native');` to block native features like GameCenter

ejecta.include('index.js');
