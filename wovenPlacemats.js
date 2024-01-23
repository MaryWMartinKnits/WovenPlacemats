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
let algorithmBtn;
let middleSection1 = '';
let SetUpRow1 = '';
let beg = ' beginning of pattern '
let stitchCount = 0 //later it will be 85 sts to begin with I think. Have to check this!
let DE;

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
    algorithmBtn = document.querySelector('#algorithm');
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
    algorithmBtn.addEventListener('click', WovenPlacematSetUpRow1);
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
    console.log(userSelectionArray);
}


function print () {
    window.print()
}

let kfb = ' kfb ';
let ktbl1 = ' ktbl ';
let purlStitchCount = 0 // might have to initialize it at another value depending on pattern. Check this!
// let purl = purlStitchCount

function WovenPlacematSetUpRow1 () {
    console.log('WovenplacematSetUpRow1 function executed');
    // console.log(userSelectionArray);



    
        ifMiddleSectionSetUpRow1("middleSection1");
        console.log('changing section');
        ifMiddleSectionSetUpRow1("middleSection2");
        console.log('changing section');
        ifMiddleSectionSetUpRow1("middleSection3");
        // if (userSelectionArray[i].section == "middleSection1") {
        //     if (userSelectionArray[i].direction == 'right' && userSelectionArray[i].yarnColor == 'MC') {
        //         if (userSelectionArray[i+1].direction == 'left' && userSelectionArray[i+1].yarnColor == 'MC') {
        //             stitchCount++;
        //             console.log('stitch count = ' + stitchCount + ' ; ' + kfb);
        //             DE = kfb;
        //             middleSection1 = middleSection1 + DE
        //         } else if (userSelectionArray[i+1].direction == 'left' && userSelectionArray[i+1].yarnColor == 'CC') {
        //             console.log('stitch count = ' + stitchCount + ' ; ' + ktbl1);
        //             DE = ktbl1;                   
        //             middleSection1 = middleSection1 + DE
        //         }
        //     } else if ((userSelectionArray[i].direction == 'right' && userSelectionArray[i].yarnColor == 'CC')) {
        //         if (userSelectionArray[i+1].direction == 'left' && userSelectionArray[i+1].yarnColor == 'CC') {
        //             purlStitchCount++;
        //             console.log('stitch count = ' + stitchCount + ' ; ' + 'p1' + ' / purlStitchCount = ' + purlStitchCount);
        //             // return purlStitchCount;
        //             middleSection1 = middleSection1 + 'p' + purlStitchCount
        //         } else if (userSelectionArray[i+1].direction == 'left' && userSelectionArray[i+1].yarnColor == 'MC') {
        //             console.log('stitch count = ' + stitchCount + ' ; ' + ktbl1);
        //             DE = ktbl1;
        //             middleSection1 = middleSection1 + DE
        //         }
        //     }
        // }
    
    writeSetUpRow1();
}

function ifMiddleSectionSetUpRow1 (section) {
    for (let i = 0; i < userSelectionArray.length; i = i+2 ) {
        if (userSelectionArray[i].section == section) {
            if (userSelectionArray[i].direction == 'right' && userSelectionArray[i].yarnColor == 'MC') {
                if (userSelectionArray[i+1].direction == 'left' && userSelectionArray[i+1].yarnColor == 'MC') {
                    stitchCount++;
                    console.log('stitch count = ' + stitchCount + ' ; ' + kfb);
                    DE = kfb;
                    middleSection1 = middleSection1 + DE
                } else if (userSelectionArray[i+1].direction == 'left' && userSelectionArray[i+1].yarnColor == 'CC') {
                    console.log('stitch count = ' + stitchCount + ' ; ' + ktbl1);
                    DE = ktbl1;                   
                    middleSection1 = middleSection1 + DE
                }
            } else if ((userSelectionArray[i].direction == 'right' && userSelectionArray[i].yarnColor == 'CC')) {
                if (userSelectionArray[i+1].direction == 'left' && userSelectionArray[i+1].yarnColor == 'CC') {
                    purlStitchCount++;
                    console.log('stitch count = ' + stitchCount + ' ; ' + 'p1' + ' / purlStitchCount = ' + purlStitchCount);
                    // return purlStitchCount;
                    middleSection1 = middleSection1 + 'p' //+ purlStitchCount
                } else if (userSelectionArray[i+1].direction == 'left' && userSelectionArray[i+1].yarnColor == 'MC') {
                    console.log('stitch count = ' + stitchCount + ' ; ' + ktbl1);
                    DE = ktbl1;
                    middleSection1 = middleSection1 + DE
                }
            }
        }
    }
}



function writeSetUpRow1 () {
    console.log('writeSetUpRow1 function executed');
    SetUpRow1 = beg + middleSection1;
    console.log('SetUpRow1: ');
    console.log(SetUpRow1);
    let setUpRow1paragraph = document.createElement('p');
    setUpRow1paragraph.innerHTML = SetUpRow1;
    outputDiv.appendChild(setUpRow1paragraph);
}
