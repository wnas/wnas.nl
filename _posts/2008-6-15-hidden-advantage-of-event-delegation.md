---
layout: post
title:  "Hidden advantage of event delegation"
date:   2008-6-15 10:00:00 +0100
categories: habari
---
<p>Nowadays, everybody has (or should) heard of event delegation, the new gray in javascript. It has many advantages, such as cutting down on the event handlers javascript needs to set on a page. But there is one advantage, that not many people talk about. So I will.</p>
<p>First we will start with the most talked about stuff, to refresh your memory, or to give you a short introduction in the matter. In short there are two kinds of calling your events from your html, inline scripting and unobtrusive javascript. The latter has a variation called Event Delegation.</p>
<p>Inline scripting is the one we all know and the one that is not considered <em>Best practice</em> anymore. What you do is call the event from inside your html, like this:</p><pre><code>&#60;li onclick= "alert('foo');"&#62;inline script&#60;/li&#62;</code></pre><p>The disadvantages of this are multiple, one is maintenance, file size is another.</p><p>The correct way to do this, as all the cool kids know, is with unobtrusive javascript. That way you have smaller file size, easier maintenance and so on. So what you do in html is:</p>
<pre><code>&#60;li&#62;foo&#60;/li&#62;</code></pre><p>And you set your events with the javascript on load, page ready or what not:</p>
<pre><code>// go through the dom and attach a click on every li
jQuery('li').click(function(){
	// do something when clicked.
	alert('foo');
});</code></pre>
<p>This is a step up, but it has a couple of disadvantages. As the number of event handlers grow, the time needed to add them increases. Not that this is a problem on any real browsers, but as long as IE6 continues to be used, you have to work with slow browsers. Enter <strong>Event Delegation</strong>.</p>
<p>With event delegation the amount of events you have to attach shrinks by a lot, as you can put them fairly high up, like on the body. So with identical html, in your javascript you do something like this:</p>
<pre><code>// attach a click handler on the body (one)
jQuery('body').click(jQuery.delegate({
	// when a li is the event target do stuff
	'li': function() { alert('foo'); }
}));</code></pre>
<p>This generates only one event handler, making it way faster another advantage of event delegation comes into play when you add elements to the dom, you don't need to attach the events again, as the handler is attached to a higher level.</p><p>So here is the deal, not only you get less code, you get even lesser code. Everybody wins!</p>
<p>Here are some links about event delegation should you be wanting to know more... (you can always ask me on <a href="http://www.twitter.com/wnas/">twitter</a>).</p>
<ul><li><a href="http://icant.co.uk/sandbox/eventdelegation/">Christian Heilman</a></li>
<li><a href="http://www.danwebb.net/2008/2/8/event-delegation-made-easy-in-jquery">Dan web on event delegation with jQuery</a></li>
<li><a href="http://usabletype.com/weblog/event-delegation-without-javascript-library/">Without a library.</a></li>
<li><a href="http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html">And ofcourse ppk goes over the top...</a></li>
</ul>
<p><em>Here are the files I used for testing, first the <a href="http://www.wnas.nl/files/eventdelegation/is.html" title="is.html">inline scripting example</a>, than the <a href="http://www.wnas.nl/files/eventdelegation/oj.html" title="oj.html">unobtrusive javascript one</a> and last but not least the one with <a href="http://www.wnas.nl/files/eventdelegation/ed.html" title="ed.html">event delegation</a>, have fun researching...</em></p>
