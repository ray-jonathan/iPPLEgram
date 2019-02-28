// JavaScript for iPPLEgram

// When we click a .picture-frame, 
const targetElements = document.querySelectorAll("[data-target]"); // a `const` is a "constant variable", which means that it cannot be reassigned

// we see an elarged version of the 
// image inside the .picture-frame


function respondToClick() {
    console.log("hello");
    console.log("whats good b");
    console.log("ehh");
}

function attachClickHandler(oneElement) {
    oneElement.addEventListener("click", respondToClick);
}

targetElements.forEach(attachClickHandler);