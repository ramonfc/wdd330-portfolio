const weekLinks = [
    { label: "Week1 notes", url: "w01/index.html" },
    { label: "Week2 notes", url: "w02/index.html" },
    { label: "Week3 notes", url: "w03/index.html" },
    { label: "Week4 notes", url: "w04/index.html" },
    { label: "Week5 notes", url: "w05/index.html" },
    { label: "Week7 notes", url: "w07/index.html" },
    { label: "Week8 notes", url: "w08/index.html" },
    { label: "Week9 notes", url: "w09/index.html" },
    { label: "Week10 notes", url: "w10/index.html" },
  ];


listWeeklyItems(weekLinks, "weekList");





function listWeeklyItems(weekElements, listIdName) {
  
    const ul = document.querySelector(`#${listIdName}`);

    if(ul){
        weekElements.forEach(element =>{
         
            const anchor = document.createElement("a");
            anchor.innerHTML = element.label;
            anchor.href = element.url;
            // anchor.target = "_blank";

            const li = document.createElement("li");
            li.appendChild(anchor);


            ul.appendChild(li);
        });
    }

}



