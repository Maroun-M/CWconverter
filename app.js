const CW = document.querySelector('[CW-input]');
const LBP = document.querySelector(".LBPinner");
const BW = document.querySelector(".BWinner")
const buttons = [...document.querySelectorAll(".button")];
function convertCW(){
CW.addEventListener('input', function(e) {
    const cw = e.target.value;
    const LBPresult = cw * 60000;
    const x = LBPresult.toLocaleString("en-US");
    const BWresult = cw * 1.6;
    const y = BWresult.toFixed(2);
    BW.innerHTML = y;    
    LBP.innerHTML = x;
    buttons.forEach(button =>{
    button.addEventListener('click', event =>{
        const value = event.target.innerHTML.replace('%', '');
        const newValue = value / 100;
        const result = parseInt(x) * 1000 * (1 - newValue) ;
        const finalResult = result.toLocaleString("en-US");
        console.log(result)
        LBP.innerHTML = finalResult ;
    });
    });
});   

}

document.addEventListener("DOMContentLoaded", () => {
    convertCW();
    
});
