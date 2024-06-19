"use strict";

// declaring variables:
let windowWidth;
let begOfPage;
let userInputTitle;
let allYCcheckboxes
let firedCheckboxID;
let checkboxClassList;
let userSelectionArray = [];
let pairNumber = 1;
let numberOfDE = 6;
let numberofDEperSection = 6
let numberOfSections =  numberOfDE / numberofDEperSection;
let sectionNumber = 1;
let sectionClass = `section${sectionNumber}`;
let pairClass = `pair${pairNumber}`;
let betweenMarkersDiv = document.createElement('div');
let middleSections1Array = [];
let middleSections1 = '';
let middleSections2Array = [];
let middleSections2 = '';
let divToCreateSpace;
let optimalHeight;
let c = 0
let setUpRow1Array = []
let setUpRow2Array = [];
let colorCode;
let combination = '';
let createChartBtn;


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
let svgWidth;
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

// accordions:

let accArray;

window.onload = init();

function init() {
    console.log('page loaded, the DOM is ready');
    getDOMelements ();
}

function getDOMelements () {
    console.log('function getDOMelements executed');
    // begOfPage = document.querySelector('#begOfPage')
    // createSetUpRowsBtn = document.querySelector('#createSetUpRowsBtn');
    windowWidth = document.querySelector('#window-width');
    // setUpRowsDiv = document.querySelector('#setUpRows');
    continueEditingBtn = document.querySelector('#continueEditingBtn');
    hideBtn(continueEditingBtn);
    createChartBtn = document.querySelector('#createChartBtn');
    divToCreateSpace = document.querySelector('.space');
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
    // accArray = document.getElementsByClassName('accordion');
    console.log(accArray); 
    createInputSection(); 
    createYCselectionButtons();
    addEventListeners ();
    chooseLineColor();
    // accordions (); 
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
    // createSetUpRowsBtn.addEventListener('click', restrictions);
    createChartBtn.addEventListener('click', SVGcondition);
    MCpickerBtn.addEventListener('change', changeLineMC);
    CCpickerBtn.addEventListener('change', changeLineCC);
    backgroundPickerBtn.addEventListener('change', changeBackground);
    let thisCheckbox;
     for (let i = 0; i < allYCcheckboxes.length; i++) {
        thisCheckbox = allYCcheckboxes[i];
         allYCcheckboxes[i].addEventListener('change', function(event) {changeColorSelection(thisCheckbox)})
     }
    //  window.addEventListener('resize', resizeScreen);
}

