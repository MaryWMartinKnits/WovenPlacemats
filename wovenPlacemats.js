"use strict";

// declaring variables:

let windowWidth;
let screenDisplay;
let begOfPage;
let userInputTitle;
let colorCode;

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
// let UserSelectionArrayObject = [{}];
let buttonsClassList;
let YCbuttonName
let firedButtonID;
let firedButton;
let selectedYarnColors;
let displayValuesBtn;
let setUpRowsDiv;
let DE = '';
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
let outputDiv;
let getSetUpRowsBtn;
let algorithmBtn;
let middleSections1Array = [];
let middleSections1 = '';
let middleSections2Array = [];
let middleSections2 = '';
let SetUpRow1 = '';
let SetUpRow2 = ''
let beg1 = ' <strong> Set up row 1 (with MC): </strong> P2, ktbl1, p1, <strong> pm, </strong> p1,  '; //  change beeggining of pattern for however the set up row starts
let end1 = ' p1, ktbl1, p2. Cut yarn.  Slide work. ';
let beg2 = ' <strong> Set up row 2 (with CC): </strong> K2, sl1, k1, <strong> pm, </strong> ';
let end2 = ' k1, sl1, k2. Cut yarn.  Slide work.';
let placeMarker = ' <strong> pm, </strong> ';
// let placeMarker = ' pm, ';
let slipMarker = ' <strong> sm, </strong> ';
// let slipMarker = ' sm, ';
let DEstitchCountRow1 = 0;
let DEstitchCountRow2 = 0;
let originalStitchCount = 85 //number of sts to begin with, I think it's 85. 5 + 11*7 + 3.
let kfb = ' kfb ';
let p2 = ' p2 '
let cero_into_two = ' 0-into-2 ';
let ktbl1 = ' ktbl1 ';
let m1L = ' m1L ';
let sl1 = ' sl1 ';
let purlStitchCount = 0// might have to initialize it at another value depending on pattern. Check this!
let purl = ''
let lastDE;
let lastP2;
let saveEndOfSection;
let divToCreateSpace;
let neededhight;
let optimalHeight;
let setUpRow1Div;
let setUpRow2Div
// let purlStitchCountSum = 0;
let savedPurlStitchCount = 0;
let writtenStitchCount1;
let setUpRow1paragraph;
let firstStitch;
let secondStitch;
let thirdStitch;
let fourthStitch;
let newMiddleSections1;
let c = 0
let setUpRow1Array = []
let ExtraPurlStsInvolved;
let beforePurlSts = false;
let afterPurlSts;
let write = '';
let write2 = '';
let index;
let allSections1ArrayWritten = [];
let allSections2ArrayWritten = [];
let keepPurling = false;
let writtenSection1All = '';
let writtenSection2All = '';

let setUpRow2Btn;
let setUpRow2Array = [];
let Row2DE = ''
let sl2 = 'sl2'
let setUpRow1and2array = []
let totalStCountRow1;
let totalStCountRow2;
let writtenStitchCount2

window.onload = init();

function init() {
    console.log('page loaded, the DOM is ready');
    getDOMelements ();
}

function getDOMelements () {
    console.log('function getDOMelements executed');
    begOfPage = document.querySelector('#begOfPage')
    outputDiv = document.querySelector('#outputDiv')
    getUserSelectionBtn = document.querySelector('#readUserSelectionBtn')
    displayValuesBtn = document.querySelector('#displayValues');
    windowWidth = document.querySelector('#window-width');
    algorithmBtn = document.querySelector('#algorithm');
    setUpRowsDiv = document.querySelector('#setUpRows');
    createInputSection(); 
    createYCselectionButtons()
    setUpRow2Btn = document.querySelector('#setUpRow2Btn');
    addEventListeners ();
    YCselectionButtons = document.querySelectorAll('.selected');
    divToCreateSpace = document.querySelector('.space');
    displayValuesBtn.disabled = true;
    displayValuesBtn.classList.add('disabledBtn');
    setUpRow2Btn.disabled = true;
    setUpRow2Btn.classList.add('disabledBtn');
    
    
}

