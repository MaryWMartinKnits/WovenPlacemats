"use strict";

// declaring variables:
let windowWidth;
let begOfPage;
let userInputTitle;
let allYCcheckboxes
let firedCheckboxID;
let checkboxClassList;
let userSelectionArray = [];
let setUpRowsDiv;
let DE = '';
let pairNumber = 1;
let numberOfDE = 28;
let numberofDEperSection = 4
let numberOfSections =  numberOfDE / numberofDEperSection;
let sectionNumber = 1;
let sectionClass = `section${sectionNumber}`;
let pairClass = `pair${pairNumber}`;
let betweenMarkersDiv = document.createElement('div');
let middleSections1Array = [];
let middleSections1 = '';
let middleSections2Array = [];
let middleSections2 = '';
let SetUpRow1 = '';
let SetUpRow2 = ''
const slipMarker = ' <strong> sm, </strong> ';
const beg1 = `<strong> Setup Row 1 (MC): </strong> Ptbl1, p1, ktbl1, p1, ${slipMarker} `; //  change beeggining of pattern for however the set up row starts
const end1 = ' p1, ktbl1, p1, ptbl1 .';
const beg2 = `<strong> Setup Row 2 (CC): </strong> Ktbl1, k1, sl1, k1, ${slipMarker} `;
const end2 = ' k1, sl1, k1, ktbl1.';
let DEstitchCountRow1 = 0;
let DEstitchCountRow2 = 0;
let originalStitchCount = 85 //number of sts to begin with, I think it's 85. 4 + 11*7 + 4.
const kfb = ' kfb';
const cero_into_two = ' 0-into-2';
const ktbl1 = ' ktbl1';
const m1L = ' m1L';
const sl1 = ' sl1';
let purlStitchCount = 1// might have to initialize it at another value depending on pattern. Check this!
let purl = '';
const p1 = ' p1';
const k1 = ' k1';
const k2 = ' k2';
let divToCreateSpace;
let optimalHeight;
let setUpRow1Div;
let setUpRow2Div
let writtenStitchCount1;
let c = 0
let setUpRow1Array = []
let ExtraPurlStsInvolved;
let beforePurlSts = false;
let afterPurlSts;
let write1 = '';
let write2 = '';
let allSections1ArrayWritten = [];
let allSections2ArrayWritten = [];
let keepPurling = false;
let writtenSection1All = '';
let writtenSection2All = '';
let setUpRow1paragraph;
let setUpRow2paragraph;
let setUpRow2Array = [];
let Row2DE = ''
const sl2 = ' sl2'
let totalStCountRow1;
let totalStCountRow2;
let writtenStitchCount2;
let Row1DE;  
let Row1DEinstructions;
let colorCode;
let combination = '';
let createChartBtn;
let createSetUpRowsBtn;

// continue editing colors:
let continueEditingBtn;
let oldUserSelectionArray = [];
let newUserSelectionArray = [];
let allSwitches;
let newYCcheckboxes;
let editingCounter = 0;
let allLabels;
let allFieldsets;
let updateSVG;

// SVG:
let NumberCablePairs;
let NumVerticalRepeats;
let NumberOfCables;
let svgHeight;
let svgWidth
let PairNumber;
let cablesArray = [];
let RightMoving; // boolean variable;
let NextX;
let NextY;
let SVGinDiv;
let newDirection;
let svgPlacemat;
let thickness;
let chartNumbersDiv;

// choosing colors:
let MCpickerBtn;
let CCpickerBtn;
let backgroundPickerBtn;
let allMClines;
let allCClines;
let pickedMC;
let pickedCC;
let pickedBackground = '#ffffff';

let note1;
let note2;


window.onload = init();

function init() {
    console.log('page loaded, the DOM is ready');
    getDOMelements ();
}

function getDOMelements () {
    console.log('function getDOMelements executed');
    begOfPage = document.querySelector('#begOfPage')
    createSetUpRowsBtn = document.querySelector('#createSetUpRowsBtn');
    windowWidth = document.querySelector('#window-width');
    setUpRowsDiv = document.querySelector('#setUpRows');
    continueEditingBtn = document.querySelector('#continueEditingBtn');
    hideBtn(continueEditingBtn);
    createChartBtn = document.querySelector('#createChartBtn');
    divToCreateSpace = document.querySelector('.space');
    // let userInputDiv = document.querySelector('#userInputDiv');
    // let svgChartDiv = document.querySelector('#svgChartDiv');
    chartNumbersDiv = document.querySelector('#chartNumbersDiv');
    chartNumbersDiv.classList.add('hidden');
    svgPlacemat = document.querySelector('#svgPlacemat');
    MCpickerBtn = document.querySelector('#colorPickerMC');
    CCpickerBtn = document.querySelector('#colorPickerCC');
    backgroundPickerBtn = document.querySelector('#backgroundPickerBtn')
    updateSVG = document.querySelector('#updateSVG');
    updateSVG.classList.add('hidden');
    note1 = document.querySelector('#note1');
    note2 = document.querySelector('#note2');
    createInputSection(); 
    createYCselectionButtons();
    addEventListeners ();
    chooseLineColor();
}

function hideBtn (button) {
    button.disabled = true;
    button.classList.add('disabledBtn');
    button.classList.add('hidden');
}

function enableBtn (button) {
    button.disabled = false;
    button.classList.remove('disabledBtn');
    button.classList.remove('hidden');
}

function createInputSection () {
    console.log('function createInputSection executed');
    let code = 0;
    let pairNumber = 1;
    for (let i = 0; i < numberOfSections; i++) {
        let wholeSection = document.createElement('div');
        userInputDiv.appendChild(wholeSection);
        let sectionSection = document.createElement('div');
        sectionSection.classList.add ('sectionTitle');
        sectionSection.innerHTML = `<div> <h3> Section ${i+1} </h3> </div>`;
        wholeSection.appendChild(sectionSection);
        betweenMarkersDiv = document.createElement('div');
        betweenMarkersDiv.innerHTML = '';
        betweenMarkersDiv.classList.add('section', 'betweenMarkers')
        colorCode = `colorCoding${code}`
        code ++
        if (code == numberofDEperSection) {
            code = 0
        }
        sectionSection.classList.add(`${colorCode}`)
        wholeSection.appendChild(betweenMarkersDiv);
        for (let k = 0; k < numberofDEperSection; k++) {
            pairClass = `pair${pairNumber}`;
            sectionClass = `section${sectionNumber}`;
            let fieldset = document.createElement('fieldset');
            fieldset.innerHTML = (`
                <div class="pairNumber"><h4> Pair ${pairNumber} </h4></div>
                <div class="leftANDright">
                <div class="pairRight"> <div class="pairTitle"> <h5> Right </h5>  </div><div class="switchBtnDiv">  <p class="YCselection ${sectionClass} ${pairClass} right MC"> MC </p> <label class="switch">   <input type="checkbox" class="YCcheckbox ${sectionClass} ${pairClass} right" id="checkbox${pairNumber}right" value='noneSelected'> <span class="slider round"> </span></label> <p class="YCselection ${sectionClass} ${pairClass} right CC"> CC </p></div></div>
                <div class="pairLeft">  <div class="pairTitle"> <h5> Left   </h5> </div> <div class="switchBtnDiv"> <p class="YCselection ${sectionClass} ${pairClass} left MC"> MC </p>  <label class="switch">   <input type="checkbox" class="YCcheckbox ${sectionClass} ${pairClass} left" id="checkbox${pairNumber}left"> <span class="slider round"> </span></label> <p class="YCselection ${sectionClass} ${pairClass} left CC"> CC </p>  </div></div>
                </div> `)
            betweenMarkersDiv.appendChild(fieldset);
                pairNumber++
        }
        sectionNumber++
    }
}

