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
let UserSelectionArrayObject = [{}];
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
let middleSections1 = '';
let middleSections2 = '';
let SetUpRow1 = '';
let SetUpRow2 = ''
let beg1 = ' <strong> Set up row 1 (with MC): </strong> P2, ktbl1, p2, <strong> pm, </strong>  '; //  change beeggining of pattern for however the set up row starts
let end1 = ' ktbl1, p2. ';
let beg2 = '';
let end2 = '';
let placeMarker = ' <strong> pm, </strong> ';
// let placeMarker = ' pm, ';
let slipMarker = ' <strong> sm, </strong> ';
// let slipMarker = ' sm, ';
let DEstitchCount = 0
let originalStitchCount = 85 //number of sts to begin with, I think it's 85. 5 + 11*7 + 3.
let kfb = ' kfb, ';
let p2 = ' p2, '
let cero_into_one = ' 0-into-1, ';
let ktbl1 = ' ktbl1, ';
let m1L = 'm1L, ';
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
let writenStitchCount1 = `(${originalStitchCount} sts + ${DEstitchCount} increased sts = ${originalStitchCount + DEstitchCount} total sts).`
let setUpRow1paragraph;
let firstStitch;
let secondStitch;
let thirdStitch;
let fourthStitch;
let newMiddleSections1;

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
    addEventListeners ();
    YCselectionButtons = document.querySelectorAll('.selected');
    divToCreateSpace = document.querySelector('.space');
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
        // allYCcheckboxes[i].addEventListener('change', changeColorSelection)
        allYCcheckboxes[i].addEventListener('change', function(event) {changeColorSelection(allYCcheckboxes[i])})
    }
    getUserSelectionBtn.addEventListener('click', getUserSelection);
    displayValuesBtn.addEventListener('click', displaySelectedValues);
    window.addEventListener('resize', displayWindowWidth);
    algorithmBtn.addEventListener('click', wovenPlacematSetUpRow1);
}

function changeColorSelection (checkedYC) {
    console.log('changeColorSelection function executed for: ');
    // console.log(checkedYC);
    firedCheckboxID = event.target.id;
    checkedYC = document.querySelector('#'+firedCheckboxID);
    console.log(checkedYC);
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
        thisObject['numberID'] = i;
        userSelectionArray.push(thisObject);
    }
    console.log('userSelectionArray: ')
    console.log(userSelectionArray);
    getUserSelectionBtn.disabled = true;
    getUserSelectionBtn.classList.add('disabledBtn');
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

function print () {
    window.print()
}



function createSpace () {
    neededhight = setUpRowsDiv.offsetHeight;
    optimalHeight = neededhight + 5
    divToCreateSpace.style.height = `${optimalHeight}px`;
}
let c = 0


function setUpRow1firts3Pairs(userSelectionArray, c, k) {
    if (userSelectionArray[c].direction == 'right' && userSelectionArray[c+1].direction == 'left') {
        if (userSelectionArray[c+1].section == userSelectionArray[c+2].section) {

            if (userSelectionArray[c].yarnColor == 'MC' && userSelectionArray[c+1].yarnColor == 'MC') {
                purlStitchCount = 0;
                lastDE = DE;
                DE = kfb;
                DEstitchCount++
                purlStitchCount = purlStitchCount + 2;
            } else if (userSelectionArray[c].direction == 'MC' && userSelectionArray[c+1].yarnColor == 'CC') {
                console.log(`right MC & left CC`)
                purlStitchCount = 0
                lastDE = DE;
                DE = ktbl1;
                purlStitchCount = purlStitchCount + 2
            } else if (userSelectionArray[c].yarnColor == 'CC' && userSelectionArray[c+1].yarnColor == 'CC') {
                console.log(`right CC & left CC`);
                purlStitchCount = purlStitchCount + 3
                purl = `${purlStitchCount} ` // p2, p1,
                lastDE = DE;
                DE =  purl // p2, p1,
            } else if (userSelectionArray[c].yarnColor == 'CC' && userSelectionArray[c+1].yarnColor == 'MC') {
                console.log(`right CC & left MC`);
                purlStitchCount = 0
                lastDE = DE;
                DE = ktbl1;
                purlStitchCount = purlStitchCount + 2
            }
        }
        switch (k) {
            case 0: 
                firstStitch = DE;
                break;
            case 1: 
                secondStitch = DE;
                break;
            case 2:
                thirdStitch = DE;
                break;
            case 3:
                fourthStitch = DE;
                break;
            default:
                console.log( 'ERROR!');
                break;
        }
        updateSetUpRow1();
        return lastDE, firstStitch, secondStitch, thirdStitch, fourthStitch;
    }
}
function setUpRow1lastPairOfSection (c, k) {
    console.log('set up Row1: last pair of the section function executed.')
    // console.log(`before changing sections pair:`);
    if (userSelectionArray[c].direction == 'right' && userSelectionArray[c].yarnColor == 'MC') {
        if (userSelectionArray[c+1].direction == 'left' && userSelectionArray[c+1].yarnColor == 'MC') {
            purlStitchCount = 0;
            lastDE = DE;
            DE = cero_into_one;
            DEstitchCount = DEstitchCount + 2
            purlStitchCount = purlStitchCount + 2;
        } else if (userSelectionArray[c+1].direction == 'left' && userSelectionArray[c+1].yarnColor == 'CC') {
            console.log(`last pair: right MC & left CC`);
            purlStitchCount = 0;
            lastDE = DE;
            DE = m1L;
            purlStitchCount = purlStitchCount + 2;
        }
    } else if (userSelectionArray[c].direction == 'right' && userSelectionArray[c].yarnColor == 'CC') {
        if (userSelectionArray[c+1].direction == 'left' && userSelectionArray[c+1].yarnColor == 'CC') {
            console.log(`last pair: right CC & left CC`);
            lastDE = DE;
            DE = '';
            purlStitchCount = purlStitchCount + 2;

        } else if (userSelectionArray[c+1].direction == 'left' && userSelectionArray[c+1].yarnColor == 'MC') {
            console.log(`last pair: right CC & left MC`);
            purlStitchCount = 0;
            lastDE = DE;
            DE = m1L;
            purlStitchCount = 2;
        }
    }      
    switch (k) {
        case 0: 
            firstStitch = DE;
            break;
        case 1: 
            secondStitch = DE;
            break;
        case 2:
            thirdStitch = DE;
            break;
        case 3:
            fourthStitch = DE;
            break;
        default:
            console.log( 'ERROR!');
            break;
    }
    middleSections1 = `${middleSections1} </span> ${placeMarker}`

    draftWritingSetUpRow1 (firstStitch, secondStitch, thirdStitch, fourthStitch);
    updateSetUpRow1(middleSections1)
}

