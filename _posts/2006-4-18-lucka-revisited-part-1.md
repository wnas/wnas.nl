---
layout: post
title:  "lucka revisited (part 1)"
date:   2006-4-18 10:00:00 +0100
categories: habari
---
As a consultant I spend my time preaching the gospel to my customers and helping them following it. The gospel, as you could know if you read my site, is proper use of css and xhtml. Or strict separation of structure, behaviour and presentation.

<!--more-->

If you know what company I work for, you understand the slight pause I take if I tell you it's url (<a href="http://www.lucka.nl">www.lucka.nl</a>). It doesn't practice what I preach, not by a long shot.
After 2 years, it is time to do something about it. Yep, now is the time to redesign.

Starting with the basics, keeping the exteriour the same, but  redefining the code behind it.

First lets look at the page that we have to rebuild:

<img width="128" height="76" id="image123" alt="lucka.nl" src="http://www.wnas.nl/wp-content/uploads/2006/03/lucka.thumbnail.png" />

And looking at it, let's start to dissect it first, what are the elements on the page.
<ul>
	<li>First there is the logo top left</li>
	<li>then there is a header with buttons</li>
	<li>At the left site there is another logo and a search box</li>
	<li>And last but not least, there is content in the middle</li>
</ul>
This is built with 5 (or more, I can't be bothered to check) frames, tables for layout, minimum of css and if validated by w3c a total of 31 errors starting with: NO DOCTYPE.

First of, let me explain this, you have to include a doctype. It tells the browser how you want your page to be rendered and stuff. Go and look it up on google, there are lot's of articles telling you to INCLUDE A $^*&%^$ DOCTYPE YOU , YOU...

But let us continue, we will correct all this. That we will do after we will look at the basic we will have to build and how:
<ul>
	<li>First there is the logo top left
Which we will place on the background of a h1, of which we will hide the text.</li>
	<li>then there is a header with buttons
These are two unordered lists with links</li>
	<li>At the left site there is another logo and a search box
Background image on a small form with the search box</li>
	<li>And last but not least, there is content in the middle
Block of text with an image.</li>
</ul>
A nice bonus of our plan is, that I plan to build all this w3c compliant, browser independent, accessible, faster, smaller, nicer to google and overall something I can show to my friends. (if I had some)

<a title="PART 2" href="http://www.wnas.nl/?p=133">Follow me to part 2</a>, there we will start with some code..