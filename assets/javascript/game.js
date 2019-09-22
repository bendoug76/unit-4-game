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

    var randomNumber = Math.floor(Math.random()*102)+19;

    var num1 = Math.floor(Math.random()*12)+1;
    var num2 = Math.floor(Math.random()*12)+1;
    var num3 = Math.floor(Math.random()*12)+1;
    var num4 = Math.floor(Math.random()*12)+1;
        console.log(num1,num2,num3,num4)

    var goalNumber = randomNumber;
    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    $("#blueGem").on("click", function(){

        console.log( $(this).val());
        totalScore = totalScore + num1;{
                console.log(totalScore);
        }
        

    });

    $("#greenGem").on("click", function(){

        console.log( $(this).val());
        totalScore = totalScore + num2;{
            console.log(totalScore);
    }

    });

    $("#redGem").on("click", function(){

        console.log( $(this).val());
        totalScore = totalScore + num3;{
            console.log(totalScore);
    }

    });

    $("#orangeGem").on("click", function(){

        console.log( $(this).val());
        totalscore = totalScore + num4;{
            console.log(totalScore);
    }

    });

    
});

