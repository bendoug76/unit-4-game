// psudocode

// generate randpm number for each crystal on page loading

// crystal generstes new random number after win or loss

// when clicked crystal number is added to total score box

// goal number randomly generates to score box

// goal number resets after each win or loss

// wins and losses are added to win box or loss box

// if total score = to goal number = win

// if total score > goal number = loss

// 
$(document).ready(function() {

    var randomNumber = Math.floor(Math.random()*102)+19;{
        document.getElementById("score").innerHTML = randomNumber;
    }

    var num1 = Math.floor(Math.random()*12)+1;
    var num2 = Math.floor(Math.random()*12)+1;
    var num3 = Math.floor(Math.random()*12)+1;
    var num4 = Math.floor(Math.random()*12)+1;
        console.log(num1,num2,num3,num4)

    var goalNumber = randomNumber;
    var wins = 0;{

        document.getElementById("winsBox").innerHTML = "Wins: " + wins;
    }
    var losses = 0;{

        document.getElementById("lossesBox").innerHTML = "Losses: " + losses;
    }
    var totalScore = 0;

     

    $("#blueGem").on("click", function(){

        totalScore = totalScore + num1;{
                console.log(totalScore);
        }
        
        
        document.getElementById("scoreDisplay").innerHTML = totalScore;
        
       checkWins();

    });

    $("#greenGem").on("click", function(){

        totalScore = totalScore + num2;{
            console.log(totalScore);
        }
        

        document.getElementById("scoreDisplay").innerHTML = totalScore;
    
        checkWins();

    });

    $("#redGem").on("click", function(){

        totalScore = totalScore + num3;{
            console.log(totalScore);
        }
        

        document.getElementById("scoreDisplay").innerHTML = totalScore;

        checkWins();

    });

    $("#orangeGem").on("click", function(){

        totalScore = totalScore + num4;{
            console.log(totalScore);
        }
        

        document.getElementById("scoreDisplay").innerHTML = totalScore;
        
        checkWins();

    });

    function checkWins() {

        if (totalScore === randomNumber){
            wins++;
            totalScore= 0;
            document.getElementById("scoreDisplay").innerHTML = 0;
            document.getElementById("winsBox").innerHTML = "Wins: " + wins;
            console.log(totalScore);
             num1 = Math.floor(Math.random()*12)+1;
             num2 = Math.floor(Math.random()*12)+1;
             num3 = Math.floor(Math.random()*12)+1;
             num4 = Math.floor(Math.random()*12)+1;
             randomNumber = Math.floor(Math.random()*102)+19;{
                document.getElementById("score").innerHTML = randomNumber;
            }
                console.log(randomNumber);
        }

        if (totalScore > randomNumber){
            losses++;
            totalScore= 0;
            document.getElementById("scoreDisplay").innerHTML = 0;
            document.getElementById("lossesBox").innerHTML = "Losses: " + losses;
            console.log(totalScore);
             num1 = Math.floor(Math.random()*12)+1;
             num2 = Math.floor(Math.random()*12)+1;
             num3 = Math.floor(Math.random()*12)+1;
             num4 = Math.floor(Math.random()*12)+1;
             randomNumber = Math.floor(Math.random()*102)+19;{
                document.getElementById("score").innerHTML = randomNumber;
            }
                console.log(randomNumber);
        }
        
    }

    
   
    


    
});

