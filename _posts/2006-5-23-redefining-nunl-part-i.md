---
layout: post
title:  "redefining nu.nl part I"
date:   2006-5-23 10:00:00 +0100
categories: habari
---
As I said a <a href="http://www.wnas.nl/?p=134">post</a> before, sites like nu.nl aren't exactly standard compliant. But saying so is easy, what I am going to do today is trying to fix it.
<!--more-->

First we start with the original, with a small modification. That is adding a base href, so we can use the existing html to start with.
Get it here <a href="http://www.wnas.nl/wp-content/uploads/2006/05/nu.html">HERE</a>

A pretty page, isn't it. Nice to look at full of news, but do not look at the source code. It is not valid to say the least, the whole page is crawling with stuff like inline styles, tables, invalid javascript and I just bet that I can find some spacer gifs...

Nice, isn't it. These people have not been paying attention the last couple of years. If you have missed it, a bunch of us web folks have been trying to seperate content, structure, presentation and behaviour. Let us see if we can do better...

If we look at the page we can see that is relatively simple. All it got is three columns and a logo. Wait a minute, let's google that shall we, just type in <a href="http://www.google.com/search?client=safari&rls=en&q=three+column+layout&ie=UTF-8&oe=UTF-8">three column layout</a> and pick one.
Now, was that hard, no it wasn't hard at all, just one google action got us with more information than we can read in one night. It just proves that  what I say a lot, that the information is there, all you have to do is read it.

Lots of people write about css, some very good, some (like me) try and fail, but you can find good sites with lots of info on them. All you have to do is read, how do you think people who are more knowledgable than you obtained that info. <strong>They looked it up</strong>.

Let us start with the basics of this page, with all due respect, this page does not deserve this much code so we start with a <a id="p145" href="http://www.wnas.nl/wp-content/uploads/2006/05/nu002.html">clean slate</a>">clean slate. Later, we can go on with this...