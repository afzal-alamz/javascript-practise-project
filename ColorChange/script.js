// ### 1. 🎨 **Color Changer**
// **Kya Banani Hai:**
// - 4-5 buttons banao different colors ke (Red, Blue, Green, Yellow)
// - Jab button click ho, background color change ho jaye
// - Bonus: Random color button bhi add karo

// **Concepts Used:**
// - `querySelector/querySelectorAll`
// - `addEventListener('click')`
// - `document.body.style.backgroundColor`
// - Arrays (color names store karne ke liye)

// **Kya Seekhoge:**
// - DOM manipulation basics
// - Event listeners lagana
// - CSS properties JavaScript se change karna

let btns = document.querySelectorAll('button');
let span = document.querySelector("#colorName");
let btn = document.querySelector(".random-btn");

for(let btn of btns){
    btn.addEventListener("click",function(){
       let colorName = btn.dataset.color;
       document.body.style.background = colorName;
       span.innerText = colorName;
    })
}
btn.addEventListener("click",function(){
    let red = Math.floor(Math.random()*255);
    let green  = Math.floor(Math.random()*255);
    let blue  = Math.floor(Math.random()*255);
    let randomColor = `rgb(${red},${green},${blue})`;
    document.body.style.background = randomColor;
    span.innerText = randomColor;
});