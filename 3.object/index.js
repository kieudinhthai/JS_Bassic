//Object 

var emailKey = 'email'

var myInfor = {
    name : 'Thai',
    age : 21,
    address: 'Lam Dong, VN',
    [emailKey]:'abc@gmail.com',
    getName : function(){
        return this.name
    }
}

var myKey = 'address'

console.log(myInfor.name);
console.log(myInfor[myKey]);
console.log(myInfor);


//delete key-value
delete myInfor.age
console.log(myInfor);

console.log(myInfor.getName());


// object prototype

function user (firstname, lastname, avatar){
    this.firstname = firstname,
    this.lastname = lastname, 
    this.avatar = avatar,
    this.getName = function (){
        return `${this.firstname} ${this.lastname}` 
    }
}

user.prototype.classname = 'dhcn'
user.prototype.getClass = function(){
    return this.classname
}

var user1 = new user('kieu','thai' ,'avatar 1')
var user2 = new user('kieu','thai' ,'avatar 12')

console.log(user1.classname);
console.log(user2.getClass());
