function main() {
    const exercisesNotes = [
        // { label: "Story Editor: Using Local Storage", url: "./story_editor.html" },
        {
            label: `<h3>Further Functions</h3>
            <p>In JavaScript, functions are first-class objects, which means they can 
            be passed around in the same way as every other value.</p>

            <h4>Function Properties and Methods</h4>
            <p>
            The fact that functions are first-class objects means they can have 
            properties and methods themselves. For example, all functions have a 
            length property that returns the number of parameters the function has.
            </p>

            <h4>Call and Apply Methods</h4>
            <p>
            The call() method can be used to set the value of this inside a function to an 
            object that is provided as the first argument.

            In the following example, the sayHello() function refers to an unspecific object 
            called this that has a property called name:
            </p>

            <pre>
            <code>
            function sayHello(){
                return \`Hello, my name is \${this.name}\`;
            }
            </code>
            </pre>

            <p>
            We can create some objects that have a name property, then use the call() method 
            to invoke the sayHello() function, providing each object as an argument. 
            This will then take the value of this in the function:
            </p>

            <pre>
            <code>
            const clark = { name: 'Clark' };
            const bruce = { name: 'Bruce' };
            
            sayHello.call(clark);
            << 'Hello, my name is Clark'
            
            sayHello.call(bruce);
            << 'Hello, my name is Bruce'
            </code>
            </pre>


            <p>
            If the function that’s called requires any parameters, these need to be provided 
            as arguments after the first argument, which is always the value of this. 
            For example, let's update the sayHello() function to give a more generalized 
            greeting that’s provided as an argument:
            </p>

            <pre>
            <code>
            function sayHello(greeting='Hello'){
                return \`\${ greeting }, my name is \${ this.name }\`;
            }
            
            sayHello.call(clark, 'How do you do');
            << 'How do you do, my name is Clark'
            
            sayHello.call(bruce);
            << 'Hello, my name is Bruce'
            </code>
            </pre>

            <p>
            If a function doesn’t refer to an object as this in its body, it can still be called 
            using the call() method, but you need provide null as its first argument. 
            For example, we could call the square() function using the call() method, like so:
            </p>

            <pre>
            <code>
            square.call(null, 4)
            << 16
            </code>
            </pre>

            <p>
            The <b>apply()</b> method works in the same way, except the arguments of the 
            function are provided as an array, even if there is only one argument:
            </p>

            <pre>
            <code>
            square.apply(null, [4])
            << 16
            </code>
            </pre>

            <p>
            This can be useful if the data you’re using as an argument is already in the 
            form of an array, although it's not really needed in ES6, as the spread operator 
            can be used to split an array of values into separate parameters.
            </p>

            <h4>Custom Properties</h4>
            <p>
            There is nothing to stop you adding your own properties to functions in the same 
            way that you can add properties to any object in JavaScript. For example, you 
            could add a description property to a function that describes what it does:

            <pre>
            <code>
            square.description = 'Squares a number that is provided as an argument'
            << 'Squares a number that is provided as an argument'
            </code>
            </pre>
            </p>


            <h4>Memoization</h4>
            <p>
            If a function takes some time to compute a return value, we can save the result in a cache property. 
            Then if the same argument is used again later, we can return the value from the cache, rather 
            than having to compute the result again. For example, say squaring a number was an expensive 
            computational operation that took a long time. We could rewrite the square() function so 
            it saved each result in a cache object that is a property of the function:

            <pre>
            <code>
            function square(x){
                square.cache = square.cache || {};
                if (!square.cache[x]) {
                    square.cache[x] = x*x;
                }
                return square.cache[x]
            }
            </code>
            </pre>

            If we try calling the function a few times, we can see that the cache object stores the results:

            <pre>
            <code>
            square(3);
            << 9

            square(-11);
            << 121

            square.cache;
            << {"3": 9, "-11": 121}
            </code>
            </pre>
            </p>
            
            <br>

            <h3>Immediately Invoked Function Expressions</h3>
            <p>
            An Immediately Invoked Function Expression – or IIFE – (pronounced 'iffy') is an 
            anonymous function that, as the name suggests, is invoked as soon as it’s defined.

            <pre>
            <code>
            (function(){
                const temp = 'World';
                console.log(\`Hello \${temp}\`);
                })();
                << 'Hello World'
            </code>
            </pre>
            </p>

            <h4>Temporary Variables</h4>
            <p>
            There is no way to remove a variable from a scope once it’s been declared. 
            If a variable is only required temporarily, it may cause confusion if it’s 
            still available later in the code. Even worse, the name of the variable may 
            clash with another piece of code (an external JavaScript library, for example) 
            resulting in errors. Placing any code that uses the temporary variable inside 
            an IIFE will ensure it’s only available while the IIFE is invoked, then it will disappear.
            <br>
            Swap the value of two global variables, a and b:

            <pre>
            <code>
            let a = 1;
            let b = 2;

            (()=>{
                const temp = a;
                a = b;
                b = temp;
            })();

            a;
            << 2

            b;
            << 1

            console.log(temp);
            << Error: "temp is not defined"
            </code>
            </pre>
            </p>

            <h4>Initialization Code</h4>
            <p>
            An IIFE can be used to set up any initialization code that there’ll be no 
            need for again. Because the code is only run once, there’s no need to create any 
            reusable, named functions, and all the variables will also be temporary. 
            An IIFE will be invoked once, and can set up any variables, objects and event 
            handlers when the page loads.

            <pre>
            <code>
            (function() {
                const name = 'Peter Parker'; // This might be obtained from a cookie in reality
                const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
                const date = new Date(),today = days[date.getDay()];
                console.log(\`Welcome back \${name}. Today is \${today}\`);
            
            })();
            << 'Welcome back Peter Parker. Today is Tuesday'
            </code>
            </pre>

            The same result can be achieved in ES6 by simply placing the code inside a block.
            <pre>
            <code>
            {
                const name = 'Peter Parker'; // This might be obtained from a cookie in reality
                const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
                const date = new Date(),today = days[date.getDay()];
                console.log(\`Welcome back \${name}. Today is \${today}\`);
            }
            << 'Welcome back Peter Parker. Today is Tuesday'
            </code>
            </pre>
            </p>


            <h4>Creating Self-contained Code Blocks</h4>
            <p>
            An IIFE can be used to enclose a block of code inside its own private scope so it doesn’t 
            interfere with any other part of the program. Using IIFEs in this way means code can 
            be added or removed separately.

            <pre>
            <code>
            (function() {
                // block A
                const name = 'Block A';
                console.log(\`Hello from \${name}\`);
                }());
            
                (function() {
                // block B
                const name = 'Block B';
                console.log(\`Hello from \${name}\`);
            }());
            
            <<  Hello from Block A
                Hello from Block B
            </code>
            </pre>

            This can be achieved in ES6 by simply placing the different parts of code into blocks
            </p>

            <h3>Functions that Define and Rewrite Themselves</h3>
            <p>
            The dynamic nature of JavaScript means that a function is able to not only call itself, 
            but define itself, and even redefine itself. This is done by assigning an anonymous 
            function to a variable that has the same name as the function.

            <pre>
            <code>
            function party(){
                console.log('Wow this is amazing!');
                party = function(){
                    console.log('Been there, got the T-Shirt');
                }
            }
            </code>
            </pre>

            Every time the function is called after the first time, it will log the message
            'Been there, got the T-Shirt':

            <pre>
            <code>
            party();
            << 'Wow this is amazing!'

            party();
            << 'Been there, got the T-Shirt'

            party();
            << 'Been there, got the T-Shirt'
            </code>
            </pre>

            If the function is also assigned to another variable, this variable will maintain the 
            original function definition and not be rewritten.

            <pre>
            <code>
            function party(){
                console.log('Wow this is amazing!');
                party = function(){
                    console.log('Been there, got the T-Shirt');
                }
            }
            
            const beachParty = party; // note that the party function has not been invoked
            
            beachParty(); // the party() function has now been redefined, even though it hasn't been called explicitly
            << 'Wow this is amazing!'
            
            party(); 
            << 'Been there, got the T-Shirt'
            
            beachParty(); // but this function hasn't been redefined
            << 'Wow this is amazing!'
            
            beachParty(); // no matter how many times this is called it will remain the same
            << 'Wow this is amazing!'
            </code>
            </pre>
            </p>


            <h4>Init-Time Branching</h4>
            <p>
            This technique can be used with the feature detection to create functions 
            that rewrite themselves, known as init-time branching. 
            This enables the functions to work more effectively in the browser, and avoid checking 
            for features every time they’re invoked.
            <br>
            Let’s take the example of our fictional unicorn object that’s yet to have full support in all browsers. 
            Now we can go one step further: we can define a function based on whether certain methods are 
            supported. This means we only need to check for support the first time the function is called:

            <pre>
            <code>
            function ride(){
                if (window.unicorn) { 
                    ride = function(){
                    // some code that uses the brand new and sparkly unicorn methods
                    return 'Riding on a unicorn is the best!';
                    }
                } else {
                    ride = function(){
                    // some code that uses the older pony methods
                    return 'Riding on a pony is still pretty good';
                    }
                }
                return ride();
            }
            </code>
            </pre>

            After we’ve checked whether the window.unicorn object exists, we’ve rewritten the ride() function 
            according to the outcome. 
            <pre>
            <code>
            ride(); // the function rewrites itself, then calls itself
            << 'Riding on a pony is still pretty good'
            </code>
            </pre>

            This can be a useful pattern to initialize functions the first time they’re called, 
            optimizing them for the browser being used.
            </p>
            <br>

            <h3>Recursive Functions</h3>
            <p>
            A recursive function is one that invokes itself until a certain condition is met. 
            It’s a useful tool to use when iterative processes are involved. A common example is a 
            function that calculates the factorial of a number:
            
            <pre>
            <code>
            function factorial(n) {
                if (n === 0) {
                    return 1;
                } else {
                    return n * factorial(n - 1);
                }
            }
            </code>
            </pre>
            </p>

            <br>

            <h3>Callbacks</h3>
            <p>
            They’re functions passed to other functions as arguments and then invoked inside the 
            function they are passed to.
            <br>
            Remember, though, that JavaScript is still single-threaded, so only one task can happen at once. 
            If an event only takes a small amount of time to happen, it will still have to wait until other 
            parts of the program have executed before the callback is invoked handing control back to the main program. 
            </p>

            <br>

            <h3>Promises</h3>
            <p>
            A promise represents the future result of an asynchronous operation. Promises don't do anything 
            that can't already be achieved using callbacks, but they help simplify the process, and avoid 
            the convoluted code that can result from using multiple callbacks.
            </p>

            <h4>The Promise Life Cycle</h4>
            <p>
            When a promise is created, it calls an asynchronous operation and is then said to be pending.
            At this stage, the promise is said to be unsettled. Once the operation has completed, the promise 
            is said to have been settled. A settled promise can result in two different outcomes:
            Resolved ― the asynchronous operation was completed successfully.
            Rejected ― the asynchronous operation didn’t work as expected, wasn't successfully completed 
            or resulted in an error.
            </p>

            <h4>Creating A Promise</h4>
            <p>
            A promise is created using a constructor function. This takes a function called an executor as 
            an argument. The executor initializes the promise and starts the asynchronous operation. 
            It also accepts two functions as arguments: the resolve() function is called if the operation 
            is successful, and the reject() function is called if the operation fails.
            
            <pre>
            <code>
            const promise = new Promise( (resolve, reject) => {
                // initialization code goes here
                if (success) {
                    resolve(value);
                } else {
                    reject(error);
                }
            });
            </code>
            </pre>
            </p>


            <h3>Async Functions</h3>
            <p>
            Async functions were added to the ES2017 specification. These functions are preceded by 
            the async keyword and allow you to write asynchronous code as if it was synchronous. 
            This is achieved by using the await operator before an asynchronous function. This will wrap 
            the return value of the function in a promise that can then be assigned to a variable. 
            The next line of code is not executed until the promise is resolved.

            <pre>
            <code>
            async function loadGame(userName) {

                try {
                    const user = await login(userName);
                    const info = await getPlayerInfo (user.id);
                    // load the game using the returned info
                }
            
                catch (error){
                    throw error;
                }
            }
            </code>
            </pre>
            </p>

            <h3>Closures</h3>
            <h4>Function Scope</h4>
            <p>
            A closure is a reference to a variable that was created inside the scope of another function, 
            but is then kept alive and used in another part of the program.
            
            <pre>
            <code>
            function outer() {
                const outside = 'Outside!';
                function inner() {
                    const inside = 'Inside!';
                    console.log(outside);
                    console.log(inside);
                }
                console.log(outside);
                inner();
            }
            </code>
            </pre>
            

            <pre>
            <code>
            << Outside!
            Inside!
            Outside!    
            </code>
            </pre>

            This means that whenever a function is defined inside another function, the inner function 
            will have access to any variables that are declared in the outer function's scope.
            </p>
            
            <h4>Returning Functions</h4>
            <p>
            A closure is formed when the inner function is returned by the outer function, maintaining 
            access to any variables declared inside the enclosing function.

            <pre>
            <code>
            function outer() {
                const outside = 'Outside!';
                function inner() {
                    const inside = 'Inside!';
                    console.log(outside);
                    console.log(inside);
                }
                return inner;
            }
            </code>
            </pre>

            <pre>
            <code>
            const closure = outer();
            </code>
            </pre>
            What makes this a closure is that it now has access to the variables created inside both the 
            outer() and inner() functions, as we can see when we invoke it:

            <pre>
            <code>
            closure();
            << Outside!
            Inside!
            </code>
            </pre>

            A closure doesn't just have access to the value of a variable, it can also change the value of 
            the variable long after the function in which it was originally declared has been invoked.
            </p>

            <p>
            Closures not only have access to variables declared in a parent function's scope, they can also 
            change the value of these variables. This allows us to do things like create a counter() function 
            like the one in the example below:

            <pre>
            function counter(start){
                let i = start;
                return function() {
                    return i++;
                }
            }
            </pre>

            We can create a counter by assigning the return value of the counter() function to a variable:

            <pre>
            <code>
            const count = counter(1);
            </code>
            </pre>

            The variable count now points to a function that has full access to the variable i that was created 
            in the scope of the counter() function. Every time we invoke the count() function, it will return 
            the value of i and then increment it by 1:

            <pre>
            <code>
            count();
            << 1
            count();
            << 2
            </code>
            </pre>
            </p>

            <br>

            <h3>Generators</h3>
            <p>
            ES6 introduced support for generators. These are special functions used to produce iterators 
            that maintain the state of a value.

            <pre>
            <code>
            function* fibonacci(a,b) {
                let [ prev,current ] = [ a,b ];
                while(true) {
                    [prev, current] = [current, prev + current];
                    yield current;
                }
            }
            </code>
            </pre>

            <pre>
            <code>
            const sequence = fibonacci(1,1);
            </code>
            </pre>

           <pre>
           <code>
           sequence.next();
            << 2

            sequence.next();
            << 3

            sequence.next();
            << 5
           </code>
           </pre> 

           It’s also possible to iterate over the generator to invoke it multiple times:
           <pre>
           <code>
           for (n of sequence) {
            // stop the sequence after it reaches 100
            if (n > 10) break;
            console.log(n);
        }
        
        << 8
        << 13
        << 21
        << 34
        << 55
        << 89
           </code>
           </pre>
            </p>
            `
    },
    {
        label: `
        <h3>Ajax</h3>
        <p>
        Ajax is a technique that allows web pages to communicate asynchronously with a server, and it 
        dynamically updates web pages without reloading. This enables data to be sent and received in 
        the background, as well as portions of a page to be updated in response to user events, while 
        the rest of the program continues to run.
        </p>

        <h4>The Fetch API</h4>
        <p>
        The Fetch API provides a global fetch() method that only has one mandatory argument, which is 
        the URL of the resource you wish to fetch. 

        <pre>
        <code>
        const url = 'https:example.com/data';

        fetch(url)
        .then((response) => {
            if(response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then( response => // do something with response )
        .catch( error => console.log('There was an error!') )
        </code>
        </pre>
        </p>
        
        <br>

        <h4>Creating Response Objects</h4>
        <p>
        Although most of the time you will be dealing with a response object that is returned from a 
        request you make, you can also create your own response objects using a constructor function:

        <pre>
        <code>
        const response = new Response( 'Hello!', {
            ok: true,
            status: 200,
            statusText: 'OK',
            type: 'cors',
            url: '/api'
        });
        </code>
        </pre>
        These can be useful to use if you are creating an API that needs to send a response, or if you 
        need to send a dummy response for testing purposes.
        </p>

        <h4>Request Interface</h4>
        <p>
        Request objects are created using the Request() constructor, and include the following properties:
        <ul>
        <li>
        url – The URL of the requested resource (the only property that is required).
        </li>

        <li>
        method – a string that specifies which HTTP method should be used for the request. By default, this is 'GET'.
        </li>

        <li>
        headers – This is a Headers object (see later section) that provides details of the request's headers.
        </li>

        <li>
        mode – Allows you to specify if CORS is used or not. CORS is enabled by default.
        </li>

        <li>
        cache – Allows you to specify how the request will use the browser's cache. For example, you can force it 
        to request a resource and update the cache with the result, or you can force it to only look in the 
        cache for the resource.
        </li>

        <li>
        credentials – Lets you specify if cookies should be allowed with the request.
        </li>

        <li>
        redirect – Specifies what to do if the response returns a redirect. There’s a choice of three values: 
        'follow' (the redirect is followed), 'error' (an error is thrown) or 'manual' (the user has to click
         on a link to follow the redirect).
        </li>
        </ul>

        A constructor function is used to create a new Request object. An example is shown below:
        
        <pre>
        <code>
        const request = new Request('https://example.com/data', {
            method: 'GET',
            mode: 'cors',
            redirect: 'follow',
            cache: 'no-cache'
        });
        </code>
        </pre>
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