function resizeScreen () {
    for (let i = 0; i < accArray.length; i++) {
        let panel = accArray[i].nextElementSibling;
        if (panel.style.maxHeight && panel.style.maxHeight !== '0px') {
            panel.style.maxHeight = `0px`;
            if (panel.id == 'socials') {
                panel.style.padding = '0px'; 
            }
        } else {
            panel.style.maxHeight = `${panel.scrollHeight}px`; 
            if (panel.class == 'intro') {
                panel.style.maxHeight = `${panel.scrollHeight + 300}px`; 
            }
            if (panel.id == 'socials') {
                panel.style.padding = '16px';
                panel.style.maxHeight = `${panel.scrollHeight + 16}px`; 
                document.getElementById('socials').focus();
            }
        }
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
    } else {
        checkedYC.value = 'MCselected';
        checkedYC.classList.add('MCselected');
        checkedYC.classList.remove('CCselected');
        checkedYC.classList.remove('noneSelected');
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

// continue editing colors section:

function continueEditingColors () {
    console.log('function continueEditingColors executed');
    enableInputSwitches();
    hideBtn(continueEditingBtn);
    enableBtn(createChartBtn);
    // enableBtn(createSetUpRowsBtn);
    createNewInputSection ();
    editingCounter++;
    let oldPlacemat = document.querySelector('#SVGplacemat')
    oldPlacemat.classList.add('oldPlacemat');
    oldPlacemat.classList.remove('newPlacemat');
    updateSVG.classList.remove('hidden');
    updateSVG.classList.add('outOfSync');
    // window.onresize = resized; //
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
        // if (code == numberofDEperSection) {
        //     code = 0
        // }
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
        newYCcheckboxes[i].addEventListener('change', function(event) {changeColorSelectionAgain(thisCheckbox)})
    }
    console.log(`'NEW input section created! editingCounter = ${editingCounter}`);
}

function changeColorSelectionAgain (checkedYC) {
    firedCheckboxID = event.target.id;
    checkedYC = document.querySelector('#'+firedCheckboxID);
    if (checkedYC.value == 'CCselected') {
        checkedYC.checked = false;
        checkedYC.value = 'MCselected';
        checkedYC.classList.add('MCselected');
        checkedYC.classList.remove('CCselected');
    } else if (checkedYC.value == 'MCselected') {
        checkedYC.checked = true;
        checkedYC.value = 'CCselected';
        checkedYC.classList.add('CCselected');
        checkedYC.classList.remove('MCselected');
    }
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
    // enableBtn(createSetUpRowsBtn);
}

function  SVGcondition () {
    createUserSelectionArray();
    console.log('function SVGcondition executed');
    disableInputSwitches();
    continueEditingBtn.classList.remove('hidden');
    NumberCablePairs = numberOfDE; // = 28
    if (NumberCablePairs % 6 == 0) {
        createSVG (NumberCablePairs);
    } else {
        console.log(`the number of cable pairs should be divisible by 6. Current number of pairs = ${NumberCablePairs}`)
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
    // NumVerticalRepeats = NumberCablePairs / 2; // = 14
    NumVerticalRepeats = NumberCablePairs; // = 14

    NumberOfCables = NumberCablePairs * 2; // = 56  

        svgWidth =  `${Math.round(scalar * NumberCablePairs)}`;
        svgHeight = Math.round(scalar * NumVerticalRepeats);
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
    let colorC = 0;
    let counter = -1;
    let sectionColor;
    let x = 0.001;
    let xForNumber;
    let boxWidth = svgWidth / 7;
    let xForBox = 0;
    let numbersSVGheigth = 18;
    let extendedBoxWidth = 0;

    for (let i = 0; i < cablesArray.length; i = i + 2) {
        pairN = cablesArray[i].i_pairN;
        if (i % 8 == 0) {
            counter++
        } 
        colorC = counter;
        switch (colorC) {
            case 0:
                sectionColor = "#ff006e" //pink
                break;
            case 1:
                sectionColor = "#0000ff"; //blue
                break;
            case 2:
                sectionColor = "#ee9b00" //orange
                break;
            case 3:
                sectionColor = "#800080"; //purple
                break;
            case 4: 
                sectionColor = "#0a9396"; //turquesa
                break;
            case 5:                
                sectionColor = "#ce0000"; //red 
                break;
            case 6:
                sectionColor = "#6c757d" //gray          
                break;
        }
        if (i > 0 && i < cablesArray.length) {
            if (cablesArray[i-1].section !== cablesArray[i].section) { // spacing out new numbers from the new section
                x = x + 0.01;
                if (i > 47) {
                    x = x + 0.05;
                }
            }
        }
        xForNumber = Math.round(cablesArray[i].x1 - (cablesArray[i].x1*x));
        numbersSVGheigth = (svgHeight / numberofDEperSection) / 4;
        if (numbersSVGheigth < 18) {
            numbersSVGheigth = 18
        }
        if (i == cablesArray.length-2 || (cablesArray[i].section !== cablesArray[i+2].section)) { // creating different color boxes for each section        
            if (i == cablesArray.length - 2) {
                colorBox = `
                <rect x="0" y="0" width="${svgWidth/7}" height="${numbersSVGheigth}" style="fill:${sectionColor}50" />
                `
            } else {
                extendedBoxWidth = boxWidth + extendedBoxWidth;
                xForBox = svgWidth - extendedBoxWidth;
                colorBox = `
                <rect x="${xForBox}" y="0" width="${svgWidth/7}" height="${numbersSVGheigth}" style="fill:${sectionColor}55" />
                `
            }
            colorBoxes = colorBoxes + colorBox;
        } 
        writtenNumber = `<text x="${xForNumber}" y="${(svgHeight / numberofDEperSection) / 5}"; fill="#000">${pairN}</text>`;
        writtenNumbers = writtenNumbers + writtenNumber;
}
    chartNumbersDiv.innerHTML = 
     `
    <svg id="SVGnumbers"; style="border:1px solid var(--color4); background-color:white; height:${(svgHeight / numberofDEperSection) / 4 + 1}px; width: ${svgWidth}px"> 
     ${colorBoxes} ${writtenNumbers}
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
            createLines(); /// erease after debugging
        }
    }
    console.log('NumberOfCables = '+ NumberOfCables)
    createLines();
}

function ifRightOrLeftMoving (i, StartingX, StartingY) {
    debugger;
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
    if (svgWidth > 1800) {
        thickness = 5;
    } else if (svgWidth > 1500) {
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
    <svg id="SVGplacemat" class="newPlacemat" style="border:1px solid var(--color4); background-color:${pickedBackground}; height:${svgHeight}px; width: ${svgWidth}px"> 
    ${allLines1} + ${allLines2}
    </svg>`
    svgPlacemat.appendChild(SVGinDiv);
    console.log(cablesArray);
    console.log(`svgSize: (${svgWidth}, ${svgHeight})`);
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
