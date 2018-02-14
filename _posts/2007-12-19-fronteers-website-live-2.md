---
layout: post
title:  "Fronteers website live"
date:   2007-12-19 10:00:00 +0100
categories: habari
---
<p>Finally the website of <strong><a href="http://fronteers.nl/">fronteers</a></strong> is live. Go and check it out...</p>
<a href="http://fronteers.nl/" title="fronteers">
<img alt="fronteers logo" src="http://www.wnas.nl/wp-content/uploads/2007/12/fronteerslogo.png"/>
</a>
<p>In this organisation I play a modest part as the <a href="http://fronteers.nl/vereniging/commissies/diplomering">chairman</a> of the 'diplomerings commissie', so please check it out and <strong><a href="http://fronteers.nl/inschrijven">join</a></strong> us...</p>
<p>The one thing that I miss in the site (at first glance) is microformats, so I took the liberty to take this</p>
<pre><code>&#60;p&#62;
	Fronteers
	&#60;br/&#62;
	Postbus 10458
	&#60;br/&#62;
	1001 EL Amsterdam
&#60;/p&#62;</code></pre>
<p>And add a little microformats sauce, to get this...</p>
<pre><code>&#60;p class="vcard" id="vcard-fronteers"&#62;
  &#60;span class="fn org"&#62;Fronteers&#60;/span&#62;
  &#60;span class=" class="adr work"&#62;
    &#60;span class="post-of?ce-box"&#62;Postbus 10458&#60;/span&#62;
    &#60;span class="postal-code"&#62;1001 EL&#60;/span&#62;
    &#60;span class="locality"&#62;Amsterdam&#60;/span&#62;
  &#60;/span&#62;
&#60;/p&#62;</code></pre>
<p>The main advantage is that it makes the same data more useful, as you can easily export it to your address book. This with a simple link to the technorati page, where the transformation occurs, like this</p>
<p class="vcard" id="vcard-fronteers">
	<span class="fn org">Fronteers</span>
	<span class="adr work">
		<span class="post-of?ce-box">Postbus 10458</span><br />
		<span class="postal-code">1001 EL</span> <span class="locality">Amsterdam</span>
	</span>
</p>
<a class="vcard" href="http://feeds.technorati.com/contacts/referrer">Add to adress book</a>
<p>In time I will write my own xslt transformation, so watch out for that.. And clean up that awfull <em>onclick=' bad javascript fu '</em>. I know I am guilty of mixing the unmixable, but hey I try to have a live beside work...</p>
<p>Onclick is no more, the functionality is now handled by referring to another url on the microformats website, this I found at <a href="http://www.artweb-design.de/2007/3/8/technorati-s-hcard-to-vcard-service">Sven Fuch's</a> website, thank you sven.</p>
