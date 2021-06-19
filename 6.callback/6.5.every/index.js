//every trả về giá trị true hoặc false khi tất cả các giá trị thỏa mãn một biểu thức điều kiện đúng 

var array = [{course:'php',price :400, isFinish :'false'}, {course:'js', price : 500 ,isFinish :'false'},{course:'ruby', price :600, isFinish :'false'}]


var result = array.every(function(value,index,array){
    return value.price > 400
})

console.log(result);

//viết hàm tương đương

Array.prototype.every2= function(callback){
    var output = true;
    for (const key in this) {
        if (this.hasOwnProperty( key)) {
            if (!callback(this[key],key,this)) {
                output = false
                break
            }
            
        }
    }
    return output
}

var result2 = array.every2(function(value,index,array){
    return value.price > 400
})

console.log(result2);