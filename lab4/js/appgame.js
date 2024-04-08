const { createApp } = Vue
createApp({	 //create a new application instance
	data() {     // data option
		return {
			guess: '', msg: '', secret: 0
		}
	},

	methods: {
		genRandomNum: function () { // generate random number from 1 to 100
			return Math.floor(Math.random() * 100) + 1;
		},

		checkGuess: function () {
			if (this.guess < this.secret)
				this.msg = "Guess higher";
			if (this.guess > this.secret)
				this.msg = "Guess lower";
			if (this.guess == this.secret)
				this.msg = "You got it!";
		},
		startOver: function () {
			this.msg = "Start guessing";
			this.secret = this.genRandomNum();
		},
		giveUp: function () {
			this.msg = "The secret number is " + this.secret;
		}

	},

	created: function () {//Called after the instance is created
		this.msg = "Start guessing";
		this.secret = this.genRandomNum();
	}
}).mount('#app')   // mount the app to dom element