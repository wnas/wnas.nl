---
layout: post
title:  "Using the body as a container"
date:   2007-6-1 10:00:00 +0100
categories: habari
---
Many websites and applications struggle with the same difficulties, how to create a visually attractive frontend without reverting to too much extra elements. Web standards savy developers struggle each day to keep both ends happy.

<strong>WARNING, rant ahead!</strong>
<em>I beforehand apoligize to any designer, developer  or whoever is hurt during reading this. A small warning, if the shoe fits...</em>

<!--more-->

In the one corner the 'too hip' designer, who thinks that adding just one more subtle line or shadow finally earns him the respect of his peers.

In the other corner, the 'I'm too damn good for front end' java (or .net for that matter) developer. Who doesn't blink as his IDE or framework of choice generates just one more superflues div extra. After all, it isn't his problems, that is for the 'frontend guy' to solve.

This is the tag team that I, and many web developers with me, have to defend myself against. Enter the latest trick in the book. Using the <strong>&lt;body&gt;</strong> element for styling.

As some people know is that minimizing code is one of my favorite thing to do. It is almost sick, but I can enjoy a proper markup, fact is: I read them on the train. This little private thing aside, I am a fully adjusted member of the human race and all, but still. Some people write code like poetry.

So when I came across an idea to minimize my daily clutter of superflues div's that are being thrown into my code by either designers of (in my case) java developers, I rejoiced.

I have used a container div in my markup for years, when I needed one or when I thought I needed one  and I stopped thinking about  it all together years ago. It was just something you did, something you needed. But today I wondered if we needed that div.

The common practice for me was all this years, to start with a container div, no doubt straight out of the <a href="http://www.alistapart.com" title="a site for people who make sites."><em>Alistapart</em></a> bible. It was so common for me, that I hardly even thought about it, untill now. Why is it that we all start with a div?

Why, to style offcource, to give a certain width to the pages content, to center it and what not. But all of these things, we can do on an element which is allready in the page, something that is needed for the actual framework of the html page, the <strong>&lt;body&gt;</strong> element. Sometimes things are that obvious that we don't even see them even though they are as plain as day. So instead of doing:
<code>
&#60;body&#62;
&#60;div id="container"&#62;
-- the actual content --
&#60;/div&#62;
&#60;/body&#62;
</code>
We just go:
<code>
&#60;body&#62;
-- the actual content --
&#60;/body&#62;
</code>
Sure, it is only one div that we take out, but look at the principle. Once we start out with one extra element, it will be very hard to stop from adding <em>just <strong>one</strong></em> more. It will become a slippery slope and once you start to slide, there is no stopping you.
With this extra div, what is one more and remember the tag team? They will say, if you can add an extra div, so can I.

After all it is <em>just <strong>one</strong></em> more.
Go and take a look at the css file for these pages, and you will see, that although I have a #page or other containing element present on each page, the actual styling takes place on the body. One of the main advantages is that I have only one place where I set the width, margin and other stuff. And therefor only one place where I have to change that if I ever decide to broaden my horizon and my pages.