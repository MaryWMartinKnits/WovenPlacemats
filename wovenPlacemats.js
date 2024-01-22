"use strict";

// declaring variables:

let YCselectionButtons;
let YCparentDiv;
let YCultimateParent;

// let YCbuttons
let userSelection
let YCbuttonName
let firedButtonID;
let firedButton;
let selectedYarnColors;

let readValuesBtn;

let outputDiv;
let getSetUpRowsBtn;

window.onload = init();

function init() {
    console.log('page loaded, the DOM is ready');
    getDOMelements ();

}

function getDOMelements () {
    console.log('function getDOMelements executed');
    YCselectionButtons = document.querySelectorAll('.YCselection');
    outputDiv = document.querySelector('#outputDiv')
    getSetUpRowsBtn = document.querySelector('#getSetUpRowsBtn')
    readValuesBtn = document.querySelector('#readValues');
    addEventListeners ();
    getYCforEachBtn();
}

function addEventListeners () {
    console.log('function addEventListeners executed');
    YCselectionButtons = document.querySelectorAll('.YCselection');
    console.log('YCselectionButtons.length = ' + YCselectionButtons.length);
     for (let i = 0; i < YCselectionButtons.length; i++) {
        YCselectionButtons[i].addEventListener('click', function(event) {writeYC(YCselectionButtons[i])});
     }
    getSetUpRowsBtn.addEventListener('click', writeYC);
    readValuesBtn.addEventListener('click', readValues);
}

function writeYC (YCbutton) {
    console.log('writeYC function executed');
    console.log('event.target.id: ' + event.target.id);
    firedButtonID = event.target.id;
    firedButton = document.querySelector('#'+firedButtonID);
    firedButton.classList.add('selected');
    YCparentDiv = YCbutton.parentElement;
    YCultimateParent = YCparentDiv.parentElement;
        YCultimateParent.innerHTML = event.target.innerHTML;
        YCultimateParent.classList.add('strong');
        let defineColor = YCultimateParent.innerHTML;
        console.log('defineColor: ' + defineColor);
        YCbuttonName = YCbutton.id;
        YCbutton.setAttribute('value', YCbuttonName);
    for (let i = 0; i < YCselectionButtons.length; i++) {
        if (YCselectionButtons[i].id == YCbuttonName) {
            console.log('YCselectionButtons[i] = YCselectionButtons[' + i +']');
            console.log(YCselectionButtons[i]);
            console.log('YCselectionButtons[i].id:' + YCselectionButtons[i].id);
            console.log('YCbuttonName: ' + YCbuttonName);
            console.log('YCselectionButtons[i].innerHTML: ' + YCselectionButtons[i].innerHTML);
        }
    }
}

function getPairNumber () {

}

function defineLeftRight () {
    console.log('defineLeftRight function executed');
    for (let i = 0; i < YCselectionButtons.length; i++) {
        for (let j = 0; j < YCselectionButtons[i].classList.length; j++) {
            if (YCselectionButtons[i].classList[j] == 'left') {
                YCselectionButtons[i].direction = 'left';
                // console.log('YCselectionButtons[' + [i] + '] is ' + YCselectionButtons[i].direction);
                console.log('---left---');
            } else if (YCselectionButtons[i].classList[j] == 'right') {
                YCselectionButtons[i].direction = 'right';
                // console.log('YCselectionButtons[' + [i] + '] is ' + YCselectionButtons[i].direction);
                console.log('---right---');
            }
        }
    }   
}

function getYCforEachBtn () {
    console.log('getYCforEachBtn function executed') //not working properly
    for (let i = 0; i < YCselectionButtons.length; i++) {
        for (let j = 0; j < YCselectionButtons[i].classList.length; j++) {
            if (YCselectionButtons[i].classList[j] == 'MC') {
                YCselectionButtons[i].yarnColor = 'MC';
                // console.log('YCselectionButtons[' + [i] + '] is ' + YCselectionButtons[i].yarnColor);
            } else if (YCselectionButtons[i].classList[j] == 'CC') {
                YCselectionButtons[i].yarnColor = 'CC';
                // console.log('YCselectionButtons[' + [i] + '] is ' + YCselectionButtons[i].yarnColor);
            }
        }
    }
}

function defineYarnColor () { //keep working on this!!!
    console.log('defineYarnColor function executed');
    for (let i = 0; i < YCselectionButtons.length; i++) {
        // YCselectionButtons[i]. = YCselectionButtons[i].parentElement.innerHTML;
        console.log('YCselectionButtons[i].parentElement.innerHTML (userSelection):');
        console.log(YCselectionButtons[i].parentElement.innerHTML);
        userSelection = YCselectionButtons[i].parentElement.innerHTML;
        console.log('userSelection: ');
        console.log(userSelection);
        // if (YCselectionButtons[i].parentElement.classList == YCselectionButtons[i].yarnColor) {
            for (let j = 0; j < YCselectionButtons[i].parentElement.classList.length; j++) {
                if (userSelection.classList[j] == 'selected') {
                    console.log('YCselectionButtons[' + i + '] =' + YCselectionButtons[i].yarnColor)
                    console.log('match')
            }
            
        }
        // if (YCselectionButtons[i].yarnColor == YCselectionButtons[i].parentElement.innerHTML) {
            
        // }
        // for (let k = 0; k < YCselectionButtons[i].parentElement) {
        // if (YCselectionButtons[i].yarnColor == YCselectionButtons[i].innerHTML) {
        //     console.log('MATCH!' + i);
        //     console.log('YCselectionButtons[i].yarnColor: ' + YCselectionButtons[i].yarnColor);
        //     console.log('YCselectionButtons[i].innerHTML: ' + YCselectionButtons[i].innerHTML)
        //     console.log('YCselectionButtons[i].id: ' + YCselectionButtons[i].id);
        //     // console.log(YCselectionButtons[i] + ' = ' + YCbuttonName);
        // }
    }
    
}

function readValues () {
    defineYarnColor();
    defineLeftRight();
    console.log('readValues function executed')
    for (let i = 0; i < YCselectionButtons.length; i++) {
        console.log('YCselectionButtons[i] = ' + 'YCselectionButtons[' + i + ']' );
        console.log('YCbuttonName: ' + YCbuttonName);
        console.log('YCselectionButtons[i].direction: ' + YCselectionButtons[i].direction);
        console.log('YCselectionButtons[i].yarnColor: ' + YCselectionButtons[i].yarnColor );
    }
}
