// ### 2. 🔢 **Counter App**
// **Kya Banani Hai:**
// - Ek counter dikhao jo 0 se start ho
// - 3 buttons: Increase (+1), Decrease (-1), Reset (0 pe wapas)
// - Counter ka color change ho: Positive = Green, Negative = Red, Zero = Black

// **Concepts Used:**
// - `querySelector`
// - `addEventListener('click')`
// - `innerText` update karna
// - Conditional statements (`if/else`)
// - `style.color` change karna

// **Kya Seekhoge:**
// - State management (counter ki value track karna)
// - Conditional styling
// - Multiple event listeners

let decrease = document.querySelector("#decrease");
let increase = document.querySelector("#increase");
let reset = document.querySelector("#reset");
let h2 = document.querySelector("h2");
let count = 0;

decrease.addEventListener("click",function(){
     count--;
     toUppercase();
});
increase.addEventListener("click",function(){
     count++;
     toUppercase();
});
reset.addEventListener("click",function(){
     count=0;
     toUppercase();
});

function toUppercase(){
    h2.innerText = count;

    if(count>0){
        h2.style.color = "green";
    }else if(count<0){
        h2.style.color = "red";
    }else{
        h2.style.color = "black";
    }
}
