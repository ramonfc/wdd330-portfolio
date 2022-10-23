/**
 * do a querySelector lookup
 * @param {string} selector The selector passed to querySelector
 * @returns {element} The matching element or null if not found
 */
function qs(selector) {
    const element = document.querySelector(selector) || null;
    return element;
}

/**
 * add a touchend event listener to an element for mobile with a click event fallback for desktops
 * @param {element} elementSelector The selector for the element to attach the listener to
 * @param {function} callback The callback function to run
 */
function onTouch(elementSelector, callback) {
    elementSelector.addEventListener('touchend', callback);
    elementSelector.addEventListener('click', callback);
}

function enterKey(inputSelector, btnSelector) {    
    inputSelector.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        btnSelector.click();
      }
    });
  }


export { qs, onTouch }