---
layout: post
title:  "Frameworks are pure evil."
date:   2016-9-23 10:00:00 +0100
categories: habari
---
<p>Right, catchy title to get people to read a somewhat more nuanced view on frameworks...</p>
<h3>Tools and frameworks are shaping your result and your team.</h3>

*this is a bit of a rant and slightly exaggerated*
<p>In the past years in the front end world, tools and frameworks have become more and more part of every day life. We have come a long way from the days of old, when starting a project consisted of the following steps:
- Create a folder for the website, say foo.com
- in that folder create a file called index.html
- a css folder with style.css in it. <em>oke, for me this came later as there was no css in 1995</em>

And that was it.

Done, no more steps. We just started writing markup and styling it with css (or inline font tags and such before css). Eventually we wanted to include some images and created a ```img``` directory for that. In some rare cases we needed JavaScript to create some mouseover events if things got really crazy, we may wanted a separate file for that but mostly we did that inline.</p>

*We wised up with the Javascript inline thing eventually, thankfully.*

The whole folder got transferred to the the *foo.com* website with a ftp tool and we where done.

All we needed for skills to get this working were:

- basic html
- some css
- a bit of javascript.

<p>That was it, end of story for the tech stuff. We still needed our other skills of course:</p>
<ul>
    <li>
User interface design basics
    </li><li>graphical design basics</li>
</ul>
<p>Off to the pub, or add blink and marquee tags, whatever strikes your fancy. Life was simple back then.</p>
<h3>Fast forward to today.</h3>
<p>
How different our workflow looks today and how different the skill set we need to do the work. When we now start a project we go about it a bit different:
</p>
<ul><li>set up a github repo
</li><li>choose a javascript framework
</li><li>get it with *npm install*
</li><li>learn the framework
</li><li>choose another framework
</li><li>write a prototype with said framework
</li><li>based on that experience, change the framework again.
</li><li>write javascript for gulp
</li><li>change Gulp for webPack.
</li><li>take a long time learning web pack
</li><li>write javascript for node
</li><li>write javascript to write html
</li><li>write javascript to write css
</li><li>write javascript to write javascript (es6)
</li><li>publish to github using node and web pack.</li></ul>
<p>
Most of what we do is writing JavaScript, a language so handy it is used for everything. And as they say, if all you have is a hammer, everything looks like a nail. So if you use JavaScript for everything, everything you need is JavaScript developers.
</p><p>
As this would seem very strange to the web developer of old, it is the case at many agencies and other places where people develop web sites. Most of the people working at these places are JavaScript developers, very good at some library and most likely ready to switch to another one.
</p><p>
Pure HTML or CSS developers are becoming a rare breed, looked upon by the JavaScript developers as not real developers.
</p><p>
Skills you need now:</p>
<ul>
<li>JavaScript (vanilla but most likely the framework of the month)</li></ul>
<p>
HTML and CSS are an after thought or a necessary evil…
</p>
<h3>Why is this bad (imho)</h3>
<p>
Not bad some might say, but what irks me is that these JavaScript developers are in some cases not real knowledgeable of the web and it’s quirks. Sometimes they are former back end developers that treat JavaScript as just another platform and forget that it can fail and most probably will.
</p><p>
Helped by the lack of information with clients, nowadays more and more projects are built in the fashion that JavaScript is working and that without it the site won’t do anything. In most cases the people that are building it won’t even consider the possibility of a non-JavaScript version.
</p><p>
These people are building a JavaScript web and lack even the knowledge of the plain web that the Flash developers of old had. They at least tried to cater to the html crowd in a way.
</p><h3>Reasons</h3>
<p>
In my opinion this is bad for a number of reasons, for instance accessibility is hindered by this. I know that you can create an accessible website using loads of JavaScript, but the sad reality is that most people just don’t care or don’t know. Most of the champions of the users are not the back end developers turned JavaScript developer, but the HTML jockeys of old.
</p><p>
Another reason is speed, most of the time the framework is chosen to make the developers work faster, not to make the web site faster. This is however in my opinion the most important thing to do. Many back end developers never think about this or about the cost of their bytes in time and money. The average website is getting bigger and bigger and JavaScript is too blame for it almost as much as images are.
</p><p>
Maintainability is another reason, frameworks come and go. I have heard more than one story about projects needing non existent developers for an old framework, one that is too entrenched in the software to be ever cheaply replaced. Vanilla Javascript does not have this drawback.
</p><p>
The user is the main reason, when choosing a JavaScript framework you never hear that this what the user wanted. The user simply wants a fast and pleasant site or application. Not a new framework or library.
</p><h3>What can we do?</h3>
<p>
Speak up and make your selves heard, tell people to embrace the web and the whole web. Don’t put the JavaScript people down, get them aboard, we need them to create awesome stuff. Stuff that works for as many people as possible and excludes none.
</p><p>
Tell your clients that not only the hip and trendy are on the web but everybody, people with bad eyesight and even worse computers. People with fast connections and people without data plans and bad connections on their mobile.
</p><p>
Please stop and think before you start using frameworks, really most of the time you don’t need them, you really are smarter than that. And if you doubt about using one, call me, I’ll talk you out of it, I am here to help…
</p><p><em>Currently I am working on mobile applications written in NativeScript, Angular2 and typescript, so sorry...</em></p>
