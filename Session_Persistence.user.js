// ==UserScript==
// @name         Dynamic UI Resilience & Event Testing
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  A utility focused on testing UI resilience through dynamic element injection, event listeners, and randomized DOM interaction.
// @author       PostoFisso
// @match        https://redteamertest.w3spaces-preview.com/index.html*
// @grant        none
// ==/UserScript==

function initializeAutomation() {
    'use strict';

    /**
     * Handles DOM tampering and style modification after a short delay
     * to verify element availability during the initial render phase.
     */
    function executeTamper() {
        setTimeout(() => {
            let primaryButton = document.querySelector("#Primobottone");
            // Modifying header content to confirm successful script injection
            document.querySelector("body > h1").innerHTML = "UI Integrity Test: Active (TamperMonkey)";

            if (primaryButton) {
                primaryButton.style.backgroundColor = 'blue';
                primaryButton.style.color = "white";
            }
        }, 50);
    }

    executeTamper();
}

/**
 * Injects a new interactive button with randomized positioning logic
 * to test coordinate-based UI interaction.
 */
let injectDynamicButton = function() {
    let testButton = document.createElement('Button');
    testButton.innerText = 'OPERATIONAL TEST';
    testButton.style.color = "green";
    testButton.style.backgroundColor = "black";
    testButton.style.position = "absolute";
    testButton.style.zIndex = "1000";

    document.body.appendChild(testButton);

    // Randomized coordinate calculation for interface stress testing
    let randomTop = Math.floor(Math.random() * (window.innerHeight - 50));
    let randomLeft = Math.floor(Math.random() * (window.innerWidth - 50));

    testButton.style.top = randomTop + "px";
    testButton.style.left = randomLeft + "px";

    // Automated trigger to test programmatic click events
    setTimeout(() => {
        console.log("Triggering automated event...");
        testButton.click();
    }, 5000);
};

/**
 * Implements low-level MouseEvent handling to create a 
 * custom draggable interface element.
 */
const draggableBox = document.createElement('div');
draggableBox.innerText = 'Diagnostic Hub (Drag Me)';
draggableBox.style.cssText = 'width: 200px; height: 100px; background: lightgray; position: absolute; cursor: move; padding: 10px; border: 1px solid black; z-index: 9999;';
document.body.appendChild(draggableBox);

let offsetX, offsetY;

draggableBox.onmousedown = function(e) {
    // Visual feedback for interaction start
    draggableBox.style.backgroundColor = "yellow";
    
    offsetX = e.clientX - draggableBox.getBoundingClientRect().left;
    offsetY = e.clientY - draggableBox.getBoundingClientRect().top;

    document.onmousemove = function(e) {
        draggableBox.style.left = (e.clientX - offsetX) + 'px';
        draggableBox.style.top = (e.clientY - offsetY) + 'px';
    };

    document.onmouseup = function() {
        draggableBox.style.backgroundColor = "white";
        document.onmousemove = null;
        document.onmouseup = null;
    };
};

// Logical link between independent UI elements to test event propagation
let btnRight = document.querySelector("#Secondoobottone");
if (btnRight) {
    btnRight.addEventListener("click", () => {
        console.log("Cross-element event detected. Modifying target state...");
        let target = document.querySelector("#Primobottone");
        if (target) {
            target.style.backgroundColor = "black";
            target.style.border = "2px solid red";
        }
    });
}

// Initializing sequences
initializeAutomation();
injectDynamicButton();
