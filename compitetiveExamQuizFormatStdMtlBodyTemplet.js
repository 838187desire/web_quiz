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
        </div>
      </div>
    `;

    // Append at the end of body
    document.body.insertAdjacentHTML("beforeend", mainContainer);
});
