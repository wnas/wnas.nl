---
layout: post
title:  "Test script"
date:   2006-11-17 10:00:00 +0100
categories: habari
---
<p>At this moment, I am working on a new release of a library of html, css and javascript components for a client. The new release mostly consist of new (faster) javascript. This results in slightly different css classes I need to adress.</p>
<p>In helping me define which classes are set on a html element, I wrote this small test script to give me the value of (among others) the className.</p>
<p>(yes, I know the web developer toolbar for firefox by <a title="web developer toolbar's author" href="http://chrispederick.com/work/webdeveloper/">Chris Pedrick</a> but I need to see stuff in IE 6 and below.)</p>
<p>So this is what I wrote, I hope someone else will find it usefull.</p>
<p><code> function testScript(){<br />
// get all the elements on the page<br />
var test = document.getElementsByTagName("*");<br />
// build a nodelist<br />
for (var i=0;i&lt;length;i++){<br />
// do something on click<br />
test[i].onclick = function (){<br />
// throw an alert with the tagname, classname and value<br />
alert(" tagName = " + this.tagName + "className = " + this.className + " value = " + this.value);<br />
// stop the bubbling, see quirksmode for explanation<br />
// http://www.quirksmode.org/js/events_order.html#link9<br />
if (!e) var e = window.event;<br />
e.cancelBubble = true;<br />
if (e.stopPropagation) e.stopPropagation();<br />
}<br />
}<br />
}</code></p>
<p>Drop in to your project and see the value's defined in the alert when you click on something. It also stops bubbling, so you won't be annoyed by the script traveling all the way up through the dom tree.</p>
<p>Have fun using it and let me know if you use it or (better) improved it...</p>
<p>UPDATE 30-11-2006</p>
<p>Finally gotten around to installing the IE developer toolbar and allthough it doesn't match the one for Firefox. It does the job better than my (crappy) javascript solution. So go <a xhref="http://www.microsoft.com/downloads/details.aspx?familyid=e59c3964-672d-4511-bb3e-2d5e1db91038&displaylang=en">here</a> and download it...
</p>
<p>UPDATE 26-1-2007</p>
<p>Try out my new (jQuery) <a href="http://www.wnas.nl/?p=216" title="testscript">version</a></p>