---
layout: post
title:  "CSSquiz"
date:   2010-3-4 10:00:00 +0100
categories: habari
---
<p>Just some CSS3 fun I had this morning on <a href="http://twitter.com/wnas">twitter</a>.</p>
<pre><code>h1 ~ div > p span[title^='bo'] strong:last-child { 
	color: red;
}

span[title$=foo] strong:first-child { 
	font-style:italic;
}

span:not([title^='dd']) { 
	font-size:2em;
}</code></pre>
<p>If you feel like it I would like to see the html in the comments...</p>