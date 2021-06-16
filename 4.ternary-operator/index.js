// toán tử 3 ngôi --ternary operator

var course = {
    name : 'javascript',
    coin : 2005
}

//--if-else
if(course.coin >0){
    console.log(course.coin);
}else{
    console.log('free');
}

//--ternary operator

var result = course.coin >0 ? course.coin :'free'
console.log(result);