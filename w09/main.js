function main() {
    const exercisesNotes = [
        // { label: "Story Editor: Using Local Storage", url: "./story_editor.html" },
        {
            label: `<h3>The Window Object</h3>

            <p>
            Every JavaScript environment has a global object. Any variables that are created in the global 
            scope are actually properties of this object, and any functions are methods of it. In a browser 
            environment the global object is the window object, which represents the browser window that 
            contains a web page.
            </p>

            <h4>The Browser Object Model</h4>
            <p>
            The Browser Object Model (or BOM for short) is a collection of properties and methods that contain 
            information about the browser and computer screen.
            </p>
            <p>
            There is no official standard for the BOM, although there are a number of properties and methods 
            that are supported by all the major browsers, making a sort of de facto standard. These properties 
            and methods are made available through the window object. Every browser window, tab, popup, frame, 
            and iframe has a window object.
            </p>

            <p>
            If you don’t know the name of the global object, you can also refer to it using the keyword this 
            in the global scope. The following code provides a quick way of assigning the variable global to 
            the global object:
            <pre>
            <code>
            // from within the global scope
            const global = this;
            </code>
            </pre>
            </p>

            <h4>Going Global</h4>
            <p>
            Global variables are variables that are created without using the const, let or var keywords. 
            Global variables can be accessed in all parts of the program.
            </p>

            <p>
            Global variables are actual properties of a global object. In a browser environment, the global 
            object is the window object. This means that any global variable created is actually a property 
            of the window object, as can be seen in the example below:

            <pre>
            <code>
            x = 6;  // global variable created
            << 6

            window.x // same variable can be accessed as a property of the window object
            << 6

            // both variables are exactly the same
            window.x === x;
            << true
            </code>
            </pre>
            </p>            
            
           
            <h4>Dialogs</h4>
            <p>
            Functions that produced dialogs in the browsers: alert(), confirm() and prompt(). These are not 
            part of the ECMAScript standard, although all major browsers support them as methods of the window 
            object.
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



            <h4>Browser Information</h4>

            <h5>Which Browser?</h5>
            <p>
            The window object has a navigator property that returns a reference to the Navigator object. 
            The Navigator object contains information about the browser being used. <br>
            For example, if I run the following line of code, it shows that I am using Safari version 10 on Mac OS:

            <pre>
            <code>
            window.navigator.userAgent
            << "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8"
            </code>
            </pre>

            Don’t rely on this information though, as it can be modified by a user to masquerade as a different browser. 
            </p>

            <h5>Location, Location, Location</h5>
            <p>
            The window.location property is an object that contains information about the URL of the current page.
            It contains a number of properties that provide information about different fragments of the URL.
            </p>

            <p>
            The href property returns the full URL as a string:
            <pre>
            <code>
            window.location.href 
            << "https://www.sitepoint.com/premium/books/javascript-novice-to-ninja"
            </code>
            </pre>
            </p>

            <p>
            This property (as well as most of the others in this section) is a read/write property, which 
            means it can also be changed by assignment. If this is done, the page will be reloaded using 
            the new property. For example, entering the following line into the browser console will redirect 
            the page to the SitePoint JavaScript channel:

            <pre>
            <code>
            window.location.href = 'https://www.sitepoint.com/javascript/'
            << "https://www.sitepoint.com/javascript/"
            </code>
            </pre>
            </p>

            <br>

           
            <p>
            The protocol property returns a string describing the protocol used (such as http, https, pop2, 
            ftp etc.). Note that there is a colon (:) at the end:

            <pre>
            <code>
            window.location.protocol 
            << "https:"
            </code>
            </pre>
            </p>

        
            
            <p>
            The host property returns a string describing the domain of the current URL and the port 
            number (this is often omitted if the default port 80 is used): 
            
            <pre>
            <code>
            window.location.host
            << "www.sitepoint.com"
            </code>
            </pre>
            </p>
           
            <p>
            The hostname property returns a string describing the domain of the current URL:

            <pre>
            <code>
            window.location.hostname
            << "www.sitepoint.com"
            </code>
            </pre>
            </p>

            <p>
            The port property returns a string describing the port number, although it will return an 
            empty string if the port is not explicitly stated in the URL:
            
            <pre>
            <code>
            window.location.port
            << ""
            </code>
            </pre>
            </p>

            <p>
            The pathname property returns a string of the path that follows the domain:

            <pre>
            <code>
            window.location.pathname
            << "/premium/books/javascript-novice-to-ninja"
            </code>
            </pre>

            </p>

          
            <p>
            The search property returns a string that starts with a “?” followed by the query string parameters. 
            It returns an empty string if there are no query string parameters. This is what I get when I search 
            for “JavaScript” on SitePoint:

            <pre>
            <code>
            window.location.search
            << "?q=javascript&limit=24&offset=0&page=1&
            content_types[]=All&slugs[]=all&states[]=available&order="
            </code>
            </pre>
            </p>

            
            <p>
            The hash property returns a string that starts with a “#” followed by the fragment identifier. 
            It returns an empty string if there is no fragment identifier:

            <pre>
            <code>
            window.location.hash
            << ""
            </code>
            </pre>
            </p>

            <p>
            The origin property returns a string that shows the protocol and domain where the current page 
            originated from. This property is read-only, so cannot be changed:

            <pre>
            <code>
            window.location.origin
            << "https://www.sitepoint.com"
            </code>
            </pre>
            </p>
            
            <br>


            <p>
            The window.location object also has the following methods:

            <ul>
            <li>
            The reload() method can be used to force a reload of the current page. If it’s given a parameter 
            of true, it will force the browser to reload the page from the server, instead of using a cached page.
            </li>

            <li>
            The assign() method can be used to load another resource from a URL provided as a parameter, 
            for example:
            <pre>
            <code>
            window.location.assign('https://www.sitepoint.com/')
            </code>
            </pre>
            </li>

            <li>
            The replace() method is almost the same as the assign() method, except the current page will not be 
            stored in the session history, so the user will be unable to navigate back to it using the back button.
            </li>

            <li>
            The toString() method returns a string containing the whole URL:
            <pre>
            <code>
            window.location.toString();
            << "https://www.sitepoint.com/javascript/"
            </code>
            </pre>
            </li>
            </ul>
            </p>


            <br>

            <h4>The Browser History</h4>
            <p>
            The window.history property can be used to access information about any previously visited pages 
            in the current browser session. Avoid confusing this with the new HTML5 History API. 

            The window.history.length property shows how many pages have been visited before arriving at the current page. <br>
            The window.history.go() method can be used to go to a specific page, where 0 is the current page:
            <pre>
            <code>
            window.history.go(1); // goes forward 1 page
            window.history.go(0); // reloads the current page
            window.history.go(-1); // goes back 1 page
            </code>
            </pre>
            </p>

            <p>
            There are also the window.history.forward() and window.history.back() methods that can be used to 
            navigate forwards and backwards by one page respectively, just like using the browser’s forward 
            and back buttons.
            </p>

            <h4>Controlling Windows</h4>
            <p>
            A new window can be opened using the window.open() method. This takes the URL of the page to be opened 
            as its first parameter, the window title as its second parameter, and a list of attributes as the 
            third parameter. This can also be assigned to a variable, so the window can then be referenced later 
            in the code:
            <pre>
            <code>
            const popup = window.open('https://sitepoint.com','
            SitePoint','width=400,height=400,resizable=yes');
            </code>
            </pre>            
            </p> 

            <p>
            The close() method can be used to close a window, assuming you have a reference to it:
            <pre>
            <code>
            popup.close();
            </code>
            </pre>
            </p>
            

            <p>
            It is also possible to move a window using the window.moveTo() method. This takes two parameters 
            that are the X and Y coordinates of the screen that the window is to be moved to:

            <pre>
            <code>
            window.moveTo(0,0); // will move the window to the top-left corner of the screen
            </code>
            </pre>
            </p>

            
            <p>
            You can resize a window using the window.resizeTo() method. This takes two parameters that 
            specify the width and height of the resized window’s dimensions:

            <pre>
            <code>
            window.resizeTo(600,400);
            </code>
            </pre>
            </p>
            

            <h4>Screen Information</h4>
            <p>
            The window.screen object contains information about the screen the browser is displayed on. 
            You can find out the height and width of the screen in pixels using the height and width properties
            respectively:
            <pre>
            <code>
            window.screen.height
            << 1024
            
            window.screen.width
            << 1280
            </code>
            </pre>
            </p>

            <p>
            The availHeight and availWidth can be used to find the height and width of the screen, excluding 
            any operating system menus:

            <pre>
            <code>
            window.screen.availWidth
            << 1280

            window.screen.availHeight
            << 995
            </code>
            </pre>

            </p>

            <p>
            The colorDepth property can be used to find the color bit depth of the user’s monitor, although 
            there are few use cases for doing this other than collecting user statistics:

            <pre>
            <code>
            window.screen.colorDepth;
            << 24
            </code>
            </pre>
            </p>

            <h5>More Useful on Mobile</h5>
            <p>
            The Screen object has more uses for mobile devices. It also allows you to do things like turn off 
            the device’s screen, detect a change in its orientation or lock it in a specific orientation.
            </p>

            <h4>The Document Object</h4>
            <p>
            Each window object contains a document object. This object has properties and methods that deal with 
            the page that has been loaded into the window. 
            </p>

            <h5>document.write()</h5>
            <p>
            The write() method simply writes a string of text to the page. If a page has already loaded, it will 
            completely replace the current document:
            
            <pre>
            <code>
            document.write('Hello, world!');
            </code>
            </pre>
            
            </p>

           
            <p>
            This would replace the whole document with the string Hello, world!. It is possible to include 
            HTML in the string and this will become part of the DOM tree. For example, the following piece of 
            code will create an &lt;h1&gt; tag node and a child text node:  
            
            <pre>
            <code>
            document.write('&lt;h1&gt;Hello, world!&lt;/h1&gt;');
            </code>
            </pre>

            The use of document.write() is heavily frowned upon as it can only be realistically used by mixing 
            JavaScript within an HTML document. 
            </p>

            <h4>Cookies</h4>
            <p>
            Cookies are small files that are saved locally on a user’s computer. A browser does not remember 
            anything from one request to another. So every time a user visits a page, nothing about any 
            previous visits is remembered. Cookies can be used to sidestep this problem by storing information 
            that can then be retrieved between requests.
            </p>

            <p>
            A restriction of cookies is that they can only be read by a web page from the same domain that 
            set them. Cookies are also limited to storing up to 4KB of data, although 20 cookies are allowed 
            per domain, which can add up to quite a lot of data.
            </p>

            <p>
            Cookies can be used for personalizing a user’s browsing experience, storing user preferences, 
            keeping track of user choices (such as a shopping cart), authentication and tracking users. 
            Their use for data storage is starting to be replaced in many cases by the new HTML5 
            localStorage API as it allows more data to be stored. Cookies are still useful for retaining 
            state information (such as if a user is logged in) because they’re passed between the client 
            and server on every HTTP request.
            </p>
            
            <p>
            Cookies take the form of a text file that contain a list of name/value pairs separated by semicolons. 
            For example, a cookie file might contain the following information:

            <pre>
            "name=Superman; hero=true; city=Metropolis"
            </pre>
            </p>

            <h5>Creating Cookies</h5>
            <p>
            To create a cookie, you assign it to JavaScript’s “cookie jar”, using the document.cookie property, like so:
            <pre>
            <code>
            document.cookie = 'name=Superman';
            << "name=Superman"
            </code>
            </pre>
            </p>

            <p>
            The document.cookie property acts like a special type of string. Assigning another cookie to it 
            won’t overwrite the entire property, it will just append it to the end of the string. 
            So we can add more cookies by assigning them to document.cookie:

            <pre>
            <code>
            document.cookie = 'hero=true';
            << "hero=true"

            document.cookie = 'city=Metropolis';
            << "city=Metropolis"
            </code>
            </pre>
            </p>


            <h5>Changing Cookie Values</h5>
            <p>
            A cookie’s value can be changed by reassigning it to document.cookie using the same name but a 
            different value. The following code will update the value of two of the cookies that we set in 
            the previous section:
            <pre>
            <code>
            document.cookie = 'name=Batman'
            << "name=Batman"
            document.cookie = 'city=Gotham'
            << "city=Gotham"
            </code>
            </pre>
            </p>


            <h5>Reading Cookies</h5>
            <p>
            To see the current contents of the cookie jar, simply enter document.cookie:
            <pre>
            <code>
            document.cookie:
            << "name=Batman; hero=true; city=Gotham"
            </code>
            </pre>
            </p>


            <p>
            We can use the split method to break the string into an array containing each name/value pair, 
            then use a for of loop to iterate through the array:

            <pre>
            <code>
            const cookies = document.cookie.split("; ");
            for (crumb of cookies){
                const [key,value] = crumb.split("=");
                console.log(\`The value of \${key} is \${value}\`);
            }
            << The value of name is Batman
            The value of hero is true
            The value of city is Gotham
            </code>
            </pre>
            </p>


            <h5>Cookie Expiry Dates</h5>
            <p>
            Cookies are session cookies by default. This means they are deleted once a browser session is 
            finished (when the user closes the browser tab or window). Cookies can be made persistent 
            ― that is, lasting beyond the browser session ― by adding "; expires=date" to the end of the 
            cookie when it’s set, where date is a date value in the UTC String 
            format Day, DD-Mon-YYYY HH:MM:SS GMT. The following example sets a cookie to expire in one day’s time:

            <pre>
            <code>
            const expiryDate = new Date(); 
            const tomorrow = expiryDate.getTime() + 1000 * 60 * 60 * 24;
            expiryDate.setTime(tomorrow);

            document.cookie = \`name=Batman; expires=\${ expiryDate.toUTCString()}\`;
            </code>
            </pre>
            </p>

            <p>
            An alternative is to set the max-age value. This takes a value in seconds, but it wasn’t 
            supported in Internet Explorer before version 10:

            <pre>
            <code>
            document.cookie = 'name=Batman; max-age=86400' // 86400 secs = 1 day
            </code>
            </pre>
            </p>

            <h4 style="color: red;">Don’t Rely On Cookie Expiry</h4>
            <p>
            Applications that contain sensitive information shouldn’t rely on cookies expiring using 
            these methods. Browsers can sometimes hold on to information stored in a cookie that should 
            have expired when the “session restore” feature is used after a crash.
            </p>

            <h4>The Path and Domain of Cookies</h4>
            <p>
            By default, cookies can only be read by pages inside the same directory and domain as the 
            file was set. This is for security reasons so that access to the cookie is limited.
            </p>

            <p>
            The path can be changed so that any page in the root directory can read the cookie. It’s done 
            by adding the string ; path=/ to the end of the cookie when it is set:
            
            <pre>
            <code>
            document.cookie = 'name=Batman; path=/'
            </code>
            </pre>
            </p>


            <p>
            It’s also possible to set the domain by adding "; domain=domainName" to the end of the cookie:

            <pre>
            <code>
            document.cookie = 'name=Batman; domain=sitepoint.com';
            </code>
            </pre>
            </p>

            <p>
            A cookie can only be read by the domain that created it anyway, but doing this will 
            allow all subdomains of sitepoint.com (such as javascript.sitepoint.com and books.sitepoint.com) 
            to read it.
            </p>

            <h4>Secure Cookies</h4>

            <p>
            Adding the string ; secure to the end of a cookie will ensure it’s only transmitted over a 
            secure HTTPS network:

            <pre>
            <code>
            document.cookie = 'name=Batman; secure';
            </code>
            </pre>
            </p>


            <h4>Deleting Cookies</h4>
            <p>
            To remove a cookie, you need to set it to expire at a time in the past:

            <pre>
            <code>
            document.cookie = 'name=Batman; expires=Thu, 01 Jan 1970 00:00:01 GMT';
            </code>
            </pre>

            If a cookie is a session cookie, it will expire when the tab or window is closed.
            </p>

            <br>

            <h3>Timing Functions</h3>

            <h4>setTimeout()</h4>

            <p>
            The window.setTimeout() method accepts a callback to a function as its first parameter and 
            a number of milliseconds as its second parameter. 

            <pre>
            <code>
            window.setTimeout( () => alert("Time's Up!"), 3000);
            << 4
            </code>
            </pre>
            </p>

            <p>
            Notice that the method returns an integer. This is an ID used to reference that particular timeout. 
            It can also cancel the timeout using the window.clearTimeout() method. 

            <pre>
            <code>
            window.setTimeout( () => alert("Time's Up!"), 3000);
            << 5
            </code>
            </pre>
            </p>

            <p>
            Now quickly enter the following code before the alert pops up, making sure that you enter 
            the number that was returned previously (it might not be 5 in your case!):

            <pre>
            <code>
            window.clearTimeout(5);
            << undefined
            </code>
            </pre>
            </p>

            <p>
            If you were quick enough, and used the correct ID, the alert was prevented from happening.
            </p>


            <h4>setInterval()</h4>
            <p>
            The window.setInterval() method works in a similar way to window.setTimeout(), except that it 
            will repeatedly invoke the callback function after every given number of milliseconds.
            </p>

            <p>
            The previous example used an anonymous function, but it is also possible to use a named function like so:
            <pre>
            <code>
            function chant(){ console.log('Beetlejuice'); }
            </code>
            </pre>
            </p>

            <p>
            Now we can set up the interval and assign it to a variable:

            <pre>
            <code>
            const summon = window.setInterval(chant,1000);
            << 6
            </code>
            </pre>
            </p>

            <p>
            This should show the message “Beetlejuice” in the console every second (1,000 milliseconds).
            </p>

            <p>
            To stop this, we can use the window.clearInterval() method and the variable repeat as an 
            argument (this is because the window.setInterval() method returns its ID, so this will be 
            assigned to the variable repeat):

            <pre>
            <code>
            
            window.clearInterval(summon);
            </code>
            </pre>
            </p>

            <h4 style="color:red;">Using the this Keyword</h4>

            <p>
            Be careful when using a method that uses the this keyword with either of these timing methods. 
            The binding of this is set to the window object, rather than the method’s object, so it can get 
            some unexpected results:

            <pre>
            <code>
            const person = {
                name: 'Superman',
                introduce() { 
                    console.log(\`Hi, I'm \${this.name}\`);
                }
            };
                            
            setTimeout(person.introduce, 50);
            << Hi, I'm
            </code>
            </pre>

            In the example above, the value of this.name is undefined because the code is looking 
            for a property of the window object called name, which doesn’t exist.
            </p>

            <h4>Animation</h4>
            <p>
            The setTimeOut() and setInterval() methods can be used to animate elements on a web page.

            <a href="./animation/animation.html">Animation example using setInterval</a>
            <br>
            This code receives a reference to our square div, then sets a variable called angle to 0. 
            We then use the setInterval() method to increase the value of angle by 2 (we also use the % operator 
                so that it resets to 0 at 360), then set the transform CSS3 property to rotate that number 
                of degrees. The second argument is 1000/60, which equates to a frame speed of 60 frames 
                per second. <br>

            The rotating square  will probably be quite slow and not very smooth. This was the only way 
            to achieve animation using JavaScript until the window.requestAnimationFrame() method was developed.
            </p>

            <h4>requestAnimationFrame</h4>
            <p>
            This method of the window object works in much the same way as the window.setInterval() method, 
            although it has a number of improvements to optimize its performance. These include making 
            the most of the browser’s built-in graphics-handling capabilities, and not running the 
            animation when the tab is inactive, resulting in a much smoother performance. It’s supported
             in all major browsers, including Internet Explorer from version 10 onwards.
            <br>

            <a href="./withRequestAnimationFrame/requestAnimation.html">Animation example using requestAnimationFrame</a>
            <br>
            To start the animation, we need to call the requestAnimationFrame() method, giving the rotate() 
            function as an argument. This will return a unique ID that can be employed to stop the animation 
            using the window.cancelAnimationFrame() method:
            <pre>
            <code>
            cancelAnimationFrame(id);
            </code>
            </pre>
            </p>
        `
        },

        {
            label: `
            <h3>HTML5 APIs</h3>
           
            <p>
            HTML5 is the latest version of the Hypertext Markup Language used to create web pages. 
            The latest iteration is HTML 5.1, which finally became a W3C recommendation in November 2016. 
            </p>
            

            <h4>The data- Attribute</h4>
            <p>
            The data- attribute is a way of embedding data in a web page using custom attributes that are 
            ignored by the browser. They’re also private to a page, so are not intended to be used by an 
            external service – their sole purpose is to be used by a JavaScript program.
            </p>

            <p>
            The names of these attributes can be decided by the developer, but they must use the following format:
            
            <ul>
            <li>
            Start with data-.
            </li>

            <li>
            Contain only lowercase letters, numbers, hyphens, dots, colons or underscores.
            </li>

            <li>
            Include an optional string value.
            </li>
            </ul>

            <pre>
            <code>
            data-powers = 'flight superSpeed'
            data-rating = '5' 
            data-dropdown 
            data-user = 'DAZ' 
            data-max-length = '32'
            </code>
            </pre>
            </p>

            <p>
            Each element has a dataset property that can be used to access any data- attributes it contains. 
            Here’s an example of some markup:

            <pre>
            <code>
            &lt;div id='hero' data-powers='flight superSpeed'&gt;
                Superman
            &lt;/div&gt;
            </code>
            </pre>

            The data-powers attribute can be accessed using the following code:
            <pre>
            <code>
            const superman = document.getElementById('hero');
            const powers = superman.dataset.powers;
            << 'flight superSpeed'
            </code>
            </pre>
            </p>

            <h4>HTML5 Web Storage</h4>
            <p>
            The Web Storage API provides a key-value store on the client’s computer that is similar to 
            using cookies but has fewer restrictions, more storage capacity, and is generally easier to use.
            </p>

            <p>
            Every time a value is saved to local storage, a storage event is fired. Note that this event is 
            only fired on any other windows or tabs from the same domain, and only if the value of the item 
            being saved changes. The event object sent by the event listener to the callback has a number of 
            properties that provide information about the updated item:

            <ul>
            <li>
            key: tells us the key of the item that changed
            </li>
            
            <li>
            newValue: tells us the new value to which it has been changed
            </li>

            <li>
            oldValue tells us the previous value before it was changed
            </li>

            <li>
            storageArea tells us if it is stored in local or session storage.
            </li>
            </ul>
            </p>

            <h4>Geolocation</h4>
            <p>
            The Geolocation API is used to obtain the geographical position of the device. This means it can 
            be used to find the user’s exact location, then link to nearby places or measure the speed at 
            which the user is moving. <br>
            
            If geolocation is available, it will be a property of the navigator object. 
            This property has a method called getCurrentPosition() that will return a position object to a 
            specified callback function, called youAreHere() in the example:

            <pre>
            <code>
            navigator.geolocation.getCurrentPosition(youAreHere);
            </code>
            </pre>

            <pre>
            <code>
            function youAreHere(position) {
                console.log(\`Latitude: \${position.coords.latitude}, Longitude: \${position.coords.longitude}\`); 
            }
            </code>
            </pre>
            </p>


            <h4>Websockets</h4>
            <p>
            As we saw in the last chapter, the main form of communication on the web has always been the 
            HTTP protocol. This uses a system of request and response to send data back and forth. 
            A problem with this method of communication is when you only get a response when a request 
            is sent. But what if the response comes later? For example: a chat app. <br>

            Websocket is a new protocol that allows two-way communication with a server – also known 
            as push messaging. This means that a connection is kept open and responses are ‘pushed’ to 
            the client as soon as they are received. <br>

            <a href="./socket/socket.html">Web socket example: echo</a>
            </p>

            <h4>Notifications</h4>
            <p>
            
            The Notification API allows you to show messages using the system's notifications. 
            This is usually a popup in the corner of the screen, but it changes depending on the 
            operating system. An advantage of using the system notification is that they will still 
            be displayed even if the web page that calls them isn't the current tab.
            </p> 

            <p>
            Before you can send notifications, you need to get permission granted by the user. 
            This can be achieved using the requestPermission() method of a Notification global object.
            
            <pre>
            <code>
            if(window.Notification) {
                Notification.requestPermission();
            }
            </code>
            </pre>
            </p>

            <p>
            This returns a promise with the permission property of the Notification 
            object set to either 'granted' or 'denied'. If it’s set to granted, you 
            can create a new notification using a constructor function, like so:

            <pre>
            <code>
            if(window.Notification) {
                Notification.requestPermission()
                .then((permission) => {
                    if(Notification.permission === 'granted') {
                    new Notification('Hello JavaScript!');
                    }
                });
            }
            </code>
            </pre>
            </p>

            <p>
            The constructor:

            <pre>
            <code>
            const notification = new Notification('JavaScript: Novice to Ninja',{
                body: 'The new book from SitePoint',
                icon: 'sitepointlogo.png'
            });
            </code>
            </pre>
            </p>

            <p>
            Depending on your browser and operating system, some notifications close automatically 
            after a short period of time, and some will stay on the screen until the user clicks on them. 
            You can close the notification programmatically using the close() method:

            <pre>
            <code>
            notification.close();
            </code>
            </pre>
            </p>
            
            <p>
            The notification instance has a number of events that it can react to, including click 
            (when a user clicks on it), show (when the notification appears) and close 
            (when the notification is closed).
            </p>

            <p>
            For example, you could open a new window when the user clicked on the notification using the 
            following code:

            <pre>
            <code>
            notification.addEventListener('click', () => {
                window.open('https://sitepoint.com')
                }, false);
            </code>
            </pre>
            </p>

            <h4>Multimedia</h4>
            <p>
            HTML5 introduced the <audio> and <video> tags used to insert audio and video clips into a web page. 
            It also introduced a Media API for controlling the playback of the clips using JavaScript.   
            </p>

            <p>
            An audio clip can be inserted into a page with the <audio> tag, using the src attribute to 
            point to the audio file:

            <pre>
            <code>
            &lt;audio src='/song.mp3' controls&gt;
            Your browser does not support the audio element.
            &lt;/audio&gt;
            </code>
            </pre>
            </p>

            <p>
            A video clip can be inserted with the &lt;video&gt; tag, using the src attribute to point to the movie file:
            <pre>
            <code>
            &lt;video src='http://movie.mp4' controls&gt;
            Your browser does not support the video element.
            &lt;/video&gt;
            </code>
            </pre>
            </p>

            <p>
            <pre>
            <code>
            const video = document.getElementsByTagName('video')[0];
            </code>
            </pre>

            The play() method will start the clip playing from its current position:
            <pre>
            <code>
            video.play();
            </code>
            </pre>    
            </p>

            <p>
            The pause() method will pause the clip at its current position:

            <pre>
            <code>
            video.pause();
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