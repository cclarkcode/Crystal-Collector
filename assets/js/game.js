var game = {
	target: 0,
	wins: 0,
	losses: 0,
	crystal_values: [0, 0, 0, 0],
	userscore: 0,
	start: true,

	//Create or reset initial game settings
	initialize: function () {

		//Create target number
		game.target = Math.floor(Math.random() * 101) +19;
		$("#target").html(game.target);

		//Set user score to zero
		game.userscore = 0;
		$("#score").html(game.userscore);


		//Create crystal values and ensure no duplicates
		for (var i = 0; i < game.crystal_values.length; i++) {
			
			do{
				var newvalue=true;
				game.crystal_values[i] = Math.floor(Math.random() * 11) +1;


				if (i>0) {
					for (var j = i-1; j>=0; j--) {
						if (game.crystal_values[j] === game.crystal_values[i]) {
							
							newvalue=false;
						}
					}
				}
			}
			while (!newvalue);
			console.log(game.crystal_values[i]);
		}

		game.start=false;

		//Remove start game banner
		$(".start").css("display", "none");

	},

	//Add crystal value to user's score and check for win or loss
	addscore: function(index) {

		if(!game.start) {

			game.userscore = game.userscore + game.crystal_values[index];
			$("#score").html(game.userscore);
			game.checkscore();
		}
		else {
			alert('Please start the game again');
		}


	},

	//Check for win or loss
	checkscore: function() {

		if(game.userscore > game.target) {

			game.losses++;
			$("#loss").html(game.losses);
			$("#banner").html("You Lose");
			$(".start").css("display", "block");
			game.start=true;

		}
		if(game.userscore === game.target) {

			game.wins++;
			$("#wins").html(game.wins);
			$("#banner").html("You Win!");
			$(".start").css("display", "block");
			game.start=true;
		}
	}

	};

	//Start actual script

	//Allow for game start by key press or clicking on start banner
	 document.onkeyup = function(event) {

		if(game.start) {
			game.initialize();

		}

	};

	$(".start").click (function(event) {

		if (game.start) {
			game.initialize();
		}
	});


	//On click events for each crystal. Value sent in function represents index of game.crystal_values
	 $("#crystal1").on("click", function() {

	 	game.addscore(0);
	 });

	 $("#crystal2").on("click", function() {

	 	game.addscore(1);
	 });

	 $("#crystal3").on("click", function() {

	 	game.addscore(2);
	 });

	 $("#crystal4").on("click", function() {

	 	game.addscore(3);
	 });