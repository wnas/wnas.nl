---
layout: post
title:  "Different var, same subject"
date:   2011-4-28 10:00:00 +0100
categories: habari
---
<p>I recently tried to do something and I don't know if it is all that good. If somebody has an opinion about it, I would love to hear it.</p>
<p>I have been using the <strong>$</strong> suffix for variables that are really jQuery objects. But I keep coming across occurrences that need the real variable, aka not the jQuery one.</p>
<p>So what I tend to do now is something like:</p>
<pre><code>
collection : {
	$foo	: $('.bar'),
	foo		: '.bar'
}
</code></pre>
<p>In this way I can use both the jQuery object easily and the normal variable, like this:</p>
<pre><code>
// use the jQuery object
collection.$foo.<em>action()</em>

// use the normal object
$('body').find(collection.foo)
</code></pre>
<p>What do you think, is this too much or do you use this too?</p>
<p><em>I am trying to get a better last example, 'cause this ain't all that clear I think...</em></p>