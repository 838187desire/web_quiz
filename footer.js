document.addEventListener("DOMContentLoaded", function () {
    const footer = `
      <footer>
        <div class="footer-container">
  
          <!-- About -->
          <div class="footer-column">
            <h3>About Group</h3>
            <p>Designed to provide quiz and study material for Students absolutely free.</p>
          </div>
  
          <!-- Disclaimer -->
          <div class="footer-column">
            <h3>Disclaimer</h3>
            <p>We strive continuously to provide precise and timely content. 
            However, we do not guarantee the accuracy or completeness and correctness of the information. 
            Notify us to remove copyrighted material if any.</p>
          </div>
  
          <!-- Contact Info -->
          <div class="footer-column">
            <h3>Contact Info</h3>
            <p>Email: XXXXXXXXXXXXXX</p>
            <p>Phone: +91 XXXXXXXXXX</p>
          </div>
        </div>
  
        <div class="footer-bottom">
          © 2025 LearnWithPrathamesh.in | All Rights Reserved
        </div>
      </footer>
    `;
  
    document.body.insertAdjacentHTML("beforeend", footer);
  });
  