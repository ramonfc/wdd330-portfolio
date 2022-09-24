const weekLinks = [
    { label: "Week1 notes", url: "w01/index.html" },
    { label: "Week2 notes", url: "w02/index.html" },
  ];


listWeeklyItems(weekLinks, "weekList");





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



