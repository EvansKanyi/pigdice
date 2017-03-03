
var scores, roundScores, activePlayer, gamePlaying;

init();
//dice = Math.floor(Math.random() * 6) +1;
//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;
//to interact with the webpage we first have to use document and use querySelelector to select the variable from the webpage and then manipulate it using textContext.
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//innerHTML can manupulate HTML while textcontent can only put texy in it.


document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying){
       //1.Random Number
    var dice = Math.floor(Math.random() * 6) +1;

    //2.Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='assets/dice-' + dice + '.png';


    //3. Update the round score IF the rolled number was NOT a 1
    if(dice !== 1){
        //As we know that === does not do type coversion while == operator does type coversion. similarly we !== because we dont want type conversion
        //Add Score

        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        //Next Player
        nextPlayer();

      }
    }

});

document.querySelector('.btn-hold').addEventListener('click',function(){

    if(gamePlaying){
       //Add current score to Global SCore
    scores[activePlayer] += roundScore;


    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Chech if player won the game.
    if(scores[activePlayer] >= 20)
        {
            document.querySelector('#name-' + activePlayer).textContent = 'winner!';
            document.querySelector('.dice').style.display= 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            //Next Player
            nextPlayer();
        }
    }

});

function nextPlayer(){

        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        //ternary operator.
        roundScore = 0;

        document.getElementById('current-0').textContent =0;
        document.getElementById('current-1').textContent =0;

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.dice').style.display='none';

}


document.querySelector('.btn-new').addEventListener('click', init);


function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display='none';
//to interact with css we have to (.) operator here we have used dice class which is not an unique id but a class name in general.

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
//getElementById is also a method like querySelector but it is a bit faster.
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
