const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);


// form validation:
const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

document.querySelector("#heroName").addEventListener("keyup", validateInline, false)

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}


// disabling submit button:
form.heroName.addEventListener('keyup',disableSubmit,false);

function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value; // value of input type password

    //dealing with checkbox:
    // hero.powers = [];
    // for (let i = 0; i < form.powers.length; i++) {
    //     if (form.powers[i].checked) {
    //         hero.powers.push(form.powers[i].value);
    //     }
    // }

    //shorthand:
    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    // console.log(form.powers);

    //Dealing with radiobutton:
    hero.category = form.category.value;

    //input type number:
    hero.age = form.age.value;

    //select:
    hero.city = form.city.value;
    //It is also possible to find out the index of the option that has been selected, using the selectedIndex property.
    //form.city.options[form.city.selectedIndex].text


    //textarea:
    hero.origin = form.origin.value;

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

