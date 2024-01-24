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
let DEstitchCount = 0 //later it will be 85 sts to begin with I think. Have to check this!
// let DE;

let DE = 1;
let pairNumber = 1;
    let numberOfDE = 28;
    let numberofDEperSection = 4
    let numberOfSections =  numberOfDE / numberofDEperSection;
    let sectionNumber = 1;
    let sectionClass = `section${sectionNumber}`;
    let pairClass = `pair${pairNumber}`;
    let userInputDiv = document.querySelector('#userInputDiv');
    let betweenMarkersDiv = document.createElement('div');
    let pairNumberDiv = document.createElement('div');
    pairNumberDiv.classList.add('pairNumberDiv');
    let pairNumberTitle = document.createElement('h3');
    let leftANDrightDiv = document.createElement('div');
    leftANDrightDiv.classList.add('leftANDright');
    let pairRightDiv = document.createElement('div');
    pairRightDiv.classList.add('pairRight');
    let rightTitle = document.createElement('h4');
    rightTitle.innerHTML = 'Right '
    let pairLeftDiv = document.createElement('div');
    pairLeftDiv.classList.add('pairLeft');
    let leftTitle = document.createElement('h4');
    leftTitle.innerHTML = 'Left '
    let switchBtnDiv = document.createElement('div');
    switchBtnDiv.classList.add('switchBtnDiv');
    let MCoption = document.createElement('p');
    MCoption.classList.add('YCselection', 'MC');
    MCoption.innerHTML = 'MC';
    let CCoption = document.createElement('p');
    CCoption.classList.add('YCselection', 'CC');
    CCoption.innerHTML = 'CC';
    let label = document.createElement('label');
    label.classList.add('switch');
    let input = document.createElement('input');
    let span = document.createElement('span');
    span.classList.add('slider', 'round');

let kfb = ' kfb ';
let ktbl1 = ' ktbl ';
let purlStitchCount = 0 // might have to initialize it at another value depending on pattern. Check this!
// let purl = purlStitchCount

window.onload = init();

function init() {
    console.log('page loaded, the DOM is ready');
    getDOMelements ();
}

function getDOMelements () {
    console.log('function getDOMelements executed');
    // YCselectionButtons = document.querySelectorAll('.YCselection');
    outputDiv = document.querySelector('#outputDiv')
    getUserSelectionBtn = document.querySelector('#readUserSelectionBtn')
    readValuesBtn = document.querySelector('#readValues');
    windowWidth = document.querySelector('#window-width');
    algorithmBtn = document.querySelector('#algorithm');
    YCselectionButtons = document.querySelectorAll('.YCselection');
    createInputSection(); //
    addEventListeners ();

}


// createBetweenMarkersDiv.appendChild(breakingPoint);

function createInputSection () {
    console.log('createInputSection function executed');
    for (let i = 0; i < numberOfSections; i++) {
        createBetweenMarkersDiv();
    }
}

function createBetweenMarkersDiv() {
    console.log('createBetweenMarkersDiv function executed');
    
    
    betweenMarkersDiv = document.createElement('div');
    betweenMarkersDiv.innerHTML = '';
    betweenMarkersDiv.classList.add('section', 'betweenMarkers')
    userInputDiv.appendChild(betweenMarkersDiv);
    for (let i = 0; i < numberofDEperSection; i++) {
        console.log('for loop inside createBerweenMarkersDiv function, i = ' + i);
        pairClass = `pair${pairNumber}`;
        sectionClass = `section${sectionNumber}`;
        let fieldset = document.createElement('fieldset');
        fieldset.innerHTML = (`
            <div class="pairNumber"><h3> Pair ${pairNumber} </h3></div>
            <div class="leftANDright">
            <div class="pairRight"> <div class="pairTitle"> <h4> Right </h4>  </div><div class="switchBtnDiv">  <p class="YCselection ${sectionClass} ${pairClass} right MC"> MC </p> <label class="switch">   <input type="checkbox"> <span class="slider round"> </span></label> <p class="YCselection ${sectionClass} ${pairClass} right CC"> CC </p></div></div>
            <div class="pairLeft">  <div class="pairTitle"> <h4> Left   </h4> </div> <div class="switchBtnDiv"> <p class="YCselection ${sectionClass} ${pairClass} left MC"> MC </p>  <label class="switch">   <input type="checkbox"> <span class="slider round"> </span></label> <p class="YCselection ${sectionClass} ${pairClass} left CC"> CC </p>  </div></div>
            </div> `)
        betweenMarkersDiv.appendChild(fieldset);
        console.log('pair number: ' + pairNumber);
        if (DE % 2 !== 0) {
            pairNumber++
        }
        console.log('section number: ' + sectionNumber)
    }

    sectionNumber++
}

