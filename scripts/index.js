// JavaScript for iPPLEgram

// When we click a .picture-frame, 
const targetElements = document.querySelectorAll("[data-target]"); // a `const` is a "constant variable", which means that it cannot be reassigned

// we see an elarged version of the 
// image inside the .picture-frame


function respondToClick(event) {

    console.log(event.target.parentElement);

    // add the "big" class to the thing
    // that got clicked
    event.target.parentElement.classList.toggle('big');
}

function attachClickHandler(oneElement) {
    oneElement.addEventListener("click", respondToClick);
}

targetElements.forEach(attachClickHandler);