var array =[1,2,3,4,5]


var result =array.filter(function(value,index, array){
return value >3
})

console.log(result);



var result2 =array2.filter(function(value,index,array){
    return value.price >=800
    })

    console.log(result2);

// viết lại hàm


Array.prototype.filter2= function(callback){
    var output= []
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
        var result= callback(this[key], key, this);
        if (result) {
            output.push(this[key])
            }      
        }
    }
    return output
}

var result2 =array2.filter2(function(value,index,array){
    return value.price >=800
    })

    console.log(result2);