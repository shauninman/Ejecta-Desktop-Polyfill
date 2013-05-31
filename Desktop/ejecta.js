// An Ejecta polyfill for developing in desktop Safari
var ejecta = 
{
	landscapeMode : canvas.width > canvas.height,
	include : function(src)
	{
		// includes are pre-parsed, inserted, and eval'd below
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

// extra-dirty JavaScript includes
var included = [];
function parseEjectaIncludes(src)
{
	if (included[src]) return '';
	included[src] = true;
	
	var request = new XMLHttpRequest();
	request.open('GET', src, false); // synchronous
	request.send();
	
	var js = request.responseText;
	
	var m = js.match(/ejecta\.include\(([^\)]+)\);/g);
	if (m!=null)
	{
		for (var i=0; i<m.length; i++)
		{
			var n = m[i].match(/(['"])([^'"]+)/);
			if (n != null)
			{
				js = js.replace(m[i], parseEjectaIncludes(n[2]));
			}
		}
	}
	return js;
}
eval(parseEjectaIncludes('index.js'));