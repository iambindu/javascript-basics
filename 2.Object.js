/*//Objects

var obj1=new Object();
console.log(obj1)

var obj2={};
console.log(obj2)

var obj3=Object.create(null);
console.log(obj3)

function Person(){

}
var obj4=new Person();
console.log(obj4)



//Adding Properties to the objects
var obj={id:1};
obj["name"]="Bindu";
obj.city="Banglore";
Object.defineProperty(obj,'state',{
	value:"KA"
})
delete obj.city;
console.log(obj)*/
/*//Modifying Object
//1.preventExtensions()
// *Allow us to modify existing property
// but we cannot add the property to the existing property
//and also we can delete existing property
var person1={name:"john",age:'34'}
Object.preventExtensions(person1)
person1.name="bindu";
person1.city="Banglore";
delete person1.age;
console.log(person1)
*/


/*//2.Using Seal
//We cannot add or delete a property
//but we can modify the value to the existing property
var person2={name:"john",age:'34'}
Object.seal(person2)
person2.name="bindu";
person2.city="Banglore";
delete person2.age;
console.log(person2)
*/

/*//2.Using Freeze
//We cannot add or delete a property
//but we cannot modify the value to the existing property
var person3={name:"john",age:'34'}
Object.freeze(person3)
person3.name="bindu";
person3.city="Banglore";
delete person3.age;
console.log(person3)
*/

/*/**************Adding Properties and methods to object*************

var person={
	firstName:"scott",
	lastName:"Desatnick",
	fullName:function(){
		return this.firstName+" "+this.lastName;
	}
}
var firstName=person.firstName;
var fullName=person.fullName();
console.log(firstName);
console.log(fullName)

*/
// /**************Get keys from an object*************/
// var customer={
// 	name:"bindu",
// 	city:"Boston",
// 	title:"Techminds",
// 	age:24
// }
// var keys=Object.keys(customer);
// console.log(keys)
// var values=Object.values(customer);
// console.log(values)


