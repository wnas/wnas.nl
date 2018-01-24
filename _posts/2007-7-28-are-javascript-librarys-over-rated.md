---
layout: post
title:  "Are javascript librarys over rated?"
date:   2007-7-28 10:00:00 +0100
categories: habari
---
In the last couple of years I have been writing more and more javascript, starting like everyone else (?) with copying and pasting. But as time went on, first I thought up good ideas for scripts and having someone else write them. And in the end, writing the scripts myself.

I have been using several libraries over the last two years, not all of them a lot, but enough to have at least some idea of what you can do with them. My favourite  was,  and is, jQuery as it let you do stuff easily. That is equally true of just about every library, once you get the feel of the syntax. The main advantage of jQuery for me is that it's syntax so closely resembles css, which I have been using a lot for 5 or 6 years now, and that it is fast.

But, the truth is, I have found something that is even faster! <!--more-->It is called <strong>POJO   </strong>and that stands for: Plain Old Javascript Object. I know, it is harder to write javascript code by your self and not let a library do it, but it does have it's advantages<em> (and yes, I know that it is being used for plain old <strong>java</strong> object)</em>. First let me tell you of the disadvantages.

Longer, code written for a library, like jQuery, is much shorter. Take striping tables for instance, with POJO, you could write

```
function stripe() {
    if (!document.getElementsByTagName) return;
    var even = true;
    var elemTable = document.getElementsByTagName('table');
    if (elemTable != null){
        for (var t = 0; t &lt; elemTable.length; t++) {
            if ((elemTable[t].className == ('results' || ' results') {
                var elemBody = elemTable[t].getElementsByTagName('tbody');
                    for (var b = 0; b &lt; elemBody.length; b++) {
                        var elemRow = elemBody[b].getElementsByTagName('tr');
                        for (var r = 0; r &lt; elemRow.length; r++) {
                            if (elemRow[r] != null) {
                                if (even)
                                elemRow[r].className += (!elemRow[r].className) ? 'even' : ' even';
                                even= !even;
                            }
                        }
                    }
                }
            }
        }
    }
}
```
In this little snippet, I look for a table with a specific className and stripe it. Pretty straightforward and not the best implementation around, but it gets the job done.

In jQuery, I only have to write:
```
function stripe(){
    $(".results tbody tr:nth-child(even)").addClass("even");
}
```
Which is pretty darn short...

What is the catch of this, it is fairly obvious that the last example is easier to write and understandable for everyone, even for the ones with only css knowledge, as it's syntax is so similar.

The catch is, pretty simple, <strong>speed</strong>. The POJO solution is much quicker, as you can see on the test pages. One for jQuery and one for POJ. The results are (on my system macBook pro 2.4ghz 2gb ram) pretty convincing, the POJO does the trick in about <strong>44ms</strong>, jQuery needs <strong>120ms</strong>...

That must be convincing. Javascript libraries and jQuery claims it is  one of the fastest around and (in my opinion rightly so) take to long to compute large blocks of date. I did this experiment with 1000 table rows, I know a total usability disaster, but a good number to get a decent time to measure.

Most people forget that a javascript library makes developing easier (true) but potentially hinder the end user. The time to render this is 3 (three) times as much with jQuery, than it took with plain old javascript objects. Go figure which solution the end user prefers...

This is not a rant against javascript libraries as they take a lot of work from you and make cross browser development much easier for instance. But you should not depend on them too much. Ajax development, fades, animations and drag and drop are some things that I can think of quickly as things that I will not take on without a library (or a PPK in my corner). The point is that you should always think twice to use a javascript library, as the example proves...

If anyone thinks that I have done jQuery injustice, they should grab the zip below and prove me wrong, I know I wannabe as the lazy part of me (the bigger part to be honest) yells out loud.

<a title='pojo vs jquery'>pojo vs jquery</a> ( dead link )
