"use strict";

// declaring variables:

let windowWidth;
let screenDisplay;

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
    windowWidth = document.querySelector('#window-width');
    // windowScreen = document.querySelector('window');
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
    window.addEventListener('resize', displayWindowWidth);
}

function displayWindowWidth () {
    if (window.innerWidth > 1028) {
        screenDisplay = "BIG screen";
    } else if (window.innerWidth > 788) {
        screenDisplay = 'Desktop';
    } else if (window.innerWidth > 645) {
        screenDisplay = 'Tablet'
    } else {
        screenDisplay = 'Smartphone'
    }
    windowWidth.innerHTML = ("Window width: " + window.innerWidth + 'px -> ' + screenDisplay);

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
            thisObject['section'] = YCselectionButtons[i].classList[4];
            thisObject['selection'] = YCselectionButtons[i].classList[5];
            userSelectionArray.push(thisObject);
            console.log('userSelectionArray =');
            console.log(userSelectionArray);
            y++
        }     
    }
    for (let i = 0; i < userSelectionArray.length; i++) {
        console.log('userSelectionArray[' + i +']:');
        console.log('pairNumber: ' + userSelectionArray[i].pairNumber);
        console.log('direction: ' + userSelectionArray[i].direction);
        console.log('yarnColor: ' + userSelectionArray[i].yarnColor);
    }
}

function readValues () {
    console.log('readValues function executed')
    let inputSelectionTitle = document.createElement('h2');
    inputSelectionTitle.innerHTML = 'User Selection:';
    outputDiv.appendChild(inputSelectionTitle);
    for (let i = 0; i < userSelectionArray.length; i++) {    
    // let pairNumberTitle = document.createElement('h3');
    // pairNumberTitle.innerHTML = userSelectionArray[i].pairNumber;
    let pairNumberText = userSelectionArray[i].pairNumber;
    // outputDiv.appendChild(pairNumberTitle);
    // let cableDirectionTitle = document.createElement('h4');
    // cableDirectionTitle.innerHTML = userSelectionArray[i].direction;
    let cableDirectionText = userSelectionArray[i].direction;
    // outputDiv.appendChild(cableDirectionTitle);
    // let cableYarnColorTitle = document.createElement('h4');
    // cableYarnColorTitle.innerHTML = userSelectionArray[i].yarnColor;
    let cableYarnColorText = userSelectionArray[i].yarnColor;
    // outputDiv.appendChild(cableYarnColorTitle);
    let cableCombination = document.createElement('p');
    cableCombination.innerHTML = (pairNumberText + ': ' + cableDirectionText + ' -> ' + cableYarnColorText);
    outputDiv.appendChild(cableCombination);

    }
}


function print () {
    window.print()
}


function WovenPlacematSetUpRow1 () {

// Function char Setup1CableTypeA(i=CurrentCablePairNum)
// If (CableColours[i, 1] = "MC" and CableColours[i, 2] = "MC"); StitchCount = StitchCount + 1; return "kfb"
// If (CableColours[i, 1] = "CC" and CableColours[i, 2] = "CC"); return "p1"
// Return "ktbl1"

for (let i = 0; ) {
    if ()
}

}
