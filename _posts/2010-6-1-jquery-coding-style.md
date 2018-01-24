---
layout: post
title:  "JQuery coding style"
date:   2010-6-1 10:00:00 +0100
categories: habari
---
<p><img src="http://wnas.nl/user/files/images-3_20100601020805.jpeg" alt="jquery logo" title="images-3.jpeg" border="0" width="108" height="94" style="float:right;margin-right:-100px" />I was just documenting a whole bunch of scripts and I noticed that my coding style is not so consistent as I like to think. It seems like I am a real person too :). But this put a question in my head, what do most people do if you chain lots of things. All on one line, or each method on it's own line. Mind you, I compress my code when I go live, so size don't matter much, just readability.</p><p>So do you like:</p>
<pre><code>
	$( 'foo' )
				.clone()
				.appendTo('#bar')
				.find('p')
				.removeClass( 'one' )
				.find('input, label')
				.val('')
				.removeClass( 'two' );
</code></pre><p>Or do you like this one better:</p><pre><code>
$( 'foo' ).clone().appendTo('#bar').find('p').removeClass( 'one' ).find('input, label').val('').removeClass( 'two' );
</code></pre><p>Me I do both, in general I go for the one a method way when it's a lot of code and all on one line when it's only three or four things I am chaining. So, although I go for a consistent style in coding, I seem to violate my own principles when I review a project that I (like this one) work on for months. I wonder if this is something that can be prevented by setting strict coding guidelines or that we should accept it, as long as the overal principles are being followed.</p><p>After all, this is a project I worked on with several people, over a period of 6 months. In that time, deviations in coding style can occur, but when you follow the overall guidelines it does no harm in my opinion. The thing is that you should not make you coding standards to strict, as people tend to feel that they are in the way of their work, instead of helping them. Me, I am quit relaxed about coding styles, I tend to agree upon a certain naming convention and some common pattern and that is that. Formatting I can do from textmate, so other people's preferences don't bother me as I take over some code or do a review.</p><p>So we agree on a naming convention, like <strong>all-small-caps</strong> or maybe <strong>camelCasing</strong> or even <strong>using_underscores</strong>, and we then select for instance the <a href="http://www.wait-till-i.com/2007/08/22/again-with-the-module-pattern-reveal-something-to-the-world/">Revealing Module Patter</a> and of we go...</p>
<p>I am curious about your opinion on this. How do you people approach this when you do a big project or product? Do you work with more extensive guidelines or none at all...</p><p>I would really like to hear different opinions, as I think that this sort of thing is getting more important by the day...</p>
<p><em>By the way, I wrote about <a href="http://wnas.nl/css-coding-conventions">CSS coding conventions</a> a long time ago... It still holds in my opion</em></p>