function displayWindowWidth () {
    if (window.innerWidth > 1028) {
        screenDisplay = "BIG screen";
    } else if (window.innerWidth > 976) {
        screenDisplay = 'Desktop';
    } else if (window.innerWidth > 776) {
    // } else if (window.innerWidth > 746) {
        screenDisplay = 'BIG Tablet'
    }  else if (window.innerWidth > 500) {
    screenDisplay = 'small Tablet'
    }  else {
        screenDisplay = 'Smartphone'
    }
    windowWidth.innerHTML = ("Window width: " + window.innerWidth + 'px -> ' + screenDisplay);

}

function createInputSection () {
    console.log('createInputSection function executed');
    userInputTitle = document.createElement('h2');
    userInputTitle.innerHTML = 'User Input:';
    begOfPage.appendChild(userInputTitle);
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
        //    console.log(pairNumber)
            pairClass = `pair${pairNumber}`;
            // console.log(pairClass);
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
    allYCcheckboxes = document.querySelectorAll('.YCcheckbox');
}

function addEventListeners () {
    console.log('function addEventListeners executed');
    for (let i = 0; i < allYCcheckboxes.length; i++) {
        allYCcheckboxes[i].addEventListener('change', function(event) {changeColorSelection(allYCcheckboxes[i])})
    }
    window.addEventListener('resize', displayWindowWidth);
    getUserSelectionBtn.addEventListener('click', createUserSelectionArray);
    displayValuesBtn.addEventListener('click', displaySelectedValues);
}

function changeColorSelection (checkedYC) {
    // console.log('changeColorSelection function executed for: ');
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

function createUserSelectionArray () {
    console.log('createUserSelectionArray function executed')
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
        thisObject['numberID'] = i;
        userSelectionArray.push(thisObject);
    }
    console.log('userSelectionArray: ')
    console.log(userSelectionArray);
    getUserSelectionBtn.disabled = true;
    getUserSelectionBtn.classList.add('disabledBtn');
    createSetUpRow1Array(userSelectionArray);
    displayValuesBtn.disabled = false;
    displayValuesBtn.classList.remove('disabledBtn');
    return userSelectionArray;
}

