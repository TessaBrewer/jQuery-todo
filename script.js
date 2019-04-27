const textAreaInput = document.getElementById("textAreaInput");
const submitButton = docuemnt.getElementById("submitButton");
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
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("deleteButton");
    createdDiv.appendChild(deleteButton);
    mainDiv.appendChild(createdDiv);

    deleteButton.addEventListener("click", deleteStuff);
    console.log("Done");
}

submitButton.addEventListener("click", createStuff);