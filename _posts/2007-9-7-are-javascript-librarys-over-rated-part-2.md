---
layout: post
title:  "Are javascript librarys over rated? part 2"
date:   2007-9-7 10:00:00 +0100
categories: habari
---
In a previous <a href="http://www.wnas.nl/2007/07/28/are-javascript-librarys-over-rated/">post</a> I pointed out that speed is still an issue to consider when using javascript librarys. In this post I will point at some of the advantages of using a library. In these posts I will focus on <a href="http://www.jquery.com">jQuery</a>, as I am familiar with it and comfortable in using it. jQuery can be replaced with any library of your choice, as the people of <a href="http://www.prototype.org/">prototype</a>, <a href="http://dojotoolkit.org/">dojo</a>, <a href="http://mochikit.com/">mochikit</a>, <a href="http://extjs.com/">ext</a> and <a href="http://developer.yahoo.com/yui">YUI</a> are all equally focussing on speed and ease of use. The reason that I personally use jQuery is, with the reasons I gave in the last post (css like syntax and its shorthand) also its fabulous and (in my opinion) unique documentation. See <a href="http://www.visualjquery.com/">visual jQuery</a> for a complete description and examples for it's core use.
<!--more-->

jQuery has a lot of advantages over plain old javascript, not in the least it's ease of use. Imagine your self writing a piece of javascript to implement adjacent sibling selectors for ie 6 and below... There is a reason that people don't want to use this in browsers, it is to frigging difficult to get it to work, not the mention the maintance difficulty you are getting yourself in. In jQuery it is as easy as writing the css.
<pre><code>input[type='text'] + span.info { margin-left: 5px; }</code></pre>
The above meaning, as you should know, a span with a class info which comes after a text input field gets the left margin. Stop for a moment and contemplate how to write this in javascript...

* Go and find all of the spans with the class info in your document
* build a node list of these
* check if they have a previous sibling which is an text inputfield
* then give those a class
* build css to give the left margin

<em>And never, ever give the left margin in the js, that is mixing behaviour and presentation and that is bad js fu, ask Dan Webb</em>

Even if you want to do all that, you have to do that for every single instance that you use Adjacent Sibling Selectors.

In jQuery, you just write:

<pre><code>$('input[type='text'] + span.info').addClass('infoAfterInputText');</code></pre>
And in the css:

<pre><code>.infoAfterInputText{ margin-left: 5px; }</code></pre>
I think that you can easily imagine which one is easier maintanable...
<h3>Why</h3>
The reason that I think these things are important is that they make it possible to harness the true power of css. For instance, about 2 years ago, I had to write a menu that was quite straight forward. But the difficult thing was that it consisted out of two different sections, between which we toggled easy enough with javascript, but looked entirely different.

This created a lot of css, as the things we set on one state had to be countered in the other state. By using a line like;

<pre><code>#menu &gt; ul &gt; li &gt; *:first-child</code></pre>
I could strip something like 40 lines of css from the menu style-sheet, quite good. And that is not saying anything about the maintainability of the code, all we had to do in js was:

<pre><code>$('#menu &gt; ul &gt; li &gt; *:first-child').addClass('foo');</code></pre>
In the css we had to add the class <strong>.foo</strong> off-course in a separate style-sheet which we included using <em>conditional comments</em>

<pre><code>
<!--[if lte IE 6]>
	Stuff you want only IE to see
	like css or js files you use to 'educate' IE
< ![endif]--></code></pre>
So if you want to use cutting edge css and are looking for a tool to help you control that unwieldy Internet Explorer, go and checkout jQuery. Make sure that you use the packed version in you live code and use the unpacked code to read and understand. The two are not only different in file-size, but also in speed. You see, jQuery has been written with lots of comments, so if you know anything of js, it is readable...<em>Or am I turning into a bigger geek than I thought..</em>
<h3>Examples</h3>
So when do we use jQuery to patch the DOM, well that is up to you. I do it in these cases:

<dl> <dt>Adjacent sibling selectors</dt> <dd>If I see an absolute advantage in using these over zillions lines of code that only contradicth the original line,  I will use them. Always heavily documented, as these are the more obscure css properties that not many people know or use.</dd> <dd>
<pre><code>
<strong>CSS</strong>
p + a {
	do: stuff;
}
/* if an 'a' element comes after a 'p' element, do stuff */
<strong>jQuery</strong>
$('p + a').addClass('foo');
// basically the same thing
<strong>extra css</strong>
.foo {
	do: stuff;
}</code></pre>
</dd><dt>Direct child selectors</dt> <dd>Sometimes you want to use a direct child selector, to (for instance) minimize you css.</dd> <dd><code> </code>
<pre>
<strong>CSS</strong>
p &gt; a {
	do: stuff
}
/* if an 'a' element is a direct child of an 'p' element, do stuff */
<strong>jQuery</strong>
$('p &gt; a').addClass('foo');
// again the same thing
<strong>extra CSS</strong>
.foo {
	do: stuff;
}</pre>
</dd><dt>Even and odd</dt> <dd>If you want to zebra a table the hard way, you can use CSS3 selectors to do this. Please keep in mind, that this is (at this moment) not supported by any major browser, or for that any browser that I know of...</dd> <dd>
<pre><code>
<strong>CSS</strong>
.class:nth-child(2n) { do: stuff; }
<strong>jQuery</strong>
$('.class:nth-child(2n)').addClass('foo');
// I think that you get the idea by now...
<strong>extra css</strong>
.foo {
	do: stuff;
}
/*
	please note, that the <em>extra</em> css is in fact necessary for any browser,
	so these will not be included just for IE. Please document very extensively.
*/</code></pre>
</dd></dl>This kinda stuff will help you implement some cool <a href="http://www.w3.org/TR/2001/CR-css3-selectors-20011113/%23nth-child-pseudo">css 3</a> stuff as well. So in a way, the future is now...
<h3>Word to the wise</h3>
These tricks may and can be nice, but must be used wisely, as they have influence on quite a few things on your page
<h4>Cons</h4>
<ol>
	<li>Preformance, javascript, however cleverly written adds to the time it takes browser to render your page</li>
	<li>Maintenance, even if you thoroughly comment your code, placing declarations in two places always makes more room for error. Please know that one day you will have to let go of your code and the next guy or girl may not know his or her stuff as well as you do, so please keep that in consideration</li>
</ol>
<h4>Pros</h4>
By using a library, you ensure that the code is being written in a way that the library dictates. This is a bette as that ensures that people taking over your code can read about it online, rather than your ( if you are like me ) shabby documentation. The additions that you use are open source and (if you are lucky) well documented, that insures the continuation of your project, if you leave. That is in the real world a really good way to insure client satisfaction...

So use all of the tricks that you have at your disposal, but use them wisely. Do not try and show off your skills on a client's website, that you do on your own personal site. Keep a few personal pages around to try and show of your skills rather than burden a client with the risk...
Thus first and foremost be professional and have fun.