function createYCselectionButtons () {
    console.log('function createYCselectionButtons executed');
    allYCcheckboxes = document.querySelectorAll('.YCcheckbox');
    if (userSelectionArray.length == numberOfDE * 2) {
        for (let i = 0; i < allYCcheckboxes.length; i ++) {
            allYCcheckboxes[i].classList.add(`${userSelectionArray[i].yarnColor}`) //
            allYCcheckboxes[i].addEventListener('change', function(event) {changeColorSelection(allYCcheckboxes[i])})
        }
    } else if (userSelectionArray.length > numberOfDE * 2) {
        userSelectionArray = [];
        createUserSelectionArray()
    }
}

function addEventListeners () {
    console.log('function addEventListeners executed');
    continueEditingBtn.addEventListener('click', continueEditingColors);
    createSetUpRowsBtn.addEventListener('click', restrictions);
    createChartBtn.addEventListener('click', SVGcondition);
    MCpickerBtn.addEventListener('change', changeLineMC);
    CCpickerBtn.addEventListener('change', changeLineCC);
    backgroundPickerBtn.addEventListener('change', changeBackground);
    let thisCheckbox;
     for (let i = 0; i < allYCcheckboxes.length; i++) {
        thisCheckbox = allYCcheckboxes[i];
         allYCcheckboxes[i].addEventListener('change', function(event) {changeColorSelection(thisCheckbox)})
     }
}

function changeColorSelection (checkedYC) {
    firedCheckboxID = event.target.id;
    checkedYC = document.querySelector('#'+firedCheckboxID);
    if (checkedYC.checked) {
        checkedYC.value = 'CCselected';
        checkedYC.classList.add('CCselected');
        checkedYC.classList.remove('MCselected');
        checkedYC.classList.remove('noneSelected');
        checkedYC.classList.remove('on');
    } else {
        checkedYC.value = 'MCselected';
        checkedYC.classList.add('MCselected');
        checkedYC.classList.remove('CCselected');
        checkedYC.classList.remove('noneSelected');
        checkedYC.classList.remove('on');
    }
}

function disableInputSwitches () {
    // console.log('function disableInputSwitches executed');
    allSwitches = document.querySelectorAll('input');
    allLabels = document.querySelectorAll('label');
    allFieldsets = document.querySelectorAll('fieldset');
    for ( let i = 0; i < allSwitches.length; i ++) {
        allSwitches[i].disabled = true;
        allSwitches[i].classList.add('disabledSwitch');
        allLabels[i].classList.add('disabledSwitch');
    }
    for (let j = 0; j < allFieldsets.length; j++) {
        allFieldsets[j].classList.add('disabledSwitch');
    }
}

function enableInputSwitches () {
    console.log('function enableInputSwitches executed');
    allSwitches = document.querySelectorAll('input');
    allLabels = document.querySelectorAll('label');
    allFieldsets = document.querySelectorAll('fieldset');
    for ( let i = 0; i < allSwitches.length; i ++) {
        allSwitches[i].disabled = false;
        allSwitches[i].classList.remove('disabledSwitch');
        allLabels[i].classList.remove('disabledSwitch');
    }
    for (let j = 0; j < allFieldsets.length; j++) {
        allFieldsets[j].classList.remove('disabledSwitch');

    }
}

function createUserSelectionArray () {
    console.log('function createUserSelectionArray executed')
    disableInputSwitches();
    if (userSelectionArray.length > numberOfDE * 2) {
        userSelectionArray = [];
    } 
    if (editingCounter > 0) {
        console.log(`editingCounter = ${editingCounter}`)
        createNewUserSelectionArrayForOutput();
    }
    if (userSelectionArray <= numberOfDE * 2) {
        // create an array of selected buttons as objects with properties:
        for (let i = 0; i < allYCcheckboxes.length; i++) {
            checkboxClassList = allYCcheckboxes[i].classList;
            let thisObject = {};
            thisObject['section'] = allYCcheckboxes[i].classList[1];
            thisObject['pairNumber'] = allYCcheckboxes[i].classList[2];
            thisObject['direction'] = allYCcheckboxes[i].classList[3];
            if (checkboxClassList.contains('CCselected') || checkboxClassList.contains('CC')) {
                thisObject['yarnColor'] = 'CC';
            } else if (checkboxClassList.contains('MCselected')) {
                thisObject['yarnColor'] = 'MC';
            } else {
                thisObject['yarnColor'] = 'MC';
            }
            thisObject['numberID'] = i;
            userSelectionArray.push(thisObject);
        }   // i loop
    } // if
    console.log('userSelectionArray: ')
    console.log(userSelectionArray);
}

function createSetUpRow1Array () {
    createUserSelectionArray();
    SVGcondition();
    console.log('function createSetUpRow1Array executed');;
    let c = 0;
    for (let i = 0; i < numberOfSections; i++) {
        for (let j = 0; j < numberofDEperSection; j++) {
            let thisObject = {};
                thisObject['numberID'] = c;
                thisObject['section'] = userSelectionArray[c].section;
                thisObject['pairNumber'] = userSelectionArray[c].pairNumber
            if (j == 0) { //1st pair
                firstPairOfSection_SetUpRow1 (c, thisObject)
            }else if (j < numberofDEperSection - 1) { //2nd and 3rd pair
                middlePairsOfSection_SetUpRow1(c, thisObject);
            } else if (j == numberofDEperSection - 1) { // 4th pair
                lastPairOfSection_SetUpRow1(c, thisObject);
            }
            c = c+2
        } //j loop
    } //i loop
    console.log('setUpRow1Array:');
    console.log(setUpRow1Array);
    wovenPlacematSetUpRow1(setUpRow1Array);
}

function firstPairOfSection_SetUpRow1 (c,thisObject) {
    purlStitchCount = 1;
    if (userSelectionArray[c].yarnColor == 'MC' && userSelectionArray[c+1].yarnColor == 'MC') {
        DE = `${p1}, ${kfb} `;
        DEstitchCountRow1++
        purlStitchCount = 2;
        keepPurling = false;
    } else if (userSelectionArray[c].yarnColor == 'MC' && userSelectionArray[c+1].yarnColor == 'CC') {
        DE = `${p1}, ${ktbl1} `
        purlStitchCount = 2;
        keepPurling = false;
    } else if (userSelectionArray[c].yarnColor == 'CC' && userSelectionArray[c+1].yarnColor == 'CC') {
        purl = 'purl';
        DE = purl
        purlStitchCount = purlStitchCount + 3 // = 4
        keepPurling = true;
    } else if (userSelectionArray[c].yarnColor == 'CC' && userSelectionArray[c+1].yarnColor == 'MC') {
        DE = `${p1}, ${ktbl1} `;
        purlStitchCount = 2;
        keepPurling = false;
    }
    thisObject['DE'] = DE;
    thisObject['purlStitchCount'] = purlStitchCount;
    thisObject['keepPurling'] = keepPurling;
    setUpRow1Array.push(thisObject);
    return purlStitchCount;

}

