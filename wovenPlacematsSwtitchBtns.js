"use strict";

// declaring variables:

let windowWidth;
let screenDisplay;

let allYCbuttons = [];
let YCselectionButtons = [];
let allYCcheckboxes
let firedCheckboxID;
let checkboxClassList;
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
    outputDiv = document.querySelector('#outputDiv')
    getUserSelectionBtn = document.querySelector('#readUserSelectionBtn')
    readValuesBtn = document.querySelector('#readValues');
    windowWidth = document.querySelector('#window-width');
    algorithmBtn = document.querySelector('#algorithm');
    createInputSection(); 
    createYCselectionButtons()
    addEventListeners ();
    YCselectionButtons = document.querySelectorAll('.selected');

}

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
        // console.log('for loop inside createBerweenMarkersDiv function, i = ' + i);
        pairClass = `pair${pairNumber}`;
        sectionClass = `section${sectionNumber}`;
        let fieldset = document.createElement('fieldset');
        fieldset.innerHTML = (`
            <div class="pairNumber"><h3> Pair ${pairNumber} </h3></div>
            <div class="leftANDright">
            <div class="pairRight"> <div class="pairTitle"> <h4> Right </h4>  </div><div class="switchBtnDiv">  <p class="YCselection ${sectionClass} ${pairClass} right MC"> MC </p> <label class="switch">   <input type="checkbox" class="YCcheckbox ${sectionClass} ${pairClass} right" id="checkbox${pairNumber}right" value='noneSelected'> <span class="slider round"> </span></label> <p class="YCselection ${sectionClass} ${pairClass} right CC"> CC </p></div></div>
            <div class="pairLeft">  <div class="pairTitle"> <h4> Left   </h4> </div> <div class="switchBtnDiv"> <p class="YCselection ${sectionClass} ${pairClass} left MC"> MC </p>  <label class="switch">   <input type="checkbox" class="YCcheckbox ${sectionClass} ${pairClass} left" id="checkbox${pairNumber}left"> <span class="slider round"> </span></label> <p class="YCselection ${sectionClass} ${pairClass} left CC"> CC </p>  </div></div>
            </div> `)
        betweenMarkersDiv.appendChild(fieldset);
        // console.log('pair number: ' + pairNumber);
        if (DE % 2 !== 0) {
            pairNumber++
        }
        // console.log('section number: ' + sectionNumber)
    }
    sectionNumber++
}

function createYCselectionButtons () {
    // allYCbuttons = document.querySelectorAll('.YCselection');
    allYCcheckboxes = document.querySelectorAll('.YCcheckbox');
}

function addEventListeners () {
    console.log('function addEventListeners executed');
    for (let i = 0; i < allYCcheckboxes.length; i++) {
        // allYCcheckboxes[i].addEventListener('change', changeColorSelection)
        allYCcheckboxes[i].addEventListener('change', function(event) {changeColorSelection(allYCcheckboxes[i])})
    }
    getUserSelectionBtn.addEventListener('click', getUserSelection);
    readValuesBtn.addEventListener('click', displaySelectedValues);
    window.addEventListener('resize', displayWindowWidth);
    algorithmBtn.addEventListener('click', WovenPlacematSetUpRow1);
}

function changeColorSelection (checkedYC) {
    console.log('changeColorSelection function executed for: ');
    console.log(checkedYC);
    firedCheckboxID = event.target.id;
    checkedYC = document.querySelector('#'+firedCheckboxID);
    // console.log(checkedYC);
    if (checkedYC.checked) {
        checkedYC.value = 'CCselected';
        checkedYC.classList.add('CCselected')
        checkedYC.classList.remove('MCselected')
    } else {
        checkedYC.value = 'MCselected';
        checkedYC.classList.add('MCselected')
        checkedYC.classList.remove('CCselected')
    }
    // console.log(checkedYC.value);
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
    for (let i = 0; i < allYCcheckboxes.length; i++) {
        checkboxClassList = allYCcheckboxes[i].classList;
        let thisObject = {};
        thisObject['section'] = allYCcheckboxes[i].classList[1];
        thisObject['pairNumber'] = allYCcheckboxes[i].classList[2];
        thisObject['direction'] = allYCcheckboxes[i].classList[3];
        if (checkboxClassList.contains('CCselected')) {
             thisObject['yarnColor'] = 'CC';
        } else if (checkboxClassList.contains('MCselected')) {
            thisObject['yarnColor'] = 'MC';
        } else {
            thisObject['yarnColor'] = 'MC';
        }
        userSelectionArray.push(thisObject);
    }
    console.log(userSelectionArray);
    getUserSelectionBtn.disabled = true;
    getUserSelectionBtn.classList.add('disabledBtn');
}

