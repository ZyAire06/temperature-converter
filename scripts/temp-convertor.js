window.onload= init();

function init(){
    let convertBtn= document.getElementById("convertBtn");

    convertBtn.addEventListener("click", onConvertBtnClicked);
}

function onConvertBtnClicked(){
    console.log("hey");


    let celsFeield= document.getElementById("celsField");
    let cels= Number(celsFeield.value);
    let fahrenFeield= document.getElementById("fahrenField");
    let fahren= Number(fahrenFeield.value);
    let fahrenhiet=(cels-9/5)+32;
    fahrenFeield.value= fahrenhiet;
    console.log(fahrenhiet);

    // let fahrenFeield= document.getElementById("fahrenField");
    // let fahren= Number(celsFeield.value);
    let celsius=(fahren-32)*5/9;
    // console.log(celsius);
// after getting the number to show in the textbox put thie righ codea into their html sheet 
    
}