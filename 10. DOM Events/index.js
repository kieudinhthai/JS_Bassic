
var h1E = document.getElementById('h1Element')
console.log(h1E);

var h1Element = document.querySelectorAll('h1')
var arrayLength = h1Element.length
for (let i = 0; i < arrayLength; i++) {
   h1Element[i].onclick = function(e){
       console.log(e.target);
   }
    
}

///input 
var inputElement = document.querySelector('input[type="text"]')
inputElement.onchange = function (e){
    console.log(e.target.value);
}

var checkBoxElement = document.querySelector('input[type="checkbox"]')
checkBoxElement.onchange = function(e){
    console.log(e.target.checked);
}


var selectElement = document.querySelector('select')
selectElement.onchange = function(e){
    console.log(e.target.value);
}


// key up and key down 

document.onkeypress = function(e){
    console.log(e.which);

    switch (e.which) {
        case 27:
            console.log('Exit');
            break;
        case 13:
            console.log('Enter');
            break;
    
        
    }
}

inputElement.onkeyup = function (e){
    if (e.which==27) {
        console.log('ESC');
    }
}


//prevent default --chặn hành vi mặc định 

// lấy ra cace element thẻ a tuy nhiên phải có attribute name
//var aElements = doucment.anchors;

//lấy nhanh tất cả các thẻ a 
var aElements = document.links

for (var i = 0; i < aElements.length; i++)
{
    aElements[i].onclick = function(e){
        console.log(e.target.href);

        if (!e.target.href.startsWith('https://www.facebook.com/')) {
            e.preventDefault();
            
        }
    }
}


var ulElement = document.querySelector('ul')

ulElement.onmousedown = function(e) {
    e.preventDefault();
}

ulElement.onclick = function (e) {
    console.log(e.target);
}

//--ngăn chặn nổi bọt

document.getElementById('click').onclick= function (e) {
    console.log('div');
}

document.querySelector('button').onclick= function (e) {
    e.stopPropagation()
    console.log('click me');
}
