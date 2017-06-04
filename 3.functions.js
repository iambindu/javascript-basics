/***********Creating Functions********
/*******1.Regular Functions*********/
function sayHello(){
	console.log("Hello World !!")
}
var message=sayHello();
console.log(message);



/*******2.Anonymous functions *****/
var sayAgain=function(){
	return "Hello Again !!!"
}
console.log(sayAgain());



/*******Constructor Function*******/
function Person(firstName,lastName){
	this.firstName=firstName;
	this.lastName=lastName;
	
}
Person.prototype.fullName=function(){
		return this.firstName+" "+this.lastName;
	}

var newPerson1=new Person("Raj","Yadava");
var newPerson2=new Person("Sunder","Yadava");
var newPerson3=new Person("krish","Yadava");


console.log(newPerson1.fullName())
console.log(newPerson2.fullName())
console.log(newPerson3.fullName())

// /*********4.self Invoking Function*******/
// (function(message){
// 	console.log('Hello'+message)
// })("Bindu")