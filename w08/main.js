function main() {
    const exercisesNotes = [
        // { label: "Story Editor: Using Local Storage", url: "./story_editor.html" },
        {
            label: `<h3>CSS3 Transforms and Transitions</h3>

            <h4>Transforms</h4>
            <p>
            The CSS3 transform property lets you translate, rotate, scale, and/or skew any element on the page.
            We can manipulate an element’s appearance using transform functions. The value of the transform 
            property is one or more transform functions (separated by spaces) that will be applied in the 
            order they’re provided.
            </p>

            <h5>Translation</h5>
            <p>
            Translation functions allow you to move elements left, right, up, or down. These functions are 
            similar to the behavior of position: relative; when declaring top and left, moving elements up 
            and down or left and right along the x and y axes. A translated element can only be moved 
            relative to its current position.
            </p>

            <p>
            The translate(x,y) function moves an element x from the left, and y from the top:

            <pre>
            <code>
            transform: translate(45px, -45px);
            </code>
            </pre>
            </p>

            <p>
            For older browser:
            <pre>
            <code>
            -webkit-transform: translate(45px,-45px); /* iOS8, Android 
            ↵4.4.3, BB10 */
            -ms-transform: translate(45px,-45px); /* IE9 only */
            transform: translate(45px,-45px);
            </code>
            </pre>
            </p>
            
            <p>
            Application:

            <pre>
            <code>
            &lt;h1&gt;Put your &lt;span&gt;dukes&lt;/span&gt; up, sire&lt;/h1&gt;
            </code>
            </pre>

            <pre>
            <code>
            .ad-ad2 h1:hover span {
                color: #484848;  
                transform: translateX(40px);
            }
            </code>
            </pre>

            <strong>Transforms don’t work on inline elements.</strong> Add display: inline-block; to our span:
            <pre>
            <code>
            .ad-ad2 h1 span {
                font-size: 30px;
                color: #999999;
                display: inline-block;
                …
            </code>
            </pre>
            </p>
                
            <br>
            <h5>Scaling</h5>
            <p>
            The scale(x,y) function scales an element by the defined factors horizontally then vertically. 
            If only one value is provided, it will be used for both the x and y values, growing or 
            shrinking your element or pseudo-element while maintaining the original aspect ratio. 
            For example, scale(1) would leave the element the same size, scale(2) would double 
            its proportions, scale(0.5) would halve them, and so on. Providing different values 
            will distort the element, as you’d expect:

            <pre>
            <code>
            transform: scale(1.5, 0.25);
            </code>
            </pre>

            As with translate, you can also use the scaleX(x) or scaleY(y) functions.<br>
            The element’s center will stay in the same place as its dimensions change.

            <pre>
            <code>
            .ad-ad2 h1:hover span {
                color: #484848;  
                transform: translateX(40px) scale(1.5);
            }
            </code>
            </pre>

            Note that you shouldn’t declare a new transform: because of the cascade, a second transform 
            would override the first. To declare multiple transformations, provide a space-separated 
            list of transform functions.
            </p>
            <p>
            It’s also worth remembering that scaling, like translation, has no impact on the document flow. 
            This means that if you scale inline-block elements, text around it will fail to accommodate it 
            with reflowing.
            </p>

            <h5>Rotation</h5>
            <p>
            The rotate() function rotates an element around the point of origin by a specified angle value. 
            As with scale, by default the point of origin is the element’s center. Generally, angles are 
            declared in degrees, with positive degrees moving clockwise and negative moving counterclockwise. 
            In addition to degrees, values can be provided in grads, radians, or turns, but we’ll just be 
            sticking with degrees.


            <pre>
            <code>
            .ad-ad2 h1:hover span {
                color: #484848;
                transform: rotate(10deg) translateX(40px) scale(1.5);
            }
            </code>
            </pre>

            We are declaring the rotation before the translate so that it’s applied first—remember that 
            transforms are applied in the order provided. In this case, the span will be rotated 10 degrees, 
            and then moved 40px along the rotated x axis.
            </p>

            <h5>Skew</h5>
            <p>
            The skew(x,y) function specifies a skew along the x and y axes. As you’d expect, the x specifies 
            the skew on the x axis, and the y specifies the skew on the y axis. If the second parameter 
            is omitted, the skew will only occur on the x axis:

            <pre>
            <code>
            transform: skew(15deg, 4deg);
            </code>
            </pre>
            </p>


            <h5>Changing the Origin of the Transform</h5>
            <p>
            You can control the origin from which your transforms are applied. This is done using the 
            transform-origin property. It has the same syntax as the background-position property, 
            and defaults to the center of the object (so that scales and rotations will be around the 
            center of the box by default).

            <pre>
            <code>
            transform-origin: 0 0;
            </code>
            </pre>
            </p>

            <br>
            <h3>Transitions</h3>
            <p>
            Transitions allow the values of CSS properties to change over time, essentially providing 
            simple animations. 
            </p>
            <p>
            We can animate any of the transforms we’ve just seen, so that our pages feel more dynamic.
            </p>
            <p>
            CSS transitions are declared along with the regular styles on an element. Whenever the 
            target properties change, the browser will apply the transition making the change gradual. 
            Often the change will be due to different styles applied to a hover state; however, transitions 
            will work equally well if the property in question is changed by adding a class, or otherwise 
            using JavaScript to change state. This is significant: rather than writing out an animation in 
            JavaScript, you can simply switch a property value and rely on the browser to do all the heavy lifting.
            </p>

            <p>
            The steps to create a simple transition using only CSS:
            <ol>

            <li>
            Declare the original state of the element in the default style declaration.
            </li>

            <li>
            Declare the final state of your transitioned element; for example, a :hover state.
            </li>  
            
            <li>
            Include the transition functions in your default style declaration using the transition properties, 
            including: transition-property, transition-duration, transition-timing-function, and transition-delay.
            </li>

            </ol>
            </p>

            <p>
            The important point to note is that the transition is declared in the default or originating state. 
            The -webkit- vendor prefix is still needed for older mobile devices, including iOS6.1, BlackBerry10, 
            Android 4.3 and UC Browser for Android. All other browsers, including IE10 and Android 4.4 browser 
            support the unprefixed syntax. <br>
            It is important to include a pre-state and a post-state. For example, to transition from rectangular 
            corners to rounded corners, set the original state to border-radius: 0;.
            <br>
            You can provide any number of CSS properties to the transition-property declaration, separated by 
            commas. Alternatively, you can use the keyword all to indicate that every supported property should
            be animated as it transitions.

            <pre>
            <code>
            .foo {
                transition-property: transform, color;
            }
            </code>
            </pre>
            In itself, the transition-property property has no effect; that’s because we still need to specify 
            the duration of the transition.
            <br><br>
            Note: Supporting Older Browsers
            <pre>
            <code>
            .ad-ad2 h1 span {
                -webkit-transition-property: -webkit-transform;
                transition-property: transform;
            }
            </code>
            </pre>
            </p>

            <h4>The transition-duration Property</h4>
            <p>
            The transition-duration property sets how long the transition will take: the duration of 
            time it takes to go from the default state to the transitioned state. You can specify this 
            either in seconds (s) or milliseconds (ms). We’d like our animation to be fairly quick, 
            so we’ll specify 0.2 seconds (0.2s), or 200 milliseconds (200ms):

            <pre>
            <code>
            transition-duration: 0.2s;
            </code>
            </pre>
            </p>

            <h4>The transition-timing-function Property</h4>
            <p>
            The transition-timing-function lets you control the pace of the transition in even more 
            granular detail. Do you want your animation to start off slow and become faster, start off 
            fast and end slower, advance at an even keel, or some other variation?
            </p>

            <p>
            The most common timing functions include the key terms ease, linear, ease-in, ease-out, 
            or ease-in-out. The default ease has a slow start, then it speeds up, and ends slowly. 
            ease-in-out is similar to ease, but accelerates more sharply at the beginning. linear 
            creates a transition that animates at a constant speed. ease-in creates a transition that 
            is slow to start but gains speed, then stops abruptly. The opposite, ease-out, starts at 
            full speed, then slows progressively as it reaches the conclusion of the transition. 
            </p>

            <p>
            With the steps function, you define the number of steps and the direction of either start or end, 
            where either the first step happens at the animation start, or the last step happens at the 
            animation end respectively. For example, steps(5, start) would jump through the equidistant steps 
            of 0%, 20%, 40%, 60%, and 80%, and steps(5, end) would jump throught the equidistant steps 
            of 20%, 40%, 60%, 80%, and 100%. 

            <pre>
            <code>
            transition-timing-function: ease-out;
            </code>
            </pre>
            </p>

            <br>

            <h4>The transition-delay Property</h4>
            <p>
            by using the transition-delay property, it’s possible to introduce a delay before the transition 
            begins. Normally a transition begins immediately, so the default is 0. Include the number of 
            milliseconds (ms) or seconds (s) to delay the transition. We don’t want our transition to start 
            immediately, because that might be a bad user experience if the user accidentally mouses through 
            our ad on the way from one part of the document to the next. A 50ms delay is enough time to wait 
            to be sure they are intentionally hovering over our advertisement:

            <pre>
            <code>
            -webkit-transition-delay: 50ms;
            transition-delay: 50ms;
            </code>
            </pre>
            </p>

            <h4>The transition Shorthand Property</h4>
            <p>
            The transition property is shorthand for the four transition properties just described.
            Let’s take another look at our transition so far:
            <pre>
            <code>
            .ad-ad2 h1 span {
                transition-property: transform; 
                transition-duration: 0.2s;  
                transition-timing-function: ease-out;
                transition-delay: 50ms;
            }
            </code>
            </pre>

            Now let’s combine all those values into a shorthand declaration:
            <pre>
            <code>
            .ad-ad2 h1 span {
                transition: transform 0.2s ease-out 50ms;
            }
            </code>
            </pre>

            Note that the properties in the shorthand syntax can be in any order, however, if a 
            delay is included, you must also include a duration, and the duration must precede the delay.
            </p> 

            <br>

            <h3>Animations</h3>
            <p>
            Animations allow you to control each step of an animation via keyframes. 
            A keyframe is a snapshot that defines a starting or end point of any smooth transition. 
            With CSS transitions, we’re essentially limited to defining a first and a last keyframe. 
            CSS animations allow us to add any number of keyframes in between, to guide our animation 
            in more complex ways.
            </p>

            <h4>Keyframes</h4>
            <p>
            To animate an element in CSS, you first create a named animation, then attach it to an element 
            in that element’s property declaration block. Animations in themselves don’t do anything; in 
            order to animate an element, you’ll need to associate the animation with that element.
            </p>

            <p>
            To create an animation, use the @keyframes rule for IE10+ and FF16+. Include @-webkit-keyframes 
            for all WebKit implementations followed by a name of your choosing, which will serve as the 
            identifier for the animation. Then, you can specify your keyframes.
            <br><br>
            For an animation called myAnimation, the @keyframes rule would look like this:
            <pre>
            <code>
            @-webkit-keyframes myAnimation { 
                /* put animation keyframes here */
            }
            @keyframes myAnimation { 
                /* put animation keyframes here */
            }
            </code>
            </pre>
            </p>

            <p>
            There are two keyterms― from and to ―which evaluate to 0% and 100% respectively. These values 
            specify how far along the animation each keyframe is located.

            <pre>
            <code>
            @keyframes moveRight { 
                from {
                transform: translateX(-50%);
                }
                to {
                transform: translateX(50%);
                }
            }
            
            @keyframes appearDisappear { 
                0%, 100% {
                opacity: 0;
                }
                20%, 80% {
                opacity: 1;
                }
            }
            
            @keyframes bgMove {
                100% {
                background-position: 120% 0;
                }
            }
            </code>
            </pre>

            The second animation is worth paying extra attention to: we’ve applied the same styles 
            to 0% and 100%, and to 20% and 80%. In this case, it means the element will start out i
            nvisible (opacity: 0;), fade in to visible by 20% of the way through the duration, 
            remain visible until 80%, then fade out.
            </p>

            <p>
            Once we have defined our keyframe animations, the next step is to apply it to one or more 
            elements using the various animation properties.
            </p>

            <h4>Animation Properties</h4>
            <p>
            The animation properties, remembering that you will need two declarations for each property as the -webkit- prefix is still needed in WebKit browsers
            </p>

            <h5>animation-name</h5>
            <p>
            This property is used to attach an animation (previously defined using the @keyframes syntax) to an element:
            <pre>
            <code>
            animation-name: appearDisappear;
            </code>
            </pre>
            </p>

            <h5>animation-duration</h5>
            <p>
            The animation-duration property defines the length of time (in seconds or milliseconds) an animation takes to complete one iteration (all the way through, from 0% to 100%):
            
            <pre>
            <code>
            animation-duration: 300ms;
            </code>
            </pre>
            
            </p>

            <h4>Optional properties</h4>
            <p>
            animation-timing-function: the animation-timing-function determines how the animation will progress over its duration. The options are the same as for transition-timing-function: ease, linear, ease-in, ease-out, ease-in-out
            <br><br>
            animation-iteration-count: The animation-iteration-count property lets you define how many times the animation will play through.The value is generally an integer, or the value infinite for endlessly repeating animations.
            <br><br>
            animation-direction: When the animation iterates, it normally goes from the 0% to the 100% keyframe, jumping back to the 0% when it starts a new iteration (if the animation-iteration-count is greater than 1). This is the default or normal value for animation-direction. You can use the animation-direction property to change this behavior.
            <br><br>
            animation-delay: The animation-delay property is used to define how many milliseconds or seconds to wait before the browser begins the animation
            <br><br>
            animation-fill-mode: The animation-fill-mode property defines what happens before the first animation iteration begins and after the last animation iteration concludes. 
            <br><br>
            animation-play-state: he animation-play-state property defines whether the animation is running or paused. A paused animation displays the current state of the animation statically. When a paused animation is resumed, it restarts from the current position. This provides a simple way to control CSS animations from within your CSS or with JavaScript.
            </p>

            <h4>The Shorthand animation Property</h4>

            <pre>
            <code>
            .verbose {
                animation-name: appearDisappear; 
                animation-duration: 300ms; 
                animation-timing-function: ease-in;
                animation-iteration-count: 1;
                animation-direction: alternate;
                animation-delay: 5s;
                animation-fill-mode: backwards;
                animation-play-state: running;
            }
            
            /* shorthand */
            .concise {
                animation: 300ms ease-in alternate 5s backwards appearDisappear;
            }
            </code>
            </pre>
        `
        },

        {
            label: `
            <h3>Canvas, SVG, and Drag and Drop</h3>
            <h4>Canvas</h4>
            <p>
            With HTML5’s Canvas API, we can draw anything we can imagine, all through JavaScript. 
            This can improve the performance of our websites by avoiding the need to download images off 
            the network. With canvas, we can draw shapes and lines, arcs and text, gradients and patterns. 
            In addition, canvas gives us the power to manipulate pixels in images and even video. 
            </p>
            

            <h5>Creating a canvas Element</h5>
            <p>
            <pre>
            <code>
            &lt;canvas id="myCanvas" class="myCanvas" width="200" height="200"&gt;
            Sorry! Your browser doesn’t support Canvas.
            &lt;/canvas&gt;
            </code>
            </pre>

            The text in between the canvas tags will only be shown if the canvas element is not supported by the visitor’s browser.
            <br>
            The canvas element takes both a width and height attribute, which must also be set.
            <br><br>
            Finally, let’s add a border to our canvas using some CSS to visually distinguish it on the page. 

            <pre>
            <code>
            .myCanvas {
                border: dotted 2px black;
            }   
            </code>
            </pre>
            </p>

            <h5>Drawing on the Canvas</h5>
            <p>
            All drawing on the canvas happens via the Canvas JavaScript API. 

            <pre>
            <code>
            var canvas = document.getElementById("myCanvas");     
            var context = canvas.getContext("2d");
            context.strokeStyle = "red";
            context.fillStyle = "rgba(0, 0, 255, 0.5)";
            </code>
            </pre>
            </p>

            <h5>Drawing a Rectangle to the Canvas</h5>
            <p>
            <pre>
            <code>
            var canvas = document.getElementById("myCanvas"); 
            var context = canvas.getContext("2d"); 
            context.strokeStyle = "red";
            context.fillStyle = "rgba(0, 0, 255, 0.5)";
            context.fillRect(10, 10, 100, 100);   
            context.strokeRect(10, 10, 100, 100);
            </code>
            </pre>
            </p>


            <h5>Variations on fillStyle</h5>
            <p>
            We create a CanvasPattern by calling the createPattern method. createPattern takes two parameters: the image to create the pattern with, and how that image should be repeated. 
            
            <pre>            
            <code>
            function drawPattern() {
                var canvas = document.getElementById("demo2");
                var context = canvas.getContext("2d");
                context.strokeStyle = "red";
                
                var img = new Image();
                img.src = "../images/bg-bike.png";
                img.onload = function() { 

                    var pattern = context.createPattern(img, "repeat"); 
                    context.fillStyle = pattern;                        
                    context.fillRect(10, 10, 100, 100);                  
                    context.strokeRect(10, 10, 100, 100); 
                };            
            }
            </code>
            </pre>
            </p>

            <h5>Drawing Other Shapes by Creating Paths</h5>
            <p>
            
            To draw more interesting shapes, we must first lay out the path of the shape. <br><br>

            Paths create a blueprint for your lines, arcs, and shapes, but paths are invisible until you give them a stroke!
            
            Let’s draw a circle 
            <pre>
            <code>
            function drawCircle(canvas) {
                var context = canvas.getContext("2d");
                context.beginPath();
                context.arc(100, 100, 50, 0, Math.PI*2, true);
                context.closePath();
                context.strokeStyle = "red";
                context.fillStyle = "blue";
                context.lineWidth = 3;
                context.fill(); 
                context.stroke(); 
            }
            </code>
            </pre>
            </p> 
            

            <br><br>

            <h3>SVG</h3>
            <p>
            SVG stands for Scalable Vector Graphics, a specific file format that allows you to describe vector graphics using XML
            </p>

            <h4>Drawing in SVG</h4>
            <p>

            <pre>
            <code>
            &lt;svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 400 400"&gt;
                &lt;desc&gt;Drawing a rectangle&lt;/desc&gt;
                &lt;rect x="10" y="10" width="100" height="100"  
                    fill="blue" stroke="red" stroke-width="3"  /&gt;  
    
            &lt;/svg&gt;
            
            </code>
            </pre>
            
            One open source tool that you can use to make SVG images is Inkscape, which is available for download at http://inkscape.org/.
            </p>

            <h5>Using the Raphaël Library</h5>
            <p> 
            <a href="http://raphaeljs.com/" target="_blank">Raphaël</a> is an open-source JavaScript library that makes drawing and animating with SVG much easier.
            </p>


            <br><br>

            <h3>Drag and Drop</h3>
            <p>
            There are several steps to adding drag and drop to your page:

            <ul>
            <li>
            Set the draggable attribute on any HTML elements you’d like to be draggable.
            </li>

            <li>
            Add an event listener for the dragstart event on any draggable HTML elements.
            </li>

            <li>
            Add an event listener for the dragover and drop events on any elements that you want to have accept dropped items.
            </li>
            </ul>


            <pre>
            <code>
            &lt;article id="ac3"&gt;
            &lt;h1&gt;Wai-Aria? HAHA!&lt;/h1&gt;
            &lt;h2 id="catHeading"&gt;Form Accessibility&lt;/h2&gt;
                    
            &lt;img data-src="https://learnable-static.s3.amazonaws.com/premium/reeedr/books/html5-css3-for-the-real-world-2nd-edition/images/cat.png" alt="WAI-ARIA Cat"&gt;
                    
            &lt;div class="content"&gt;
            &lt;p id="mouseContainer" class="mc"&gt;
                &lt;img data-src="https://learnable-static.s3.amazonaws.com/premium/reeedr/books/html5-css3-for-the-real-world-2nd-edition/images/computer-mouse-pic.svg" 
            ↵alt="mouse treat" id="mouse1" draggable="true"&gt;
                    &lt;img data-src="https://learnable-static.s3.amazonaws.com/premium/reeedr/books/html5-css3-for-the-real-world-2nd-edition/images/computer-mouse-pic.svg"  
            ↵alt="mouse treat" id="mouse2" draggable="true"&gt;
                    &lt;img data-src="https://learnable-static.s3.amazonaws.com/premium/reeedr/books/html5-css3-for-the-real-world-2nd-edition/images/computer-mouse-pic.svg" 
            ↵alt="mouse treat" id="mouse3" draggable="true"&gt;
                &lt;/p&gt;
            </code>
            </pre>
            

            <pre>
            <code>
            var mice = document.querySelectorAll("#mouseContainer img");
            var mouse = null;
            for (var i=0; i < mice.length; i++) {
                mouse = mice[i];
                mouse.addEventListener('dragstart', function (event) {
                    event.dataTransfer.setData("text/plain", this.id);
                });
                }
            </code>
            </pre>
            </p>

            <h5>Accepting Dropped Elements</h5>
            <p>
            <pre>
            <code>
            var cat = document.getElementById("cat");
            cat.addEventListener("dragover", function(event) {
                event.preventDefault();
            });
            </code>
            </pre>

            <pre>
            <code>
            cat.addEventListener("drop", function(event) {
                var mouseHash = {
                mouse1: 'NOMNOMNOM',
                mouse2: 'Meow',
                mouse3: 'Purrrrrr ...'
                };
            }
            </code>
            </pre>

            <pre>
            <code>
            var catHeading = document.getElementById('catHeading');
            var mouseID = event.originalEvent.dataTransfer.getData("text/plain");
            catHeading.innerHTML = mouseHash[mouseID];
            var mousey = document.getElementById(item);
            mousey.parentNode.removeChild(mousey);
            event.preventDefault();
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