function middlePairsOfSection_SetUpRow1 (c, thisObject) {
    if (userSelectionArray[c].yarnColor == 'MC' && userSelectionArray[c+1].yarnColor == 'MC') {
        // console.log(`right MC & left MC`)
        purlStitchCount = 0;
        DE = kfb;
        DEstitchCountRow1++
        purlStitchCount = purlStitchCount + 2;
        keepPurling = false;
    } else if (userSelectionArray[c].yarnColor == 'MC' && userSelectionArray[c+1].yarnColor == 'CC') {
        // console.log(`right MC & left CC`)
        purlStitchCount = 0
        DE = ktbl1;
        purlStitchCount = purlStitchCount + 2
        keepPurling = false;
    } else if (userSelectionArray[c].yarnColor == 'CC' && userSelectionArray[c+1].yarnColor == 'CC') {
        // console.log(`right CC & left CC`);
        purlStitchCount = purlStitchCount + 3
        purl = 'purl'
        DE =  purl // p2, p1,
        keepPurling = true;
    } else if (userSelectionArray[c].yarnColor == 'CC' && userSelectionArray[c+1].yarnColor == 'MC') {
        // console.log(`right CC & left MC`);
        purlStitchCount = 0
        DE = ktbl1;
        purlStitchCount = purlStitchCount + 2
        keepPurling = false;
    }
    thisObject['DE'] = DE;
    thisObject['purlStitchCount'] = purlStitchCount;
    thisObject['keepPurling'] = keepPurling;
    setUpRow1Array.push(thisObject);
    return purlStitchCount;
}

function lastPairOfSection_SetUpRow1 (c, thisObject) {
    keepPurling = false;
    if (userSelectionArray[c].yarnColor == 'MC' && userSelectionArray[c+1].yarnColor == 'MC') {
        purlStitchCount = 0;
        DE = `${cero_into_two}`
        DEstitchCountRow1 = DEstitchCountRow1 + 2
        purlStitchCount++
        combination = 'right MC & left MC'
    } else if (userSelectionArray[c].yarnColor == 'MC' && userSelectionArray[c+1].yarnColor == 'CC') {
        purlStitchCount = 0
        DE = m1L;
        purlStitchCount++
        DEstitchCountRow1++
        combination = 'right MC & left CC'
    } else if (userSelectionArray[c].yarnColor == 'CC' && userSelectionArray[c+1].yarnColor == 'CC') {
        purlStitchCount++
        DE = ''
        keepPurling = true;
        combination = 'right CC & left CC'
    } else if (userSelectionArray[c].yarnColor == 'CC' && userSelectionArray[c+1].yarnColor == 'MC') {
        purlStitchCount = 0
        DE = m1L;
        DEstitchCountRow1++
        purlStitchCount++
        combination = 'right CC & left MC'
    }
    thisObject['DE'] = DE;
    thisObject['purlStitchCount'] = purlStitchCount;
    thisObject['keepPurling'] = keepPurling;
    thisObject['combination'] = combination;
    combination = ''
    purlStitchCount = 1; //every new section will starts with p1
    setUpRow1Array.push(thisObject);
    return purlStitchCount;

}

function wovenPlacematSetUpRow1 (setUpRow1Array) {
    console.log(`function wovenPlacematSetUpRow1 executed.`)
    FIRSTsection_SetUpRow1(setUpRow1Array);
    MiddleSections_SetUpRow1(setUpRow1Array);
    LASTsection_SetUpRow1(setUpRow1Array);
    writeSetUpRow1(allSections1ArrayWritten);
} 

function FIRSTsection_SetUpRow1 (setUpRow1Array) {
    console.log('function writeFIRSTsection_SetUpRow1 executed');
    beforePurlSts = false;
    for (let i = 0; i < numberofDEperSection; i++) {
            ExtraPurlStsInvolved = setUpRow1Array[i].keepPurling;
            if (setUpRow1Array[i].section == setUpRow1Array[i+1].section) {
                afterPurlSts = setUpRow1Array[i+1].keepPurling;
            } else {
                afterPurlSts = false // Exception: the last st of the section cannot have extra purling sts after.
            }
            if (i == 0) {
                determineStitchPatternForFIRSTpair(i, setUpRow1Array)
            } else if (setUpRow1Array[i].section == setUpRow1Array[i+1].section) {
                determineStitchPatternForMIDDLEpairs (i, setUpRow1Array)
            } else if (setUpRow1Array[i].section !== setUpRow1Array[i+1].section) { 
                determineStitchPatternForLASTpair(i, setUpRow1Array);
            }
    } // i loop
    console.log('middleSections1Array: ');
    console.log(middleSections1Array);
}

function MiddleSections_SetUpRow1 (setUpRow1Array) {
    console.log('function writeMiddleSections_SetUpRow1 executed');
    for (let i = 4; i < setUpRow1Array.length - 4; i++) {
        ExtraPurlStsInvolved = setUpRow1Array[i].keepPurling;
        if (setUpRow1Array[i].section == setUpRow1Array[i+1].section) { // Exception: the last st of the section cannot have extra purling sts after.
            afterPurlSts = setUpRow1Array[i+1].keepPurling;
        } else {
            afterPurlSts = false // Exception: the last st of the section cannot have extra purling sts after.
        }
        if (setUpRow1Array[i].section !== setUpRow1Array[i-1].section) { //firts pair of the section
            determineStitchPatternForFIRSTpair(i, setUpRow1Array)
        } else if (setUpRow1Array[i].section == setUpRow1Array[i+1].section) { // 2nd and 3rd pair of the section
            determineStitchPatternForMIDDLEpairs(i, setUpRow1Array);
        } else if (setUpRow1Array[i].section !== setUpRow1Array[i+1].section) { // fourth pair of the section
            determineStitchPatternForLASTpair(i, setUpRow1Array);
        }
    } // i loop
}

function LASTsection_SetUpRow1 (setUpRow1Array) {
    console.log('function writeLASTsection_SetUpRow1 executed');
    for (let i = setUpRow1Array.length - 4; i < setUpRow1Array.length; i++) {
        ExtraPurlStsInvolved = setUpRow1Array[i].keepPurling;
        if (setUpRow1Array[i].section !== setUpRow1Array[i-1].section) {
            beforePurlSts = false; 
            afterPurlSts = setUpRow1Array[i+1].keepPurling; 
            determineStitchPatternForFIRSTpair(i, setUpRow1Array)
        } else if (setUpRow1Array[i].section == setUpRow1Array[i-1].section && setUpRow1Array[i].section !== setUpRow1Array[i-(numberofDEperSection-1)].section) {
            beforePurlSts = setUpRow1Array[i-1].keepPurling; 
            afterPurlSts = setUpRow1Array[i+1].keepPurling; 
            determineStitchPatternForMIDDLEpairs(i, setUpRow1Array);
        } else if (setUpRow1Array[i].section == setUpRow1Array[i-(numberofDEperSection-1)].section) {
            beforePurlSts = setUpRow1Array[i-1].keepPurling; //
            afterPurlSts = false; //last pair of the section -> there are no afterPurl sts.
            determineStitchPatternForLASTpair(i, setUpRow1Array)
        }
    } // i loop
}

function determineStitchPatternForFIRSTpair (i, setUpRow1Array) {
    // console.log('determineStitchPatternForFIRSTpair funtion executed')
    beforePurlSts = false; // false, there's not a previous purl st count for the first pair.
    if (!beforePurlSts) {
        if (ExtraPurlStsInvolved) { // true -> what to do if this is a purl DE stitch.
            if (afterPurlSts) {
                write1 = write1;
            }else if (!afterPurlSts) {
                write1 = `${write1} p${setUpRow1Array[i].purlStitchCount}, `; 
            }
        } else if (!ExtraPurlStsInvolved) { // false -> this is not a purl DE stitch.
            if (afterPurlSts) {
                write1 = `${write1} ${setUpRow1Array[i].DE}, `;
            }else if (!afterPurlSts) {
                write1 = `${write1} ${setUpRow1Array[i].DE}, p2, `;
            }
        }
    }
    return write1;
}