function readValues () {
    console.log('readValues function executed')
    let inputSelectionTitle = document.createElement('h2');
    inputSelectionTitle.innerHTML = 'User Selection:';
    outputDiv.appendChild(inputSelectionTitle);
    for (let i = 0; i < userSelectionArray.length; i++) {
        let patternSectionText = userSelectionArray[i].section;
        let pairNumberText = userSelectionArray[i].pairNumber;
        let cableDirectionText = userSelectionArray[i].direction;
        let cableYarnColorText = userSelectionArray[i].yarnColor;
        // let sectionTitle = document.createElement('h3');
        let cableCombination = document.createElement('p');
        // sectionTitle.innerHTML = patternSectionText;
        cableCombination.innerHTML = (pairNumberText + ': ' + cableDirectionText + ' -> ' + cableYarnColorText);
        // outputDiv.appendChild(sectionTitle);
        outputDiv.appendChild(cableCombination);
    }
    console.log(userSelectionArray);
}

function displaySelectedValues () {
    console.log('displaySelectedValues function executed');
    userInputDiv.classList.add('hidden');
    let inputSelectionTitle = document.createElement('div');
    inputSelectionTitle.innerHTML = `<h2> User selection: </h2>`;
    // let inputSelectionTitle = document.createElement('h2');
    // inputSelectionTitle.innerHTML = 'User Selection:';
    inputSelectionTitle.classList.add('inputSelectionTitleDiv');
    outputDiv.appendChild(inputSelectionTitle);
    let pNumber = 0;
    let stNumber = 0
    let stDirection //
    
    for (let i = 0; i < numberOfSections; i++) {

        let sectionDiv = document.createElement('div');
        sectionDiv.classList.add('selectionOutputSection');
        outputDiv.appendChild(sectionDiv);

        let sNumber = i + 1;
        let sectionTitle = document.createElement('h3');
        sectionTitle.innerHTML = (`Section ${sNumber}`);
        sectionDiv.appendChild(sectionTitle);
        let eachSectionDiv = document.createElement('div');
        eachSectionDiv.classList.add('eachSectionDiv');
        sectionDiv.appendChild(eachSectionDiv);
         for (let j = 0; j < numberofDEperSection; j++) {
            pNumber++
            let eachPairDiv = document.createElement('div');
            eachPairDiv.classList.add('eachPairDiv');
            eachSectionDiv.appendChild(eachPairDiv);
            let pairNumberOutputTitle = document.createElement('h4');
            pairNumberOutputTitle.innerHTML = (`   Pair ${pNumber}`);
            eachPairDiv.appendChild(pairNumberOutputTitle);
            let leftText = 'Left';
            let rightText = 'Right';
            // let cableDirectionANDColor = document.createElement('p')
                let counter = 'pair' + pNumber
                let condition = userSelectionArray[stNumber].pairNumber;
                while (condition == counter) {
                    // let cableDirectionANDColor = document.createElement('p')
                    console.log('counter = ' + counter)
                    let pairStitchesDiv = document.createElement('div');
                    pairStitchesDiv.classList.add('pairStitchesDiv');
                    eachPairDiv.appendChild(pairStitchesDiv);
                    if (userSelectionArray[stNumber].direction = 'right') {
                        let stitchSection = document.createElement('div');
                        stitchSection.classList.add('stitchSection');
                        pairStitchesDiv.appendChild(stitchSection);

                        let cableDirectionANDColor = document.createElement('p')

                        console.log(`right ${stNumber+1}`);
                        stDirection = rightText;
                        cableDirectionANDColor.innerHTML = 
                        `<strong>${stDirection}</strong> design stitch is <strong>${userSelectionArray[stNumber].yarnColor}</strong>` ;
                        stitchSection.appendChild(cableDirectionANDColor);
                        stNumber++
                        // counter++
                     }
                     if (userSelectionArray[stNumber].direction = 'left') {
                        let stitchSection = document.createElement('div');
                        stitchSection.classList.add('stitchSection');
                        pairStitchesDiv.appendChild(stitchSection);

                        let cableDirectionANDColor = document.createElement('p')

                        console.log(`left ${stNumber+1}`)
                        stDirection = leftText
                        cableDirectionANDColor.innerHTML = 
                        `<strong>${stDirection}</strong> design stitch is <strong>${userSelectionArray[stNumber].yarnColor}</strong>` ;
                        stitchSection.appendChild(cableDirectionANDColor);
                        stNumber++
                        counter++
                     }


                }      

        }
    }

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
