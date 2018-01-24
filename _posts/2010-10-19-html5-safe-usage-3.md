---
layout: post
title:  "HTML5 safe usage 3"
date:   2010-10-19 10:00:00 +0100
categories: habari
---
<p>As you may recal, I wrote a small piece on #html5 input types a while go <a href="http://www.wnas.nl/html5-safe-usage-2">here</a>, in which I stated:</p><blockquote><p>If you use an unsupported input type in a browser it falls back to text, what I didn't knew is that reading the type with JavaScript fails also. CSS attribute selectors are fine, only no JavaScript detection.</p></blockquote><p>As it turns out, I was mistaken. It is quite possible to detect the type of the input elements, all it takes is the reading of the  type attribute, like this:</p><pre><code>$('input').each(function(){
	var tt = this.getAttribute('type');
	if(!tt)tt='text';
	this.className +=' input-'+tt;
});</code></pre><p>And voila, we have got a class on the element, with which we can style it or hook some javascript onto it...</p>