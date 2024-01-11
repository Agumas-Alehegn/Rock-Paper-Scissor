 
let score = JSON.parse(localStorage.getItem('score'))||
{
  Wins: 0,
  Losses:0,
  Ties:0
};
  updateScoreElement();
  
  let isAutoPlaying = false;
  let intervalId;
  
   function autoPlay (){
    if(!isAutoPlaying){
      intervalId= setInterval( ()=>{
        const playerMove = pickComputerMove();
        playgames(playerMove)
      }, 2000);
      isAutoPlaying =true;
    } else{
      clearInterval(intervalId);
      isAutoPlaying =false;
    }
    }

    document.querySelector('.js-move-rock-button')
    .addEventListener('click', ()=>{
      playgames('rock');
    });
    document.querySelector('.js-move-paper-button')
    .addEventListener('click', ()=>{
      playgames('paper');
    });
    document.querySelector('.js-move-scissor-button')
    .addEventListener('click', ()=>{
      playgames('scissors');
    });
    document.querySelector('.js-reset-button')
    .addEventListener('click', ()=>{
      score.Wins = 0;
      score.Losses =0;
      score.Ties = 0;
      localStorage.removeItem('score');
      updateScoreElement();
    });
    document.querySelector('.js-auto-play-button')
    .addEventListener('click', ()=>{
      autoPlay();
    });

    document.body.addEventListener('keydown',(event)=>{
     if(event.key === 'r'){
      playgames('rock');
     }else if(event.key === 'p'){
      playgames('paper');
     }else if(event.key === 's'){
      playgames('scissors')

     }
    });

function playgames(playerMove){
  const computerMove = pickComputerMove( );
  let result = '';
  if (playerMove === 'scissors'){
    if (computerMove ===  'rock'){
    result = 'You lose';
    }
    if (computerMove ===  'paper'){
    result = 'You win';
    }
    if (computerMove ===  'scissors'){
    result = 'Tie';
    }
  } else if (playerMove === 'paper'){
    if (computerMove ===  'rock'){
    result = 'You win';
    }
    if (computerMove ===  'paper'){
    result = 'Tie';
    }
    if (computerMove ===  'scissors'){
    result = 'You lose';
    } 
  } else if (playerMove === 'rock'){
    if (computerMove ===  'rock'){
    result = 'Tie';
    }
    if (computerMove ===  'paper'){
    result = 'You lose';
    }
    if (computerMove ===  'scissors'){
    result = 'You win';
    }
    } if (result === 'You win'){
      score.Wins +=1;
    } else if(result === 'You lose'){
      score.Losses +=1;
    } else if(result === 'Tie'){
      score.Ties +=1; 
    }

  localStorage.setItem('score', JSON.stringify(score));
  
    updateScoreElement();
    document.querySelector('.js-result')
    .innerHTML = result;
    document.querySelector('.js-move')
    .innerHTML= 
    `You
    <img src="assets/${playerMove}-emoji.png"
    class="move-icon" alt="">
    <img src="assets/${computerMove}-emoji.png" 
    class="move-icon" alt="">
    Computer`
}
function updateScoreElement(){document.querySelector('.js-Score')
    .innerHTML = `Wins:${score.Wins} Losses:${score.Losses} Ties:${score.Ties}`;
  } 
function pickComputerMove( ){
  const randomNumber =  Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove ='scissors';
  } 
    return computerMove;
} 
    
    