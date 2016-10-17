Instructions:

- Add your answers inline to the markdown file.
- Use your own words.
- Come up with an answer from memory. Write it down, even if the answer is "I don't know."
- Then, submit all of your answers in a file to canvas. This is so Lloyd and I can get a sense of your understanding.
- Finally, we will go over the answers in class. Write down your revised answer below your original answer.


---
### Part 1: Control Flow - 15 minutes

1. Write an if statement. Name each of the components and how they work together.

	if  { i < 9 "yay"
	}	else { "boo"
		
	}

2. Write a for loop. Describe each of its components. Indicate the order in which they are executed / evaluated.

	for(var i = 0; i < thing; i++)

3. Functions
 - 3a. Write a function. Describe each of its components and what each component does. Specify which of them are optional.
 	
 	Function Crazy ( factory ) {

 	}

 - 3b. Write a function being called, showing the instruction execution order.

 	Crazy()

---
### Part 2: Data Types - 10 minutes

4. Primitive Data Types
 - 4a. Give an example of an empty string and a non-empty string.
 	
 	var joy = ""
 	var girls = "generation"

 - 4b. Give an example of a boolean.

 	0 == "0"

 - 4c. Give an example of a Number.

 	age: 18

5. Arrays
 - 5a. Give an example of an empty array.

 	var wig = []

 - 5b. Give an example of an array with three elements in it.

 	var baywatch = ["teenage", "mutant", "ninjaturtle"]

 - 5c. How do you add another element to this array?

 	var baywatch["story"]

 - 5d. How do you get the length of this array?

 	baywatch.lenght

 - 5e. Show how to iterate through the array using a loop.

 	var piglet = ['bone', 'sparrow', 'jack']
 	for(var i = 0; i < piglet.lenght i++)

6. Objects
 - 6e. Give an example of an empty object.

 	var obj {}

 - 6b. Give an example of an object with three keys and three values.
  
 	var ball {
 	name: giggle,
 	lastName: ball,
 	gender: ballisious
 	}

 6c. Give an example of an object with two keys and two functions as values.

 	var dribble {
 	goat: function meh(){

 	}, 
 	sheep: function behh(){

 	}
 	}

 - 6d. Describe one way of adding a key to an object.

 	var key { 'one', 'two' }
 	var key.three or var key[three]

 - 6e. Describe the other way of adding a key to an object.

 	see above

 - 6f. Explain the difference between these two ways, and when it is appropriate to use each way.

 	hmm, trick Q! I wasn't prepared. No, in all seriousness I forgot. Shame on me =(

 - 6g. Describe how to iterate though an object using a loop.

 	you can use a for in loop beside the regualar loop. and then you add an empty var to store the outcome of the loop in
 	you'll loop through each key & value and place them in the empty var


---
### Part 3: Algorithms - 20 minutes

7. What is an algorithm?

	math something??? The flow of something, the word has much rythem in it.

8. For the following problem, first write down how exactly to solve the problem in English. Once you are able to describe it in English, translate it into code.

```js
// Given an array of values, write a function that finds the index of where the value is located, and if nothing is found, returns -1.
// Do not use the indexOf function.
// example: for ['apple', 'orange', 'pineapple']
	// 'orange' returns '1'
	// 'durian' returns '-1'
```

0. make up an array with values
1. You start by making an array
2. Then you create a function with a parameter
3. iterate through the array
4. Write an if statement which returns the value of the index when found, and -1 if nothing is found
5. return statement

fruit = ['apple', 'orange', 'mango']

function pen(x) {

	for(var i = 0; i < fruit.lentgh; i++) {
	if i = = fruit[i]
} return fruit[i]
else i = = null {
	return -1
}

}

pen(fruit)

9. Again, for the following problem, first write down how exactly to solve the problem in English. Once you are able to describe it in English, translate it into code.

```js
// Write a function that finds all the indexes of where the value is located and returns them in an array, and if nothing is found, returns -1
// example: ['apple', 'orange', 'orange', 'pineapple']
	// 'orange' returns [1,2]
```

0. make up an array with values
1. write a function with a parameter
2. create a empty array
3. iterate through the array
4. write an if statement which returns [i]
5. else statement which returns -1


fruit = ['apple', 'orange', 'mango']

function pencil(x) {
	var red = []
	for(var i = 0; i < fruit.lentgh; i++) {
	if i = = fruit.lenght
} return red[i]
else i = = null {
	return -1
}

}

pencil(fruit)







