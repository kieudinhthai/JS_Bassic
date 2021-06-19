var headingElement = document.getElementById('heading-test')
//trả lại những thứ tồn tại thật sự trong  text node 
console.log(headingElement.textContent);
//trả lại những gì hiển thị trên trình duyệt
//là thuộc tính tồn tại trên element node
console.log(headingElement.innerText);
//  headingElement.innerText = 'new Heading'
console.log(headingElement);