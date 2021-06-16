var courses = ['java','python','c#']

var array = courses.map(function(item){  
   return `<h2>${item}</h2>`
})
console.log(array);

var map = courses.map(function(item){
    console.log(item);
    return item;
    
})
console.log(map);
console.log(courses);


//Viết hàm để trả về kết quả tương đương 


//định nghĩa một prototype gán nó với một function 
//hoạt động bằng cách   
    Array.prototype.map2 = function(callback){
        var arrayLength = array.length
        var newArray = []
//lặp qua các phần tử trong mảng
        for (let index = 0; index < arrayLength; index++) {
//và gọi lại function callback sau mỗi lần lặp 
          var result= callback(this[index],index)
            newArray.push(result)       
        }
//trả về mảng mới mak các item trong mảng đã đượcthanh đổi bởi callback function 
        return newArray
    }

var array2 = courses.map2(function(item){
    return `<h2>${item}</h2>`
})
console.log(array2);
