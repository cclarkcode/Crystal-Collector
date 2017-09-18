var game = {
	target: 0,
	wins: 0,
	losses: 0,
	crystal_values: [0, 0, 0, 0],
	userscore: 0,
	start: true,
	initialize: function () {

		// $("#start").css("display", "none");
		game.target = Math.floor(Math.random() * 101) +19;
		$("#target").html(game.target);

		game.userscore = 0;
		$("#score").html(game.userscore);

		for (var i = 0; i < game.crystal_values.length; i++) {
			game.crystal_values[i] = Math.floor(Math.random() * 11) +1;
			
		}

		game.start=false;
		$(".start").css("display", "none");

	},
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