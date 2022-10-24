window.onload = init();

function init() {
    let convertBtn = document.getElementById("convertBtn");

    convertBtn.addEventListener("click", onConvertBtnClicked);
}

function onConvertBtnClicked() {
    console.log("hey");

    let celsFieeld = document.getElementById("celsField");
    let cels = Number(celsFieeld.value);
    let fahrenField = document.getElementById("fahrenField");
    let fahren = Number(fahrenField.value);

    if(fahrenField===Number){
        let fahrenheit = Math.ceil((cels*9/5)+32);
        fahrenField.value = `${fahrenheit} degrees`;
    } 
    else(celsField===Number){
        let celsius=Math.ceil((cels*9/5)+32);
        celsField.value = celsius;
    }

               // error message if the input is a NAN
  let error= document.getElementById("error");
  if (isNAN(fahren)){
      error.innerText= "Only use numbers";
  }

}
 
