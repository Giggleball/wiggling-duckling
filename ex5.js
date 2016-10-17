// #1

function gummyBears( e, d, g ) {
	return e + d + g 
}

gummyBears(3,7,8)


// #2

var str = "animation"
var other = "joehoe"

//you can select characters of a string by using array-notation

function let (string) {
	return string[string.length-1]
}

console.log(let(str))
console.log(let(other))



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
// create object
var ob = { 
	T: 'woop', 
	J: 'bleep', 
	F: 'zoof' 
};

// create function with an object with 2 empty arrays where you want to store your data in
function transformobject( obj ) {
	//create a different object
	var bob = {
		keys: [],
		values: []
	}
	
	//
	// loop through the object that been put in the function and push the keys AND the values in bob.keys and bob.values
	for(var key in obj) {
		bob.keys.push(key);
		bob.values.push(obj[key])
	}

   // return the object
   return bob
}


transformobject(obj)