function displaySelectedValues () {
    console.log('displaySelectedValues function executed');
    userInputTitle.classList.add('hidden');
    userInputDiv.classList.add('hidden');
    outputDiv.classList.remove('hidden');
    let inputSelectionTitle = document.createElement('div');
    inputSelectionTitle.innerHTML = `<h2> User selection: </h2>`;
    inputSelectionTitle.classList.add('inputSelectionTitleDiv');
    outputDiv.appendChild(inputSelectionTitle);
    let pNumber = 0;
    let stNumber = 0
    let stDirection //
    let code = 0;
    for (let i = 0; i < numberOfSections; i++) {

        let sectionDiv = document.createElement('div');
        sectionDiv.classList.add('selectionOutputSection');

        colorCode = `colorCoding${code}`
        code ++
        if (code == numberofDEperSection) {
            code = 0
        }
        sectionDiv.classList.add(`${colorCode}`)

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
            let counter = 'pair' + pNumber
            let condition = userSelectionArray[stNumber].pairNumber;
            while (condition == counter) {
                let pairStitchesDiv = document.createElement('div');
                pairStitchesDiv.classList.add('pairStitchesDiv');
                eachPairDiv.appendChild(pairStitchesDiv);
                if (userSelectionArray[stNumber].direction = 'right') {
                    let stitchSection = document.createElement('div');
                    stitchSection.classList.add('stitchSection');
                    pairStitchesDiv.appendChild(stitchSection);
                    let cableDirectionANDColor = document.createElement('p')
                    stDirection = rightText;
                    cableDirectionANDColor.innerHTML = 
                    `<strong>${stDirection}</strong> design stitch is <strong>${userSelectionArray[stNumber].yarnColor}</strong>` ;
                    stitchSection.appendChild(cableDirectionANDColor);
                    stNumber++
                }
                if (userSelectionArray[stNumber].direction = 'left') {
                let stitchSection = document.createElement('div');
                stitchSection.classList.add('stitchSection');
                pairStitchesDiv.appendChild(stitchSection);

                let cableDirectionANDColor = document.createElement('p')
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

function createSetUpRow1Array (userSelectionArray) {
    for (let i = 0; i < numberOfSections; i++) {
        for (let j = 0; j < numberofDEperSection; j++) {
            let thisObject = {};
                thisObject['numberID'] = userSelectionArray[c].numberID;
                thisObject['section'] = userSelectionArray[c].section;
                thisObject['PairNumber'] = userSelectionArray[c].pairNumber
            if (j < numberofDEperSection - 1) {
                first3stsOfSectionSetUpRow1(c, thisObject);
            } else if (j == numberofDEperSection - 1) {
                lastStOfSectionSetUpRow1(c, thisObject);
            }
            c = c+2
        } //j loop
    } //i loop
    console.log('setUpRow1Array:');
    console.log(setUpRow1Array);
    wovenPlacematSetUpRow1(setUpRow1Array);
}

function first3stsOfSectionSetUpRow1 (c, thisObject) {
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
        // purl = `p${purlStitchCount}, ` // p2, p1,
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

function lastStOfSectionSetUpRow1 (c, thisObject) {
    if (userSelectionArray[c].yarnColor == 'MC' && userSelectionArray[c+1].yarnColor == 'MC') {
        // console.log(`right MC & left MC`)
        purlStitchCount = 0;
        DE = cero_into_two;
        DEstitchCountRow1++
        purlStitchCount = purlStitchCount + 2;
        keepPurling = false;
    } else if (userSelectionArray[c].yarnColor == 'MC' && userSelectionArray[c+1].yarnColor == 'CC') {
        // console.log(`right MC & left CC`)
        purlStitchCount = 0
        DE = m1L;
        purlStitchCount = purlStitchCount + 2
        keepPurling = false;
    } else if (userSelectionArray[c].yarnColor == 'CC' && userSelectionArray[c+1].yarnColor == 'CC') {
        // console.log(`right CC & left CC`);
        purlStitchCount = purlStitchCount + 2
        // purl = `p${purlStitchCount}, ` // p2, p1,
        purl = purl
        DE =  purl // p2, p1,
        keepPurling = true;
    } else if (userSelectionArray[c].yarnColor == 'CC' && userSelectionArray[c+1].yarnColor == 'MC') {
        // console.log(`right CC & left MC`);
        purlStitchCount = 0
        DE = m1L;
        purlStitchCount = purlStitchCount + 2
        keepPurling = false;
    }
    thisObject['DE'] = DE;
    thisObject['purlStitchCount'] = purlStitchCount;
    thisObject['keepPurling'] = keepPurling;
    purlStitchCount = 0;
    setUpRow1Array.push(thisObject);
    return purlStitchCount;

}

function wovenPlacematSetUpRow1 (setUpRow1Array) {
    console.log(`wovenPlacematSetUpRow1 function executed.`)
    FIRSTsection_SetUpRow1(setUpRow1Array);
    MiddleSections_SetUpRow1(setUpRow1Array);
    LASTsection_SetUpRow1(setUpRow1Array);
    console.log(`allSections1ArrayWritten: `);
    console.log(`${allSections1ArrayWritten}`);
    writeSetUpRow1(allSections1ArrayWritten);
    createSpace();
} // end of function

function FIRSTsection_SetUpRow1 (setUpRow1Array) {
    console.log('writeFIRSTsection_SetUpRow1 function executed');
    beforePurlSts = false;
    for (let i = 0; i < numberofDEperSection; i++) {
        console.log(`i: ${i}.  Section: ${setUpRow1Array[i].section}`)
            // let thisObject = {};
            ExtraPurlStsInvolved = setUpRow1Array[i].keepPurling;
            if (setUpRow1Array[i].section == setUpRow1Array[i+1].section) { // Exception: the last st of the section cannot have extra purling sts after.
                afterPurlSts = setUpRow1Array[i+1].keepPurling;
            } else {
                afterPurlSts = false // Exception: the last st of the section cannot have extra purling sts after.
            }

            if (setUpRow1Array[i].section == setUpRow1Array[i+1].section) {
                determineStitchPatternFor3FirstPairs (i, setUpRow1Array)
            } else if (setUpRow1Array[i].section !== setUpRow1Array[i+1].section) { 
                determineStitchPatternForLASTPair(i, setUpRow1Array);
            }
    } // i loop

}

function MiddleSections_SetUpRow1 (setUpRow1Array) {
    console.log('writeMiddleSections_SetUpRow1 function executed');
    for (let i = 4; i < setUpRow1Array.length - 4; i++) {
        console.log(`i: ${i}.  Section: ${setUpRow1Array[i].section}`)
        ExtraPurlStsInvolved = setUpRow1Array[i].keepPurling;

        if (setUpRow1Array[i].section == setUpRow1Array[i+1].section) { // Exception: the last st of the section cannot have extra purling sts after.
            afterPurlSts = setUpRow1Array[i+1].keepPurling;
        } else {
            afterPurlSts = false // Exception: the last st of the section cannot have extra purling sts after.
        }

        if (setUpRow1Array[i].section == setUpRow1Array[i+1].section) {
            determineStitchPatternFor3FirstPairs(i, setUpRow1Array);
        } else if (setUpRow1Array[i].section !== setUpRow1Array[i+1].section) {
            determineStitchPatternForLASTPair(i, setUpRow1Array);
        }
    } // i loop
    // return middleSections1Array;
}

function LASTsection_SetUpRow1 (setUpRow1Array) {
    console.log('writeLASTsection_SetUpRow1 function executed');
    for (let i = setUpRow1Array.length - 4; i < setUpRow1Array.length; i++) {
        ExtraPurlStsInvolved = setUpRow1Array[i].keepPurling;
        if (setUpRow1Array[i].section == setUpRow1Array[i-(numberofDEperSection-1)].section) { // setUpRow1Array[i].section == setUpRow1Array[i+1].section
            afterPurlSts = false; //last pair of the section, there are no afterPurl sts.
            console.log(`i: ${i} -> if`);
            determineStitchPatternForLASTPair(i, setUpRow1Array)
        } else {
            console.log(`i: ${i} -> else`);
            determineStitchPatternFor3FirstPairs(i, setUpRow1Array);
        }
    } // i loop
}

function determineStitchPatternFor3FirstPairs (i, setUpRow1Array) {
    if (beforePurlSts ) { // true -> what to do if there's s previous purl st count.
        if (ExtraPurlStsInvolved) { // true -> what to do if this is a purl DE stitch.
            if (afterPurlSts) {
                write = write;
            } else if (!afterPurlSts) {
                write = `${write} p${purlStitchCount},`;
            }

        } else if (!ExtraPurlStsInvolved) { // false -> this is not a purl DE stitch.
            if (afterPurlSts) {
                write = `${write} p${setUpRow1Array[i].purlStitchCount}, `;
            }else if (!afterPurlSts) {
                write = `${write} ${setUpRow1Array[i].DE}, p2, `; //!!!!
            }
        }
    } else if (!beforePurlSts) { // false, there's not a previous purl st count.
        if (ExtraPurlStsInvolved) { // true -> what to do if this is a purl DE stitch.
            if (afterPurlSts) {
                write = write;
            }else if (!afterPurlSts) {
                write = `${write} p${setUpRow1Array[i].purlStitchCount}, `; 
            }

        } else if (!ExtraPurlStsInvolved) { // false -> this is not a purl DE stitch.
            if (afterPurlSts) {
                write = `${write} ${setUpRow1Array[i].DE}, `;
            }else if (!afterPurlSts) {
                write = `${write} ${setUpRow1Array[i].DE}, p2, `;
            }
        }
    }
    return write;
}

function determineStitchPatternForLASTPair (i, setUpRow1Array) {
    afterPurlSts = false;
    if (beforePurlSts ) { // true -> what to do if there's s previous purl st count.
        if (ExtraPurlStsInvolved) { // true -> what to do if this is a purl DE stitch.
                write = `${write} p${setUpRow1Array[i].purlStitchCount},`;

        } else if (!ExtraPurlStsInvolved) { // false -> this is not a purl DE stitch.
                write = `${write} ${setUpRow1Array[i].DE}, p2, `; //!!!!
        }
    } else if (!beforePurlSts) { // false, there's not a previous purl st count.
        if (ExtraPurlStsInvolved) { // true -> what to do if this is a purl DE stitch.
                write = `${write} p${setUpRow1Array[i].purlStitchCount}, `; 

        } else if (!ExtraPurlStsInvolved) { // false -> this is not a purl DE stitch.
                write = `${write} ${setUpRow1Array[i].DE}, p2, `;
        }
    }
        let thisObject = {};
        let setUpRow1StSection = setUpRow1Array[i].section;
        thisObject['section'] = setUpRow1StSection;
        thisObject['writtenInstructions'] = write;
        middleSections1Array.push(thisObject);
        for (let x = 0; x < middleSections1Array.length; x++) {
            if ( middleSections1Array[x].section == setUpRow1Array[i].section) {
                index = x;
                console.log(`i: ${i}. Written instructions: ${middleSections1Array[index].writtenInstructions}`)
            }
        }

        console.log('middleSections1Array: ');
        console.log(middleSections1Array);
        write = '';
        
        for (let i = 0; i < middleSections1Array.length; i++) {
            allSections1ArrayWritten[i] = `<span class="colorCoding${i}"> ${middleSections1Array[i].writtenInstructions} </span> ${placeMarker}`
        }
        return allSections1ArrayWritten;
    return write;
}

function writeSetUpRow1 (middleSections1ArrayWritten) {
    console.log('writeSetUpRow1 function executed');
    console.log('middleSections1ArrayWritten: ');
    console.log(middleSections1ArrayWritten);
    totalStCountRow1 = originalStitchCount + DEstitchCountRow1;
    // writtenStitchCount1 = `(${originalStitchCount} sts + ${DEstitchCountRow1} increased sts = ${originalStitchCount + DEstitchCountRow1} total sts).`
    writtenStitchCount1 = `(${totalStCountRow1} sts).`

    for (let i = 0; i < middleSections1ArrayWritten.length; i++) {
        writtenSection1All = writtenSection1All + middleSections1ArrayWritten[i]
    }
    SetUpRow1  = `${beg1} ${writtenSection1All} ${end1} ${writtenStitchCount1}`
    console.log('SetUpRow1: ');
    console.log(SetUpRow1);
    let setUpRow1paragraph = document.createElement('p');
    setUpRow1paragraph.classList.add('setUpRow1paragraph');
    setUpRow1paragraph.innerHTML = SetUpRow1;
    setUpRow1Div = document.createElement('div');
    setUpRowsDiv.appendChild(setUpRow1Div);
    setUpRow1Div.appendChild(setUpRow1paragraph);
    window.addEventListener('resize', createSpace);
    setUpRow2Btn.disabled = false;
    setUpRow2Btn.classList.remove('disabledBtn');
    setUpRow2Btn.addEventListener('click', createSetUpRow2Array (setUpRow1Array));
    return totalStCountRow1;
}

function createSetUpRow2Array (setUpRow1Array) {
    setUpRow2Btn.disabled = true;
    setUpRow2Btn.classList.add('disabledBtn');
    let c = 0;
    let colorCode = 0;
    DEstitchCountRow2 = 0;
    for (let i = 0; i < setUpRow1Array.length; i++) {
        console.log(`${setUpRow1Array[i].section} ${setUpRow1Array[i].PairNumber}: Row1DE = ${setUpRow1Array[i].DE}`)
        let thisObject = {};
        thisObject['numberID'] = i;
        thisObject['section'] = setUpRow1Array[i].section;
        thisObject['pairNumber'] = setUpRow1Array[i].PairNumber;
        thisObject['colorCode'] = colorCode;
        console.log('c = ' + c);
        console.log('colorCode' + colorCode)
        if (c < numberofDEperSection - 1) {
            first3stsOfSectionSetUpRow2(i, setUpRow1Array)
        } else if (c == numberofDEperSection - 1) {
            lastStOfSectionSetUpRow2(i, setUpRow1Array, colorCode)
            colorCode++
            if (colorCode == numberofDEperSection) {
                colorCode = 0
            }
        }
        c++
        if (c == numberofDEperSection) {
            c = 0
        }
        thisObject['DE'] = Row2DE;
        setUpRow2Array.push(thisObject);
    }
    console.log('setUpRow2Array:');
    console.log(setUpRow2Array);
    for (let i = 0; i < setUpRow1Array.length; i++) {
        let newObject = {} 
        newObject['section'] = setUpRow1Array[i].section;
        newObject['pairNumber'] = setUpRow1Array[i].PairNumber;
        newObject['Row1DE'] = setUpRow1Array[i].DE;
        newObject['Row2DE'] = setUpRow2Array[i].DE;
        setUpRow1and2array.push(newObject);
    }
    console.log('setUpRow1and2array: ');
    console.log(setUpRow1and2array);
    determineStitchPatternForRow2(setUpRow1and2array) 
}

function first3stsOfSectionSetUpRow2 (i, setUpRow1Array) {
    console.log('first3stsOfSectionSetUpRow2 function executed')
    if (setUpRow1Array[i].DE == kfb) { // MC & MC
        Row2DE = sl2;
    } else if (setUpRow1Array[i].DE == purl) { // CC & CC
        Row2DE = kfb;
        DEstitchCountRow2++
    } else if (setUpRow1Array[i].DE == ktbl1) { // MC & CC
        // if () {
        //     Row2DE = `${m1L}, ${sl1} ` // left MC & right CC?
        // } else if () {
        //     Row2DE = `${sl1}, ${m1L} ` // right MC & left CC?
        // }
        Row2DE = m1L //
        DEstitchCountRow2++
    }     
    console.log(`${setUpRow1Array[i].DE} -> ${Row2DE}`)
    return Row2DE;
}

function lastStOfSectionSetUpRow2 (i, setUpRow1Array) {
    console.log('lastStOfSEctionSetUpRow2 funtion executed');
    if (setUpRow1Array[i].DE == cero_into_two) { // MC && MC
        Row2DE = sl2;
    } else if ((setUpRow1Array[i].DE == m1L) ) { // MC & CC
        // if () {
        //     Row2DE = `${m1L}, ${sl1} ` // left MC & right CC?
        // } else if () {
        //     Row2DE = `${sl1}, ${m1L} ` // right MC & left CC?
        // }
        Row2DE = m1L; //
        DEstitchCountRow2++
    } else  { // CC & CC -> DE = ''
        Row2DE = cero_into_two;
        DEstitchCountRow2 = DEstitchCountRow2 + 2;
    }
    console.log(`${setUpRow1Array[i].DE} -> ${Row2DE}`)
    return Row2DE;
}

function determineStitchPatternForRow2 (setUpRow1and2array) {
    for (let i = 0; i < setUpRow1and2array.length; i++) {
        if ( i < setUpRow1and2array.length -1 ) {
            if (setUpRow1and2array[i].section == setUpRow1and2array[i+1].section) {
                write2 = write2 + `${setUpRow1and2array[i].Row2DE}, k2, `
            } else {
                write2 = write2 + `${setUpRow1and2array[i].Row2DE}, k2, `;
                let object2 = {};
                object2['section'] = setUpRow1and2array[i].section;
                object2['writtenInstructions'] = write2;
                middleSections2Array.push(object2)
                write2 = '';
            }
            
        } else if ( i == setUpRow1and2array.length - 1) {
            write2 = write2 + `${setUpRow1and2array[i].Row2DE}, k2,  `;
            let object2 = {};
            object2['section'] = setUpRow1and2array[i].section;
            object2['writtenInstructions'] = write2;
            middleSections2Array.push(object2)
            write2 = '';
        }
        console.log('middleSections2Array: ');
            console.log(middleSections2Array);
    }
    writeSetUpRow2()
}

function writeSetUpRow2 () {
    console.log('writeSetUpRow2 function executed');
    totalStCountRow2 = totalStCountRow1 + DEstitchCountRow2;
    writtenStitchCount2 = `(${totalStCountRow2}sts). `
    writtenStitchCount2 = `(${totalStCountRow1} sts + ${DEstitchCountRow2} increased sts = ${totalStCountRow2} total sts).` // erase after checking accuracy.

    for (let i = 0; i < middleSections2Array.length; i++) {
        allSections2ArrayWritten[i] = `<span class="colorCoding${i}"> ${middleSections2Array[i].writtenInstructions} </span> ${placeMarker}`
    }

    for (let j = 0; j < allSections2ArrayWritten.length; j++) {
        writtenSection2All = writtenSection2All + allSections2ArrayWritten[j];
    }

    SetUpRow2 = `${beg2} ${writtenSection2All} ${end2} ${writtenStitchCount2}`;
    console.log('SetUpRow2: ');
    console.log(SetUpRow2);
    let setUpRow2paragraph = document.createElement('p');
    setUpRow2paragraph.classList.add('setUpRow2paragraph');
    setUpRow2paragraph.innerHTML = SetUpRow2;
    setUpRow2Div = document.createElement('div');
    setUpRowsDiv.appendChild(setUpRow2Div);
    setUpRow2Div.appendChild(setUpRow2paragraph);
}

function createSpace () {
    neededhight = setUpRowsDiv.offsetHeight;
    optimalHeight = neededhight + 5
    divToCreateSpace.style.height = `${optimalHeight}px`;
}


function print () {
    window.print()
}
