/**
 * read a value from local storage and parse it as JSON
 * @param {string} key The key under which the value is stored under in LS
 * @returns {array} The value as an array of objects
 */
function readFromLS(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

/**
 * write an array of objects to local storage under the provided key
 * @param {string} key The key under which the value is stored under in LS
 * @param {array} data The information to be stored as an array of objects. Must be serialized.
 */
function writeToLS(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

/**
 * Remove the saved values of the key
 * @param {string} key The key under which the value is removed in LS
 */
function removeLS(key) {
  localStorage.removeItem(key)
}


export { readFromLS, writeToLS, removeLS };