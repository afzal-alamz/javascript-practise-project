// Light Bulb Toggle - Complete JavaScript Code

// Step 1: Select all required elements
let toggleBtn = document.querySelector("#toggleBtn");
let bulb = document.querySelector("#bulb");
let rays = document.querySelector("#rays");
let status = document.querySelector("#status");
let body = document.querySelector("body");

// Step 2: Boolean flag to track state
let isOn = false;

// Step 3: Add click event listener on button
toggleBtn.addEventListener("click", function() {
    // Step 4: Toggle the flag
    isOn = !isOn;
    
    // Step 5: Toggle classes and update content based on state
    if (isOn) {
        // Bulb ON karo
        bulb.classList.add("on");
        rays.classList.add("active");
        toggleBtn.classList.add("on");
        body.classList.add("light");
        
        // Text change karo
        toggleBtn.textContent = "Turn OFF";
        status.textContent = "Bulb is ON";
    } else {
        // Bulb OFF karo
        bulb.classList.remove("on");
        rays.classList.remove("active");
        toggleBtn.classList.remove("on");
        body.classList.remove("light");
        
        // Text change karo
        toggleBtn.textContent = "Turn ON";
        status.textContent = "Bulb is OFF";
    }
});
