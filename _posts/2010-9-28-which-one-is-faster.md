---
layout: post
title:  "which one is faster?"
date:   2010-9-28 10:00:00 +0100
categories: habari
---
<p>People, is there anybody who can help me. I am wondering which one is faster...</p>
<p>Calling this several times in a script:</p>
<pre><code>var foo = $(data).find('foo').text();
var bar = $(data).find('bar').text();</code></pre>
<p>Or wrapping it in a function:</p>
<pre><code>var findData = function (data, field) {
	var v = $(data).find( field ).text();
	return v;
};</code></pre>
<p>And calling that as many times:</p>
<pre>var foo = findData(data,'foo');
var bar = findData(data,'bar');</pre>
<p>I know that the last solution appeals to me more, maybe 'cause it looks cleaner. But what I am wondering, which is faster?</p>
<p>After reading the comments, I think I'll go for:</p>
<pre><code>var $data = $(data);
  var foo = $data.find('foo').text();
  var bar = $data.find('bar').text();</code></pre>
<p>Tip of the hat to <a href="http://twitter.com/codepo8/statuses/25784357263">Codepo8 / Chris</a></p>