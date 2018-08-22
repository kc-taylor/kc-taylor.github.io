/*
Author: Kayce Taylor
Date: 4.4.2018
*/
// Ask user for their name, var, first part of .value requirement
	var userName = document.getElementById("username");
	userName.addEventListener("blur", welcome);
//console.log(userName.value);

// made the play button a global variable to use in multiple functions
	var playButton = document.getElementById("letsplay");

//function to prompt if ready to play and to hide name input box
	function welcome() { 
//window alert and .value part of getElementById	
		window.alert("Welcome " + userName.value + "!");
//change the style of the name input to no longer display
		document.getElementById("firstp").style.display = "none";

// variable for second paragraph to save time
		var secondPara = document.getElementById("secondp");
// variable for table to save time
		var gameTable = document.getElementsByTagName("td");
// variable for footer
		var footerVis = document.getElementById("hiddenfoot");

//window prompt
		var ready = window.prompt("Are you ready to play?");
//switch statement to determine what answer to give from prompty	
		switch(ready) { 
			case "yes":
			case "sure":
			case "ok":
//document.getElementByID().innerHTML, used textContent instead
				secondPara.textContent = "Let's get started!";
				playButton.style.visibility = "visible";
				footerVis.style.visibility = "visible";
				break;
			case "no":
				secondPara.textContent = "Let's play anyways.";
				playButton.style.visibility = "visible";
				footerVis.style.visibility = "visible";
				break;
			default:
				secondPara.textContent = "I'll take that as a yes!";
				playButton.style.visibility = "visible";
				footerVis.style.visibility = "visible";
		}
	}
// clicking on the Let's Play button will show the table
	playButton.addEventListener("click", showTable);
// function to make table visible and color every other field grey
	function showTable() {
		var tableData = document.getElementsByTagName("td");
		var tabLen = tableData.length
		//console.log(tabLen);
		var i = 0;
		for (i; i < tabLen; i++) {
			tableData[i].style.visibility = "visible";
		}

		for (i = 0; i < tabLen; i += 2) {
			tableData[i].style.backgroundColor = "#eeeeee";
		}

		document.getElementById("checkanswers").style.visibility = "visible";
	}

// run guess function when user click Check my answers button 
	document.getElementById("checkanswers").addEventListener("click", check);
	document.getElementById("checkanswers").addEventListener("click", allDone);

// array for function to check if all answers have been completed
		var correct = [false, false, false, false, false, false, false, false, false];
		//console.log(correct[8]);

// function to determine if answers are correct
	function check() {
// array for answers to the table of questions
		var answers = [12, 17, "false", "true", 1, "true", 12, "false", 5]; 
		//console.log(answers[1]);
	
		//var i = 0;
		var guess = document.getElementsByTagName("input");
		//console.log(guess[1].value);
		var i = 1;
		while (i < 10) {
			if (guess[i].value == answers[i - 1]) {
				guess[i].style.backgroundColor = "#0f0";
				correct[i - 1] = "true";
				//console.log(correct[2]);
		} 	else {
			guess[i].style.backgroundColor = "#f00";
			}
		i++
		}
	}

	function allDone() {
// variables selected to change colors once all answers are correct
		var td1Done = document.querySelectorAll("td");
		//console.log(td1Done[1]);
// if statement to check to see if all answers are correct and to change the colors if yes
		if (correct[0] && correct[1] && correct[2] && correct[3] && correct[4] && correct[5] && correct[6] && correct[7] && correct[8] == "true") {
				var x = 0;
// for loop to change the table colors and add image at end				
				for (x; x < 9; x++) {
					td1Done[x].style.backgroundColor = "#ffd700";
					document.getElementById("finalp").innerHTML = "WAY TO GO, " + userName.value + "!<br>";
					document.getElementById("finalp").style.backgroundImage = "url('fireworks.jpg')";
					document.getElementById("game2").style.visibility = "visible";
				}
			//document.getElementById("letsplay").textContent = "Yay!";    * wanted to make sure the if statement was working correctly
		}
	}

// event listeners for clicking on the final submit button to check answers
	document.getElementById("lastsubmit").addEventListener("click", questions);
	document.getElementById("lastsubmit").addEventListener("click", finalSubmit);

// array to show all questions start at false so they can be changed to true when correct and be used for the final completion congratulations
	var correctFinal = [false, false, false, false, false, false];
	//console.log(correctFinal[2]);

// function to check the answers and determine if they are correct or not
	function questions() {
		var i = 1;

		while (i < 7) {
			var answers = document.getElementById("correct" + [i]);
			var qfieldset = document.getElementById("q" + [i]);
			var expPara = document.getElementById("explain" + [i]);

			if (answers.checked === true) {
				qfieldset.style.backgroundColor = "";
				expPara.style.visibility = "visible";
				expPara.style.backgroundColor = "#ffd700";
				expPara.style.color = "#000000";
				correctFinal[i - 1] = "true";
				//console.log(correctFinal[2]);
			} 	else {
					qfieldset.style.backgroundColor = "#ff0000";
				} 
			i++
		}
	}

// function to add celebratory image once all answers are true
	function finalSubmit() {
			if (correctFinal[0] && correctFinal[1] && correctFinal[2] && correctFinal[3] && correctFinal[4] && correctFinal[5] == "true") {
					document.body.style.backgroundImage = "url('https://media.giphy.com/media/IjmMzurYulKEw/giphy.gif')";
					window.alert("Congratulations " + userName.value + ", you did it!!");
					document.body.style.color = "#ffffff";
			}
	}



