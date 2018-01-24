// test
var fs = require("fs");

var src = fs.readFileSync("data.json");

var x = JSON.parse(src).data;


for (var i in x) {
    var date = new Date(x[i].pubdate * 1000),
        day = date.getDate(),
        month = (date.getMonth() + 1),
        year =  date.getFullYear(),
        filename = year + '-' + month + '-' + day + '-' + x[i].slug + '.md',

        content = '---\nlayout: post\ntitle:  "'+x[i].title+'"\ndate:   '+date.getFullYear()+'-'+(date.getMonth() + 1)+'-'+date.getDate() +' 10:00:00 +0100\ncategories: habari\n---\n'+x[i].content;


    console.log(i);
    fs.writeFile(filename, content, function(err, data) {
        if (err) {
            return console.log(err);
        }
    });
}
