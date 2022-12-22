// Variables assigned to grab each button from the HTML.

var btnStart = document.getElementById("start");
var btn1 = document.getElementsByClassName("button1");
var btn2 = document.getElementsByClassName("button2");
var btn3 = document.getElementsByClassName("button3");;
var btn4 = document.getElementsByClassName("button4");
var btnDone = document.getElementById("done");


// Variables used for correct / incorrect answers.

var correctBtn = document.getElementsByClassName("correct");
var incorrectBtn = document.getElementsByClassName("incorrect");



// Event listeners for each button that when clicked, display the next question and hide the previous one, or continue to the finished page. 

btnStart.addEventListener("click", function() {
        document.getElementById("timer").style.display = "flex";
        document.getElementById("title-page").style.display = "none";
        document.getElementById("question-1").style.display = "flex";
        setTimer();
    }
);

for (i=0; i<btn1.length; i++){
    btn1[i].addEventListener("click", function() {
        document.getElementById("question-1").style.display = "none";
        document.getElementById("question-2").style.display = "flex";
        })
    }

for (i=0; i<btn2.length; i++){
    btn2[i].addEventListener("click", function() {
        document.getElementById("question-2").style.display = "none";
        document.getElementById("question-3").style.display = "flex";
        })
}

for (i=0; i<btn3.length; i++){
    btn3[i].addEventListener("click", function() {
        document.getElementById("question-3").style.display = "none";
        document.getElementById("question-4").style.display = "flex";
        })
}

for (i=0; i<btn4.length; i++){
    btn4[i].addEventListener("click", function() {
        document.getElementById("question-4").style.display = "none";
        document.getElementById("finished").style.display = "flex";
        document.getElementById("timer").style.display = "none";
        })
}

btnDone.addEventListener("click", function() {
    document.getElementById("title-page").style.display = "flex";
    document.getElementById("finished").style.display = "none";
    }
);

// Function for the timer, and to take user to the finished page if time runs out. Starts with 45 seconds. 

var secondsLeft = 45;
var timer = document.querySelector(".timer");

function setTimer() {

    // Displays seconds left in the text area assigned to the timer variable.

    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft;

    // Code to subtract time for an incorrect answer if selected. 

    for (i=0; i<incorrectBtn.length; i++){
        incorrectBtn[i].addEventListener("click", function(){
            secondsLeft = secondsLeft - 5;
                }
        );
    }   


    // If timer reaches zero or we reach the last page, it clears the interval, resets the second count and displays the finished page. 

    var finished = document.getElementById("finished");

        if(secondsLeft <= 0 || getComputedStyle(finished) === "flex") {

            clearInterval(timerInterval);

            document.getElementById("timer").style.display = "none";
            document.getElementById("title-page").style.display = "none";
            document.getElementById("question-1").style.display = "none";
            document.getElementById("question-2").style.display = "none";
            document.getElementById("question-3").style.display = "none";
            document.getElementById("question-4").style.display = "none";
            document.getElementById("finished").style.display = "flex";
        }
    }, 1000);

    secondsLeft = 45;
}

// Correct answers counter for score display upon finishing the quiz. Sets text content of score text area to the number of correct answers. 


for (i=0; i<correctBtn.length; i++){
    var correctAnswers = 0;
    correctBtn[i].addEventListener("click", function(){
        correctAnswers++;
        score.textContent = correctAnswers;
    })
};


var submitScore = document.getElementById("submit");
var score = document.getElementById("score");
var fullName = document.getElementById("full-name");

var highScore = document.getElementById("highscores");
var scoreList = document.getElementById("score-list");


// Listens for submit click, and sets the name and score to local storage.  

submitScore.addEventListener("click", function(){
    localStorage.setItem("score", correctAnswers);
    localStorage.setItem("full-name", fullName.value);
});

    // Grabs content from local storage, creates list item in the empty ul to which we add the full name and score as its text content.

var scoreText = localStorage.getItem("score");
var fullNameText = localStorage.getItem("full-name");
var scoreListItem = document.createElement("li");
scoreListItem.textContent = fullNameText + ": " + scoreText;
scoreList.appendChild(scoreListItem);

// Sets display of high score page when button is clicked. 

highScore.addEventListener("click", function(){
    document.getElementById("finished").style.display = "none";
    document.getElementById("score-title").style.display = "flex";
})


