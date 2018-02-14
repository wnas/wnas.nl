---
layout: post
title:  "a simple Regular expression explained"
date:   2011-5-19 10:00:00 +0100
categories: habari
---
This is just for me, so please ignore this...

I needed a regular expression and as I am NOT good at them, I dissected this one I got from <a href="https://twitter.com/#!/nickfitz">@nickfitz</a> and extended it a tad.
```
// the expression
^([1-9]\d)+,?\d{0,2}

// start of the line
^
(
	// a numerical character 1 to 9 ( no 0)
	[1-9]
	// any numerical char
	\d
)
// the stuff between brackets above this can be repeated. It should be
there one time or more (another possibility would be *, that would
require zero times or more repeating of the above)
+
// an optional comma
,?
// some numbers can be none up to two
\d{0,2}
```

This should match:
1
15
15,
15,5
15,66

but not:
01
15.
15.55
15,789

Besides the help on twitter from <a href="https://twitter.com/#!/jlix">jlix</a> and <a href="https://twitter.com/#!/tijn">tijn</a> I used <a href="http://reggyapp.com/">reggy</a> to achieve greatness :).
