---
layout: post
title:  "Wnas logo in css3"
date:   2010-3-13 10:00:00 +0100
categories: habari
---
<p>Just to have some fun I tried to build a mockup of my logo in html, without images...</p>
<p class="clearfix logo"><em id="homeTest"><i><span>wnas logo in css3</span></i></em></p>
<p>I haven't done anything to make it work in IE and probably won't. If I do this, the logo will be an image in IE.</p> 
<pre><code>&#60;em&#62;&#60;i&#62;&#60;span&#62;wnas logo in css3&#60;/span&#62;&#60;/i&#62;&#60;/em&#62;</code></pre><p>I am still in doubt whether I should do this, as the css isn't exactly IE friendly. But for those of you who want to see it and maybe learn a thing or two, here is my code WITH explanations...</p>
<p><strong>Code, with comments</strong></p>
<p>We begin with the <code>em</code> that is our outer ring.</p><pre><code>#homeTest {
	width: 98px;
	height: 98px;</code></pre><p>We give it a width and height...</p><pre><code>	float:left;</code></pre><p>And we float it to the left to get it to accept a width and height.</p>
	<pre><code>	font-size: 1px</code></pre>
	<p>we hide the text in plain sight.</p>
	<pre><code>	-webkit-border-radius: 50px;
	-moz-border-radius: 50px;
	border-radius: 50px;
}</code></pre>
	<p>three different ways to say border-radius.</p>
	<p>We now move onto the inner white circle.</p>
	<pre><code>#homeTest i {
	background-color: #fff;
	border: 1px solid #fff;</code></pre>
	<p>This one is the only one with different colors.</p>
	<pre><code>	height: 59px;
	width: 60px;</code></pre>
	<p>Set some width and height.</p><pre><code>display: block;</code></pre>
	<p>A block accepts width and height as well.</p><pre><code>	margin: 20px 19px 20px 20px;</code></pre>
	<p>Not quite symmetrically my logo is, hence the different margins...</p><pre><code>	-webkit-border-radius: 30px;
	-moz-border-radius: 30px;
	border-radius: 30px;
}</code></pre>
	<p>And again border radius in three different accents</p><pre><code>#homeTest i span {
	height: 36px;
	width: 36px;
	display: block;</code></pre><p>width, height, yada yada...</p><pre><code>	margin: 8px 9px 8px 8px;</code></pre>
	<p>Not quite symmetrically my logo is, it really isn't.</p><pre><code>	-webkit-border-radius: 20px;
	-moz-border-radius: 20px;
	border-radius: 20px;</code></pre>
	<p>And again three different ways to say border-radius. This is getting annoying people...</p><pre><code>	text-align: center;</code></pre><p>Set text in center.</p><pre><code>	color: #39c;
}</code></pre><p>And let it blend into the background. At last we set the colors of the outer and very inner circle, as they are the same.</p>
<pre><code>#homeTest, #homeTest i span {
	border: 1px solid #39c;
	background-color: #39c;
}</code></pre><p>There you have it, my logo in a couple of lines of css. For IE I could just set up a background image and nullify the borders and background, but why bother...</p>
<p><em class="done">Css explanation will be published tomorrow</em></p>