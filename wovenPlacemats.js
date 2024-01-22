"use strict";

// declaring variables:

let YCselectionButtons = [];
let YCparentDiv;
let YCultimateParent;

let getUserSelectionBtn;
let userSelectionArray = [];
let userSelectionObject = {};
let UserSelectionArrayObject = [{}];
let buttonsClassList;
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
    getUserSelectionBtn = document.querySelector('#readUserSelectionBtn')
    readValuesBtn = document.querySelector('#readValues');
    addEventListeners ();
}

function addEventListeners () {
    console.log('function addEventListeners executed');
    YCselectionButtons = document.querySelectorAll('.YCselection');
     for (let i = 0; i < YCselectionButtons.length; i++) {
        YCselectionButtons[i].addEventListener('click', function(event) {writeYC(YCselectionButtons[i])});
     }
    getUserSelectionBtn.addEventListener('click', getUserSelection);
    readValuesBtn.addEventListener('click', readValues);
}

function writeYC (YCbutton) {
    console.log('writeYC function executed');
    // console.log('event.target.id: ' + event.target.id);
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
}

function getUserSelection () {
    console.log('getUserSelection function executed')
    // create an array of selected buttons as objects with properties:
    let y = 0;
    for (let i = 0; i < YCselectionButtons.length; i++) {
        console.log('1st for loop: [i = ' + i + ']' );
        buttonsClassList = YCselectionButtons[i].classList
        // console.log('y: ' + y);
        if (buttonsClassList.contains('selected')) {
            console.log('selected');
            let thisObject = {};
            thisObject['pairNumber'] = YCselectionButtons[i].classList[1];
            thisObject['direction'] = YCselectionButtons[i].classList[2];
            thisObject['yarnColor'] = YCselectionButtons[i].classList[3];
            thisObject['selection'] = YCselectionButtons[i].classList[4];
            userSelectionArray.push(thisObject);
            console.log('userSelectionArray =');
            console.log(userSelectionArray);
            y++
        }     
    }
}

function readValues () {
    console.log('readValues function executed')
    for (let i = 0; i < userSelectionArray.length; i++) {
        // console.log(userSelectionArray[i]);
        console.log('userSelectionArray[' + i +']:');
        console.log('pairNumber: ' + userSelectionArray[i].pairNumber);
        console.log('direction: ' + userSelectionArray[i].direction);
        console.log('yarnColor: ' + userSelectionArray[i].yarnColor);
    }
}

