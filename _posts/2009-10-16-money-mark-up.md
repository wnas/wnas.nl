---
layout: post
title:  "Money mark up"
date:   2009-10-16 10:00:00 +0100
categories: habari
---
<ul><li><a href="#html-money">HTML</a></li><li><a href="#css-money">CSS</a></li><li><a href="#test-money">Test page</a></li><li><a href="#question-money">Question</a></li></ul>
<p>I recently came across a tweet from a friend of mine <a href="http://twitter.com/roy">Roy</a> with an interesting take on marking up discounted product.</p>
<blockquote cite="http://twitter.com/roy/status/4392664787"><p>How do you guys feel about using - from &#60;del&#62;&euro; 27,70&#60;/del&#62; for  &#60;ins&#62; &euro; 25,00&#60;/ins&#62; for discounted products?</p></blockquote>
<p>As I agree upon his approach, I had an extra option for it. In dutch we differ in writing and speaking of currency. In writing the &euro; symbol comes before the amount, in speaking it comes after. So I thought about screen readers and came up with a solution.</p><p>Let's always put the &euro; in full, so not as a symbol, after the amount and use CSS to present it in a proper manner.</p><p>So I propose we do this:</p><h4 id="html-money">HTML</h4><pre><code>
&#60;p&#62;
	from
	&#60;del class="money"&#62;
		25.99
		&#60;span&#62;euro&#60;/span&#62;
	&#60;/del&#62;
	for
	&#60;ins class="money"&#62;
		15.99
		&#60;span&#62;euro&#60;/span&#62;
	&#60;/ins&#62;
&#60;/p&#62;
</pre></code><h4 id="css-money">CSS</h4><pre><code>
del {
	color: #666;font-style:italic;
}
ins {
	font-weight: bold;
}
.money {
	position: relative;margin: 0 6px;text-decoration: none;
}
.money:before {
	content: '€ ';
}
.money span {
	position: absolute;
	left: -9999em;
}</code></pre><h4 id="test-money">Test</h4><p>I made a small <a href="http://wnas.nl/files/markingupmoney/index.html">example</a> page for you to check out. Yes I know some things a quirky in IE, but for this example I don't care.</p><p>It looks quit nice and is in semantically correct, or so I think.</p><h4 id="question-money">Question</h4><p>What I am wondering is, is there anybody that reads this that can tell me what my proposed solution does to screen readers and the like. Is this more or less accessible, I think so, but I don't know. My knowledge of assistive techniques is not as good, as I would like it to be.</p><p>So please, let me know if I am right or wrong in the comments. I would love to hear your comments, here or on <a href="http://twitter.com/wnas">twitter</a>.</p> 