// #1

function gummyBears( e, d, g ) {
	return e + d + g 
}

gummyBears(3,7,8)


// #2

function letters() {
	var str = "animation"
	return str.charAt(8) 
}

console.log(letters())


// #3

function cubey( x ) {
	return Math.pow ( x, 3)
}

console.log(cubey(4))

//  perhaps this method was meant or this??

// function power(base, exponent) {
//   if (exponent == 0)
//     return 1;
//   else
//     return base * power(base, exponent - 1);
// }

// console.log(power(2, 3)); 


// #4

function reString( str ) {
	var newString = "";

	for (var i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}
	return newString;
}

reString( 'oyasumi')


// #5

var keys = ['Tokyo', 'Jeju']
var values = ['sushi', 'abalone'] 


function twoArrays( a, b ) {
	//create object
	var object = {}
	// loop through arrays and store values and keys in object
	for (var i = 0; i < a.length; i++) {
		object[keys[i]] = values[i];

		
	}
	return object 
}
console.log(twoArrays(keys, values)) 


// #6

// Given an object with keys and values, create two arrays: one which contains the object's keys,
// and one which contains the object's values. Wrap this into a function which takes in one object
// that contains keys and values, and returns a different object that contains two keys. The first key
// should be named "keys" and will have the first array as a value. The second key should be named
// "values" and will have the second array as a value.
// examples:
// { exciting: "markets", exotic: "britain" } --> { keys: ["exciting", "exotic"], values: ["markets", "britain"] }
// { a: "x", b: "y", c: "z" } --> { keys: ["a", "b", "c"], values: ["x", "y", "z"] }


var object = {
	keys: ['T', 'J', 'M']
	values: ['3', '6', '8'] 
}; 

this.toString = function twoArrays() {
	//create object
	var object = {}
	// loop through arrays and store values and keys in object
	for (var i = 0; i < z.length; i++) {
		object[keys[i]] = values[i];

}
	return object 
}
console.log(twoArrays(keys, values)) 




