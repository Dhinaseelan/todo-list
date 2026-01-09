//-----------------------------------------------------
// Getting elements
//-----------------------------------------------------
let inputtab = document.getElementById("input-food");
const inputbtn = document.getElementById("input-btn");
const res = document.getElementById("response");
let foodcontainer = document.getElementById("food-container");
const notifi=document.querySelector(".alert");
const notifix=document.querySelector(".notifix1")
const main=document.getElementById("main1");
const no_list=document.getElementById("no-list");
let addeventhandler= () => {
    //--------------------------------------------------
    // Creating new elements
    //--------------------------------------------------
    const li = document.createElement("li");          // List item
    const divitem = document.createElement("div");    // Div for food text
    const divremove = document.createElement("div");  // Div for remove icon
    const divalart=document.createElement("div");
    const divmessage=document.createElement("div");
    const xbutton=document.createElement("button");
    // Add remove icon inside div
    divremove.innerHTML = `<i class="fa fa-xmark"></i>`;
    //notificaion
    divmessage.innerHTML=`<strong>✅ successful !</strong> Food is updated !`;
    // Assign class to list item
    li.className = "food-item";
    divalart.classList="alert";
    divmessage.classList="alert-message"
    xbutton.className="notifix1";
    xbutton.type="button";
    xbutton.textContent="X"
    // Set text content from input field
    divitem.textContent = inputtab.value;
    //notification
    divalart.append(divmessage);
    divalart.append(xbutton);
    console.log(divalart);
    // Append new elements to container
    foodcontainer.append(li);
    li.append(divitem);
    li.append(divremove);
    main.prepend(divalart);
    //-----------------------------notification----------------------------------//
    setTimeout(()=>{divalart.remove()},2000)

    // Add onclick event for remove functionality
    divremove.parentElement.setAttribute("onclick", "removeitem(event)");
    


    //--------------------------------------------------
    // Duplicate list functionality
    //--------------------------------------------------
    const foodcontainerEl = document.querySelector("#food-container");
    const duplicateEl = document.getElementById("duplicate");
    const resyncbtn = document.getElementById("resyncbtn");

    // Resync button clones the list
    resyncbtn.addEventListener("click", () => {
        duplicateEl.innerHTML = ""; // Clear duplicate container

        // Clone the food container with all items
        const clonedDataTrue = foodcontainerEl.cloneNode(true);

        // Create a wrapper div for cloned list
        const list = document.createElement("div");
        list.className = "lists";

        // Append cloned data inside wrapper
        list.append(clonedDataTrue);
        duplicateEl.append(list);
    });
    refreshUI();
}
//-----------------------------------------------------
// Add new food item when button is clicked
//-----------------------------------------------------]-----+-++
//-----------------------------------------------------
inputbtn.addEventListener("click",addeventhandler);
//enble keyboard event you can adding list item by clicking enter key
//adding undo option 
//-----------------------------------------------------
document.addEventListener("keyup",(event)=>{
    if(event.key=="Enter"){
        addeventhandler();
    }
    else if(event.key=="KeyZ" && (event.ctrlKey||event.metaKey)){
        inputtab.textContent=""
    }
}
)

//-----------------------------------------------------
// Removing list item
//-----------------------------------------------------
function removeitem(event) {
    console.log(event.target.parentNode.parentNode);

    // Get the existing list item
    let existinglist = event.target.parentNode.parentNode;

    // Remove the list item from its parent
    existinglist.parentNode.removeChild(existinglist);
    refreshUI();
}
main.addEventListener("click", (e) => {
    if (e.target.classList.contains("notifix1")) {
        const alertBox = e.target.closest(".alert");
        if (alertBox) {
            alertBox.remove();
        }
    }
});
const refreshUI=()=>{
    if(foodcontainer.children.length>0){
        no_list.hidden=true;
    }
    else{
        no_list.hidden=false;
    }
}