/*	The following code was used before getting the questions() function above to work. I'm leaving it in as a lesson to myself. From 143 lines to 22 lines because of a while loop.


// button click to run 2nd game functions
	document.getElementById("lastsubmit").addEventListener("click", question1);
	document.getElementById("lastsubmit").addEventListener("click", question2);
	document.getElementById("lastsubmit").addEventListener("click", question3);
	document.getElementById("lastsubmit").addEventListener("click", question4);
	document.getElementById("lastsubmit").addEventListener("click", question5);
	document.getElementById("lastsubmit").addEventListener("click", question6);

// creating the variables and functions to check answers in 2nd game

// function to check if answers are correct and display explanation if yes
	function question1() {
// variable to get correct answer from question 1	
		var answer1 = document.getElementById("correct1");
		//console.log(answer1);
// variable to get call the 1st fieldset
		var q1fieldset = document.getElementById("q1");
		//console.log(q1fieldset);
// variable to call explanation paragraph
		var expPara1 = document.getElementById("explain1");

// checks to see if the correct answer is selected or not
		if (answer1.checked === true) {
			expPara1.style.visibility = "visible";
			expPara1.textContent = "Correct! 'x++' increments a variable by 1, and 'x -= 2' would assign x the value of x - 2.";
			expPara1.style.backgroundColor = "#ffd700";
			expPara1.style.color = "#000000";
		} 	else {
				expPara1.style.visibility = "visible";
				expPara1.textContent = "Try again";
				expPara1.style.backgroundColor = "#000000"
				expPara1.style.color = "#ff0000";
			} 
	}

	function question2() {
// variable to get correct answer from question 2	
		var answer2 = document.getElementById("correct2");
		//console.log(answer2.value);
// variable to get call the  fieldset
		var q2fieldset = document.getElementById("q2");
// variable to call explanation paragraph
		var expPara2 = document.getElementById("explain2");

		if (answer2.checked === true) {
			expPara2.style.visibility = "visible";
			expPara2.textContent = "Correct! && means 'and' while ! means 'not'."
			expPara2.style.backgroundColor = "#ffd700";
			expPara2.style.color = "#000000";
		} 	else {
				expPara2.style.visibility = "visible";
				expPara2.textContent = "Try again";
				expPara2.style.backgroundColor = "#000000"
				expPara2.style.color = "#ff0000";
			} 
	}

	function question3() {
// variable to get correct answer from question 13
		var answer3 = document.getElementById("correct3");
		//console.log(answer3.value);
// variable to get call the fieldset
		var q3fieldset = document.getElementById("q3");
// variable to call explanation paragraph
		var expPara3 = document.getElementById("explain3");

		if (answer3.checked === true) {
			expPara3.style.visibility = "visible";
			expPara3.textContent = "Correct! /= is used to assign the value of an operand to itself divided by another operand. === is a strict equals for both value and type.";
			expPara3.style.backgroundColor = "#ffd700";
			expPara3.style.color = "#000000";
		} 	else {
				expPara3.style.visibility = "visible";
				expPara3.textContent = "Try again";
				expPara3.style.backgroundColor = "#000000"
				expPara3.style.color = "#ff0000";
			} 
	}

	function question4() {
// variable to get correct answer from question 4	
		var answer4 = document.getElementById("correct4");
		//console.log(answer4);
// variable to get call the 1st fieldset
		var q4fieldset = document.getElementById("q4");
// variable to call explanation paragraph
		var expPara4 = document.getElementById("explain4");

		if (answer4.checked === true) {
			expPara4.style.visibility = "visible";
			expPara4.textContent = "Correct! != means 2 operands are not equal in value, and !== means they are not equal in value or type.";
			expPara4.style.backgroundColor = "#ffd700";
			expPara4.style.color = "#000000";
		} 	else {
				expPara4.style.visibility = "visible";
				expPara4.textContent = "Try again";
				expPara4.style.backgroundColor = "#000000"
				expPara4.style.color = "#ff0000";
			} 
	}

	function question5() {
// variable to get correct answer from question 5	
		var answer5 = document.getElementById("correct5");
		//console.log(answer5.value);
// variable to get call the fieldset
		var q5fieldset = document.getElementById("q5");
// variable to call explanation paragraph
		var expPara5 = document.getElementById("explain5");

		if (answer5.checked === true) {
			expPara5.style.visibility = "visible";
			expPara5.textContent = "Correct! If the value of 2 operands is not equal, you would use '!='. == means 2 operands are equal in value.";
			expPara5.style.backgroundColor = "#ffd700";
			expPara5.style.color = "#000000";
		} 	else {
				expPara5.style.visibility = "visible";
				expPara5.textContent = "Try again";
				expPara5.style.backgroundColor = "#000000"
				expPara5.style.color = "#ff0000";
			} 
	}

	function question6() {
// variable to get correct answer from question 6	
		var answer6 = document.getElementById("correct6");
		//console.log(answer6.value);
// variable to get call the fieldset
		var q6fieldset = document.getElementById("q6");
// variable to call explanation paragraph
		var expPara6 = document.getElementById("explain6");

		if (answer6.checked === true) {
			expPara6.style.visibility = "visible";
			expPara6.textContent = "Correct! %= would assign the value of remainder from x divided by y to the x variable, and += would assign the value of x + y.";
			expPara6.style.backgroundColor = "#ffd700";
			expPara6.style.color = "#000000";
		} 	else {
				expPara6.style.visibility = "visible";
				expPara6.textContent = "Try again";
				expPara6.style.backgroundColor = "#000000"
				expPara6.style.color = "#ff0000";
			} 
	}
*/
