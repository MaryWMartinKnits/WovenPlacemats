"use strict";

// declaring variables:

let YCselectionButtons;
let YCparentDiv;
let YCultimateParent;

let YCbuttonValue
let firedButtonID;
let firedButton;


let pair1Left;
let pair1Right;
let pair2Left;
let pair2Right;
let pair3Left;
let pair3Right;
let pair4Left;
let pair4Right;
let pair5Left;
let pair5Right;
let pair6Left;
let pair6Right;
let pair7Left;
let pair7Right;
let pair8Left;
let pair8Right;
let pair9Left;
let pair9Right;
let pair10Left;
let pair10Right;
let pair11Left;
let pair11Right;
let pair12Left;
let pair12Right;
let pair13Left;
let pair13Right;
let pair14Left;
let pair14Right;

let pair1LeftYC;
let pair1RightYC;
let pair2LeftYC;
let pair2RightYC;

let pair1LeftMC;
let pair1RightMC;
let pair2LeftMC;
let pair2RightMC;

let pair1LeftCC;
let pair1RightCC;
let pair2LeftCC;
let pair2RightCC;

window.onload = init();

function init() {
    console.log('page loaded, the DOM is ready');
    getDOMelements ();

}

function getDOMelements () {
    console.log('function getDOMelements executed');
    // pair1Left = document.querySelector('#pair1Left');
    // pair1Right = document.querySelector('#pair1Right');
    // pair2Left = document.querySelector('#pair2Left');
    // pair2Right = document.querySelector('#pair2Right');

    // pair1LeftMC = document.querySelector('#pair1LeftMC');
    // pair1RightMC = document.querySelector('#pair1RightMC');
    // pair2LeftMC = document.querySelector('#pair2LeftMC');
    // pair2RightMC = document.querySelector('#pair2RightMC');

    // pair1LeftCC = document.querySelector('#pair1LeftCC');
    // pair1RightCC = document.querySelector('#pair1RightCC');
    // pair2LeftCC = document.querySelector('#pair2LeftCC');
    // pair2RightCC = document.querySelector('#pair2RightCC');

    YCselectionButtons = document.querySelectorAll('.YCselection');

    addEventListeners ();
}

function addEventListeners () {
    console.log('function addEventListeners executed');
    // pair1LeftMC.addEventListener('click', selectOption);
    // pair1RightMC.addEventListener('click', selectOption);
    // pair1LeftCC.addEventListener('click', selectOption);
    // pair1RightCC.addEventListener('click', selectOption);
    // pair2Left.addEventListener('change', getValues);
    // pair2Right.addEventListener('select', getValues);
    YCselectionButtons = document.querySelectorAll('.YCselection');
    console.log('YCselectionButtons.length = ' + YCselectionButtons.length);
     for (let i = 0; i < YCselectionButtons.length; i++) {
        // console.log(YCselectionButtons[i]);
        // YCselectionButtons[i].addEventListener('click', getYC);
        YCselectionButtons[i].addEventListener('click', function(event) {getYC(YCselectionButtons[i])});


     }
}

function getYC (YCbutton) {
    console.log('getYC function executed');
    console.log('event.target.id: ' + event.target.id);
    firedButtonID = event.target.id;
    firedButton = document.querySelector('#'+firedButtonID);
    firedButton.classList.add('selected');
    console.log(YCbutton);
    console.log('YCbutton.parentElement');
    console.log(YCbutton.parentElement);
    YCparentDiv = YCbutton.parentElement;
    // console.log('YCparentDiv');
    // console.log(YCparentDiv);
    YCultimateParent = YCparentDiv.parentElement;
    // console.log('YCultimateParent');
    // console.log(YCultimateParent);
        //   console.log('changing innerHTML of: ');
        // console.log( YCultimateParent );    
        YCultimateParent.innerHTML = event.target.innerHTML;
        YCultimateParent.classList.add('strong');
        // console.log(YCparentDiv)
        let x = YCultimateParent.innerHTML;
        console.log(x)
        console.log(YCbutton)
        YCbuttonValue = YCbutton.id;
        console.log(YCbuttonValue)
        YCbutton.setAttribute('value', YCbuttonValue)
        console.log(YCbutton.target)
    




}