function determineStitchPatternForMIDDLEpairs (i, setUpRow1Array) {
    // console.log('determineStitchPatternForMIDDLEpairs function executed')
    if (beforePurlSts ) { // true -> what to do if there's s previous purl st count.
        if (ExtraPurlStsInvolved) { // true -> what to do if this is a purl DE stitch.
            if (afterPurlSts) {
                write1 = write1;
            } else if (!afterPurlSts) {
                write1 = `${write1} p${setUpRow1Array[i].purlStitchCount}, `;
            }
        } else if (!ExtraPurlStsInvolved) { // false -> this is not a purl DE stitch.
            if (afterPurlSts) {
                write1 = `${write1} ${setUpRow1Array[i].DE}, `
            }else if (!afterPurlSts) {
                write1 = `${write1} ${setUpRow1Array[i].DE}, p2, `; //middle pairs end on p2
            }
        }
    } else if (!beforePurlSts) { // false, there's not a previous purl st count.
        if (ExtraPurlStsInvolved) { // true -> what to do if this is a purl DE stitch.
            if (afterPurlSts) {
                write1 = write1;
            }else if (!afterPurlSts) {
                write1 = `${write1} p${setUpRow1Array[i].purlStitchCount}, `; 
            }
        } else if (!ExtraPurlStsInvolved) { // false -> this is not a purl DE stitch.
            if (afterPurlSts) {
                write1 = `${write1} ${setUpRow1Array[i].DE}, `;
            }else if (!afterPurlSts) {
                write1 = `${write1} ${setUpRow1Array[i].DE}, p2, `; //middle pairs end on p2
            }
        }
    }
    return write1;
}

function determineStitchPatternForLASTpair (i, setUpRow1Array) {
    // console.log('determineStitchPatternForLASTpair function executed')
    afterPurlSts = false;
    if (beforePurlSts ) { // true -> what to do if there's s previous purl st count.
        if (ExtraPurlStsInvolved) { // true -> what to do if this is a purl DE stitch.
                write1 = `${write1} p${setUpRow1Array[i].purlStitchCount},`;
        } else if (!ExtraPurlStsInvolved) { // false -> this is not a purl DE stitch.
                write1 = `${write1} ${setUpRow1Array[i].DE}, p1, `; //!!!!
        }
    } else if (!beforePurlSts) { // false, there's not a previous purl st count.
        if (ExtraPurlStsInvolved) { // true -> what to do if this is a purl DE stitch.
                write1 = `${write1} p${setUpRow1Array[i].purlStitchCount}, `; 
        } else if (!ExtraPurlStsInvolved) { // false -> this is not a purl DE stitch.
                write1 = `${write1} ${setUpRow1Array[i].DE}, p1, `;
        }
    }
        let thisObject = {};
        let setUpRow1StSection = setUpRow1Array[i].section;
        thisObject['section'] = setUpRow1StSection;
        thisObject['writtenInstructions'] = write1;
        middleSections1Array.push(thisObject);
        write1 = '';
        for (let i = 0; i < middleSections1Array.length; i++) {
            allSections1ArrayWritten[i] = `<span class="colorCoding${i}"> ${middleSections1Array[i].writtenInstructions} </span> ${slipMarker}`
        }
        return allSections1ArrayWritten;
}

function writeSetUpRow1 (middleSections1ArrayWritten) {
    console.log('function writeSetUpRow1 executed');
    totalStCountRow1 = originalStitchCount + DEstitchCountRow1;
    // writtenStitchCount1 = `(${originalStitchCount} sts + ${DEstitchCountRow1} increased sts = ${originalStitchCount + DEstitchCountRow1} total sts).`
    writtenStitchCount1 = `(${totalStCountRow1} sts).`
    writtenSection1All = '';
    for (let i = 0; i < middleSections1ArrayWritten.length; i++) {
        writtenSection1All = writtenSection1All + middleSections1ArrayWritten[i]
    }
    SetUpRow1 = '';
    SetUpRow1  = `${beg1} ${writtenSection1All} ${end1} ${writtenStitchCount1}`
    SetUpRow1  = `<p>Work the Woven Placemat Collection pattern.  Use these Setup Rows to knit your design. </p> ${beg1} ${writtenSection1All} ${end1} ${writtenStitchCount1}`     
    if (setUpRow1paragraph == undefined) {
        setUpRow1paragraph = document.createElement('p');
        setUpRow1paragraph.classList.add('setUpRow1paragraph');
        setUpRow1paragraph.innerHTML = '';
        setUpRow1paragraph.innerHTML = SetUpRow1;
        setUpRow1Div = document.createElement('div');
        setUpRowsDiv.appendChild(setUpRow1Div);
        setUpRow1Div.appendChild(setUpRow1paragraph);
    } else {
        setUpRow1paragraph.innerHTML = '';
        setUpRow1paragraph.innerHTML = SetUpRow1;
    }
    createSetUpRow2Array(setUpRow1Array)
}

function allPairsOfSection_SetUpRow2 (i, thisObject) {
    console.log('function allPairsOfSection_SetUpRow2 executed'); 
    Row1DEinstructions = setUpRow1Array[i].DE;
    let Row1DEobject;
    Row1DE = '';
    let Row1DEpossibleStitches = [kfb, purl, ktbl1, cero_into_two, m1L];
        for (let j = 0; j < Row1DEpossibleStitches.length; j++) {
            Row1DEobject = Row1DEinstructions.match(Row1DEpossibleStitches[j]);
            if (Row1DEobject !== null) {
                Row1DE = Row1DEobject[0];
                if (Row1DE !== '') {
                    Row1DE = Row1DEobject[0];
                    break;
                }
            }
        } // j loop
        combination = '';
        if (Row1DE == kfb) { // MC & MC
            Row2DE = sl2;
            combination = 'both MC'
        } else if (Row1DE == purl && Row1DE !== '') { // CC & CC
            Row2DE = kfb;
            DEstitchCountRow2++
            combination = 'both CC';
        } else if (Row1DE == cero_into_two) { // MC & MC for last pair
            Row2DE = sl2;
            combination = 'both MC last pair';
        } else if (Row1DE == ktbl1 || Row1DE == m1L) { // MC & CC
            let oldStitchCount = DEstitchCountRow2;
            while (oldStitchCount == DEstitchCountRow2) {
                for (let k = 0; k < userSelectionArray.length; k++) {
                    if (userSelectionArray[k].section == thisObject.section) {
                        if (userSelectionArray[k].pairNumber == thisObject.pairNumber) {
                            if (userSelectionArray[k].direction == 'right' && userSelectionArray[k+1].direction == 'left') {
                                if (userSelectionArray[k].yarnColor == 'MC' && userSelectionArray[k+1].yarnColor == 'CC') {
                                    Row2DE = `${sl1}, ${m1L} ` // right MC && left CC
                                    DEstitchCountRow2++
                                    if (Row1DE == ktbl1) {
                                        combination = 'right MC & left CC';
                                        break;                                    
                                    } else if (Row1DE == m1L) {
                                        combination = "right MC & left CC - last pair"
                                        break;
                                    }
                                } else if (userSelectionArray[k].yarnColor == 'CC' && userSelectionArray[k+1].yarnColor == "MC") {
                                        Row2DE = `${m1L}, ${sl1} `  // right CC && left MC
                                        DEstitchCountRow2++
                                    if (Row1DE == ktbl1) {
                                        combination = 'right CC & left MC';
                                        break;
                                    } else if (Row1DE == m1L) {
                                        combination = 'right CC & left MC - last pair';
                                    }
                                }
                            }
                        }
                    }
                    
                } // k loop
            }
        } else { // Row1DE == ''
            Row2DE = cero_into_two;
            DEstitchCountRow2 = DEstitchCountRow2 + 2;
            combination = 'both CC last pair';
        }
    thisObject['Row1DE'] = Row1DE; 
    thisObject['Row2DE'] = Row2DE;
    thisObject['DEstitchCountRow2'] = DEstitchCountRow2;
    setUpRow2Array.push(thisObject);
    Row1DE = '';
    Row2DE = '';
}

