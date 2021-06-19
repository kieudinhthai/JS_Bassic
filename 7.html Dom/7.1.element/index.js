var header = document.getElementById('heading')
console.log({heading: header});

var header1 = document.getElementsByClassName('heading')
console.log(header1);

var header2 = document.getElementsByTagName('h1')
console.log(header2);

var header3 = document.querySelector('.heading:first-child')
console.log(header3);

var header4 = document.querySelectorAll('.heading')
console.log(header4);

console.log(document.forms['form1']);
console.log(document.anchors);


//-------------------------------


// var liNode = boxNode.getElementsByTagName('li')
// console.log(liNode);


document.write('hello')


//---------------------------------

var boxNode =document.querySelector('.box')
console.log(boxNode);

boxNode.innerHTML='<h1 title="title-box" id="box">Box Box</h1>'

console.log(document.getElementById('box').innerText);
console.log(document.getElementById('box').getAttribute('title'));

//boxNode.outerHTML= '<span> text </span>'