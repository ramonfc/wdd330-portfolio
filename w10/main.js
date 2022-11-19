function main() {
    const exercisesNotes = [
        // { label: "Story Editor: Using Local Storage", url: "./story_editor.html" },
        {
            label: `<h3>Client-side form validation</h3>

            <p>
            The client-side form validation helps ensure data submitted matches the requirements set 
            forth in the various form controls before send to server.
            </p>

            <h4>Different types of client-side validation</h4>
            <p>
           <ul>
           <li> 
           <strong>Built-in form validation</strong> uses HTML form validation features. Built-in form validation 
           has better performance than JavaScript, but it is not as customizable as JavaScript validation.
           </li>

           <li> 
           <strong>JavaScript validation</strong> is coded using JavaScript. This validation is completely customizable, 
           but you need to create it all (or use a library).
           </li>
           </ul>
            </p>           

            <h4>Using built-in form validation</h4>
            <p>
            Validate most user data without relying on JavaScript. Validation attributes on form elements:
            <ul>
            <li>
            required: Specifies whether a form field needs to be filled in before the form can be submitted.
            </li>

            <li>
            minlength and maxlength: Specifies the minimum and maximum length of textual data (strings).
            </li>

            <li>
            min and max: Specifies the minimum and maximum values of numerical input types.
            </li>

            <li>
            type: Specifies whether the data needs to be a number, an email address, or some other 
            specific preset type.
            </li>

            <li>
            pattern: Specifies a regular expression that defines a pattern the entered data needs to follow.
            </li>
            </ul>
            </p>

            <p>
            When an element is valid, the following things are true:

            <ul>
            <li>
            The element matches the :valid CSS pseudo-class, which lets you apply a specific style to valid 
            elements.
            </li>

            <li>
            If the user tries to send the data, the browser will submit the form, provided there is nothing 
            else stopping it from doing so (e.g., JavaScript).
            </li>
            </ul>
            </p>             
           
            
            <p>
            When an element is invalid, the following things are true:

            <ul>
            <li>
            The element matches the :invalid CSS pseudo-class, and sometimes other UI pseudo-classes 
            (e.g., :out-of-range) depending on the error, which lets you apply a specific style to invalid 
            elements.
            </li>

            <li>
            If the user tries to send the data, the browser will block the form and display an error message.
            </li>
            </ul>
            </p>
            <p>
            It’s also worth remembering that scaling, like translation, has no impact on the document flow. 
            This means that if you scale inline-block elements, text around it will fail to accommodate it 
            with reflowing.
            </p>

            <p>
            Keep in mind that most browsers allow users to disable any dialogs from repeatedly appearing, 
            meaning they are not a feature to be relied upon.
            </p>

            <h4>Example</h4>            
            <p>        

            <pre>
            <code>
            &lt;form&gt;
            &lt;p&gt;
              &lt;fieldset&gt;
                &lt;legend&gt;Do you have a driver's license?&lt;span aria-label="required"&gt;*&lt;/span&gt;&lt;/legend&gt;
                &lt;!-- While only one radio button in a same-named group can be selected at a time,
                     and therefore only one radio button in a same-named group having the "required"
                     attribute suffices in making a selection a requirement --&gt;
                &lt;input type="radio" required name="driver" id="r1" value="yes"&gt;&lt;label for="r1"&gt;Yes&lt;/label&gt;
                &lt;input type="radio" required name="driver" id="r2" value="no"&gt;&lt;label for="r2"&gt;No&lt;/label&gt;
              &lt;/fieldset&gt;
            &lt;/p&gt;
            &lt;p&gt;
              &lt;label for="n1"&gt;How old are you?&lt;/label&gt;
              &lt;!-- The pattern attribute can act as a fallback for browsers which
                   don't implement the number input type but support the pattern attribute.
                   Please note that browsers that support the pattern attribute will make it
                   fail silently when used with a number field.
                   Its usage here acts only as a fallback --&gt;
              &lt;input type="number" min="12" max="120" step="1" id="n1" name="age"
                     pattern="\d+"&gt;
            &lt;/p&gt;
            &lt;p&gt;
              &lt;label for="t1"&gt;What's your favorite fruit?&lt;span aria-label="required"&gt;*&lt;/span&gt;&lt;/label&gt;
              &lt;input type="text" id="t1" name="fruit" list="l1" required
                     pattern="[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range"&gt;
              &lt;datalist id="l1"&gt;
                &lt;option&gt;Banana&lt;/option&gt;
                &lt;option&gt;Cherry&lt;/option&gt;
                &lt;option&gt;Apple&lt;/option&gt;
                &lt;option&gt;Strawberry&lt;/option&gt;
                &lt;option&gt;Lemon&lt;/option&gt;
                &lt;option&gt;Orange&lt;/option&gt;
              &lt;/datalist&gt;
            &lt;/p&gt;
            &lt;p&gt;
              &lt;label for="t2"&gt;What's your e-mail address?&lt;/label&gt;
              &lt;input type="email" id="t2" name="email"&gt;
            &lt;/p&gt;
            &lt;p&gt;
              &lt;label for="t3"&gt;Leave a short message&lt;/label&gt;
              &lt;textarea id="t3" name="msg" maxlength="140" rows="5"&gt;&lt;/textarea&gt;
            &lt;/p&gt;
            &lt;p&gt;
              &lt;button&gt;Submit&lt;/button&gt;
            &lt;/p&gt;
          &lt;/form&gt;
            </code>
            </pre>
            </p>

            
            <p>
            CSS:

            <pre>
            <code>
            form {
                font: 1em sans-serif;
                max-width: 320px;
              }
              
              p > label {
                display: block;
              }
              
              input[type="text"],
              input[type="email"],
              input[type="number"],
              textarea,
              fieldset {
                width: 100%;
                border: 1px solid #333;
                box-sizing: border-box;
              }
              
              input:invalid {
                box-shadow: 0 0 5px 1px red;
              }
              
              input:focus:invalid {
                box-shadow: none;
              }
            </code>
            </pre>
            </p>

            <p>
            See example: <a href="formInBuild/formInBuild.html" target="_blank">form 1</a>
            </p>
         
            <br>              

            <h4>Validating forms using JavaScript</h4>
            <p>
            You must use JavaScript if you want to take control over the look and feel of native error messages.
            </p>

           
            <h4>The Constraint Validation API</h4>
            <p>
            Most browsers support the Constraint Validation API, which consists of a set of methods and 
            properties available on the following form element DOM interfaces:

            <ul>
            <li>
            HTMLButtonElement (represents a &lt;button&gt; element)
            </li>

            <li>
            HTMLFieldSetElement (represents a &lt;fieldset&gt; element)
            </li>

            <li>
            HTMLInputElement (represents an &lt;input&gt; element)
            </li>

            <li>
            HTMLOutputElement (represents an &lt;output&gt; element)
            </li>

            <li>
            HTMLSelectElement (represents a &lt;select&gt; element)
            </li>

            <li>
            HTMLTextAreaElement (represents a &lt;textarea&gt; element)
            </li>
            </ul>
            </p> 

            <p>
            The Constraint validation API makes the following properties available on the above elements.

            <ul>
            <li>
            validationMessage: Returns a localized message describing the validation constraints that the 
            control doesn't satisfy (if any). If the control is not a candidate for constraint validation 
            (willValidate is false) or the element's value satisfies its constraints (is valid), this will 
            return an empty string.
            </li>

            <li>
            validity: Returns a ValidityState object that contains several properties describing the validity 
            state of the element.
            </li>

            <li>
            patternMismatch: Returns true if the value does not match the specified pattern, and false if it 
            does match. If true, the element matches the :invalid CSS pseudo-class.
            </li>

            <li>
            tooLong: Returns true if the value is longer than the maximum length specified by the maxlength 
            attribute, or false if it is shorter than or equal to the maximum. If true, the element matches 
            the :invalid CSS pseudo-class.
            </li>

            <li>
            tooShort: Returns true if the value is shorter than the minimum length specified by the minlength 
            attribute, or false if it is greater than or equal to the minimum. If true, the element matches 
            the :invalid CSS pseudo-class.
            </li>

            <li>
            rangeOverflow: Returns true if the value is greater than the maximum specified by the max attribute, 
            or false if it is less than or equal to the maximum. If true, the element matches the :invalid 
            and :out-of-range CSS pseudo-classes.
            </li>

            <li>
            rangeUnderflow: Returns true if the value is less than the minimum specified by the min attribute, 
            or false if it is greater than or equal to the minimum. If true, the element matches the :invalid 
            and :out-of-range CSS pseudo-classes.
            </li>

            <li>
            typeMismatch: Returns true if the value is not in the required syntax (when type is email or url), 
            or false if the syntax is correct. If true, the element matches the :invalid CSS pseudo-class.
            </li>

            <li>
            valid: Returns true if the element meets all its validation constraints, and is therefore 
            considered to be valid, or false if it fails any constraint. If true, the element matches 
            the :valid CSS pseudo-class; the :invalid CSS pseudo-class otherwise.
            </li>

            <li>
            valueMissing: Returns true if the element has a required attribute, but no value, or false 
            otherwise. If true, the element matches the :invalid CSS pseudo-class.
            </li>

            <li>
            willValidate: Returns true if the element will be validated when the form is submitted; false 
            otherwise.
            </li>
            </ul>
            </p>
            

            <p>
            The Constraint Validation API also makes the following methods available on the above elements 
            and the form element.

            <ul>
            <li>
            checkValidity(): Returns true if the element's value has no validity problems; false otherwise. 
            If the element is invalid, this method also fires an invalid event on the element.
            </li>

            <li>
            reportValidity(): Reports invalid field(s) using events. Useful in combination with preventDefault() 
            in an onSubmit event handler
            </li>

            <li>
            setCustomValidity(message): Adds a custom error message to the element; if you set a custom error 
            message, the element is considered to be invalid, and the specified error is displayed. 
            This lets you use JavaScript code to establish a validation failure other than those offered 
            by the standard HTML validation constraints. The message is shown to the user when reporting 
            the problem.
            </li>
            </ul>
            </p>

            <br>

            <h4>Example</h4>

            <p>
            HTML: <br>
            <pre>
            <code>
            &lt;form novalidate&gt;
            &lt;p&gt;
              &lt;label for="mail"&gt;
                &lt;span&gt;Please enter an email address:&lt;/span&gt;
                &lt;input type="email" id="mail" name="mail" required minlength="8" /&gt;
                &lt;span class="error" aria-live="polite"&gt;&lt;/span&gt;
              &lt;/label&gt;
            &lt;/p&gt;
            &lt;button&gt;Submit&lt;/button&gt;
          &lt;/form&gt;
            </code>
            </pre>

            CSS:<br>

              <pre>
              <code>
              
              body {
                font: 1em sans-serif;
                width: 200px;
                padding: 0;
                margin: 0 auto;
              }
              
              p * {
                display: block;
              }
              
              input[type="email"] {
                appearance: none;
              
                width: 100%;
                border: 1px solid #333;
                margin: 0;
              
                font-family: inherit;
                font-size: 90%;
              
                box-sizing: border-box;
              }
              
              /* This is our style for the invalid fields */
              input:invalid {
                border-color: #900;
                background-color: #fdd;
              }
              
              input:focus:invalid {
                outline: none;
              }
              
              /* This is the style of our error messages */
              .error {
                width: 100%;
                padding: 0;
              
                font-size: 80%;
                color: white;
                background-color: #900;
                border-radius: 0 0 5px 5px;
              
                box-sizing: border-box;
              }
              
              .error.active {
                padding: 0.3em;
              }
              </code>
              </pre>


              JS: <br>

              <pre>
              <code>
              // There are many ways to pick a DOM node; here we get the form itself and the email
              // input box, as well as the span element into which we will place the error message.
              const form = document.querySelector("form");
              const email = document.getElementById("mail");
              const emailError = document.querySelector("#mail + span.error");

              email.addEventListener("input", (event) => {
                // Each time the user types something, we check if the
                // form fields are valid.

                if (email.validity.valid) {
                  // In case there is an error message visible, if the field
                  // is valid, we remove the error message.
                  emailError.textContent = ""; // Reset the content of the message
                  emailError.className = "error"; // Reset the visual state of the message
                } else {
                  // If there is still an error, show the correct error
                  showError();
                }
              });

              form.addEventListener("submit", (event) => {
                // if the email field is valid, we let the form submit
                if (!email.validity.valid) {
                  // If it isn't, we display an appropriate error message
                  showError();
                  // Then we prevent the form from being sent by canceling the event
                  event.preventDefault();
                }
              });

              function showError() {
                if (email.validity.valueMissing) {
                  // If the field is empty,
                  // display the following error message.
                  emailError.textContent = "You need to enter an e-mail address.";
                } else if (email.validity.typeMismatch) {
                  // If the field doesn't contain an email address,
                  // display the following error message.
                  emailError.textContent = "Entered value needs to be an e-mail address.";
                } else if (email.validity.tooShort) {
                  // If the data is too short,
                  // display the following error message.
                  emailError.textContent = \`Email should be at least \${email.minLength} characters; you entered \${email.value.length}.\`;
                }

                // Set the styling appropriately
                emailError.className = "error active";
              }
              </code>
              </pre>
            </p>
              
          
            `
        },

        {

         label: 
         `
          <h3>Using the Fetch API</h3>
          <p>
          The Fetch API provides a JavaScript interface for accessing and manipulating parts of the protocol, 
          such as requests and responses. The simplest use of fetch() takes one argument — the path to the 
          resource you want to fetch — and does not directly return the JSON response body but instead returns 
          a promise that resolves with a Response object.
          </p>

          <p>
          A basic fetch request is really simple to set up. Have a look at the following code:

          <pre>
          <code>
          fetch('http://example.com/movies.json')
          .then((response) => response.json())
          .then((data) => console.log(data));
          </code>
          </pre>
          </p>


          <h4>Supplying request options</h4>

          <p>
          The fetch() method can optionally accept a second parameter, an init object that allows you to 
          control a number of different settings:

          <pre>
          <code>
          // Example POST method implementation:
          async function postData(url = '', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
          }

          postData('https://example.com/answer', { answer: 42 })
            .then((data) => {
              console.log(data); // JSON data parsed by \`data.json()\` call
            });
          </code>
          </pre>
          </p>

         <p>
         Note that mode: "no-cors" only allows a limited set of headers in the request:
         <ul>
         <li>
         Accept
         </li>

         <li>
         Accept-Language
         </li>

         <li>
         Content-Language
         </li>

         <li>
         Content-Type with a value of application/x-www-form-urlencoded, multipart/form-data, or text/plain
         </li>
         </ul>
         </p>
          

         <h4>Sending a request with credentials included</h4>
         <p>
         To cause browsers to send a request with credentials included on both same-origin and 
         cross-origin calls, add credentials: 'include' to the init object you pass to the fetch() method.

         <pre>
         <code>
         fetch('https://example.com', {
          credentials: 'include'
        }); 
         </code>
         </pre>
         </p>

         <p>
         Note: Access-Control-Allow-Origin is prohibited from using a wildcard for requests with 
         credentials: 'include'. In such cases, the exact origin must be provided; even if you are using a 
         CORS unblocker extension, the requests will still fail.
         </p>

         <h4>Uploading JSON data</h4>
         <pre>
         <code>
         const data = { username: 'example' };

        fetch('https://example.com/profile', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
         </code>
         </pre>

         <h4>Uploading a file</h4>
         <p>
         Files can be uploaded using an HTML &lt;input type="file" /&gt; input element, FormData() and fetch().
         
         <pre>
         <code>
         const formData = new FormData();
          const fileField = document.querySelector('input[type="file"]');

          formData.append('username', 'abc123');
          formData.append('avatar', fileField.files[0]);

          fetch('https://example.com/profile/avatar', {
            method: 'PUT',
            body: formData
          })
            .then((response) => response.json())
            .then((result) => {
              console.log('Success:', result);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
         </code>
         </pre>
         </p>


         <h4>Uploading multiple files</h4>
         <p>
         Files can be uploaded using an HTML &lt;input type="file" multiple /&gt; input element, FormData() and fetch().
         
         <pre>
         <code>
         const formData = new FormData();
          const photos = document.querySelector('input[type="file"][multiple]');

          formData.append('title', 'My Vegas Vacation');
          let i = 0;
          for (const photo of photos.files) {
            formData.append(\`photos_\${i}\`, photo);
            i++;
          }

          fetch('https://example.com/posts', {
            method: 'POST',
            body: formData,
          })
            .then((response) => response.json())
            .then((result) => {
              console.log('Success:', result);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
         </code>
         </pre>
         </p>


         <h4>Processing a text file line by line</h4>
         <p>
         The chunks that are read from a response are not broken neatly at line boundaries and are 
         Uint8Arrays, not strings. If you want to fetch a text file and process it line by line, 
         it is up to you to handle these complications. The following example shows one way to do 
         this by creating a line iterator (for simplicity, it assumes the text is UTF-8, and doesn't 
         handle fetch errors).

         <pre>
         <code>
         async function* makeTextFileLineIterator(fileURL) {
          const utf8Decoder = new TextDecoder('utf-8');
          const response = await fetch(fileURL);
          const reader = response.body.getReader();
          let { value: chunk, done: readerDone } = await reader.read();
          chunk = chunk ? utf8Decoder.decode(chunk) : '';
        
          const re = /\\n|\\r|\\r\\n/gm;
          let startIndex = 0;
          let result;
        
          while (true) {
            let result = re.exec(chunk);
            if (!result) {
              if (readerDone) break;
              let remainder = chunk.substr(startIndex);
              ({ value: chunk, done: readerDone } = await reader.read());
              chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : '');
              startIndex = re.lastIndex = 0;
              continue;
            }
            yield chunk.substring(startIndex, result.index);
            startIndex = re.lastIndex;
          }
        
          if (startIndex < chunk.length) {
            // Last line didn't end in a newline char
            yield chunk.substr(startIndex);
          }
        }
        
        async function run() {
          for await (const line of makeTextFileLineIterator(urlOfFile)) {
            processLine(line);
          }
        }
        
        run();
         </code>
         </pre>
         </p>


         <h4>Response objects</h4>

         <p>
         Response instances are returned when fetch() promises are resolved.
         The most common response properties you'll use are:

         <ul>
         <li>
         Response.status — An integer (default value 200) containing the response status code.
         </li>

         <li>
         Response.statusText — A string (default value ""), which corresponds to the HTTP status code message. 
         Note that HTTP/2 does not support status messages.
         </li>

         <li>
         Response.ok — seen in use above, this is a shorthand for checking that status is in the 
         range 200-299 inclusive. This returns a boolean value.
         </li>
         </ul>
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