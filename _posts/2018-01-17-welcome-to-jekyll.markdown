---
layout: post
title:  "Jekyll!"
date:   2018-01-17 11:37:36 +0100
categories: jekyll
---

After some consideration I decided to build this site with a static site generator, [Jekyll](https://jekyllrb.com/). It turns out it is really as easy as the docs say. This is one of the few times where the 'just do this' really is true...

One of the things I looked for the most as the documentation didn't say where it was, was the location of the theme directory. In my installation is was situated at:
```
/Library/Ruby/Gems/2.3.0/gems/minima-2.1.1
```
It was there that I could see what to override. I, for now, will keep most of the default minima theme.
One of the only things I did was change the header a bit, to make it follow the style of [wnas.nl](https://wnas.nl) a bit. The blue and the logo bit. I finally got around to do my logo in svg, it has taken me years, but now I did it. The code for it is really easy too:
```
<svg
    viewBox="0 0 100 100"
    class="logo"  
    xmlns="http://www.w3.org/2000/svg">
    <circle
        class="logo__outer-circle"
        cx="50" cy="50" r="50"  
        fill="#ffffff"  />
    <circle
        class="logo__middle-cirle"
        cx="48" cy="50" r="32"  
        fill="#0090d2" />
    <circle
        class="logo__inner-circle"
        cx="50" cy="45" r="18"  
        fill="#ffffff"  />
</svg>
```
As a small joke I decided to animate the logo, just because it is possible. So If you think that you're seeing things, you are. The animation is really simple too:
```
@keyframes logoBounce {
    0% {
         transform: scale(1.0);
    }
    60% {
         transform: scale(1.05);
    }
    100% {
         transform: scale(1.0);
    }
}
```
This animation I tie to two of the circles, which I have given a class so I can style them.
```
.logo__middle-cirle {
    animation: logoBounce 33s 3s ease 3;
}

.logo__inner-circle {
    animation: logoBounce 25s 2s ease 4;
}
```

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
