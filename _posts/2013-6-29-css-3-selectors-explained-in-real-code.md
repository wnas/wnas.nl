---
layout: post
title:  "CSS 3 selectors explained  'In real code'"
date:   2013-6-29 10:00:00 +0100
categories: habari
---

As I have learned a lot from <a href="http://www.456bereastreet.com/archive/200601/css_3_selectors_explained/">this article</a> by Roger Johansson over the years, I decided that a more practical approach could be usefull for some people.

So I decided to try and reproduce the article with the selectors working in the page. This should help some people who are more practical and can't see past the `E[attr$"val"]`

## Substring matching attribute selector

```
p[data-css3^="foo"] {
    color: green;
}

<p data-css3="foo">
```
Matches any `p` element whose `data-css3` attribute value begins with *foo*.
```
p[data-css3$="bar"]{
    color: red;
}

<p data-css3="bar">
```
Matches any `p` element whose `data-css3` attribute value ends with *bar*.
```
p[data-css3*="test"] {
	color: blue;
}

<p data-css3="test">
```
Matches any `p` element whose `data-css3` attribute value contains the substring *test*.
