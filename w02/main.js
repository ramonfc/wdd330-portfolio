function main() {
    const exercisesNotes = [
        // { label: "Quiz 1", url: "./q1.html" },
        {
            label: `Programming Basics: <br>
        Comments: You don't need to write an essay though, just enough so that it’s clear what the code is supposed to do. <br>
                
        Javascript Grammar: <br>
        It's better write each statement on a new line, terminated by semi-colon <br>
        Primitive data types: String, Symbol, Number, Boolean, Undefined, Null <br>
        
        Variables:<br>
        If the variable references a non-primitive data type, such as an array, function or object, then using const will not make it immutable. <br>
        Scope:<br>
        Using const and let to declare variables means they are block scoped, so their value only exists inside the block they are declared in.<br>
        If let or const are not used, the variable will have global scope and be available outside the block.<br>
        <br>
        The variables c and d are both referencing the same object:<br>
        <pre>
        <code>
        const c = { value: 1 };
        let d = c; // c.value = 1, d.value = 1
        d.value = 2; // c.value = 2, d.value = 2
        </code></pre>
        <br>
        ES6 also introduced the repeat() method that will repeat a string the stated number of times.<br><br>
        Symbols were introduced as a new primitive value in ES6. They can be used to create unique values, which helps to avoid any naming collisions.
        <br>
        <pre><code>const uniqueID = Symbol('this is a unique ID');</code></pre>
        <br>
        If a number starts with a 0x, it is considered to be in hexadecimal (base 16): 0xAF<br>
        ES6 now supports octal literals: If a number starts with a zero, followed by the letter o, then it is considered to be in octal (base 8) notation:0o47
        <br>
        If a number starts with a zero, followed by the letter b then it is considered to be in binary (base 2) notation: 0b1010
        <br>
        scientific notation: 1e6
        <br><br>
        <pre>
        <code>
        points++; // will return 6, then increase points to 7
        << 6

        ++points; // will increase points to 8, then return it
        << 8
        </code>
        </pre>
        <br><br>
        Undefined: It is basically JavaScript’s way of saying "I can’t find a value for this."
        <br><br>
        Null: Null means 'no value'. It can be thought of as a placeholder that JavaScript uses to say "there should be a value here, but there isn’t at the moment."
        <br>
        <pre>
        <code>
        10 + null; // null behaves like zero
        << 10

        10 + undefined; // undefined is not a number
        << NaN
        </code>
        </pre>
        `
        },
        {
            label: `Arrays, Logic, an Loops:
       <br>
       Destructuring an array is the concept of taking values out of an array and presenting them as individual values.
       <br>
       <pre>
       <code>
       const [x,y] = [1,2];
       </code>
       </pre>
       output:<br>
       <pre>
       <code>
       x
        << 1

        y
        << 2
       </code>
       </pre>
       <br><br>
       The length property is mutable, meaning you can manually change it. The extra slots will be filled in with undefined
       <br><br>
       The unshift() method is similar to the push() method, but this appends a new item to the beginning of the array
       <br><br>
       The slice() method creates a subarray; effectively chopping out a slice of an original array, starting at one position and finishing at another. 
       <br>
       
       <pre>       
       <code>
      
       avengers.slice(2,4) 
        << ['Thor', 'Hulk']
     
       </code>       
       </pre>
       in the example: // starts at the third item (index of 2) and finishes at the fourth (the item with index 4 is not included)
       
       <br><br>
       The splice() method removes items from an array then inserts new items in their place. For example, the following code removes the string 'Hulk' and replaces it with 'Scarlett Witch'
       <pre>
       <code>
       avengers.splice(3, 1, 'Scarlet Witch');
        << ['Hulk']
       </code>
       </pre>
       The splice() method can also be used to insert values into an array at a specific index without removing any items, by indicating that zero items are to be removed:
       <pre>
       <code>
       avengers.splice(4,0,'Quicksilver');
        << []
       </code>
       </pre>
       Removing a value:
       <pre>
       <code>
       avengers.splice(2,1); 
        << [ 'Thor' ]
       </code>
       </pre>
       <br><br>
       Sets:<br>
       Convert a set into an array:
       <pre>
       <code>
        const shoppingArray = [...shoppingSet]

        shoppingArray
        << [ 'Apples', 'Bananas', 'Beans' ]
       </code>
       </pre>

       <br><br>
       Maps: <br>
       A map can be created with multiple values by using a nested array as a parameter:<br>
       <pre>
       <code>
       const heroes = new Map([ ['Clark Kent','Superman'],
        ['Bruce Wayne', 'Batman']
        ]);
       </code>
       </pre>
       `
        },
        {
            label: `Functions:
            Any parameters a function needs are set when the function is defined. When a function is invoked, it is provided with arguments.
            <br>
            Default parameters: The golden rule to remember here is to always put default parameters after all the other parameters.
            <br><br>
            Hoisting a function will work if the function is defined as a funcition literal.
            <br>
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



function superman() {
    const question = "What is Superman's real name?"
    const answer = prompt(question);
    alert(`You answered ${answer}`);
}
