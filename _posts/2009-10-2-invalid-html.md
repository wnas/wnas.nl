---
layout: post
title:  "Invalid HTML"
date:   2009-10-2 10:00:00 +0100
categories: habari
---
	<ul><li><a href="#intro-ih">Introduction</a></li><li><a href="#code-ih">Code</a> <em><a href="#code-html-ih">HTML</a> <a href="#code-css-ih">CSS</a></em></li><li><a href="#results-ih">Results</a></li><li><a href="#img-ih">Screenshots</a></li><li><a href="#conclusion-ih">Conclusion</a></li><li><em><a href="files/invalidhtml/invalid.htm">test page</a></em></li></ul>
		<p id="intro-ih">I recently encountered something in my work that kinda baffled me. Apparently some (<del>make that lot</del>) people don't know one fundamental thing about inline and block-level elements.</p><p class="announce">The fact is that you are not <a href="http://www.w3.org/TR/html401/struct/global.html#h-7.5.3">allowed</a> to nest them.</p>
		<p>This seems to be a small matter, but it has all sorts of consequences for the styling of the front end. What a lot of people don't get is that if you serve the browser invalid html, which is what you do if you nest a block-level element ( <code>div</code>) inside an inline element (<code>span</code>), you are at the mercy of it. A browser, and lets not name names, has a though job as it is when rendering <a href="http://validator.w3.org">valid</a> html. What it is supposed to do with invalid code is anybody's guess.</p>
		<p id="code-ih">So to test this I created a small <a href="files/invalidhtml/invalid.htm">test page</a> with some invalid HTML and some simple CSS. What I did is that I nested a block-level element, in this case a div, inside an inline element, a span. Below that I swapped the div with the span. Both examples got a unordered list with one li.</p>
		<h4 id="code-html-ih">HTML</h4>
		<pre><code>&#60;span class="foo"&#62;
		&#60;div&#62;
			&#60;ul&#62;
				&#60;li&#62;list item&#60;/li&#62;
			&#60;/ul&#62;
		&#60;/div&#62;
	&#60;/span&#62;

	&#60;div class="foo"&#62;
		&#60;span&#62;
			&#60;ul&#62;
				&#60;li class=""&#62;list item&#60;/li&#62;
			&#60;/ul&#62;
		&#60;/span&#62;
	&#60;/div&#62;</code></pre>
		<h4 id="code-css-ih">CSS</h4>
		<p>I than gave it some simple css, which is below:</p>
	<pre><code>	body {
		margin: 0 auto;
		width: 40em;
		font-size: 1.2em;
		font-family: helvetica,arial,sans-serif;
	}
	#test {
		border: 4px dotted #ccc;
		width: 200px;
		height: 200px;
		margin-top: 5em;
	}
	.foo {
		border: 1px solid red;
		padding: 1em;
		position: relative;
	}
	.foo div,
	.foo span {
		background: #dee2ee;
		margin-bottom: 1em;
		padding: 1em;
	}
	span.foo li {
		background-color: #ccc;
	}
	.foo li {
		position: absolute;
		left: 100px;
		top: 5px;
	}
	div.foo {
		border-color: blue;
	}
	</code></pre>
	<h4 id="results-ih">The results</h4>
	<p>The results where surprising, some browers tried to interpret the css and succeeded ( in a way ), while others failed in nice and surprising ways. Mind you, I am <strong>not</strong> blaming browsers here. Let me repeat that:</p>
	<p class="announce">I AM NOT BLAMING BROWSERS HERE<br><small>not even ie6, really not this time.</small></p><p>If you serve a browser invalid HTML, you get everything you deserve, in my not so humble opinion</p><h4 id="img-ih">Screen shots</h4><p>Let's get on with the screen shots, which I will present without any comment. Again, if you serve a mess to a browser, you deserve all the trouble you get...</p>
	<ul class="screenshots">
		<!--li><img src="files/invalidhtml/img/saf4xp.png" alt="safari 4 xp"><p></p></li-->
		<li><img src="files/invalidhtml/img/saf4osx.png" alt="safari 4 os x"><p>Safari 4 XP and Safari 4 os X</p></li>
		<li><img src="files/invalidhtml/img/op10osx.png" alt="opera 10 os x"><p>Opera 10 os X</p></li>
		<li><img src="files/invalidhtml/img/ca16osx.png" alt="camino 1.6 os x"><p>Camino 1.6 os X</p></li>
		<li><img src="files/invalidhtml/img/ff35xp.png" alt="firefox 3.5.3 xp"><p>Firefox 3.5.3 XP</p></li>
		<li><img src="files/invalidhtml/img/ff35osx.png" alt="firefox 3.5.3 os x"><p>Firefox 3.5.3 os X</p></li>
		<li><img src="files/invalidhtml/img/ie8xp.png" alt="Internet Explorer 8 xp"><p>Internet Explorer 8 XP</p></li>
		<li><img src="files/invalidhtml/img/ie7xp.png" alt="Internet Explorer 7 xp"><p>Internet Explorer 7 XP</p></li>
		<li><img src="files/invalidhtml/img/ie6xp.png" alt="Internet Explorer 6 xp"><p>Internet Explorer 6 XP</p></li>
	</ul>
	<h4 id="conclusion-ih">Conclusion</h4>
	<p>Always validate your code, it will help you. I know that proper front end developers will do this without thinking and I will agree that using stuff like WAI-ARIA tags will invalidate your code, but when you do that stuff I hope you know your basics. Stuff like this I see primarily in html rendered by some back end system put together by someone who <strong>doesn't</strong> know what they are doing. I will tell (and have told) you what you're doing, you're overly complicating the work of the front end developer.</p><p>I mean, we could work around these quirks, but why should we work to correct mistakes easily avoided? It would only mean adding extra lines of code to the css, thus making it harder to maintain...</p><p>My proposition is that we, as front end developers, simply refuse to work with invalid code. It is only a source of trouble and will cause more work which will cut into the budget and so on.<p>Now my question to you all, do you see this and/or have any nice examples you would care to share in the comments or tell me about on <a href="http://twitter.com/wnas" title="And YES, you should follow me, shameless plug.">twitter</a> I would love to see them.</p>