---
layout: post
title:  "concatenate your scripts kids."
date:   2010-8-6 10:00:00 +0100
categories: habari
---
<p>And here is why...</p><blockquote>
<p><a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec8.html#sec8.1.4">HTTP/1.1: Connections</a>: "Clients that use persistent connections SHOULD limit the number of simultaneous connections that they maintain to a given server. A single-user client SHOULD NOT maintain more than 2 connections with any server or proxy. A proxy SHOULD use up to 2*N connections to another server or proxy, where N is the number of simultaneously active users. These guidelines are intended to improve HTTP response times and avoid congestion."</p>
</blockquote>