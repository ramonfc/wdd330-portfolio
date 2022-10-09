function main() {
  const exercisesNotes = [
    // { label: "Story Editor: Using Local Storage", url: "./story_editor.html" },
    {
      label: `<h3>Forms</h3>
        Traditionally, when a form was submitted, it would be sent to a server where the information 
        would be processed using a 'back end' language such as PHP or Ruby. 
        It’s possible, and becoming more and more common, to process the information in a form 
        on the 'front end' before it is sent to the server using JavaScript.
        <br>
        Each form control has an initial value that can be specified in the HTML code. This value can be changed by a user.
        The value can also be changed dynamically using JavaScript.
        <br><br>

        Accesing the form elements:<br>
        <pre>
        <code>
        const form = document.getElementsByTagName('form')[0];
        </code>
        </pre>

        Instead of using a numerical index, we can use the name attribute to identify a form:<br>

        <pre>
       <code>
       const form = document.forms.search;
       </code> 
        </pre>
        or<br>
        <pre>
        <code>
        const form = document.forms['search'];
        </code>
        </pre>

        A form object also has a method called elements that returns an HTML collection of all the elements contained in the form. 
        In this case the form contains two controls: an input element and a button element:<br>

        <pre>
        <code>
        const [input,button] = form.elements;
        </code>
        </pre>

        <br>
        <h3>Form Properties and Methods:</h3> 
        The form.submit() method will submit the form automatically. 
        Note that submitting a form using this method won’t trigger the form submit event.<br>
        The form.reset() method will reset all the form controls back to their initial values specified in the HTML.<br>
        The form.action property can be used to set the action attribute of a form, so it’s sent to a different URL to be processed on the server. <br>
        <br>
        <h3>Form Events:</h3>
        The focus event occurs when an element is focused on. In the case of an input element, 
        this is when the cursor is placed inside 
        the element (either by clicking or tapping on it or navigating to it using the keyboard). <br>
        The blur event occurs when the user moves the focus away from the form element.<br>
        The change event occurs when the user moves the focus away from the form element after changing it. 
        So if a user clicks in an input field and makes no changes, 
        and then clicks elsewhere, the change event won’t fire, but the blur event will. <br>
        <br>
        Possibly the most important form event is the submit event, occurring when the form is submitted. 
        Usually this will send the content of the form to the server to be processed, but we can use 
        JavaScript to intercept the form before it’s sent by adding a submit event listener.<br>
        <br>
        <h3>Retrieving and Changing Values From a Form:</h3>
        Text input element objects have a value property that can be used to retrieve the text inside the field.<br>
        It's possible to set the value: <br>
        <pre>
        <code>
        input.value = 'Search Here';
        </code>
        </pre>
        The problem with this is that the text remains in the field when the user clicks inside it, so it has to be deleted before the user can enter their own text. 
        This is easily remedied using the focus and blur event handlers. 
        <pre>
        <code>
        input.addEventListener('focus', function(){
          if (input.value==='Search Here') {
              input.value = '' 
          }
      }, false);
      
      input.addEventListener('blur', function(){
          if(input.value === '') {
              input.value = 'Search Here';
          } }, false);
        </code>
        </pre>

        <h3>Hidden Input Fields:</h3>
        Hidden fields can be created using input fields with type='hidden'. 
        These are not displayed by the browser, but have a 'value' attribute that can contain information 
        that is submitted with the form.
        the information in these fields is in no way secret, as it’s visible in the HTML, 
        so shouldn’t be used for sensitive data. 
        <br><br><br>
      `
    },
    {
      label: `
        <h3>Object-Oriented Programming</h3>

        <h3>Encapsulation</h3>
        In OOP, this involves keeping all the programming logic inside an object 
        and making methods available to implement the functionality, without the outside 
        world needing to know how it’s done.
        <br>

        <h3>Polymorphism</h3>
        In OOP, this means various objects can share the same method, but also have 
        the ability to override shared methods with a more specific implementation.
        <br>

        <h3>Inheritance</h3>
        In OOP, this means we can take an object that already exists and inherit all its properties and methods. 
        We can then improve on its functionality by adding new properties and methods.
        <br>

        <h3>Classes</h3>
        JavaScript didn't have classes before ES6, and used the concept of using actual 
        objects as the blueprint for creating more objects. This is known as a prototype-based language. 
        <br>

        <h3>Constructor function</h3>

        Create an object using literal notation: 
        <pre>
        <code>
        const dice = {
          sides: 6,
          roll() {
              return Math.floor(this.sides * Math.random() + 1)
          }    
        }
        </code>
        </pre>
        Using constructor function: 
        <pre>
        
        <code>
        const Dice = function(sides=6){
          this.sides = sides;
          this.roll = function() {
              return Math.floor(this.sides * Math.random() + 1)
          }
        }
        </code>
        </pre>

        Create an instance: 
        <pre>
        <code>
        const redDice = new Dice();
        << Dice { sides: 6, roll: [Function] }
        </code>
        </pre>


        <h3>ES6 Class Declarations</h3>
        <pre>
        <code>
        class Dice {
          constructor(sides=6) {
              this.sides = sides;
          }
      
          roll() {
              return Math.floor(this.sides * Math.random() + 1)
          }
      }
        </code>
        </pre>

        <h3>Static Methods</h3>
        The static keyword can be used in class declarations to create a static method. 
        These are sometimes called class methods in other programming languages. 
        A static method is called by the class directly rather than by instances of the class.

        <pre>
        <code>
        class Dice {
          constructor(sides=6) {
              this.sides = sides;
          }
      
          roll() {
              return Math.floor(this.sides * Math.random() + 1)
          }
      
          static description() {
              return 'A way of choosing random numbers'
          }
      }
        </code>
        </pre>

        This method is called from the Dice class like so:
        <pre>
        <code>
        Dice.description()
        << 'A way of choosing random numbers'
        </code>
        </pre>

        <strong><i style="color: red">Static methods are not available to instances of the class.</i></strong>

        <br>

        <h3>The Prototype Property</h3>
        <p>
        When creating a class, you would normally add any default properties and methods to 
        the class declaration. But what if you want to augment the class with extra methods 
        and properties after it has been created? It turns out that you can still do this using 
        the prototype property of the class. This is particularly useful if you don't have access to 
        the class declaration, but still want to add properties and methods to the class.
        </p>
        <pre>
        <code>
        Turtle.prototype.weapon = 'Hands';
        << 'Hands'
        </code>
        </pre>
        <p>
        The prototype object is live, so if a new property or method is added to the prototype, 
        any instances of its class will inherit the new properties and methods automatically, 
        even if that instance has already been created.
        </p>

        <p>
        An object instance can overwrite any properties or methods inherited from its prototype by simply assigning a new value to them. 
        <pre>
        <code>
        leo.weapon = 'Katana Blades';
        << 'Katana Blades';
        </code>
        </pre>
        </p>


        <p>
        Any own properties will take precedence over the same prototype property when used in methods
        </p>

        <p>
        The prototype can be used to add any new properties and methods after the class has been declared. 
        It should be used to define any properties that will remain the same for every instance of the class.
        <pre>
        <code>
        Turtle.prototype.food = 'Pizza';
        </code>
        </pre>        
        </p>

        <p style="font-weight: bold; font-style: italic;">
        Methods are likely to be the same for all instances of a constructor, so it's 
        fine to add methods to the prototype
        </p>

        <h3>Public and privated methods</h3>
        <p>a private _color property</p>

        <pre>
        <code>
        class Turtle {
          constructor(name,color) {
              this.name = name;
              let _color = color;
              this.setColor = color => { return _color = color; }
              this.getColor = () => _color;
          }
      }
        </code>
        </pre>

        <p>Using getter and setter methods (getColor an setColor) give control:</p>
        <pre>
        <code>
        this.setColor = (color) => {
          if(typeof color === 'string'){
              return _color = color;
              } else {
                  throw new Error('Color must be a string');
              }
          }
          
          raph.setColor(4);
          << Error: Color must be a string
        </code>
        </pre>

        <h3>Inheritance using extends</h3>
        <pre>
        <code>
        class NinjaTurtle extends Turtle {
          constructor(name) {
              super(name);
              this.weapon = 'hands';
          }
          attack() { return \`Feel the power of my \${this.weapon}!\` } 
      }
        </code>
        </pre>


        <h3>Set and get</h3>
        <p>
        The next example shows how we can create a Dice class that uses a get function 
        that will return a description of the number of sides, rather than just the actual number, 
        and a set function that prohibits a non-positive number of sides to be set
        </p>
        <pre>
        <code>
        class Dice {
          constructor(sides=6){    
              Object.defineProperty(this, 'sides', {
                  get() {
                  return \`This dice has \${sides} sides\`;
                  },
                  set(value) {
                  if(value > 0) {
                      sides = value;
                      return sides;
                  } else {
                      throw new Error('The number of sides must be positive');
                  }
                  }
              });
          
              this.roll = function() {
                  return Math.floor(sides * Math.random() + 1)
              }
              }
          }
        </code>
        </pre>


        <p>Example of usage</p>
        <pre>
        <code>
        const yellowDice = new Dice;

        yellowDice.sides
        << "This dice has 6 sides"

        yellowDice.sides = 10;
        << 10

        yellowDice.sides
        << "This dice has 10 sides"

        yellowDice.sides = 0;
        << Error: "The number of sides must be positive"
        </code>
        </pre>

        <h3>Creating objects from other objects</h3>
        <pre>
        <code>
        const lois = Object.create(Human);
        </code>
        </pre>


        <h3>Mixin</h3>
        
        <pre>
        <code>
        function mixin(target,...objects) {
          for (const object of objects) {   
          if(typeof object === 'object') {
              for (const key of Object.keys(object)) {
                  if (typeof object[key] === 'object') {
                  target[key] = Array.isArray(object[key]) ? [] : {};
                  mixin(target[key],object[key]);
                  } else {
                  Object.assign(target,object);  
                  }
              }
              }
          }
          return target;
      }
        </code>
        </pre>

      <p>To make a deep copy</p>
      <pre>
      <code>
      function copy(target) {
        const object =  Object.create(Object.getPrototypeOf(target));
        mixin(object,target);
        return object;
    }
      </code>
      </pre>


      <h3>Chaining functions</h3>
      <p>If a method returns this, its methods can be chained together to form a sequence of 
      method calls that are called one after the other.</p>
        `
    },
    {
      label: `
      <h3>Modern JavaScript Development</h3>
      <br>
      <h3>Libraries</h3>
      <p>
      A JavaScript library is a piece of code that provides several methods that make it easier to achieve common tasks.
      </p>


      <br>

      <h3>Modular JavaScript</h3>
      <p>
      A module is a self-contained piece of code that provides functions and methods that can 
      then be used in other files and by other modules. This helps to keep code organized in separate, 
      reusable files, which improves code maintainability. The code in a module should have a single 
      purpose, and group together functions with distinct functionality. 
      </p>
      
      <p>
      important: <br>
      <ul>
      <li>
      All code in modules is always in strict mode without the need for 'use strict' and there is no way to opt out of this.
      </li>
      <li>
      A module has its own global scope, so any variables created in the top-level of a module can only be accessed within that module.
      </li>
      <li>
      The value of this in the top level of a module is undefined, rather than the global object.
      </li>
      <li>
      You can't use HTML-style comments in modules (although this isn't very common in any JavaScript program these days).
      </li>
      </ul>
      </p>

      Example of module:<br>
      <pre>
      <code>
      function square(x) {
        return x * x;
    }
    
    function sum(array, callback) {
        if(callback) {
            array = array.map(callback);
        }
        return array.reduce((a,b) => a + b );
    }
    
    function variance(array) {
        return sum(array,square)/array.length - square(mean(array))
    }
    
    function mean(array) {
        return sum(array) / array.length;
    }
    
    export {
        variance,
        mean
    }
      </code>
      </pre>

      <p>
      To import these functions into the main.js file:
      </p>

      <pre>
      <code>
      import  { mean, variance } from './stats.js';
      </code>
      </pre>

      <p>installed packages</p>
      <pre>
      <code>
      npm list --depth=0
      </code>
      </pre>

      <p>view global packages</p>
      <pre>
      <code>
      npm list --global
      </code>
      </pre>

      <p>find out if any of the packages you have installed have been updated.
      This will display a list of any packages that are listed in package.json and have a more recent version available than what’s currently installed.
      </p>
      <pre>
      <code>
      npm outdated
      </code>
      </pre>

      <p>update a package</p>
      <pre>
      <code>
      npm update jest
      </code>
      </pre>

      <p>update all packages</p>
      <pre>
      <code>
      npm update
      </code>
      </pre>
          `

    },
    {
      label: `<h3>Exercises</h3>

      <a href="./search.html">Form: Search</a>
      <br>
      <a href="./hero.html">Form: Hero</a>
      <br>
      <a href="./list.html">MVC</a>
          
          `
    }
  ];

  listWeeklyItems(exercisesNotes, "weekList");
}



function listWeeklyItems(weekElements, listIdName) {

  const ol = document.querySelector(`#${listIdName}`);

  if (ol) {
    weekElements.forEach(element => {

      const li = document.createElement("li");

      if (!element.url) {
        li.innerHTML = element.label
      }
      else {
        const anchor = document.createElement("a");
        anchor.innerHTML = element.label;
        anchor.href = element.url;
        // anchor.target = "_blank";            
        li.appendChild(anchor);
      }


      ol.appendChild(li);
    });
  }
}





main();