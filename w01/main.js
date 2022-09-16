const exercisesNotes = [
    { label: "Story Editor: Using Local Storage", url: "./story_editor.html" },
    
  ];


listWeeklyItems(exercisesNotes, "weekList");





function listWeeklyItems(weekElements, listIdName) {
  
    const ol = document.querySelector(`#${listIdName}`);

    if(ol){
        weekElements.forEach(element =>{
         
            const anchor = document.createElement("a");
            anchor.innerHTML = element.label;
            anchor.href = element.url;
            // anchor.target = "_blank";

            const li = document.createElement("li");
            li.appendChild(anchor);


            ol.appendChild(li);
        });
    }

}