function draftWritingSetUpRow1 (firstStitch, secondStitch, thirdStitch, fourthStitch) {
    if (firstStitch == secondStitch && firstStitch == thirdStitch) {
        if (firstStitch !== purl) {
            newMiddleSections1 = `${middleSections1} ${firstStitch} p${purlStitchCount}, ${secondStitch} p${purlStitchCount}, ${thirdStitch} p${purlStitchCount}, ${fourthStitch} p${purlStitchCount}, `
        }
        if (firstStitch == purl) {
            newMiddleSections1 = `p${purlStitchCount}, `
            console.log('purlStitchCount should be 11')
        }

    } else if (firstStitch == secondStitch || firstStitch == thirdStitch || firstStitch == fourthStitch) {
        console.log('I need to evalueate what to do in this case')

    }

    middleSections1 = `${middleSections1} ${newMiddleSections1} </span> ${placeMarker}` 
        
        
       
    

}
function wovenPlacematSetUpRow1 () {
    // let c = 0;
    writeSetUpRow1();
    createSpace();
    for (let i = 0; i < numberOfSections; i++) { // 7
        middleSections1 = `${middleSections1} <span class="colorCoding${i}">` //Section ${i+1}:  `
        lastDE = '';
        for (let k = 0; k < numberofDEperSection ; k++) { // 4 
            if (k == numberofDEperSection-1) { // last st pair of each section
                console.log(`changing sections:`)
                setUpRow1lastPairOfSection(c, k);
                
                


                // middleSections1 =  `${middleSections1}  ${DE} p${purlStitchCount}, </span> ${placeMarker} `;

                updateSetUpRow1()
                purlStitchCount = 0; //because I'm changing sections after this line.
                savedPurlStitchCount = 0;
                // purlStitchCountSum = 0; //because I'm changing sections after this line.
            } else {
                setUpRow1firts3Pairs (userSelectionArray, c, k, firstStitch, secondStitch, thirdStitch, fourthStitch); 
            }
            c = c + 2
        } //for k loop
    } //for i loop
    // writeSetUpRow1();
    updateSetUpRow1();
    createSpace();
} // end of function





function writeSetUpRow1 () {
    console.log('writeSetUpRow1 function executed');
    // writenStitchCount1 = `(${originalStitchCount} sts + ${DEstitchCount} increased sts = ${originalStitchCount + DEstitchCount} total sts).`
    // SetUpRow1 = beg1 + middleSections1 + end1 + writenStitchCount1;
    SetUpRow1 = middleSections1; //change to previous ones when fixed!
    console.log('SetUpRow1: ');
    console.log(SetUpRow1);
    let setUpRow1paragraph = document.createElement('p');
    setUpRow1paragraph.classList.add('setUpRow1paragraph');
    setUpRow1paragraph.innerHTML = SetUpRow1;
    setUpRow1Div = document.createElement('div');
    setUpRowsDiv.appendChild(setUpRow1Div);
    setUpRow1Div.appendChild(setUpRow1paragraph);

    window.addEventListener('resize', createSpace);

}

function updateSetUpRow1 (middleSections1) {
    // console.log('UPDATE set up Row1 function executed.');
    writenStitchCount1 = `(${originalStitchCount} sts + ${DEstitchCount} increased sts = ${originalStitchCount + DEstitchCount} total sts).`;
    SetUpRow1 = beg1 + middleSections1 + end1 + writenStitchCount1;
    setUpRow1paragraph = document.querySelector('.setUpRow1paragraph')
    setUpRow1paragraph.innerHTML = SetUpRow1;
}

function writeSetUpRow2 () {
    console.log('writeSetUpRow2 function executed');
    let writenStitchCount2 = `(${originalStitchCount} sts + ${DEstitchCount} increased sts = ${originalStitchCount + DEstitchCount} total sts).`

    setUpRow2Div = document.createElement('div')
    SetUpRow2 = beg1 + middleSections2 + end2
    console.log('SetUpRow2: ');
    console.log(SetUpRow2);
    let setUpRow2paragraph = document.createElement('p');
    setUpRow2paragraph.innerHTML = SetUpRow2;
    setUpRow2Div = document.createElement('div');
    setUpRowsDiv.appendChild(setUpRow2Div);
    setUpRow2Div.appendChild(setUpRow2paragraph);

}
