var array = ['java', 'python','c#']

array.forEach(function (value, index, array){
    console.log(value, index, array);
})


//xây dựng hàm trả về kết quả tương tự 

Array.prototype.forEach2 = function(callback){
//sử dụng forin để lặp qua tất cả các phần tử trong mảng tuy nhiền forin sẽ lặp qua cả các phần tử trong proto 
    for (const index in this) {
//bằng cách sử dụng điều kiện dưới đây đẻ lọc ra các phần tử có key gần nhất
        if (this.hasOwnProperty(index)) {
           callback(this[index], index, this)
        }
    }
}


array.forEach2(function (value, index, array){
    console.log(value, index, array);
})