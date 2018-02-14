---
layout: post
title:  "vodafone umts on leopard"
date:   2008-1-18 10:00:00 +0100
categories: habari
---
<p>So I finally gave up hope on having internet on the train. Unlike in scandinavia, that will not happen in the netherlands for quite some time. Still I spend more than 2 hours in a train each day, time I want to use to work.</p>
<a href="http://www.flickr.com/photos/57462165@N00/2200707909" title="View 'Expresscard.png' on Flickr.com"><img src="http://static.flickr.com/2215/2200707909_a98d0f2088.jpg" alt="Expresscard.png" /></a>
<p>
So in order to connect to the outside world I went with the solution from <a href="http://www.vodafone.nl/shop/package/phonePackege.jsp?catId=cat12850007&confSkuId=sku14250045&_requestid=1007970">Vodafone</a>. A solution which did not, to my surprise, comes with mac support. Yes, still in this day and age, we mac users represent a minority and are very scary. Knowing that I had no support I still took the gamble as I had the right to return everything within 48 hours. Something that gave me the freedom to try and make it work.
</p>
<p>
My first attempts were not working and even a bit frustrating. I followed the instructions and they only resulted in a blue and a <strong>red</strong> flashing light, but no connection. A situation which was not that common to me as I expect things to work. I have a mac and truly expect things to work when I plug them in...
</p>
<p>
So, as I didn't figure it out in time, I turned to the <a href="http://www.vodafone.nl/zakelijk/klantenservice/contact">Vodafone</a> helpdesk, fully expected to be confirmed in my bad expectations. What was my surprise, they (or the one guy I talked to Mark B.) actually helped me.
</p>
<p>
They were very honest about not supporting <a href="http://www.apple.com/nl/macosx/">leopard</a> but still had a few pointers for me. Those turned out to be very helpfull, so I will repeat them here for you in the hope that I can help someone else...
</p>
<h3>The solution</h3>
<p>
It turns out that leopard comes with a few drivers that conflict with the vodafone ones. So if you simple erase those and than install the vodafone software, all is well.
</p>
<p>
So if you want stuff to work, go to <em>systeem/bibliotheek/extensions/IOSerialfamily.kext/contents/plugins/</em>, look for packages like: <em>AppleWWANSupport1.kext, AppleWWANVerizon.kext</em> erase those, restart and install the vodafone stuff you're done.
</p>
<p>So to conclude, some helpdesk people actually help you and here is a way to use the vodafone stuff on leopard. I hope that this helps someone...
</p>