function createSetUpRow2Array (setUpRow1Array) {
    console.log('function createSetUpRow2Array executed');
    let c = 0;
    let colorCode = c;
    DEstitchCountRow2 = 0;
    for (let i = 0; i < setUpRow1Array.length; i++) {
        colorCode = c;
        let thisObject = {};
        thisObject['numberID'] = i;
        thisObject['section'] = setUpRow1Array[i].section;
        thisObject['pairNumber'] = setUpRow1Array[i].pairNumber;
        thisObject['colorCode'] = colorCode;
        allPairsOfSection_SetUpRow2(i, thisObject)
        if (i == numberofDEperSection - 1) {
            c++
        }
    } // i loop
    wovenPlacematSetUpRow2(setUpRow2Array);
}

function wovenPlacematSetUpRow2 (setUpRow2Array) {
    console.log(`function wovenPlacematSetUpRow1 executed.`)
    FIRSTsection_SetUpRow2(setUpRow2Array);
    middleSections_SetUpRow2(setUpRow2Array);
    LASTsection_SetUpRow2(setUpRow2Array);
    writeSetUpRow2(allSections2ArrayWritten);
} 

function FIRSTsection_SetUpRow2 (setUpRow2Array) {
    for (let i = 0; i < numberofDEperSection; i++) {
            if (i == 0) {
                determineStitchPatternForFIRSTpairRow2(i, setUpRow2Array)
            } else if (setUpRow2Array[i].section == setUpRow2Array[i+1].section) {
                determineStitchPatternForMIDDLEpairsRow2 (i, setUpRow2Array)
            } else if (setUpRow2Array[i].section !== setUpRow2Array[i+1].section) { 
                determineStitchPatternForLASTpairRow2(i, setUpRow2Array);
            }
    } // i loop
}

function middleSections_SetUpRow2(setUpRow2Array) {
    for (let i = 4; i < setUpRow2Array.length - 4; i++) {
        if (setUpRow2Array[i].section !== setUpRow2Array[i-1].section) { //firts pair of the section
            determineStitchPatternForFIRSTpairRow2(i, setUpRow2Array)
        } else if (setUpRow2Array[i].section == setUpRow2Array[i+1].section) { // 2nd and 3rd pair of the section
            determineStitchPatternForMIDDLEpairsRow2(i, setUpRow2Array);
        } else if (setUpRow2Array[i].section !== setUpRow2Array[i+1].section) { // fourth pair of the section
            determineStitchPatternForLASTpairRow2(i, setUpRow2Array);
        }
    } // i loop
}

function LASTsection_SetUpRow2(setUpRow2Array) {
    for (let i = setUpRow2Array.length - 4; i < setUpRow2Array.length; i++) {
        if (setUpRow2Array[i].section !== setUpRow2Array[i-1].section) {
            determineStitchPatternForFIRSTpairRow2(i, setUpRow2Array)
        } else if (setUpRow2Array[i].section == setUpRow2Array[i-1].section && setUpRow2Array[i].section !== setUpRow2Array[i-(numberofDEperSection-1)].section) {
            determineStitchPatternForMIDDLEpairsRow2(i, setUpRow2Array);
        } else if (setUpRow2Array[i].section == setUpRow2Array[i-(numberofDEperSection-1)].section) {
            determineStitchPatternForLASTpairRow2(i, setUpRow2Array)
        }
    } // i loop
}

function determineStitchPatternForFIRSTpairRow2 (i, setUpRow2Array) {
    write2 = `${k1}, ${setUpRow2Array[i].Row2DE}, ${k2}, `
    return write2;
}

function determineStitchPatternForMIDDLEpairsRow2 (i, setUpRow2Array) {
    write2 = `${write2} ${setUpRow2Array[i].Row2DE}, ${k2}, `
    return write2;
}

function determineStitchPatternForLASTpairRow2 (i, setUpRow2Array) {
    write2 = `${write2}  ${setUpRow2Array[i].Row2DE}, ${k1},`
    let thisObject = {};
        let setUpRow2StSection = setUpRow2Array[i].section;
        thisObject['section'] = setUpRow2StSection;
        thisObject['writtenInstructions'] = write2;
        middleSections2Array.push(thisObject);
        write2 = '';
    for (let i = 0; i < middleSections2Array.length; i++) {
        allSections2ArrayWritten[i] = `<span class="colorCoding${i}"> ${middleSections2Array[i].writtenInstructions} </span> ${slipMarker}`
    }
    return allSections2ArrayWritten;
}

function writeSetUpRow2 () {
    console.log('function writeSetUpRow2 executed');
    totalStCountRow2 = totalStCountRow1 + DEstitchCountRow2;
    writtenStitchCount2 = `(${totalStCountRow2} sts). `
    // writtenStitchCount2 = `(${totalStCountRow1} sts + ${DEstitchCountRow2} increased sts = ${totalStCountRow2} total sts).` // erase after checking accuracy.
    SetUpRow2 = '';
    for (let i = 0; i < middleSections2Array.length; i++) {
        allSections2ArrayWritten[i] = `<span class="colorCoding${i}"> ${middleSections2Array[i].writtenInstructions} </span> ${slipMarker}`
    }
    writtenSection2All = '';
    for (let j = 0; j < allSections2ArrayWritten.length; j++) {
        writtenSection2All = writtenSection2All + allSections2ArrayWritten[j];
    }
    SetUpRow2 = `${beg2} ${writtenSection2All} ${end2} ${writtenStitchCount2} <br> <p> Consider taking a screenshot of Placemat Drawing and the Setup Rows for future reference.  </p>`;    
    if (setUpRow2paragraph == undefined) {
        setUpRow2paragraph = document.createElement('p');
        setUpRow2paragraph.classList.add('setUpRow2paragraph');
        setUpRow2paragraph.innerHTML = SetUpRow2;
        setUpRow2Div = document.createElement('div');
        setUpRowsDiv.appendChild(setUpRow2Div);
        setUpRow2Div.appendChild(setUpRow2paragraph);
    } else {
        setUpRow2paragraph.innerHTML = '';
        setUpRow2paragraph.innerHTML = SetUpRow2;
    }    
    hideBtn(continueEditingBtn);
    disableInputSwitches();
    hideBtn(createSetUpRowsBtn);
    hideBtn(createChartBtn);
    document.getElementById('setUpRows').focus();
}

// continue editing colors section:

function continueEditingColors () {
    console.log('function continueEditingColors executed');
    enableInputSwitches();
    hideBtn(continueEditingBtn);
    enableBtn(createChartBtn);
    enableBtn(createSetUpRowsBtn);
    createNewInputSection ();
    editingCounter++;
    let oldPlacemat = document.querySelector('#SVGplacemat')
    oldPlacemat.classList.add('oldPlacemat');
    oldPlacemat.classList.remove('newPlacemat');
    updateSVG.classList.remove('hidden');
    updateSVG.classList.add('outOfSync');
    note1.classList.add('hidden');
}

