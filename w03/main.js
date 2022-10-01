function main(){
    const exercisesNotes = [
        // { label: "Story Editor: Using Local Storage", url: "./story_editor.html" },
        {
            label: `<strong>Object Methods: this</strong> <br>
        <pre>
        <code>
        let user = {
            name: "John",
            age: 30
          };
          
          user.sayHi = function() {
            alert("Hello!");
          };
          
          user.sayHi(); // Hello!
        </code>
        </pre>
        A function that is a property of an object is called its method. <br>
        <br>
        Shorthand:
        <pre>
        <code>
        // these objects do the same

        user = {
        sayHi: function() {
            alert("Hello");
            }
        };

        // method shorthand looks better, right?
        user = {
        sayHi() { // same as "sayHi: function(){...}"
            alert("Hello");
            }
        };
        </code>
        </pre>

        <br>

        “this” in methods: <br>
        To access the object, a method can use the this keyword.
        The value of this is the object “before dot”, the one used to call the method.<br>
        <pre>
        <code>
        let user = {
            name: "John",
            age: 30,
          
            sayHi() {
              // "this" is the "current object"
              alert(this.name);
            }
          
          };
          
          user.sayHi(); // John
        </code>
        </pre>

        <br>
        Arrow functions have no “this”:<br>
        Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.
        
        <pre>
        <code>
        let user = {
            firstName: "Ilya",
            sayHi() {
              let arrow = () => alert(this.firstName);
              arrow();
            }
          };
          
          user.sayHi(); // Ilya
        </code>
        </pre>`
        },
        {
            label: `<strong>Objects:</strong> <br>
            An object in JavaScript is a self-contained set of related values and functions. <br><br>
            You can access the properties of an object using the dot notation. You can also access an object’s properties using bracket notation. <br>
            <br><br>
            The new Symbol date type can also be used as a computed property key:<br>
            <pre>
            <code>
            const name = Symbol('name');

            const supergirl = { [name]: 'Supergirl' };
            </code>
            </pre>

            Accessing with square bracket notation: <br>
            <pre>
            <code>
            supergirl[name];
            << 'Supergirl'
            </code>
            </pre>

            <br><br>

            Calling Methods:<br>
            <pre>
            <code>
            superman.fly()
            << 'Up, up and away!'

            superman['fly']()
            << 'Up, up and away!'
            </code>
            </pre>

            <br>
            Checking if Properties or Methods Exist: <br>
            <pre>
            <code>
            'city' in superman;
            << false
            </code>
            </pre>

            <br>
            Removing Properties:<br>

            <pre>
            <code>
            delete superman.fly
            << true
            </code>
            </pre> 

            An important concept to get your head around is that objects are assigned by reference.
            <br><br>
            The parse() method takes a string of data in JSON format and returns a JavaScript object.<br>
            The stringify() method does the opposite, taking a JavaScript object and returning a string of JSON data. <br>

            <br><br>
            Math: <br>
            The Math.cbrt() method was introduced in ES6, which returns the cube root of numbers.<br>
            To generate a random number between 0 and another number, we can multiply the value by that number. 
            <br><br>
            Regular expresion: <br>
            <pre>
            <code>
            const pattern = /[a-zA-Z]+ing$/;
            </code>
            </pre>
            Methods: test, exec <br><br>

            special characters: <br>
            
            <matches any character, except line breaks> <br>

            \w matches any word character, and is equivalent to [A-Za-z0-9_] <br>

            \W matches any non-word character, and is equivalent to [\^A-Za-z0-9_] <br>

            \d matches any digit character, and is equivalent to [0-9] <br>

            \D matches any non-digit character, and is equivalent to [^0-9] <br>

            \s matches any whitespace character, and is equivalent to [ \t\r\n\f] <br>

            \S matches any non-whitespace character, and is equivalent to [^ \t\r\n\f] <br>

            <br>
            ? makes the preceding token in the regular expression optional <br>

            * matches one or more occurrences of the preceding token <br>

            + matches one or more occurrences of the preceding token <br>

            {n} matches n occurrences of the preceding token <br>

            {n,} matches at least n occurrences of the pattern <br>

            {,m} matches at most m occurrences of the preceding token <br>

            {n,m} matches at least n and at most m occurrences of the preceding token <br>

            ^ marks the position immediately before the first character in the string <br>

            $ marks the position immediately after the last character in the string <br>
            
            br>           
        `
        }, 
        {
          label: `
          <strong>The Document Object Model</strong>
          <br>
          The Document Object Model (DOM) allows you to access elements of a web page and enable interaction with the page by adding and removing elements, changing the order, content and attributes of elements, and even altering how they are styled.
          <br>
          <br>
          The replaceChild() method can be used to replace one node with another.
          <br>
          Any CSS property names that are separated by dashes must be written in camelCase notation
          `

        },
        {
          label: `
          <strong>Events</strong><br>
          Events are another part of the DOM and they are what provides the link between the web page and user interactions. Every time a user interacts with a web page, such as clicking on a link, pressing a key, or moving a mouse, an event occurs that our program can detect and then respond to.
          <br>
          They are like setting a notification to alert you when something happens. Instead of the program having to constantly check to see if an event has occurred, the event listener will let it know when the event happens, and the program can then respond appropriately. This allows the program to continue with other tasks while it waits for the event to happen.
         <br>
         The following code can be used to attach an event listener to the document that fires when the user clicks anywhere on the page:
         <br>
         <pre>
         <code>
         document.body.addEventListener("click", doSomething);
         </code>
         </pre>

         The event target<br>
         The target property returns a reference to the node that fired the event.<br>
        <pre>
       <code>
       function doSomething(event){
        console.log(event.target);
        }

        << <p id='click'>Click On Me</p>
       </code> 
      </pre>
      

      Key Events: <br>
      Pressing the modifier keys such as Shift, Ctrl, Alt and meta (Cmd on Mac) will fire the keydown and keyup events, but not the keypress event as they don't produce any characters on the screen.
      <br>
        
      Removing Event Listener: <br>

      An event listener can be removed using the removeEventListener() method.<br>

      <pre>
      <code>
      const onceParagraph = document.getElementById('once');
      onceParagraph.addEventListener('click', remove);

      function remove(event) {
          console.log('Enjoy this while it lasts!');
          onceParagraph.style.backgroundColor = 'pink';
          onceParagraph.removeEventListener('click',remove);
      }
      </code>
      </pre>
      
      Event Delegation: <br>
      Event delegation can be used to attach an event listener to a parent element in order to capture events that are triggered by its child elements.
      <br>
      <pre>
      <code>
      ulElement.addEventListener('click',highlight);
      </code> 
      </pre>

      Now clicking on any list item will highlight that list item as if it was the target of the click event.
      <br>
      This is a useful method if you are adding extra list elements to the DOM dynamically. Any new list elements that are a child of the <ul> element will automatically inherit this event listener, saving you from having to add an event listener every time a new list item is added.
      
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