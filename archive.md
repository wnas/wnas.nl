---
layout: page
title: Archive
permalink: /archive/
---

<ol class="post-list" reversed>
    {% for post in site.posts %}
    <li>
      {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
      <span class="post-meta">{{ post.date | date: date_format }}</span>
      {% include atoms/list-item.md %}
    </li>
    {% endfor %}
</ol>