function createNewInputSection () {
    console.log('function createNEWinputSection executed');
    console.log('userSelectionArray: ')
    console.log(userSelectionArray);
    storeOldUserSelectionArray();
    userInputDiv.innerHTML = '';
    let code = 0;
    let pairNumber = 1;
    let sectionNumber = 1
    let counter = 0;
    for (let i = 0; i < numberOfSections; i++) {
        let wholeSection = document.createElement('div');
        userInputDiv.appendChild(wholeSection);
        let sectionSection = document.createElement('div');
        sectionSection.classList.add ('sectionTitle');
        sectionSection.innerHTML = `<div> <h3> Section ${i+1} </h3> </div>`;
        wholeSection.appendChild(sectionSection);
        betweenMarkersDiv = document.createElement('div');
        betweenMarkersDiv.innerHTML = '';
        betweenMarkersDiv.classList.add('section', 'betweenMarkers')
        colorCode = `colorCoding${code}`
        code ++
        if (code == numberofDEperSection) {
            code = 0
        }
        sectionSection.classList.add(`${colorCode}`)
        wholeSection.appendChild(betweenMarkersDiv);
        for (let k = 0; k < numberofDEperSection; k++) {
            pairClass = `pair${pairNumber}`;
            sectionClass = `section${sectionNumber}`;
            let fieldset = document.createElement('fieldset');
            fieldset.innerHTML = (`
                <div class="pairNumber"><h4> Pair ${pairNumber} </h4></div>
                    <div class="leftANDright">

                        <div class="pairRight"> 
                            <div class="pairTitle"> 
                                <h5> Right </h5>  
                            </div>
                            <div class="switchBtnDiv">  
                                <p class="YCselection ${sectionClass} ${pairClass} right MC"> MC </p> 
                                <label class="switch">   
                                    <input type="checkbox" class="YCcheckbox newCheckbox ${sectionClass} ${pairClass} right ${userSelectionArray[counter].yarnColor}selected" id="checkbox${pairNumber}right_new" value="${userSelectionArray[counter].yarnColor}selected"> 
                                    <span class="slider round"> </span>
                                </label> 
                                    <p class="YCselection ${sectionClass} ${pairClass} right CC"> CC </p>
                            </div>
                        </div>
                    
                        <div class="pairLeft">  
                            <div class="pairTitle"> 
                            <h5> Left   </h5> 
                        </div> 
                        <div class="switchBtnDiv"> 
                            <p class="YCselection ${sectionClass} ${pairClass} left MC"> MC </p>  
                            <label class="switch">   
                                <input type="checkbox" class="YCcheckbox newCheckbox ${sectionClass} ${pairClass} left ${userSelectionArray[counter+1].yarnColor}selected" id="checkbox${pairNumber}left_new" value="${userSelectionArray[counter+1].yarnColor}selected"> 
                                <span class="slider round"> </span>
                            </label> 
                                <p class="YCselection ${sectionClass} ${pairClass} left CC"> CC </p>  
                        </div>
                    </div>
                
                </div> `)
            betweenMarkersDiv.appendChild(fieldset);
            pairNumber++
            counter = counter + 2;
        } // k loop (pairs of each section)
        sectionNumber++
    } // i loop (sections)
    newYCcheckboxes = document.querySelectorAll('.newCheckbox')
    for (let i = 0; i < newYCcheckboxes.length; i++) {
        let thisCheckbox = newYCcheckboxes[i];
        newYCcheckboxes[i].addEventListener('change', function(event) {changeColorSelection(thisCheckbox)})
    }
    console.log(`'NEW input section created! editingCounter = ${editingCounter}`);
}

function storeOldUserSelectionArray () {
    console.log('function storeOldUserSelectionArray executed');
    oldUserSelectionArray = userSelectionArray;
    console.log('oldUserSelectionArray: ');
    console.log(oldUserSelectionArray);
}

function createNewUserSelectionArrayForOutput () {
    console.log('function createNewUserSelectionArrayForOutput executed');
    if (newUserSelectionArray.length > 0) {
        oldUserSelectionArray = newUserSelectionArray;
        newUserSelectionArray = [];
    }
    for (let i = 0; i < newYCcheckboxes.length; i++) {
        let checkboxClassList = newYCcheckboxes[i].classList;
        let thisObject = {};
        thisObject['numberID'] = i;
        thisObject['section'] = oldUserSelectionArray[i].section;
        thisObject['pairNumber'] = oldUserSelectionArray[i].pairNumber;
        thisObject['direction'] = oldUserSelectionArray[i].direction;
        if (checkboxClassList.contains('CCselected')) {
            thisObject['newSelection'] = 'CCselected';
            thisObject['yarnColor'] = 'CC';
        } else if (checkboxClassList.contains('MCselected') || checkboxClassList.contains('noneSelected') || allYCcheckboxes[i].value == 'MCselected') {
            thisObject['newSelection'] = 'MCselected';
            thisObject['yarnColor'] = 'MC';
        } else {
            console.log('error')
        }
        newUserSelectionArray.push(thisObject);
    } // i loop
    console.log('old userSelectionArray: ');
    console.log(oldUserSelectionArray);
    console.log('new userSelectionArray:');
    console.log(newUserSelectionArray);
    userSelectionArray = newUserSelectionArray;
    console.log('userSelectionArray = newUserSelectionArray: ')
    console.log(userSelectionArray);
    hideBtn(continueEditingBtn);
    disableInputSwitches();
    enableBtn(createChartBtn);
    enableBtn(createSetUpRowsBtn);
}

function  SVGcondition () {
    createUserSelectionArray();
    console.log('function SVGcondition executed');
    disableInputSwitches();
    continueEditingBtn.classList.remove('hidden');
    NumberCablePairs = numberOfDE; // = 28
    if (NumberCablePairs % 4 == 0) {
        createSVG (NumberCablePairs);
    } else {
        console.log(`the number of cable pairs should be divisible by 4. Current number of pairs = ${NumberCablePairs}`)
    }
    updateSVG.classList.add('hidden');
    updateSVG.classList.remove('outOfSync');

    note1.classList.remove('hidden');
    note2.classList.remove('hidden');
}

function createSVG (NumberCablePairs) {
    console.log('function createSVG executed')
    let scalar;
    if (window.innerWidth < window.innerHeight) {
        scalar = ((window.innerWidth * 0.90) / NumberCablePairs);
    } else if (window.innerWidth > window.innerHeight) {
        let x = 1.8;
        let adaptedScalar = window.innerHeight * x;
        do  {
            x = x - 0.1;
            adaptedScalar = window.innerHeight * x;
        } while (adaptedScalar + (window.innerWidth * 0.1) >= window.innerWidth)
        scalar = (adaptedScalar / NumberCablePairs);  
        scalar = (adaptedScalar / NumberCablePairs);
    }
    NumVerticalRepeats = NumberCablePairs / 2; // = 14
    NumberOfCables = NumberCablePairs * 2; // = 56
        svgWidth =  (scalar * NumberCablePairs);
        svgHeight = (scalar * NumVerticalRepeats);
        console.log(`svgWidth = ${svgWidth}. svgHeight = ${svgHeight}. Scalar = ${scalar}`)
    let maximumNumberOfLineSegments = Math.ceil((svgHeight / svgWidth)) + 1
    console.log('maximumNumberOfLineSegments: ' + maximumNumberOfLineSegments)
    initialCoordinates (scalar);
    if (newUserSelectionArray.length == 0) {
        enableBtn(continueEditingBtn);
    }
    disableInputSwitches();
    createChartNumbers ();
}

