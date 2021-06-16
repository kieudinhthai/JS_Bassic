
// Là hàm
// Truyền qua đối số 
// Được gọi lại trong hàm nhận đối số 


var courses =['javascript', 'php', 'ruby']

courses.map(function(coures){
    console.log(coures);
})


//==

function myFunction(course){
    console.log(course);
}

courses.map(myFunction)

var htmls = courses.map(function(course){
    return `<h2> ${course}</h2>`
})


console.log(htmls.join(''));

//------------------------------------------------------
Array.prototype.map2 = function (callback){
    var arrayLength = this.length
    var output = []
    for (let index = 0; index <arrayLength; index++) {
      var result =  callback(this[index],index)
      output.push(result)
        
    }
    return output
}

courses.map2(function(course , index){
   return `<h2> ${course}</h2>`
})



//foreach , reduce, find ,filter