---
layout: post
title:  "on air tour (part 2)"
date:   2008-4-4 10:00:00 +0100
categories: habari
---
<h3>Deploying and Updating AIR Applications (Serge Jespers)</h3>
<blockquote>Packaging, deploying and updating your application are probably the most important basics you'll need to know about. Serge will show you how to use Flex Builder 3 and the command line tools to sign and package your application, how to use the install badge, create custom install badges and how to keep your application up to date.</blockquote>
<p>
<a href="http://sergejespers.com/" class="vcard fn url">serge</a> demostrates the world smallest video player, it plays hd in 16 by 16 pixels.</p><p>He then goes on with the presentation.</p>
<ol>
<li><h4>step 1, get a certificate</h4>
<p>From thawte.com for 299 $ for one year with firefox. This to get a green (thrustworthy) icon in your installer.</p>
</li>
<li><h4>step 2 deploying your app</h4>
<p>using the standard install badge is one way.</p><p>Another way is to use the beta install badge, looks nicer and has extra features. You can get it <a href="http://labs.adobe.com/wiki/index.php/AIR_Badge">here</a></p><p>The third way is to use a custom install badge, something you can build your self, so looks and functionality is up to you.</p>
</li>
<li><h4>step 3 Update your application</h4>
<p>He gives us 5 steps to do this, these I will hope to link to later, he will post them on his site. He explains how this is easy with flex in contrast with flash. As it already has a lot of stuff in it, to make development easier.</p>
</li>
</ol>
<h3>Adobe AIR API Overview (Daniel Dura)</h3>
<blockquote>Receive an overview of the new APIs that Adobe makes available to applications. Both  and JavaScript examples will be shown.</blockquote>
<p>Daniel Dura gives an overview of the most used api's, like window a subject you could spend a full day on covering it. He just covers the basics, normal window, lightweight window and utility window. Startmove() function is one of the reasons that I see myself writing air applications, it gives you so much extra functions...</p><p>After the html api, he goes to the File I/O api. This is the one that gives air so much extra over web applications. With this you have the possibility to read or write stuff to you computer. Make sure to close your filestream though, otherwise you will lock your computer..
</p><p>Drag and drop / clipboard is another powerfull api to enhance the users experience. It enables the user to interact with your application in a <em>normal</em> manner, something that cost so much more trouble with just javascript.
</p><p>For more info look at his <a href="http://www.danieldura.com/">site</a>, which has the <a href="http://www.danieldura.com/archive/updated-air-example-code">slides</a>.</p>
<h3>Data Intensive Enterprise AIR Applications (Enrique Duvos)</h3>
<blockquote>
The need to optimize data handling and transfers in RIAs has become increasingly important in Enterprise applications. During this session Enrique will take a look at how the combination of Adobe AIR's offline local caches via SQLite, and its native connectivity to Adobe Livecycle Data Services data management services, gives developers a powerful framework to deliver data intensive RIAs outside the browser.
</blockquote>
<p>The first one which tell anything about preformance. Heard nothing about air's memory leak though. Explains the way that you can build flex and air apps with the same code base that talk to a java backend, very nice...</p><p>He shows a way to synchronize the data between client and server, in a nice way. You can check the connection and see if it's up or down, furthermore it can see if data is the same on or offline. Not sure if you have to use adobe's lifecycle though...
</p><p>Maybe you can read about it on his <a href="http://flex.typepad.com/">site</a></p>
<h3>Introduction to SQLite in Adobe AIR (Peter Elst)</h3>
<blockquote>
Learn all about local database support with SQLite in Adobe AIR, how the use the available API's and build a complete data driven application from scratch. This session will help you get started with several tips and tricks on how to work with data in your desktop RIA's.
</blockquote>
<p>This is the one I hope to learn a lot from, if only pointers to where to start. It looks really easy, minimum amounts of code to do cool stuff. Paging is build in in a nice (not new) way, almost equal to mySql. Transactions look like a nice way to do lots of stuff in a fast and secure way.
</p><p>I still don't know how the html is rendered in the air client, which is webkit and how it can or will affect performance...  This will not be a problem with flex, which creates flash (imho).
</p><p>Drag and drop is a part of flex/air that they are proud of showing, it is super easy and being shown now for the third time.  Peter is using a trial version of flex builder, apparently all the money went to our lunch. Still this is by far the most interesting presentation so far, very good. The level is right for me, a bit over my head so I learn something but not too much.</p><p>He has a <a href="http://peterelst.com">site</a>, which has the <a href="http://www.peterelst.com/blog/2008/04/07/introduction-to-sqlite-in-adobe-air/">slides</a> on it.</p>