function addEventListeners () {
    console.log('function addEventListeners executed');
    for (let i = 0; i < YCselectionButtons.length; i++) {
        // YCselectionButtons[i].addEventListener('change', changeColorSelection(YCselectionButtons[i]));
        YCselectionButtons[i].addEventListener('change', changeColorSelection);

    }
    getUserSelectionBtn.addEventListener('click', getUserSelection);
    readValuesBtn.addEventListener('click', readValues);
    window.addEventListener('resize', displayWindowWidth);
    algorithmBtn.addEventListener('click', WovenPlacematSetUpRow1);
}

 function changeColorSelection (checkedYC) {
     console.log('changeColorSelection function executed');
     console.log('checkedYC: ')
     console.log(checkedYC);
     firedButton = checkedYC
     // firedButton.classList.add('selected');
 }

function displayWindowWidth () {
    if (window.innerWidth > 1028) {
        screenDisplay = "BIG screen";
    } else if (window.innerWidth > 976) {
        screenDisplay = 'Desktop';
    } else if (window.innerWidth > 746) {
        screenDisplay = 'BIG Tablet'
    }  else if (window.innerWidth > 500) {
    screenDisplay = 'small Tablet'
    }  else {
        screenDisplay = 'Smartphone'
    }
    windowWidth.innerHTML = ("Window width: " + window.innerWidth + 'px -> ' + screenDisplay);

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
            thisObject['section'] = YCselectionButtons[i].classList[1];
            thisObject['pairNumber'] = YCselectionButtons[i].classList[2];
            thisObject['direction'] = YCselectionButtons[i].classList[3];
            thisObject['yarnColor'] = YCselectionButtons[i].classList[4];
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
        let patternSectionText = userSelectionArray[i].section;
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



function WovenPlacematSetUpRow1 () {
    console.log('WovenplacematSetUpRow1 function executed');
    // console.log(userSelectionArray);
        ifMiddleSectionSetUpRow1("middleSection1");
        console.log('changing section');
        ifMiddleSectionSetUpRow1("middleSection2");
        console.log('changing section');
        ifMiddleSectionSetUpRow1("middleSection3");
    writeSetUpRow1();
}

function middleSectionSetUpRow1 (section) {
    for (let i = 0; i < userSelectionArray.length; i = i+2 ) {
        if (userSelectionArray[i].section == section) {
            if (userSelectionArray[i].direction == 'right' && userSelectionArray[i].yarnColor == 'MC') {
                if (userSelectionArray[i+1].direction == 'left' && userSelectionArray[i+1].yarnColor == 'MC') {
                    DEstitchCount++;
                    console.log('stitch count = ' + DEstitchCount + ' ; ' + kfb);
                    DE = kfb;
                    middleSection1 = middleSection1 + DE
                } else if (userSelectionArray[i+1].direction == 'left' && userSelectionArray[i+1].yarnColor == 'CC') {
                    console.log('stitch count = ' + DEstitchCount + ' ; ' + ktbl1);
                    DE = ktbl1;
                    middleSection1 = middleSection1 + DE
                }
            } else if ((userSelectionArray[i].direction == 'right' && userSelectionArray[i].yarnColor == 'CC')) {
                if (userSelectionArray[i+1].direction == 'left' && userSelectionArray[i+1].yarnColor == 'CC') {
                    purlStitchCount++;
                    console.log('stitch count = ' + DEstitchCount + ' ; ' + 'p1' + ' / purlStitchCount = ' + purlStitchCount);
                    // return purlStitchCount;
                    middleSection1 = middleSection1 + 'p' //+ purlStitchCount
                } else if (userSelectionArray[i+1].direction == 'left' && userSelectionArray[i+1].yarnColor == 'MC') {
                    console.log('stitch count = ' + DEstitchCount + ' ; ' + ktbl1);
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
