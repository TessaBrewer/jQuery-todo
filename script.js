const textAreaInput = document.getElementById("textAreaInput");
const submitButton = document.getElementById("submitButton");
const mainDiv = document.getElementById("mainDiv");

function deleteStuff(event)
{
    mainDiv.removeChild(event.currentTarget.parentElement);
}

function createStuff()
{
    console.log("Create stuff triggered");

    const createdDiv = document.createElement("div");
    createdDiv.appendChild(document.createTextNode(textAreaInput.value));
    createdDiv.classList.add("createdDiv");

    const amDone = document.createElement("input");
    amDone.setAttribute("type", "checkbox");
    amDone.classList.add("amDone");

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("deleteButton");

    createdDiv.appendChild(amDone);
    createdDiv.appendChild(deleteButton);
    mainDiv.appendChild(createdDiv);

    deleteButton.addEventListener("click", deleteStuff);
    console.log("Done");
}

submitButton.addEventListener("click", createStuff);