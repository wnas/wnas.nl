---
layout: post
title:  "Using javascript to help users"
date:   2008-3-12 10:00:00 +0100
categories: habari
---
<p id="topP">As javascript is maturing at a fast rate, so are developers and designers of web applications and pages. At first javascript was a frowned upon language and profession, that has changed. Now we see a situation where javascript is being called upon to help the back end developer extend the functionality. But it can also work in other fields, the user interface design part for instance, in ways that not many people are doing.</p>
<p>Not by creating superficial animations and such, but by understanding the needs of the user and anticipating on them.  Today such a situation presented itself to me.</p>
<p>If you want to know what I am talking about you can skip to the demo  demo <a href="http://www.wnas.nl/demo/scrollToTop.html">page</a> here, make sure you come back to check out the explanation...</p>

<!--more-->
<h3>Reducing</h3>
<p>You know of the need to help the visitor of your page with extra functionality. For instance a <em>'scroll to top'</em> link at the bottom of your page, like this.</p>
<pre><code>&#60;a href="#topP" id="scrollToTop"&#62;scroll to top&#60;/a&#62;</code></pre>
<p>Useful, if it is needed, but rather <strong>useless</strong> when  the whole page is already visible to that visitor. All you do is give the visitor yet another link to be distracted by, not help him. That link should only be visible when it is needed.</p>
<p>That is where javascript comes into play. With a few simple lines you remove the link from the visitor when he has no need for it.</p>
<h3>How?</h3>
<p>First you need to know the height of you viewport, for that we turn to the infamous <a href="http://www.quirksmode.org" rel="met"><abbr title="Peter-Paul Koch">PPK</abbr></a> with his script that does just that.For the script and the explanation I direct you to his page about this script which you can find on <a href="http://www.quirksmode.org/js/findpos.html">quirksmode</a>.</p>
<p>We then use this script to see where on the page the link is. First we check if the link is one the page, only than we do something. We get the height of the viewport and the y-position of the link and calculate the difference. If the link is above the fold, we give it a class of <em>inViewPort</em>.</p>
```
>> = linebreak
function hideScrollToTop(){
  // we start by seeking the height of the browser
  var height = (typeof window.innerHeight != 'undefined' >>
  ? window.innerHeight : document.body.offsetHeight);
    // first we seek the link with class of scrollToTop
    var up = getElementsById('scrollToTop');
    // if the link exists.
    if(up){
    // we get the coordinates from the ppk.
    var coors = findPos(up);
    // we then extract the y position
    yPos = coors[1];
    // we calculate what's left..
    var left = height - yPos;
    // if the link is 'above the fold'
    // aka if there is a positive number left.
    // we give it a class of 'inViewPort'
    if( left &#60;= 0 ){
      up.className += ' inViewPort';
    }
  }
}
```
<p>In css we set the display of <em>inViewPort</em> to none and we are off.</p>
<pre><code>
.inViewPort {
  display: none;
}</code></pre>
<p>So there you have it a way of helping users by reducing visual clutter instead of putting up more stuff. You can find the script working on it's own demo <a href="http://www.wnas.nl/demo/scrollToTop.html">page</a>, with all of the javascript needed in the head. Go and play with it.</p>
