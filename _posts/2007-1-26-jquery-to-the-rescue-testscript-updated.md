---
layout: post
title:  "jQuery to the rescue. (testscript updated)"
date:   2007-1-26 10:00:00 +0100
categories: habari
---
As I work in an enviroment that has all IE in production enviroment, I see myself missing the web developer toolbar of firefox a lot. Don't start with the toolbar for IE, because it just doesn't cut it.
For testing purposes, I wrote a small jQuery function, to give me information on just about anything, simular to the small <a href="http://www.wnas.nl/?p=192" title="testscript">script</a> I wrote about some time ago, but more robust.<!--more-->
<em>The previous version had some problems, like traveling too far up the dom</em>
Anyway, here it is:
<code>$(".container *").click(function(){
		alert("tagname = " + this.tagName + " className= " + this.className);
	});
</code>
This one takes everything (*) and gives you the tag and classname. You can extend it easily with other stuff you might need. Or remove the alert and write it in a div, like this:
<code>
$("span").click(function(){
	$("body").append("&#60;div id='showInfo'&#62;&#60;/div&#62;");
	$("#showInfo").append("&#60;dl&#62;&#60;/dl&#62;");
	$("#showInfo dl").append("&#60;dt&#62;tag&#60;/dt&#62;&#60;dd&#62;">>>
        + this.tagName + "&#60;/dd&#62;");
	$("#showInfo dl").append("&#60;dt&#62;class&#60;/dt&#62;&#60;dd&#62;">>>
        + this.className + "&#60;/dd&#62;");
	$("#showInfo").click(function(){
		$(this).remove();
	});
});</code>
<em>( >>> linebreak )</em>
(if you do extend it, please share this in the comments...)
One thing what I will do, is wrap this in a each() and set up a complete web developer functionality.
In order to make this work, you need the css :
<code>
#showInfo {
	position: absolute;
	top: 10px;
	right: 10px;
	z-index: 1000;
	border :1px solid #999;
	background-color: #FFF;
	opacity: .8;
	filter:alpha(opacity=80);
	width: 300px;
	min-height: 100px;
	_height: 100px;
}
#showInfo dt, #showInfo dd {
	float: left;
	clear: none;
}
#showInfo dt {
	width: 80px;
	color: #999;
	clear: left;
}
#showInfo dd {
	width: 200px;
	font-weight: bold;
	background-color: #CCC;
}</code>
And last but not least, you need <strong><a href="http://www.jquery.com" title="jquery">jQuery</a></strong>.

So, try it, and let me know if it helps..