function createChartNumbers () {
    console.log('function createChartNumbers executed');
    chartNumbersDiv.classList.remove('hidden');
    let pairN;
    let colorBoxes = '';
    let colorBox = '';
    let writtenNumbers = '';
    let writtenNumber = '';
    let boxesANDnumbers = '';
    let boxANDnumber = '';
    let colorC = 0;
    let counter = -1;
    let sectionColor;
    let x = 0.001;
    let xForNumber;
    let xForBox;
    for (let i = 0; i < cablesArray.length; i = i + 2) {
        pairN = cablesArray[i].i_pairN;
        if (i % 8 == 0) {
            counter++
        } 
        colorC = counter;
        switch (colorC) {
            case 0:
            case 4:
                sectionColor = "#ff0000";
                break;
            case 1:
            case 5:
                sectionColor = "#008000";
                break;
            case 2:
            case 6:
                sectionColor = "#0000ff";
                break;
            case 3: 
                sectionColor = "#800080";
                break;
        }
        if (i > 0 && i < cablesArray.length) {
            // console.log(`section: ${cablesArray[i-1].section}. x = ${x}.` );
            if (cablesArray[i-1].section !== cablesArray[i].section) { // spacing out new numbers from the new section
                x = x + 0.01;
                // console.log(`section: ${cablesArray[i].section}. x = ${x}.` );
                if (i > 47) {
                    x = x + 0.05;
                }
            }
        }
        xForNumber = cablesArray[i].x1 - (cablesArray[i].x1*x);
        xForBox = xForNumber - 0.01*svgWidth
        
        if (i == cablesArray.length-2 || (cablesArray[i].section !== cablesArray[i+2].section)) { // creating different color boxes for each section        
            colorBox = `
            <rect x="${xForBox}" y="0" width="${svgWidth/7}" height="${(svgHeight / numberofDEperSection) / 4}" stroke="${sectionColor}" stroke-width="5" fill="${sectionColor}" />
            `
            // writtenNumber = `<text x="${xForNumber}" y="${(svgHeight / numberofDEperSection) / 5}"; fill="${sectionColor}">${pairN}</text>` + writtenNumbers;
            writtenNumber = `<text x="${xForNumber}" y="${(svgHeight / numberofDEperSection) / 5}"; fill="#ffffff">${pairN}</text>` + writtenNumbers;

            boxANDnumber = colorBox + writtenNumber;
            boxesANDnumbers = boxANDnumber + boxesANDnumbers;
            console.log('colorBox:');
            console.log(colorBox);

        } else { // if it's not a new section => don't create a color box
            // writtenNumber = `<text x="${xForNumber}" y="${(svgHeight / numberofDEperSection) / 5}"; fill="${sectionColor}">${pairN}</text>` + writtenNumbers;
            writtenNumber = `<text x="${xForNumber}" y="${(svgHeight / numberofDEperSection) / 5}"; fill="#ffffff">${pairN}</text>` + writtenNumbers;
            boxesANDnumbers = writtenNumber + boxesANDnumbers;
        }
        console.log('writtenNumber: ');
        // writtenNumbers = `<text x="${cablesArray[i].x1 - (cablesArray[i].x1*x)}" y="${(svgHeight / numberofDEperSection) / 5}"; fill="${sectionColor}">${pairN}</text>` + writtenNumbers;
    }
       
    chartNumbersDiv.innerHTML = 
    // `
    // <svg id="SVGnumbers"; style="border:1px solid var(--color4); background-color:white; height:${(svgHeight / numberofDEperSection) / 4}; width: ${svgWidth}"> 
    //  ${writtenNumbers}
    // </svg>`
     `
    <svg id="SVGnumbers"; style="border:1px solid var(--color4); background-color:white; height:${(svgHeight / numberofDEperSection) / 4}; width: ${svgWidth}"> 
     ${boxesANDnumbers}
    </svg>`
    
}

function initialCoordinates (scalar) {
    console.log(`function initialCoordinates executed with scalar = ${scalar}`)
    creatingInitialCoordinatesArray (scalar);
    cablesTrayectory ();
}

function creatingInitialCoordinatesArray (scalar) {
    console.log(`function creatingInititalCoordinatesArray executed with scalar = ${scalar}.`)
    cablesArray = [];
    PairNumber = 0;
    for (let i = 0; i < NumberOfCables; i++) {
        if (i % 2 == 0) {
            PairNumber++
        }
        let thisObject = {};
        thisObject['y1'] = svgHeight;
        thisObject['selectedColour'] = userSelectionArray[i].yarnColor;
         if (userSelectionArray[i].direction == 'right') {
            thisObject['x1'] = svgWidth - ((PairNumber - 0.5) * scalar);
            RightMoving = true;
            thisObject['leans'] = 'right'
         } else if (userSelectionArray[i].direction == 'left') {
            thisObject['x1'] = svgWidth - ((PairNumber - 0.5) * scalar);
            RightMoving = false;
            thisObject['leans'] = 'left'
        }
        thisObject['rightMoving'] = RightMoving;
        thisObject['i_pairN'] = PairNumber;
        thisObject['section'] = userSelectionArray[i].section;
        cablesArray.push(thisObject)
    } // i loop
    console.log('cablesArray: ');
    console.log(cablesArray);
}

function cablesTrayectory () {
    console.log('function cablesTrayectory executed');
    let newDirection;
    for (let i = 0; i < NumberOfCables; i++) {
        let StartingX = cablesArray[i].x1;
        let StartingY = cablesArray[i].y1;
        ifRightOrLeftMoving(i, StartingX, StartingY)
        if (cablesArray[i].newDirection !== 'none') {
            cableThatChangedDirection(i, newDirection);
        }
    }
    console.log('NumberOfCables = '+ NumberOfCables)
    createLines();
}

function ifRightOrLeftMoving (i, StartingX, StartingY) {
    // console.log('function ifRightOrLeftMoving executed');
    RightMoving = cablesArray[i].rightMoving;
    // if cablesArray[i] is right moving => RightMoving = true; else RightMoving = false
    if (RightMoving) { // true -> RIGHT moving cable
        if ((StartingX) > StartingY && StartingY == svgHeight) { // the cable has hit the right edge.
            cablesArray[i]['group1'] = 'rightCable hits rightEdge';
            NextX = svgWidth;
            NextY = StartingX - StartingY; //? should be < svgHeight
            newDirection = 'left';
        } else { // the right cable has hit the top edge.
            cablesArray[i]['group1'] = 'rightCable hits top';
            NextX = StartingX + StartingY;
            NextY = 0;
            newDirection = 'none';
        }
    } else if (!RightMoving) { // false -> LEFT moving cable
        if (StartingX < StartingY && StartingY == svgHeight) { // the cable has hit the left edge.
            NextX = 0;
            NextY = StartingY - StartingX;
            cablesArray[i]['group1'] = 'leftCable hits leftEdge';
            newDirection = 'right';
        } else { // the left cable has hit the top edge.
            cablesArray[i]['group1'] = 'leftCable hits top' 
            NextX = StartingX - StartingY 
            NextY = 0;
            newDirection = 'none';            
        }
    }
    cablesArray[i]['x2'] = NextX;
    cablesArray[i]['y2'] = NextY;
    cablesArray[i]['newDirection'] = newDirection;
    return newDirection;
}


