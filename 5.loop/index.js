//Loop
var array = ['java', 'php', 'ruby','python']

var object = {
    name :'thai',
    age : 21,
    address : 'Lam dong'
}

var string = 'javascript'


//1. for lặp với điều kiện đúng 
console.log('-------------------');
for (var i =0; i<array.length ; i++){
    console.log(array[i]);
}


//2. for/in lặp qua keys của đối tượng 
console.log('-------------------');
for (var key in object){
    console.log(key);
    console.log(object[key]);
}
console.log('-------------------');
for(var key in array){
    console.log(key);
    console.log(array[key]);
}
console.log('-------------------');
for(var key in string){
    console.log(key);
    console.log(string[key]);
}


//for/of lặp qua values của các đối tượng trong mảng 

console.log('-------------------');
for (var key of array){
    console.log(key);
}
console.log('-------------------');
for(var key of Object.keys(object)){
    console.log(key);
    console.log(object[key]);
  
}

//while loop
console.log('-------------------');
var i =0;
while (i<10){
    i++;
    console.log(i);
}

console.log('-------------------');

var i =0;
while (i<array.length){
    i++;
    console.log(array[i]);
}


//do-while

console.log('-------------------');

var i =0;
var isSuccess = false;
do{
i++;
console.log('nhập lần '+i);
if(false){
    isSuccess= true;
}

}

while(!isSuccess & i<3 )

//break and continue
console.log('-------------------break');
for (let index = 0;  index < 10; index++) {

        if (index %2 ==0) {
        continue;
    }

    if(index >5){
        break;
    }

    console.log(index);
}


//Nested -loop
array2 = [[1,3], [1,2,3], [1,2,3,4]]

for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array2[i].length; j++) {
       console.log(array2[i][j]);
        
    }
    
}