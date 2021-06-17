var array =['a','b','c','a','b','c','a','b','c']

//toán tử giải es6
console.log([...(new Set(array))]);

//đệ quy : hàm gọi lại chính nó có thể tạo nên vòng lặp vô hạn khi không xác định điểm dừng

//1.Xác đinh điểm dừng
//2.Logic handle => tạo ra điểm dừng


function countDown(num){
    if (number >0) {
        return countDown(num-1) //chạy tiếp theo num =2,1 khi num =0 break
    }
    return num //chạy đầu tiên num =3
}


function loop(start, end, cb){
if (start <end ) {
    cb(start)
    return loop(start+1, end, cb)
}
}

var array = ['js','php','ruby']

loop(0,array.length  , function (index){
    console.log(`value: ${array[index]}`);
})


//tính giai thừa

function giaiThua(num){
    if(num >0){
        return num * giaiThua(num -1)
    }
    return 1
}

console.log(giaiThua(7));

//tương đương với vòng lặp

function giaiThua2(num){
    var result =1;
    for (let index = num; index > 0; index--) {
        result = result * index
        
    }
    return result
}
console.log(giaiThua2(7));