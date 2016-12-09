// Card content { hidden }
let memory_ar = [ 
'A', 'あ', 'I', 'い', 'U', 'う', 'E', 'え', 'O', 'お', 
'KA', 'か', 'KI', 'き', 'KU', 'く', 'KE', 'け', 'KO', 'こ', 
'SA', 'さ', 'SHI', 'し', 'SU', 'す', 'SE', 'せ', 'SO', 'そ', 
'TA', 'た', 'CHI', 'ち', 'TSU', 'つ', 'TE', 'て', 'TO', 'と', 
'NA', 'な', 'NI', 'に', 'NU', 'ぬ', 'NE', 'ね', 'NO', 'の', 
'HA', 'は', 'HI', 'ひ', 'FU', 'ふ', 'HE', 'へ', 'HO', 'ほ', 
'MA', 'ま', 'MI', 'み', 'MU', 'む', 'ME', 'め', 'MO', 'も', 
'YA', 'や', 'YU', 'ゆ', 'YO', 'よ', 
'RA', 'ら', 'RI', 'り', 'RU', 'る', 'RE', 'れ', 'RO', 'ろ', 
'WA', 'わ', 'WO', 'を', 'N', 'ん'　]

// Empty array to store memory values
let memory_val = [ ]

// Empty array to store memory tile id's
let memory_tile_ids = [ ]

// Keeping track of amount of flipped tilles
let tiles_flipped = 0


// Add a shuffle method to all array objects with the prototype property
Array.prototype.memory_tile_shuffle = function () {
	let i = this.length, j, temp
	while(--i > 0) {
		j = Math.floor(Math.random() * ( i+1 ) )
		temp = this[j]
		this[j] = this[i]
		this[i] = temp
	}
}

// Will reset the # of flipped tiles each time a new board is made
function newBoard = () {
	tiles_flipped = 0
	let output = ''
	// Will shuffle the cards after looping over them
	memory_ar.memory_tile_shuffle()
	for (let i = 0; i < memory_ar.length; i++) {
		output += '<div id="tile_'+i+'" onclick='memoryFlipTile(this.\''+memory_ar[i]+'\')"></div>'
	}
	document.getElementById('memory_board').innerHTML = output
}
























////////////////////////////////////////////////////////////////////////////////////////////////////////////
							////////////////// KHAN TUT //////////////////

// // Defining tile constructor
// let Tile = function(x, y) {
//     this.x = x
//     this.y = y
//     this.width = 70
// }

// // Method that draws the tiles face-down on the canvas
// Tile.prototype.drawFaceDown = function() {
//     fill(214, 247, 202)
//     strokeWeight(2)
//     rect(this.x, this.y, this.width, this.width, 10)
//     image(getImage('/media/img/backsym.png'), this.x, this.y, this.width, this.width)
//     this.isFaceUp = false

// };

// Tile.prototype.drawFaceUp = function() {
//     fill(214, 247, 202)
//     strokeWeight(2)
//     rect(this.x, this.y, this.width, this.width, 10)
//     image(this.face, this.x, this.y, this.width, this.width)
//     this.isFaceUp = true

// }

// Tile.prototype.isUnderMouse = function(x, y) {
//     return x >= this.x && x <= this.x + this.width  &&
//         y >= this.y && y <= this.y + this.width
// }

// // Global config
// let NUM_COLS = 5
// let NUM_ROWS = 4

// // Declare an array of all possible faces


// // Declare an array of all possible faces
// let faces = [
//     getImage("avatars/leafers-seed"),
//     getImage("avatars/leafers-seedling"),
//     getImage("avatars/leafers-sapling"),
//     getImage("avatars/leafers-tree"),
//     getImage("avatars/leafers-ultimate"),
//     getImage("avatars/marcimus"),
//     getImage("avatars/mr-pants"),
//     getImage("avatars/mr-pink"),
//     getImage("avatars/old-spice-man"),
//     getImage("avatars/robot_female_1"),
//     getImage("avatars/piceratops-tree"),
//     getImage("avatars/orange-juice-squid")
// ]

// // Make an array which has 2 of each, then randomize it
// let possibleFaces = faces.slice(0)
// let selected = []
// for (let i = 0; i < (NUM_COLS * NUM_ROWS) / 2; i++) {
//     // Randomly pick one from the array of remaining faces
//     let randomInd = floor(random(possibleFaces.length))
//     let face = possibleFaces[randomInd]
//     // Push twice onto array
//     selected.push(face)
//     selected.push(face)
//     // Remove from array
//     possibleFaces.splice(randomInd, 1)
// }

// // Now we need to randomize the array
// selected.sort(function() {
//     return 0.5 - random()
// })

// // The outer loop will itirate for as many colums as wanted
// // Inner loop will iterate for each of the rows 
// // Each new tile is initialized with an x & y that correspond to that row & column
// // Initializing an empty array
// let tiles = [ ]
// let NUM_COLS = 5;
// let NUM_ROWS = 4;
// for (let i = 0; i < NUM_COLS; i++) {
//     for (let j = 0; j < NUM_ROWS; j++) {
//         tiles.push(new Tile(i * 78 + 10, j * 78 + 40))
//     }
// }

// background(255, 255, 255)

// // Now draw them face up
// for (let i = 0; i < tiles.length; i++) {
//     tiles[i].drawFaceDown()
// }

// let flippedTiles = []
// let delayStartFC = null
// let numTries = 0

// mouseClicked = function() {
//     for (let i = 0; i < tiles.length; i++) {
//         if (tiles[i].isUnderMouse(mouseX, mouseY)) {
//             if (flippedTiles.length < 2 && !tiles[i].isFaceUp) {
//                 tiles[i].drawFaceUp()
//                 flippedTiles.push(tiles[i])
//                 if (flippedTiles.length === 2) {
//                     numTries++
//                     if (flippedTiles[0].face === flippedTiles[1].face) {
//                         flippedTiles[0].isMatch = true
//                         flippedTiles[1].isMatch = true
//                     }
//                     delayStartFC = frameCount
//                     loop()
//                 }
//             } 
//         }
//     }
//     let foundAllMatches = true
//     for (let i = 0; i < tiles.length; i++) {
//         foundAllMatches = foundAllMatches && tiles[i].isMatch
//     }
//     if (foundAllMatches) {
//         fill(0, 0, 0)
//         textSize(20)
//         text("You found them all in " + numTries + " tries!", 20, 375)
//     }
// }

// draw = function() {
//     if (delayStartFC && (frameCount - delayStartFC) > 30) {
//         for (let i = 0; i < tiles.length; i++) {
//             if (!tiles[i].isMatch) {
//                 tiles[i].drawFaceDown()
//             }
//         }
//         flippedTiles = []
//         delayStartFC = null
//         noLoop()
//     }
// }















