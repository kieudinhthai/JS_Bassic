var languages = ['javascript', 'php', 'ruby']

//------------toString
console.log(languages.toString());

//------------Join
// biến array thành  một chuỗi 
console.log(languages.join(','));
console.log(typeof languages.join(','));

//------------Pop
// xóa phần tử cuối mảng và trả về phần tử đó 
console.log(languages.pop());
console.log(languages);

//------------Push
// thêm phần tử vào cuối mảng và trả về độ dài mới của mảng
console.log(languages.push('dart','java'));
console.log(languages);

//------------Shift
// xóa đi phần tử đầu mảng và trả vền phần tử đó
console.log(languages.shift());
console.log(languages);

//------------UnShift
// thêm phần tử mới vào đầu mảng và trả về độ dài mảng 
console.log(languages.unshift('python','java'));
console.log(languages);

//------------Splicing
// xóa, cắt, chèn phần tử mới vào mảng
//--xóa
languages.splice(1,2)
console.log(languages);
//--chèn
languages.splice(1,1,'c#')
console.log(languages);

//------------Concat
// nối array
var array=['dart','ruby']
console.log(languages.concat(array));

//------------Slicing
//cắt lấy một số phần tử của mảng 
console.log(languages.slice(2));