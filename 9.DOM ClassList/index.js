var boxElement = document.querySelector('.box')

console.log(boxElement.classList);

boxElement.classList.add('red','blue')

//kiểm tra 1 class có tồn tại k 
console.log(boxElement.classList.contains('red'));

// setTimeout(()=> {
//     boxElement.classList.remove('red')},3000
// )

setInterval(() => {
    boxElement.classList.toggle('red')},1000
)


