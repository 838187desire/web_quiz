document.addEventListener("DOMContentLoaded", function () {
    const mainContainer = `
      <div class="mainContainer">
        <div class="container">
          <header>
            <div class="title">
              <div>
                <h1 id="main-heading"></h1>
                <p class="lead">
                  प्रत्येक प्रश्न के उत्तर और व्याख्या को देखने के लिए "उत्तर दिखाएँ" बटन दबाएँ।
                </p>
              </div>
            </div>
            <div class="header-actions">
              <button class="btn" id="revealAll">सभी उत्तर दिखाएँ</button>
              <button class="btn ghost" id="hideAll">सब छुपाएँ</button>
            </div>
          </header>
          <main class="grid" id="questionsGrid"></main>
          <br>
          <button id="doubtBtn">Do you have any doubt?</button><br>
        </div>
      </div>
    `;

    
document.body.insertAdjacentHTML("beforeend", mainContainer);

    // Find the doubt button after it's been added to the page
    const doubtButton = document.getElementById("doubtBtn");

    // --- MODIFICATION START ---
    // Add a click listener to the button to handle the toggle logic
    doubtButton.addEventListener("click", function () {
        // Check if the complain box already exists on the page
        const complainBox = document.getElementById("complain_box");

        if (complainBox) {
            // If it exists, toggle its visibility
            if (complainBox.style.display === "none") {
                complainBox.style.display = "block"; // Make it visible
            } else {
                complainBox.style.display = "none"; // Make it hidden
            }
        } else {
            // If it doesn't exist, create it for the first time
            createComplainBox();
        }
    });
    // --- MODIFICATION END ---
});
