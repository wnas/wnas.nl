---
layout: post
title:  "Daily Nerd bookmarklet"
date:   2011-8-26 10:00:00 +0100
categories: habari
---
<p>I love the <a href="http://dlnrd.nl">daily nerd</a>, it is my first stop when I start the day. A daily list of articles I as a front end developer find interesting. But lazy as I am, I find it too much trouble to open all of those links in new pages. So I wrote a bookmarklet to do that :).</p>
<p><em>It is not wholly bulletproof, as it depends on the html structure of the daily to never change, but hey, it is easily changed…</em></p>
<p>Here it is: <a href="javascript:var%20odlnrd=function(){var%20a=document.getElementsByTagName('article')[0],b=a.getElementsByTagName('article'),c=b.length;for(var%20i=-1;++i%3Cc;){var%20d=b[i].getElementsByTagName('a'),e=d.length;for(var%20j=-1;++j%3Ce;){window.open(d[j].getAttribute('href'));}}}();">Open daily nerd</a> drag this to you bookmark bar and when you are on the daily nerd, click it..</p>
<p>In case anyone wants to create one for a different link site, like ppk's <a href="http://www.quirksmode.org/blog/archives/2011/08/linkbait_22.html#more">linkbait</a> or <a href="http://robertnyman.com/2011/08/17/introducing-roberts-read-great-links-and-suggestions-from-latest-week-august-17th-2011/#more-2163">Roberts</a> read category, here is the code (uncompressed).</p>
<pre><code>
// open the dlnrd links in a new window
var odlnrd = function(){
	// get the first article
	var a = document.getElementsByTagName('article')[0],
		// find the article in there
		b = a.getElementsByTagName('article'),
		// calculate the length of those outside the loop
		c = b.length;
	// iterate over them
	for ( var i = -1; ++i &lt; c;){
		// open a new window for each link
		var d = b[i].getElementsByTagName('a'),
			e = d.length;
			for ( var j = -1; ++j &lt; e; ){
				window.open(d[j].getAttribute('href'));
			}
	}
}();

</code></pre>
<p>Feel free to take this code and improve on it. I would like to know if you did :).</p>