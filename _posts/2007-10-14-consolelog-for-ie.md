---
layout: post
title:  "Console.log for IE"
date:   2007-10-14 10:00:00 +0100
categories: habari
---
I write a lot of javascript in my present project. Doing this, I just love <a href="http://www.firebug.com" title="firebug site">firebug</a> and more to the point the console.log function that it lets me use. Bummer is only that it doesn't work in IE, the one browser that needs javascript debugging most. It also throws javascript error in IE when used. That is something that can be avoided by cleanly remove all of those console.log statements <strong>before </strong>you send stuff to be tested.

But, as everybody knows in the real world people tend to forget such things. So in annoyance with these errors, I set out to recreate the basis console.log function for IE as well. In retrospect it turns out that I set out to create a better mouse trap, but hey, it was fun and good enough to share, so lets...

<!--more-->

In my solution and do not worry, I will share other solutions but first I will speak my mind. The console.log function is not used, instead you use <em>logger(message). </em>This sends the message to message to the console, if there is any, or it creates an ul (with an id of 'logger') in which it sets li's with the individual messages. So without further ado, I present to you the code:
<pre><code>
 /*
 * wilfred nas
 *
 * info@wnas.nl
 * http://www.wnas.nl/
 * http://snippets.wnas.nl/
 */

// to intitialize the logger set : var log = 'true';
// change to 'false' to remove logging statements from you app.
// or (better) remove all logger statements from your code.
var log = 'true';
//var log = 'false';
/*
 * the logger functionality is a attempt to recreate some of the console functions of
 * fire bug for IE, the browser where you need js debugging tools the most. *
 * to use it you replace console.log(msg) with logger(msg), this sends the msg to the console or
 * it creates an ul to receive your (LIst of) messages...
 */
/*
 * works in  safari 2, opera 9, camino, webkit, ie 6 and firefox 2 (with or without firebug).
 */
function logger (msg){
    if (log == 'true'){
        // first we need to do some browser sniffing, look below for the explanation.
        var b = navigator.userAgent.toLowerCase();
safari = /webkit/.test(b);
        /*
             we only sniff what we need...
            opera = /opera/.test(b);
            msie = /msie/.test(b) &amp;&amp; !/opera/.test(b);
            mozilla = /mozilla/.test(b) &amp;&amp; !/(compatible|webkit)/.test(b);
        */
// bummer, safari seems to think that it has a console, so we make sure that it goes through.
        if (window.console &amp;&amp; !safari){
                console.log(msg);
            }
        else {
            if(!document.getElementById('logger')){
                var ul = document.createElement('ul');
                ul.id = 'logger';
                document.getElementsByTagName('body')[0].appendChild(ul);
            }
            var ul = document.getElementById('logger');
            var li = document.createElement('li');
            ul.insertBefore(li,ul.firstChild);
            li.innerHTML = msg;
        }
    }
}</code></pre>
I think that it is a nice solution to a real problem, if you want see my <a href="http://snippets.wnas.nl/examples/logger/index.html" title="logger example">solution here.</a> If you want to try other people's solutions, go and seek <a href="http://www.google.nl/search?q=console.log+for+ie&amp;ie=utf-8&amp;oe=utf-8&amp;aq=t&amp;rls=org.mozilla:en-US:official&amp;client=firefox-a" title="google search for console.log for ie">googles</a> advice. Something that I should have done before writing my own stuff, but at least it helps me understand javascript a bit better. Something that is always good I think.

My advice to you is, either use my solution (and if you do, please let me know, I will be proud) or go and use <a href="http://www.wait-till-i.com/index.php?p=394" title="faux console">faux console by Christian Heilman's</a>. I think his is better javascript, as is to be expected...

The downside is that he wrote it to be included as a seperate piece of javascript and it still needs to have all of the <strong>console.log</strong> statements removed for the live code. Where as in my logger, all you have to do is change <strong>var log == 'true'</strong> to <strong>false</strong> to go live. I think that this is a strong point, in my situation where I deliver stuff to be tested in two day cycles, as it goes faster.