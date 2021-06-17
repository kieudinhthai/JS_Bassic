//some trả về true hoặc false khi một giá trị trong mảng thỏa mãn một đk nào đó

var array = [{course:'php',price :400, isFinish :'false'}, {course:'js', price : 500 ,isFinish :'false'},{course:'ruby', price :600, isFinish :'false'}]

var result = array.some(function(value, index, array){
    return value.isFinish ==true
})
console.log(result);

// xây dựng hàm tương tự 

Array.prototype.some2 = function (callback){
    var output = false;
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
        callback(this[key],key,this)
        if (callback(this[key],key,this)) {
            output = true;
            break;
        }
            
        }
    }
    return output
}

var result2 = array.some2(function(value, index, array){
    return value.isFinish ==true
})
console.log(result2);