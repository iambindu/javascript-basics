var person1={name:"ByreGowda",age:28}
var person2={name:"SundarKrishna",age:28}
function sayHello(message,wish){
	return message+" "+this.name+" "+this.age+" "+wish
}
var msg1=sayHello.bind(person1,"Hello")
console.log(msg1())
var msg2=sayHello.bind(person2,"Hello")
console.log(msg2())

var msg3=sayHello.call(person2,"Hello","Be Happy")
console.log(msg3)
var msg4=sayHello.apply(person1,["Hello","Be Happy"])
console.log(msg4)