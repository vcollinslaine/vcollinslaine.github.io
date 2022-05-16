var aText = new Array("Hello!",
    "I'm V Collins-Laine.",
    "I Make Games.",
    "I'm Currently Studying at USC.")
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
var iShowUnderscore = true;
var iCharacterUnderscoreDuration = 2;
var iUnderscoreLifespan = 0;
function typewriter()
{
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("typedText");

    while ( iRow < iIndex ) {
        sContents += aText[iRow++] + '<br />';
    }
    if(iShowUnderscore) {
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    }
    else {
        destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
    }
    iUnderscoreLifespan++;
    if(iUnderscoreLifespan === iCharacterUnderscoreDuration) {
        iUnderscoreLifespan = 0;
        iShowUnderscore = !iShowUnderscore;
    }
    if ( iTextPos++ === iArrLength ) {
        iTextPos = 0;
        iIndex++;
        if (iIndex === aText.length) {
            setTimeout("showFinal()", 500)
        }
        else {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}
function showFinal() {
    var destination = document.getElementById("typedText");
    destination.innerHTML = sContents + aText[iIndex-1];
}