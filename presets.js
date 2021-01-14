var body = document.body;
var textContent = body.textContent || body.innerText;
body.innerText = ""
body.textContent = ""
var r = document.createElement("script")
r.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/remark/0.14.0/remark.min.js")
document.head.appendChild(r)
r.onload = function(){
    var head  = document.getElementsByTagName('head')[0];
    var css  = document.createElement('link');
    css.rel  = 'stylesheet';
    css.type = 'text/css';
    css.href = 'https://1-2-3.github.io/remark-it/css/nord-dark.css';
    css.media = 'all';
    head.appendChild(css);
    remark.create({ratio: '16:9', source: textContent})
    //load fonts and activate them
}
