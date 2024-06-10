// First Dice 1-6 ///////////////////////////////////
var randomInt1 = Math.floor( Math.random( ) * 6 ) + 1;

// Add name and extension
var randomDice1 = "dice" + randomInt1 + ".png";

// Add path data
var randomImageSource1 = "images/" + randomDice1;

// select img in HTML ( first one ) 
var image1 = document.querySelectorAll("img")[0];

// set img to randomized source
image1.setAttribute("src", randomImageSource1);


//second Dice 1-6 ///////////////////////////////////
var randomInt2 = Math.floor( Math.random( ) * 6 ) + 1;

// Add name and extension
var randomDice2 = "dice" + randomInt2 + ".png";

// Add path data
var randomImageSource2 = "images/" + randomDice2;

// select img in HTML ( second one ) 
var image2 = document.querySelectorAll("img")[1];

// set img to randomized source
image2.setAttribute("src", randomImageSource2);

// Identify Win Condition
if ( randomInt1 > randomInt2 )
    {
        document.querySelector( "h1" ).innerHTML = "Player 1 Wins!";
    }
else if ( randomInt1 < randomInt2 )
    {
        document.querySelector( "h1" ).innerHTML = "Player 2 Wins!";
    }  
else
    {   
        document.querySelector( "h1" ).innerHTML = "Draw!";
    }