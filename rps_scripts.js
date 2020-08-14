const start = document.querySelector(`button[data-button=start]`);
const input = document.querySelector(`input[data-input=input]`);
const rock = document.querySelector(`button[data-button=rock]`);
const paper = document.querySelector(`button[data-button=paper]`);
const scissors = document.querySelector(`button[data-button=scissors]`);
const again = document.querySelector(`button[data-button=again]`);
const paragraphComputerScore = document.querySelector(`p[data-paragraph=computerscore]`);
const paragraphPlayerScore = document.querySelector(`p[data-paragraph=playerscore]`);
const paragraphComputer = document.querySelector(`p[data-paragraph=computer]`);
const paragraphPlayer = document.querySelector(`p[data-paragraph=player]`);
const winnerComputer = document.querySelector(`img[data-image=computer]`);
const winnnerPlayer = document.querySelector(`img[data-image=player]`);
const draw = document.querySelector(`p[data-paragraph=draw]`);
let scoreComputer = 0, scorePlayer = 0, roundCount = 0, rounds = 0;

function addClass()
{
    this.classList.add('buttonClick');
    console.log(this);
}
function removeClass()
{
    this.classList.remove('buttonClick');
}
function hideElement(element)
{
    element.classList.add('hideElement');
}
function unhideElement(element)
{
    element.classList.remove('hideElement');   
}
function hoverAnimation(element)
{
    element.addEventListener('mouseover',addClass);
    element.addEventListener('mouseleave', removeClass);
}



function ComputerPlay()
{
    let randomNumber = Math.round(Math.random()*100);
    let choice = randomNumber%3;
    let returnValue;
    switch (choice)
    {
        case 0: returnValue = 'rock'; break;
        case 1: returnValue = 'paper'; break;
        case 2: returnValue = 'scissors'; break;
            default:
    }
    return returnValue;
}

function PlayRound(playerChoice)
{
    let returnValue, computerChoice = ComputerPlay();

    if(computerChoice == playerChoice) 
        returnValue = 'Draw!';
    else if(computerChoice == 'rock')
        {
            if(playerChoice == 'paper') returnValue = 'player';
            else returnValue = 'computer';
        }
    else if(computerChoice == 'paper')
        {
            if(playerChoice == 'scissors') returnValue = 'player';
            else returnValue = 'computer';
        }
    else if(computerChoice == 'scissors')
    {
        if(playerChoice == 'rock') returnValue = 'player';
        else returnValue = 'computer';
    }
    return returnValue;
}
function Game(playerChoice)
{
    let returnedValue = PlayRound(playerChoice);

    if(returnedValue == 'Draw!')
    {
        console.log('It\'s a draw!');
        scorePlayer++;
        scoreComputer++;
    }
    else if(returnedValue == 'player' )
    {
        scorePlayer++;
        console.log('The ' + returnedValue + ' wins!');
    }
    else
    {
        scoreComputer++;
        console.log('The ' + returnedValue + ' wins!');
    }
    paragraphComputer.textContent = scoreComputer;
    paragraphPlayer.textContent = scorePlayer;
    roundCount++;
}

function Restart()
{
    hideElement(again);
    unhideElement(start);
    unhideElement(input);
    hideElement(winnerComputer);
    hideElement(winnnerPlayer);
    hideElement(draw);
    roundCount = rounds = scoreComputer = scorePlayer = paragraphComputer.textContent = paragraphPlayer.textContent = 0;
}
function Endgame()
{
    unhideElement(again);
    hideElement(rock);
    hideElement(paper);
    hideElement(scissors);
    hideElement(paragraphPlayer);
    hideElement(paragraphComputer);
    hideElement(paragraphPlayerScore);
    hideElement(paragraphComputerScore);
    if(scorePlayer == scoreComputer) unhideElement(draw);
    else if(scorePlayer > scoreComputer) unhideElement(winnnerPlayer);
    else unhideElement(winnerComputer);
}
function PlayerPlay()
{
    console.log(this.attributes[0].nodeValue);
    Game(this.attributes[0].nodeValue)
    console.log(roundCount, rounds);
    if(roundCount >= rounds)
    {
        Endgame();
    }
}

function Preparation()
{
    if(!Number.isInteger(input.valueAsNumber) || !input.valueAsNumber ) return;
    hideElement(start);
    hideElement(input);
    unhideElement(rock);
    unhideElement(paper);
    unhideElement(scissors);
    unhideElement(paragraphPlayerScore);
    unhideElement(paragraphComputerScore);
    unhideElement(paragraphPlayer);
    unhideElement(paragraphComputer);
    rounds = input.valueAsNumber;
}

//before game start
hideElement(rock);
hideElement(paper);
hideElement(scissors);
hideElement(again);
hideElement(winnerComputer);
hideElement(winnnerPlayer);
hideElement(draw);
hideElement(paragraphComputerScore);
hideElement(paragraphPlayerScore);

start.addEventListener('click', Preparation);
rock.addEventListener('click',PlayerPlay);
paper.addEventListener('click',PlayerPlay);
scissors.addEventListener('click',PlayerPlay);
again.addEventListener('click',Restart);

hoverAnimation(start);
hoverAnimation(rock);
hoverAnimation(paper);
hoverAnimation(scissors);
hoverAnimation(again);