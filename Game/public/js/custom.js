$(document).ready(function () {
	$('#submit').click(function(event) {
		if($('#username').val().trim().length === 0 || $('#password').val().trim().length === 0) {
			event.preventDefault();
			$('#error-message').html('Your username or password is empty.')
		}
	})
	
	// Show only one form
	$('#second').hide(function() {
	})


	// On Click SignUp It Will Hide Login Form and Display Registration form
	$('#signup').click(function() {
		$('#first').slideUp('slow', function() {
			$('#second').slideDown('slow');
		})
	})


	// On Click SignIn It Will Hide Registration Form and Display Login Form
	$('#signin').click(function() {
		$('#second').slideUp('slow', function() {
			$('#first').slideDown('slow');
		})
	})

////////////////////////////////////////////////////////////////////////////////////////////////////////////
							////////////////// MeM0Bo@rD #4 Quizy plugin //////////////////



	$('#my-memorygame').quizyMemoryGame( {
		itemWidth: 98, itemHeight: 98, itemsMargin:40, colCount:5, animType:'flip' , flipAnim:'tb', animSpeed:180, resultIcons:true});
	


////////////////////////////////////////////////////////////////////////////////////////////////////////////
							////////////////// MeM0Bo@rD //////////////////


	// // Card content { hidden }
	// let memory_ar = [ 
	// 'A', 'あ', 'I', 'い', 'U', 'う', 'E', 'え', 'O', 'お', 
	// 'KA', 'か', 'KI', 'き', 'KU', 'く', 'KE', 'け', 'KO', 'こ', 
	// 'SA', 'さ', 'SHI', 'し', 'SU', 'す', 'SE', 'せ', 'SO', 'そ', 
	// 'TA', 'た', 'CHI', 'ち', 'TSU', 'つ', 'TE', 'て', 'TO', 'と', 
	// 'NA', 'な', 'NI', 'に', 'NU', 'ぬ', 'NE', 'ね', 'NO', 'の', 
	// 'HA', 'は', 'HI', 'ひ', 'FU', 'ふ', 'HE', 'へ', 'HO', 'ほ', 
	// 'MA', 'ま', 'MI', 'み', 'MU', 'む', 'ME', 'め', 'MO', 'も', 
	// 'YA', 'や', 'YU', 'ゆ', 'YO', 'よ', 
	// 'RA', 'ら', 'RI', 'り', 'RU', 'る', 'RE', 'れ', 'RO', 'ろ', 
	// 'WA', 'わ', 'WO', 'を', 'N', 'ん'　]

	// // Empty array to store memory values
	// let memory_val = [ ]

	// // Empty array to store memory tile id's
	// let memory_tile_ids = [ ]

	// // Keeping track of amount of flipped tilles
	// let tiles_flipped = 0


	// // Add a shuffle method to all array objects with the prototype property
	// Array.prototype.memory_tile_shuffle = function () {
	// 	let i = this.length, j, temp
	// 	while(--i > 0) {
	// 		j = Math.floor(Math.random() * ( i+1 ) )
	// 		temp = this[j]
	// 		this[j] = this[i]
	// 		this[i] = temp
	// 	}
	// }

	// // Will reset the # of flipped tiles each time a new board is made
	// function newBoard = () {
	// 	tiles_flipped = 0
	// 	let output = ''
	// 	// Will shuffle the cards after looping over them
	// 	memory_ar.memory_tile_shuffle()
	// 	for (let i = 0; i < memory_ar.length; i++) {
	// 		output += '<div id="tile_'+i+'" onclick='memoryFlipTile(this.\''+memory_ar[i]+'\')"></div>'
	// 	}
	// 	document.getElementById('memory_board').innerHTML = output
	// }











////////////////////////////////////////////////////////////////////////////////////////////////////////////
							////////////////// MeM0Bo@rD #2 //////////////////


	// let app = {
	// 	memory_ar: [
	// 		'A', 'あ', 'I', 'い', 'U', 'う', 'E', 'え', 'O', 'お', 
	// 		'KA', 'か', 'KI', 'き', 'KU', 'く', 'KE', 'け', 'KO', 'こ', 
	// 		'SA', 'さ', 'SHI', 'し', 'SU', 'す', 'SE', 'せ', 'SO', 'そ' ],
		
	// 	init: function () {
	// 		app.shuffle( )
	// 	},
		
	// 	shuffle: function() {
	//       let random = 0
	//       let temp = 0
	//       for (i = 1; i < app.memory_ar.length; i++) {
	//         random = Math.round(Math.random() * i)
	//         temp = app.memory_ar[i]
	//         app.memory_ar[i] = app.memory_ar[random]
	//         app.memory_ar[random] = temp
	//       }
     
	//     app.assignCards();
	//     console.log('Shuffled Card Array: ' + app.memory_ar)
	//     },
	   
	//     assignCards: function() {
	//       $('.memory_ar').each(function(index) {
	//         $(this).attr('data-card-value', app.memory_ar[index])
	//       })
	//       app.clickHandlers()
	//     },
	    
	//     clickHandlers: function() {
	//       $('.memory_ar').on('click', function() {
	//         $(this).html('<p>' + $(this).data('cardValue') + '</p>').addClass('selected')
	//         app.checkMatch()
	//       })
	//     },
	    
	//     checkMatch: function() {
	//       if ($('.selected').length === 2) {
	//         if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')) {
	//           $('.selected').each(function() {
	//             $(this).animate({
	//               opacity: 0
	//             }).removeClass('unmatched')
	//           })
	//           $('.selected').each(function() {
	//             $(this).removeClass('selected')
	//           })
	//           app.checkWin()
	//         } else {
	//           setTimeout(function() {
	//             $('.selected').each(function() {
	//               $(this).html('').removeClass('selected')
	//             })
	//           }, 1000)
	//         }
	//       }
	//     },
	    
	//     checkWin: function() {
	//       if ($('.unmatched').length === 0) {
	//         $('.container').html('<h1>You Won!</h1>')
	//       }
	//     }
	// }
	// app.init()


////////////////////////////////////////////////////////////////////////////////////////////////////////////
							////////////////// MeM0Bo@rD #3 //////////////////



	
// 	var Memory = {
// 		// Initialize the game
// 		init: function(cards){
// 			this.$game = $(".game");
// 			this.$modal = $(".modal");
// 			this.$overlay = $(".modal-overlay");
// 			this.$restartButton = $("button.restart");
// 			this.cardsArray = $.merge(cards, cards);
// 			this.shuffleCards(this.cardsArray);
// 			this.setup();
// 		},

// 		shuffleCards: function(cardsArray){
// 			this.$cards = $(this.shuffle(this.cardsArray));
// 		},

// 		setup: function(){
// 			this.html = this.buildHTML();
// 			this.$game.html(this.html);
// 			this.$memoryCards = $(".card");
// 			this.binding();
// 			this.paused = false;
//      	this.guess = null;
// 		},

// 		binding: function(){
// 			this.$memoryCards.on("click", this.cardClicked);
// 			this.$restartButton.on("click", $.proxy(this.reset, this));
// 		},
// 		// kinda messy but hey
// 		cardClicked: function(){
// 			var _ = Memory;
// 			var $card = $(this);
// 			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
// 				$card.find(".inside").addClass("picked");
// 				if(!_.guess){
// 					_.guess = $(this).attr("data-id");
// 				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
// 					$(".picked").addClass("matched");
// 					_.guess = null;
// 				} else {
// 					_.guess = null;
// 					_.paused = true;
// 					setTimeout(function(){
// 						$(".picked").removeClass("picked");
// 						Memory.paused = false;
// 					}, 600);
// 				}
// 				if($(".matched").length == $(".card").length){
// 					_.win();
// 				}
// 			}
// 		},

// 		win: function(){
// 			this.paused = true;
// 			setTimeout(function(){
// 				Memory.showModal();
// 				Memory.$game.fadeOut();
// 			}, 1000);
// 		},

// 		showModal: function(){
// 			this.$overlay.show();
// 			this.$modal.fadeIn("slow");
// 		},

// 		hideModal: function(){
// 			this.$overlay.hide();
// 			this.$modal.hide();
// 		},
// 		// Will reset the # of flipped tiles each time a new board is made
// 		reset: function(){
// 			this.hideModal();
// 			this.shuffleCards(this.cardsArray);
// 			this.setup();
// 			this.$game.show("slow");
// 		},

// 		// Fisher--Yates Algorithm -- http://bost.ocks.org/mike/shuffle/
// 		shuffle: function(array){
// 			var counter = array.length, temp, index;
// 	   	// While there are elements in the array
// 	   	while (counter > 0) {
//         	// Pick a random index
//         	index = Math.floor(Math.random() * counter);
//         	// Decrease counter by 1
//         	counter--;
//         	// And swap the last element with it
//         	temp = array[counter];
//         	array[counter] = array[index];
//         	array[index] = temp;
// 	    	}
// 	    	return array;
// 		},

// 		buildHTML: function(){
// 			var frag = '';
// 			this.$cards.each(function(k, v){
// 				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
// 				<div class="front"><img src="'+ v.img +'"\
// 				alt="'+ v.name +'" /></div>\
// 				<div class="back"><img src="/media/img/backsym.png"\
// 				alt="Codepen" /></div></div>\
// 				</div>';
// 			});
// 			return frag;
// 		}
// 	};


// 	// Card content { hidden }
// 	var cards = [
// 		{
// 			name: "A",
// 			img: src="/media/kana/あ.png",
// 			id: 1,
// 		},
// 		{
// 			name: "A",
// 			img: src="/media/kana/A.png",
// 			id: 1,
// 		},
// 		{
// 			name: "css3",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
// 			id: 2
// 		},
// 		{
// 			name: "html5",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
// 			id: 3
// 		},
// 		{
// 			name: "jquery",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
// 			id: 4
// 		}, 
// 		{
// 			name: "javascript",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
// 			id: 5
// 		},
// 		{
// 			name: "node",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
// 			id: 6
// 		},
// 		{
// 			name: "photoshop",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png",
// 			id: 7
// 		},
// 		{
// 			name: "python",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png",
// 			id: 8
// 		},
// 		{
// 			name: "rails",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png",
// 			id: 9
// 		},
// 		{
// 			name: "sass",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png",
// 			id: 10
// 		},
// 		{
// 			name: "sublime",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png",
// 			id: 11
// 		},
// 		{
// 			name: "wordpress",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png",
// 			id: 12
// 		},
// 	];
    
// 	Memory.init(cards);



})









