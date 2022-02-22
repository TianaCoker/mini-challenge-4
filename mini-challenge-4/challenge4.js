var allButtons = document.getElementsByTagName('button');
var copyAllButtons = [];
for (let i = 0; i < allButtons.length; i++){
    copyAllButtons.push(allButtons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(theButton){
    if (theButton.value === 'red'){
        buttonsRed();
    } else if (theButton.value === 'green'){
        buttonsGreen();
    } else if (theButton.value === 'reset'){
        buttonColorReset();
    } else if (theButton.value === 'random'){
        randomColors();
    }
}

function buttonsRed (){
    for( let i = 0; i < allButtons.length; i++){
allButtons[i].classList.remove(allButtons[i].classList[1]);
allButtons[i].classList.add('btn-red');
    }
} 


function buttonsGreen (){
    for( let i = 0; i < allButtons.length; i++){
allButtons[i].classList.remove(allButtons[i].classList[1]);
allButtons[i].classList.add('btn-green');
    }
} 

function buttonColorReset (){
    for( let i = 0; i < allButtons.length; i++){
allButtons[i].classList.remove(allButtons[i].classList[1]);
allButtons[i].classList.add(copyAllButtons[i]);
    }
} 


function randomColors(){
    let choices = ['btn-green', 'btn-red', 'btn-yellow', 'btn-blue']

    for( let i = 0; i < allButtons.length; i++){
        let randomNumber = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choices[randomNumber]);
    }
}