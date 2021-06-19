var boxElement = document.querySelector('.box')

// boxElement.style.width= '100px'
// boxElement.style.height= '100px'
// boxElement.style.backgroundColor= 'red'


Object.assign(boxElement.style,{
    width:"100px",
    height:"100px",
    backgroundColor:"black"
})

console.log(boxElement.style);


