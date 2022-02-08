'use Strict'

/* declaring variables*/
let score, roundScore, activePlayer, winningScore;

let diceDom = document.querySelector('.dice');
player_box = document.querySelectorAll('.player-current-box');

//dice dom
init();
winningScores();





document.querySelector('.btn-roll').addEventListener('click', () => {
    //  1. random number
    let dice = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = 'block';
    diceDom.src = `dice-${dice}.png`;

    //2. Display the result


    //  update the round score if the rolled number was not a 1

    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
        Next()
    }

})

document.querySelector('.btn-hold').addEventListener('click', () => {

    winningScore = document.getElementById('winningScore').value;
    console.log(winningScore)
        //add current score to Global score

    score[activePlayer] += roundScore;
    // update the ui
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    //check if player won the game

    if (score[activePlayer] >= winningScore) {

        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!'

        player_box[activePlayer].style.display = 'none';

        // player_box[activePlayer].style.display = 'none';

        diceDom.style.display = 'none';

        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        Next()
    }
})

function Next() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

    roundScore = 0;
}

// btn-new
document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    score = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('name-0').textContent = 'Playeer 1';
    document.getElementById('name-1').textContent = 'Playeer 2';

    document.querySelector('.player-0-panel').classList.add('active');


    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('winnerplayer-score');
    document.querySelector('.player-1-panel').classList.remove('winnerplayer');

    player_box = document.querySelectorAll('.player-current-box');
    player_box[0].style.display = 'block';
    player_box[1].style.display = 'block';

    // document.querySelector('#name-2').textContent = 'Playeer 2';

}

function winningScores() {
    winningScore = document.getElementById('winningScore').textContent;
    return winningScore
}
// console.log(dice)
// document.querySelector('#current-'+ activePlayer).textContent = dice;