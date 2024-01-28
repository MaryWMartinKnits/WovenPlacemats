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
let beg1 = ' Set up row 1 (with MC): P2, ktbl1, p2, <strong> pm, </strong>  '; //  change beeggining of pattern for however the set up row starts
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

let purlStitchCountSum = 0;
let savedStitchCount;

function createSpace () {
    neededhight = setUpRowsDiv.offsetHeight;
    optimalHeight = neededhight + 5
    divToCreateSpace.style.height = `${optimalHeight}px`;
}

function wovenPlacematSetUpRow1 () {
    let counter = 0;
    for (let i = 0; i < numberOfSections; i++) { // 7
        middleSections1 = `${middleSections1} <span class="colorCoding${i}">` //Section ${i+1}:  `
        lastDE = '';
        for (let k = 0; k < numberofDEperSection ; k++) { // 4 
            console.log(`k: ${k}. LastDE: ${lastDE}. DE: ${DE}.`)
            console.log(userSelectionArray[counter])
            if (k == numberofDEperSection-1) { // last st pair of each section
                console.log(`changing sections:`)
                if (userSelectionArray[counter].direction == 'right' && userSelectionArray[counter].yarnColor == 'MC') {
                    if (userSelectionArray[counter+1].direction == 'left' && userSelectionArray[counter+1].yarnColor == 'MC') {
                        purlStitchCount = 0;
                        lastDE = DE;
                        DE = cero_into_one;
                        DEstitchCount = DEstitchCount + 2
                        purlStitchCount = purlStitchCount + 2;
                    } else if (userSelectionArray[counter+1].direction == 'left' && userSelectionArray[counter+1].yarnColor == 'CC') {
                        console.log(`last pair: right MC & left CC`);
                        purlStitchCount = 0;
                        lastDE = DE;
                        DE = m1L;
                        purlStitchCount = purlStitchCount + 2;
                    }
                } else if (userSelectionArray[counter].direction == 'right' && userSelectionArray[counter].yarnColor == 'CC') {
                    if (userSelectionArray[counter+1].direction == 'left' && userSelectionArray[counter+1].yarnColor == 'CC') {
                        console.log(`last pair: right CC & left CC`);
                        lastDE = DE;
                        DE = '';
                        purlStitchCount = purlStitchCount + 2;

                    } else if (userSelectionArray[counter+1].direction == 'left' && userSelectionArray[counter+1].yarnColor == 'MC') {
                        console.log(`last pair: right CC & left MC`);
                        purlStitchCount = 0;
                        lastDE = DE;
                        DE = m1L;
                        purlStitchCount = 2;
                    }
                }      
                if (purlStitchCountSum == 0) {
                    // purlStitchCountSum = 2;
                    lastP2 = 'p2, '
                } //to add the last p2 of the section

                if (purlStitchCountSum !== 0) {
                    savedStitchCount = purlStitchCountSum;   
                    console.log(`middle sections: ${middleSections1}`)  ;

                } else if (purlStitchCountSum == 0) {
                    console.log(`last DE: ${lastDE}`);
                    console.log(`DE: ${DE}`);
                    if (lastDE == purl) {
                        if (DE == purl) {
                            middleSections1 =  ` ${middleSections1} `;    
                            console.log(middleSections1)
                        } else if (DE !== purl) {
                            middleSections1 =  ` ${middleSections1} p${lastDE}, ${DE} p${purlStitchCount}, `;    
                            console.log(middleSections1)
                        }
                    
                    } else if (lastDE !== purl) {
                        if (DE == purl) {
                            middleSections1 =  ` ${middleSections1} `;   
                            console.log(middleSections1) 
                        } else if (DE !== purl) {
                            middleSections1 =  ` ${middleSections1} ${DE} p${purlStitchCount}, `;
                            console.log(middleSections1)   
                        }  
                    }
                }

                middleSections1 = `${middleSections1} </span> ${placeMarker}`

                // middleSections1 =  `${middleSections1}  ${DE} p${purlStitchCount}, </span> ${placeMarker} `;

                console.log('middleSections1: ' + middleSections1);
                purlStitchCount = 0; //because I'm changing sections after this line.
                purlStitchCountSum = 0; //because I'm changing sections after this line.
            } else {
                if (userSelectionArray[counter].direction == 'right' && userSelectionArray[counter+1].direction == 'left') {
                    if (userSelectionArray[counter+1].section == userSelectionArray[counter+2].section) {

                        if (userSelectionArray[counter].yarnColor == 'MC' && userSelectionArray[counter+1].yarnColor == 'MC') {
                            purlStitchCount = 0;
                            lastDE = DE;
                            DE = kfb;
                            DEstitchCount++
                            purlStitchCount = purlStitchCount + 2;
                        } else if (userSelectionArray[counter].direction == 'MC' && userSelectionArray[counter+1].yarnColor == 'CC') {
                            console.log(`right MC & left CC`)
                            purlStitchCount = 0
                            lastDE = DE;
                            DE = ktbl1;
                            purlStitchCount = purlStitchCount + 2
                        } else if (userSelectionArray[counter].yarnColor == 'CC' && userSelectionArray[counter+1].yarnColor == 'CC') {
                            console.log(`right CC & left CC`);
                            
                            purlStitchCount = purlStitchCount + 3
                            purl = `${purlStitchCount} ` // p2, p1,
                            lastDE = DE;
                            DE =  purl // p2, p1,
                            
    
                        } else if (userSelectionArray[counter].yarnColor == 'CC' && userSelectionArray[counter+1].yarnColor == 'MC') {
                            console.log(`right CC & left MC`);
                            purlStitchCount = 0
                            lastDE = DE;
                            DE = ktbl1;
                            purlStitchCount = purlStitchCount + 2
                        }
                    }
                    if (purlStitchCountSum !== 0) {
                        savedStitchCount = purlStitchCountSum;   
                        console.log(`middle sections: ${middleSections1}`)  ;

                    } else if (purlStitchCountSum == 0) {
                        console.log(`last DE: ${lastDE}`);
                        console.log(`DE: ${DE}`);
                        if (lastDE == purl) {
                            if (DE == purl) {
                                middleSections1 =  ` ${middleSections1} `;    
                                console.log(middleSections)
                            } else if (DE !== purl) {
                                middleSections1 =  ` ${middleSections1} p${lastDE}, ${DE} p${purlStitchCount},`;    
                                console.log(middleSections1)
                            }
                        
                        } else if (lastDE !== purl) {
                            if (DE == purl) {
                                middleSections1 =  ` ${middleSections1} `;   
                                console.log(middleSections1) 
                            } else if (DE !== purl) {
                                middleSections1 =  ` ${middleSections1} ${DE} p${purlStitchCount}, `;
                                console.log(middleSections1)   
                            }  
                        }
                    }
                }      
            }
        

                
            counter = counter + 2
        } //for k loop
    } //for i loop
    writeSetUpRow1();
    createSpace();
} // end of function





function writeSetUpRow1 () {
    console.log('writeSetUpRow1 function executed');
    let writenStitchCount1 = `(${originalStitchCount} sts + ${DEstitchCount} increased sts = ${originalStitchCount + DEstitchCount} total sts).`
    SetUpRow1 = beg1 + middleSections1 + end1 + writenStitchCount1;
    console.log('SetUpRow1: ');
    console.log(SetUpRow1);
    let setUpRow1paragraph = document.createElement('p');
    setUpRow1paragraph.innerHTML = SetUpRow1;
    setUpRow1Div = document.createElement('div');
    setUpRowsDiv.appendChild(setUpRow1Div);
    setUpRow1Div.appendChild(setUpRow1paragraph);
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