function cableThatChangedDirection (i, newDirection) {
    // console.log('function cableThatChangedDirection executed');
    let CurrentX = cablesArray[i].x2;
    let CurrentY = cablesArray[i].y2
    if (cablesArray[i].newDirection == 'right') {
        NextX = CurrentX + CurrentY;
        NextY = 0
        cablesArray[i]['group2'] = 'moves right hits top';
    } else if (cablesArray[i].newDirection == 'left') {
        NextX = CurrentX - CurrentY;
        NextY = 0;
        cablesArray[i]['group2'] = 'moves left hits top';
    }
    cablesArray[i]['x3'] = NextX
    cablesArray[i]['y3'] = NextY
    newDirection = 'none'; // step that might be avoided
}

function determinelineThickness () {
    if (svgWidth > 1500) {
        thickness = 4;
    } else if (svgWidth > 976) {
        thickness = 3;
    } else if (svgWidth > 600) {
        thickness = 2;
    } else if (svgWidth > 500) {
        thickness = 1;
    } else {
        thickness = 1;
    }
}

function createLines () {
    console.log('function createLines executed')
        let line1right;
        let line1left;
        let allLeftLines1 = '';
        let allRightLines1 = '';
        let allLines1 = '';
        let line2right;
        let line2left;
        let allLeftLines2 = '';
        let allRightLines2 = '';
        let allLines2 = '';
        let color;
        determinelineThickness();      
        for (let i = 0; i < cablesArray.length; i++) {
            if (cablesArray[i].selectedColour == 'MC') {
                color = pickedMC;
            } else if (cablesArray[i].selectedColour == 'CC') {
                color = pickedCC;
            }
            if (i % 2 == 0) {
                // c = 'red'; // right leaning cable that hits the top
                line1right = `
                <line x1=${cablesArray[i].x1} y1=${cablesArray[i].y1} x2=${cablesArray[i].x2} y2=${cablesArray[i].y2} style="stroke:${color};stroke-width:${thickness}" /> 
                `
                allRightLines1 = allRightLines1 + line1right;
            } else {
                // c = 'blue'; // left leaning cable that hits the top
                line1left = `
                <line x1=${cablesArray[i].x1} y1=${cablesArray[i].y1} x2=${cablesArray[i].x2} y2=${cablesArray[i].y2} style="stroke:${color};stroke-width:${thickness}" /> 
                `
                allLeftLines1 = allLeftLines1 + line1left;
            }
            cablesArray[i]['line1'] = `x1=${cablesArray[i].x1} y1=${cablesArray[i].y1} x2=${cablesArray[i].x2} y2=${cablesArray[i].y2}, ${color}`
            cablesArray[i]['color1'] = color;
            if (cablesArray[i].newDirection !== 'none') {
                if (i % 2 == 0) {
                    // c = 'orange'; // right leaning cable that hits the top
                    line2right = `
                        <line x1=${cablesArray[i].x2} y1=${cablesArray[i].y2} x2=${cablesArray[i].x3} y2=${cablesArray[i].y3} style="stroke:${color};stroke-width:${thickness}" /> 
                        `
                    allRightLines2 = allRightLines2 + line2right;
                } else {
                    // c = 'green'; // left leaning cable that hits the top
                    line2left = `
                        <line x1=${cablesArray[i].x2} y1=${cablesArray[i].y2} x2=${cablesArray[i].x3} y2=${cablesArray[i].y3} style="stroke:${color};stroke-width:${thickness}" /> 
                        `
                    allLeftLines2 = allLeftLines2 + line2left;
                }
                cablesArray[i]['line2'] = `x1=${cablesArray[i].x2} y1=${cablesArray[i].y2} x2=${cablesArray[i].x3} y2=${cablesArray[i].y3}, ${color}`
                cablesArray[i]['color2'] = color;
            }
        }
    allLines1 = allLeftLines1 + allRightLines1;
    allLines2 = allLeftLines2 + allRightLines2;;
    svgPlacemat.innerHTML = ''
    SVGinDiv = document.createElement('div');
    SVGinDiv.innerHTML = ''
    SVGinDiv.classList.add('chartDiv');
    SVGinDiv.innerHTML = '';
    SVGinDiv.innerHTML = 
    `
    <svg id="SVGplacemat" class="newPlacemat" style="border:1px solid var(--color4); background-color:${pickedBackground}; height:${svgHeight}; width: ${svgWidth}"> 
    ${allLines1} + ${allLines2}
    </svg>`
    svgPlacemat.appendChild(SVGinDiv);
    console.log(cablesArray);
    console.log(`svgSize: (${svgWidth}, ${svgHeight})`);
    // let svgSize = document.createElement('p');
    // svgSize.innerHTML = 
    // (`SVGsize: (<strong>${svgWidth}</strong>px, <strong>${svgHeight}</strong>px).  Line thickness: <strong>${thickness}</strong>px. `);
    // svgPlacemat.appendChild(svgSize);
    enableBtn(continueEditingBtn);
    hideBtn(createChartBtn);
    document.getElementById("svgChartDiv").focus();
}

// picking MC and CC:
function chooseLineColor () {
    console.log('function chooseLineColor executed');
    pickedMC = '#5F5FA5'; //var(--color4);
    pickedCC = '#ffa500'; // orange
    MCpickerBtn.value = pickedMC;
    CCpickerBtn.value = pickedCC;
    console.log(`pickedMC: ${pickedMC} / pickedCC: ${pickedCC}`);
}

function changeLineMC () {
    console.log('function changeLineMC executed');
    pickedMC = MCpickerBtn.value;
    console.log(`MC = ${pickedMC}`);
    updatePickedColors(pickedMC, pickedCC, pickedBackground);
}

function changeLineCC () {
    console.log('function changeLineCC executed');
    pickedCC = CCpickerBtn.value;
    console.log(`CC = ${pickedCC}`);
    updatePickedColors(pickedMC, pickedCC, pickedBackground);
}

function changeBackground () {
    console.log('function changeBackground executed');
    pickedBackground =  backgroundPickerBtn.value;
    updatePickedColors(pickedMC, pickedCC, pickedBackground)
}

 function updatePickedColors (pickedMC, pickedCC, pickedBackground) {
     console.log('function updatePickedColors executed')  
     for (let i = 0; i < allMClines; i++) {
         allMClines[i].style.stroke = `${pickedMC}`
     }
     for (let i = 0; i < allCClines; i++) {
         allCClines[i].style.stroke = `${pickedCC}`
     }
     console.log(`MC: ${pickedMC}. CC: ${pickedCC}`);
 }


 function restrictions () {
    console.log('function restrictions executed');
    askPassword();
    // askEmail();
 }

 function askEmail () {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let email = window.prompt('Enter your email.  Please use the email address associated with your pattern purchase. ');
    if (email.match(emailRegex)) {
        createSetUpRow1Array();   
      } else {
        alert("Invalid email address!");
        return false;
      }
 }

 function askPassword () {
    let password = window.prompt('Enter password found in the pattern.');
    password = password.toLowerCase(); // the password will not be case sensitive
    if (password == "password") {
        console.log('password is correct');
        askEmail();
    } else {
        console.log('password was incorrect');
       let question = window.confirm('The password was incorrect, do you want to try again?')
       if (question) {
        askPassword();
       }
    }
 }

//  POP UPs:

 let logo = document.getElementById('logo');
 let popup = document.getElementById("logoPopup");
 logo.addEventListener('mouseover', popUp);
 logo.addEventListener('mouseout', popUp);

 // When the user hovers over <div class="popup">, open the popup
function popUp() {
    popup.classList.toggle("show");
  }