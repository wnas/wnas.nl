---
layout: post
title:  "mooTools drag and drop example revisited"
date:   2006-9-14 10:00:00 +0100
categories: habari
---
after reading the excellent <a href="http://www.snook.ca/archives/javascript/mootools_drag_a/">tutorial </a>by Jonathan Snook, I decided that it was time to try and improve it...
First of all, let me say that I in no way wish to put snook article down, I only want to add some things to make it cleaner..<!--more-->

Snook made it easy to see what happens in your javascript, but he added presentation in the  behaviour layer(js). And instead of bitching about is, I decided to  try and change it myself.  Snook made sure that the draggable thingy was transparent, by setting its opacity in the javascript code like this

As I said before, I like to keep my presentation seperate from my behaviour (and structure ofcourse). So I decided to change that to:
<pre>//this.el.setOpacity(.5); // snook
this.el.addClassName('dragged'); // wnas added</pre>
And to remove the className I changed
<pre>//this.el.setOpacity(1); // snook
this.el.removeClassName('dragged'); // wnas added</pre>
Ofcourse I added something in the css to let it do something (please note id added in order for the style to take effect)
<pre>#dragger.dragged {
opacity: .5; /* firefox */
filter: alpha(opacity=50); /* ie */
}</pre>
I hope that my two cents help anyone, to seperate behaviour, structure and presentation.

Here are the files to let you test and improve it for your selfs... <a onmousedown="selectLink(181);" id="p181" href="http://www.wnas.nl/wp-content/uploads/2006/09/mootoolsdragdrop.htm" />

<a onmousedown="selectLink(181);" id="p181" href="http://www.wnas.nl/wp-content/uploads/2006/09/mootoolsdragdrop.htm">the html page</a><a onmousedown="selectLink(180);" id="p180" href="http://www.wnas.nl/wp-content/uploads/2006/09/mootools.release.51.js" />

<a onmousedown="selectLink(180);" id="p180" href="http://www.wnas.nl/wp-content/uploads/2006/09/mootools.release.51.js">mooTools</a>