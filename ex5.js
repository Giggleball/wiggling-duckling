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

var object = {
	keys: ['Tokyo', 'Jeju'], 
	values ['sushi', 'abalone'] 
}

function twoArrays( val, key ) {

	
	for (var key in object) {
		console.log(key + " : " values[key] + "<br>");
	}
}

twoArrays()	 //I am confused, I get what has to happen, but it doesn't work -_-'...


// #6

//I am still stuck :(

