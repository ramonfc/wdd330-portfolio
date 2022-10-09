const form =  document.getElementsByTagName('form')[0];
//Instead of using a numerical index, we can use the name attribute to identify a form:
//const form = document.forms.search;
console.log(form);



const [input,button] = form.elements;
//We can also access the form controls using their 'name' attributes as if it was a property of the form object.
//const input = form['searchInput']
//const input = form.elements.searchInput;

// input.addEventListener('focus', () => alert('focused'), false);
// input.addEventListener('blur', () => alert('blurred'), false);
// input.addEventListener('change', () => alert('changed'), false);
form.addEventListener ('submit', search, false);

function search(event) {
    alert(`Form submitted. You Searched for: ${input.value}`);
    event.preventDefault();
}

input.value = 'Search Here';

input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);

input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);