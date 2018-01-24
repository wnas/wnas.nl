---
layout: post
title:  "The javascript for the pop up window."
date:   2006-10-30 10:00:00 +0100
categories: habari
---
Two post ago, I showed you what we developed to achieve a flexible popup window. This time, I will show you how we did it..

First I will show you the code, necessary to create the popup, nothing fancy here. Just something I came up with after reading a bit of <a title="dom scripting, by Jeremy Keith" href="http://domscripting.com">domscripting</a>.
<pre>/*
* 	popup script
* after a great example by jeremy keith
* http://www.domscripting.com/book/sample/
*
* find any a tag with a class popup
* build a nodelist of these.
* do something on click
* - get var width and height
* - give these variables together with the value
*    of the href tag to the function popUp.
*/</pre>
Here it is folks, the code in plain english. As you can learn from  his <a title="audio recording" href="http://domscripting.com/blog/display/62">presentation</a> at sxsw 2006.

<!--more-->

Now let me go and show you the code, I wrote as a results of that text.
I more or less stuck to the script in the script,  so don't expect anything out of the ordinary or fancy. I am  not a great coder, matter of fact is that I only recently  started coding myself. Luckily for me, is that I have spent  the last couple of years helping developers, develop some common sense. So the thought process is not enterily alien to me...

Enough babbling, let's go and look at some code
<pre>function popLink (){
// get all the a elements with a class popup
// see getElementsByClassName in tools.js
//(snook and nyman)
var aP = getElementsByClassName(document, "a", "popup");
// build a nodelist (thanks to ppk who is making
// me understand js with his book).
for (var i=0; i&#60;aP.length; i++) {
// on click do something.
aP[i].onclick = function () {
// get the width and height var with another help function
// see tools.js for GetElementValueFromClassName (thnx to Tino Loos)
var width = GetElementValueFromClassName(this.className, "w");
var height = GetElementValueFromClassName(this.className, "h");
// go to the function popup and take the href, width and heigth as attributes.
popUp((this.getAttribute("href")), width, height);
// ignore the default action of the link.
return false;
}
}
}</pre>
This will do something, if we have the function popUp, so here it is...
<pre>function popUp(winURL, width, height ) {
// if there is no width or height is set,
// take the default values...
if (width == "") {
width = 640;
}     if (height == "") {
height = 480;     }
window.open(winURL,"popup","width=" + width--
+ ",height=" + height); }</pre>
This stuff will be available onload, thanx to martins events js.
<pre>Events.attach(window, "load", function() { popLink(); });</pre>
The can be called upon from html with a class like this...
<pre>class="popup w:900 h:700"</pre>
Join me next time, I will go in to the helper classes. Both the ones I used and the ones I created...

The next post will be:<strong> Return of the helper classes</strong>