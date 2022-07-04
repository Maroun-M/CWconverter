const CW = document.querySelector('[CW-input]');
const LBP = document.querySelector(".LBPinner");
const BW = document.querySelector(".BWinner")
const buttons = [...document.querySelectorAll(".button")];
const rateDOM = document.querySelector(".rate");
const discountDOM = document.querySelector(".discountedInner")
function convertCW(){
    var rate = document.getElementById('inputRate');
    rate.addEventListener('input', event =>{
        const input = event.target.value;    
        rateValue.textContent = `Rate: ${input}`;
   
        localStorage.setItem("input", input);    
        
    });
    const number = localStorage.getItem("input");
const rateValue = document.querySelector('.current-rate');
        console.log(rateValue)
        rateValue.textContent = `Rate: ${number}`;

CW.addEventListener('input', function(e) {
    const cw = e.target.value;
    const rate = localStorage.getItem("input");
    const num = parseInt(rate);
    const LBPresult = cw * num;
    const x = LBPresult.toLocaleString("en-US");
    const BWresult = cw * 1.6;
    const y = BWresult.toFixed(2);
    
    BW.innerHTML = y;    
    LBP.innerHTML = x;
    buttons.forEach(button =>{
    button.addEventListener('click', event =>{
        const value = event.target.innerHTML.replace('%', '');
        const newValue = value / 100;      
        const result = LBPresult * (1 - newValue) ;
        const finalResult = result.toLocaleString("en-US");
        discountDOM.innerHTML = finalResult ;
    
        
        
    });
});
});   


}

document.addEventListener("DOMContentLoaded", () => {
    convertCW();
    
});
