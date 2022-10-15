function main(){
    const exercisesNotes = [
        // { label: "Story Editor: Using Local Storage", url: "./story_editor.html" },
        {
            label: `<h3>Testing and Debugging</h3>

            <h3>Errors, Exceptions, and Warnings</h3>
            <ul>
            <li>System error ― there’s a problem with the system or external devices with which the program is interacting.</li>
            <li>Programmer error ― the program contains incorrect syntax or faulty logic; it could even be as simple as a typo.</li>
            <li>User error ― the user has entered data incorrectly, which the program is unable to handle.</li>
            </ul>
            
            <h3>Exceptions</h3>
            <p>An exception is an error that produces a return value that can then be used by the program to deal with the error.</p>

            <h3>Warnings</h3>
            <p>
            A warning can occur if there’s an error in the code that isn't enough to cause the program to crash. 
            This means the program will continue to run after a warning. This might sound good, 
            but it can be problematic, since the issue that produced the warning may cause the program 
            to continue running incorrectly.
            </p>

            <p>
            When a runtime error occurs in the browser, the HTML will still appear, 
            but the JavaScript code will stop working in the background, which isn’t 
            always obvious at first. If a warning occurs, the JavaScript will continue 
            to run (although possibly incorrectly).
            </p>

            <h3>Strict Mode</h3>
            <p>
            strict mode produces more exceptions and warnings and prohibits the use of some deprecated features. 
            Its use is recommended.
            Strict mode simply requires the following string to be added to the first line of a JavaScript file:
            <pre>
            <code>
            'use strict';
            </code>
            </pre>
            </p>

            <p><i>the recommended way to invoke strict mode is to place all your code into a self-invoking function</i></p>
            <pre>
            (function() {
              'use strict';
          
              // All your code would go inside this function
          
          }());
            </pre>

            <p>
            Placing 'use strict' at the beginning of a file will enforce strict mode on all the 
            JavaScript in the file. And if you’re using anybody else’s code, there’s no guarantee 
            they’ve coded in strict mode. This technique will ensure that only your code is forced 
            to use strict mode.
            </p>

          <p>
          <b>Note:</b>
          ES6 introduced JavaScript modules (covered later in chapter 15). 
          These are self-contained pieces of code that are in strict mode by default, so 
          the 'use strict' declaration is not required.
          </p>


          <h3>Linting Tools</h3>
          <p>
          Linting tools such as JS Lint,JS Hint, and ES Lint can be used to test the quality of JavaScript code, 
          beyond simply using strict mode. They are designed to highlight any sloppy programming practices 
          or syntax errors, and will complain if certain style conventions are not followed, such as how 
          code is indented. Linting tools are also useful for enforcing a programming style guide. 
          This is particularly useful when you are working in a team, as it ensures everybody follows 
          the same conventions.
          </p>


          <h3>Feature Detection</h3>
          <p>
          You can’t always rely on users having the most up-to-date browser, either.
          The recommended way to determine browser support for a feature is to use feature detection. 
          This is done using an if statement to check whether an object or method exists before trying 
          to actually call the method. 
          </p>

          <p>example using a new and fake API holoDeck:
          <pre>
          <code>
          if (window.holoDeck) {
            virtualReality.activate();
        }
          </code>
          </pre>

          This ensures that no error occurs if the browser doesn’t support the method, because 
          referencing a nonexistent object such as window.virtualReality will return undefined. 
          </p>


          <h3>Debugging Tools</h3>
          <p>
          Most modern browsers also have a debugging tool that allows you to set breakpoints 
          in your code that will pause it at certain points.
          One of the most useful commands is the debugger keyword. This will create a breakpoint in 
          your code that will pause the execution of the code and allow you to see where the 
          program is currently up to. 
          </p>

          Inserting the following code in the browser console will make open the browser's debugging tool:

          <pre>
          <code>
          function amIOldEnough(age){
            debugger;
                if (age < 12) {
                debugger;
                return 'No, sorry.';
                } else if (age < 18) {
                debugger;
                return 'Only if you are accompanied by an adult.';
                } else {
                debugger;
                return 'Yep, come on in!';
            }
        }
        
        amIOldEnough(16);
          </code>
          </pre>


          <h3>Error Objects</h3>
          <p>
          An error object can be created by the host environment when an exception occurs, or it 
          can be created in the code using a constructor function

          <pre>
          <code>
          const error = new Error();
          </code>
          </pre>

          This constructor function takes a parameter that’s used as the error message:
          <pre>
          <code>
          const error = new Error('Oops, something went wrong');
          </code>
          </pre>
          </p>


          <p>
          More error objects: <br>
          <ul>
          <li>EvalError is not used in the current ECMAScript specification and only retained for backwards 
          compatibility. It was used to identify errors when using the global eval() function.</li>

          <li>
          RangeError is thrown when a number is outside an allowable range of values.
          </li>

          <li>
          ReferenceError is thrown when a reference is made to an item that doesn’t exist. 
          For example, calling a function that hasn't been defined.
          </li>

          <li>
          SyntaxError is thrown when there’s an error in the code’s syntax.
          </li>

          <li>
          TypeError is thrown when there’s an error in the type of value used; for example, a 
          string is used when a number is expected.
          </li>

          <li>
          URIError is thrown when there’s a problem encoding or decoding the URI.
          </li> 

          <li>
          InternalError is a non-standard error that is thrown when an error occurs in the JavaScript engine. 
          A common cause of this too much recursion.
          </li>
          </ul>
          </p>

          <pre>
          <code>
          const error = new TypeError('You need to use numbers in this function');
          </code>
          </pre>


          <h3>Throwing Exceptions</h3>

          <p>
          throw your own exceptions using the throw statement. This will allow for any problems 
          in your code to be highlighted and dealt with, rather than lurk quietly in the background.
          The throw statement can be applied to any JavaScript expression, causing the execution of the program to stop.

          <pre>
          <code>
          throw new Error('Something has gone badly wrong!');
          </code>
          </pre>
          </p>

          <p>
          The imaginay numbers aren't supported in JS. A customized squareRoot function example:

          <pre>
          <code>
          function squareRoot(number) {
            'use strict';
            if (number < 0) {
                throw new RangeError('You can't find the square root of negative numbers')
            }
            return Math.sqrt(number);
        };
          </code>
          </pre>
          </p>


          <h3>Exception Handling</h3>

          <p>When an exception occurs, the program terminates with an error message. This is ideal in 
          development as it allows us to identify and fix errors. In production, however, it will appear 
          as if the program has crashed, which does not reflect well. 
          </p>


          <h3>try, catch, and finally</h3>

          <p>
          If we suspect a piece of code will result in an exception, we can wrap it in a try block. 
          This will run the code inside the block as normal, but if an exception occurs it will pass 
          the error object that is thrown onto a catch block. Here’s a simple example using our 
          squareRoot() function from earlier:

          <pre>
          <code>
          function imaginarySquareRoot(number) {
            'use strict';
            try {
                return String(squareRoot(number));
            } catch(error) {
                return squareRoot(-number)+'i';
            }
        }
          </code>
          </pre>

          Using it:
          <pre>
          <code>
          imaginarySquareRoot(-49) // no error message shown
          << '7i'
          </code>
          </pre>
          </p>

          <p>
          A finally block can be added after a catch block. This will always be executed after the 
          try or catch block, regardless of whether an exception occurred or not. It is useful if you 
          want some code to run in both cases. 
          </p>


          <br>
          <h3>Tests</h3>
          <p>
          Testing is an important part of programming that can often be overlooked. 
          Writing good tests means your code will be less brittle as it develops, 
          and any errors will be identified early on.
          </p>

          <h3>Test-driven Development</h3>
          <p>
          Test-driven development (TDD) is the process of writing tests before any actual code. 
          Obviously these tests will initially fail, because there is no code to test. 
          The next step is to write some code to make the tests pass. After this, the code is refactored 
          to make it faster, more readable, and remove any repetition. The code is continually tested at 
          each stage to make sure it continues to work. This process should be followed in small 
          piecemeal chunks every time a new feature is implemented, resulting in the following workflow:

          <ol>
          <li>Write tests (that initially fail)</li>
          <li>Write code to pass the tests</li>
          <li>Refactor the code</li>
          <li>Test refactored code</li>
          <li>Write more tests for new features</li>
          </ol>
          </p>

          <br>

          <h3>Testing Frameworks</h3>
          <p>Testing frameworks provide a structure to write meaningful tests and then run them.</p>

          <h3>Jest</h3>

          <p>
          Jest is a TDD framework, created by Facebook, that has gained a lot of popularity recently. 
          It makes it easy to create and run tests by providing helper methods for common test assertions.
          </p>

          <p>Installation</p>
          <pre>
          <code>
          npm install -g jest
          </code>
          </pre>



            <p>Create a file called squareRoot.test.js</p>
            <pre>
            <code>
            function squareRoot(number) {
              'use strict';
              if (number < 0) {
                  throw new RangeError("You can't find the square root of negative numbers")
              }
              return Math.sqrt(number);
          };
          
          test('square root of 4 is 2', () => {
          expect(squareRoot(4)).toBe(2);
          });
            </code>
            </pre>

            <p>To run this test, simply navigate to the folder that contains the file squareRoot.test.js and 
            enter the following command:

            <pre>
            <code>
            jest -c {}
            </code>
            </pre>
            </p>

            <p>
            This will run all files that end in 'test.js' within that folder. The -c {} flag at the 
            end is shorthand for ‘configuration’. We don't need any extra configuration, so we simply 
            pass it an empty object.
            </p>
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