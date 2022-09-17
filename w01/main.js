function main(){
    const exercisesNotes = [
        { label: "Story Editor: Using Local Storage", url: "./story_editor.html" },
        {
            label: `Local Storage: <br>
        Save information: localStorage.setItem(key, value) <br>
        Retrieve information: localStorage.getItem(key)`
        },
        {
            label: `Master Mobile UX:
        <ul>
        <li>Desing first for the smallest and least powerful device</li>
        <li>Start small and scale up</li>
        <li>Move the primary controls to the bottom of the app</li>
        <li>Think in user friendly design</li>
        </ul>`
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