// Module to deal with filters

/**
 * Select the filter to be used, either by age or by country.
 * @param {Array} list Array that contains the data to be filtered
 * @param {String} selection Specific value to determin which filter to use
 * @param {Any} value Value to find in the filter
 * @returns {Array} Filtered data
 */
function filterBy(list, selection, value) {
    // list to save the filtered values
    let newList = [];
    // verify the selection
    switch (selection) {
        case "age":
            newList = list.filter(item => item.dob.age === value);
            break;
        case "country":
            newList = list.filter(item => item.location.country === value);
            break;
    }
    return newList;
}


/**
 * Get a filtered array by applying the both filters (by age and by country)
 * @param {Array} list Array to apply the both filters
 * @param {string} country selected country
 * @param {string} inputAge input age
 * @returns {Array} filtered values
 */
function filterBy2(list, country, inputAge){
    let newList = [];    
    if(inputAge != "" && country != "select"){
        newList = list.filter(item => item.dob.age == inputAge);
        newList = newList.filter(item => item.location.country === country);
    }
    else if(inputAge != ""){
        newList = list.filter(item => item.dob.age == inputAge);
    }
    else if(country != "select") {
        newList = list.filter(item => item.location.country === country);
    }
    else {
        newList = list;
    }
    return newList;
}


/**
 * Used in the select to find the unique values in the column Country and construct the select option values
 * @param {Array} list Values in the column Country
 * @returns {Array} Values in the colum without repetitions
 */
function findUniqueElements(list) {
    // create a set to avoid repetitions in the list
    const uniqueElements = new Set(list);
    // return the unique elements of the set as an array
    return [...uniqueElements];
}




export { filterBy, findUniqueElements, filterBy2 }