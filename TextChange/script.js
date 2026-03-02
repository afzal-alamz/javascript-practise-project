// ### 4. 📝 **Text Changer**
// **Kya Banani Hai:**
// - Input box mein kuch likho
// - Neeche real-time update ho (jaise tum type kar rahe ho)
// - Character count bhi dikhao
// - Clear button se sab delete ho

// **Concepts Used:**
// - `querySelector`
// - `addEventListener('input')` - Real-time changes
// - `value` property (input ka)
// - `innerText` / `textContent`
// - `.length` property

// **Kya Seekhoge:**
// - Input handling
// - Real-time updates
// - String manipulation basics

let input = document.querySelector("input");
let characterCount = document.querySelector("#charCount");
let displayText = document.querySelector("#displayText");

input.addEventListener("input",function(){
    let count = input.value.length;
    displayText.innerText = input.value;
    characterCount.innerText = count;
});