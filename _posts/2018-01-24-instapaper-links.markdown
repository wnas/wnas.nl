---
layout: instapaper
title:  "Link bait 24-1-18"
date:   2018-01-24 11:09:36 +0100
categories: links
---

I collected some nice links the past few weeks and would like to share 'm with you

{% for item in site.data.instapaper.items %}
- [{{ item.title }}]({{item.link}})<br />{{ item.description}}
{% endfor %}
