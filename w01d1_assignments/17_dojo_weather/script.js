console.log("Yo again!")


function hideBox() {
    byeBox.remove();
}

// var red1 = document.querySelector("#red1")
// var blue1 = document.querySelector("#blue1")
// var red2 = document.querySelector("#red2")
// var blue2 = document.querySelector("#blue2")

function pickTemp(neroSelectBox){
    if (neroSelectBox.value == "cel"){
        red1.innerText = 75;
        blue1.innerText = 65;
        red2.innerText = 80 ;
        blue2.innerText = 66;
        red3.innerText = 69;
        blue3.innerText = 61;
        red4.innerText = 78;
        blue4.innerText = 70;
    } 
    else{
        red1.innerText = 24;
        blue1.innerText = 18;
        red2.innerText = 27
        blue2.innerText = 19;
        red3.innerText = 21;
        blue3.innerText = 16;
        red4.innerText = 26;
        blue4.innerText = 21;
    }

    console.log("the temperature is in " + element.value);
}
