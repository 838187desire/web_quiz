const doubtButtons = document.querySelectorAll(".doubtBtn");

// Loop over each button and add the event listener
doubtButtons.forEach(doubtButton => {
    doubtButton.addEventListener("click", () => {
        // Check if the complain box already exists in the document
        let existingComplainBox = document.getElementById("complain_box");

        if (existingComplainBox) {
            // If the box exists, toggle its display (show/hide)
            if (existingComplainBox.style.display === 'none' || existingComplainBox.style.display === '') {
                existingComplainBox.style.display = 'block';
            } else {
                existingComplainBox.style.display = 'none';
            }
        } else {
            // If the box does not exist, create and append it for the first time
            createComplainBox();
        }
    });
});

// Function to create and append the complain box
function createComplainBox() {
    const doubtBtnContainer = document.querySelector(".study_material_doubt");
    if (!doubtBtnContainer) {
        console.error('Container not found!');
        return;
    }

    // CREATE THE COMPLAIN BOX HERE INSTEAD OF GLOBALLY
    const complainBox = document.createElement("div");
    complainBox.id = "complain_box";
    complainBox.style.display = 'block'; // Make it visible on creation

    const heading1 = document.createElement("h3");
    heading1.innerHTML = "To complain about this question you have to provide some information like:";
    complainBox.appendChild(heading1);

    const heading4 = document.createElement("h4");
    heading4.innerHTML = "1. Screenshot of the question in which you have doubt.";
    complainBox.appendChild(heading4);

    const heading5 = document.createElement("h4");
    heading5.innerHTML = "2. Write your doubt in whatsapp chat.";
    complainBox.appendChild(heading5);

    const heading6 = document.createElement("h4");
    heading6.innerHTML = 'To complain about the question you have to click on <u>complain</u> button, it will redirect to a whatsapp chat where you can send information.';
    complainBox.appendChild(heading6);

    const complainButton = document.createElement("button");
    complainButton.id = "complainBtn";
    complainButton.innerHTML = "Complain";

    complainButton.onclick = function () {
        window.location.href = "https://wa.me/message/UTAYXAFE2W3JG1";
    };

    complainBox.appendChild(complainButton);

    // Append the newly created complain box to the quiz container
    doubtBtnContainer.appendChild(complainBox);
}
