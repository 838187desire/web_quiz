const root = document.getElementById("root");

// Inject HTML into root
root.innerHTML = `
  <nav>
        <input type="checkbox" id="check">
        <label for="check" id="checkbtn"><i class="fa fa-bars"></i></label>
        <label for="check" id="checkbtn_cross"><i class="fa-solid fa-xmark"></i></label>
        <label class="logo"><b>LearnWithPrathamesh.in</b></label>
        
        <!-- Overlay -->
        <label for="check" class="overlay"></label>
      
        <ul>
          <li><a class="navBarAnchor" href="../../index.html">Home</a></li>
          <li><a class="navBarAnchor" href="../../about_us.html">About Us</a></li>
          <li><a class="navBarAnchor" href="../../contact_us.html">Contact Us</a></li>
          <li class="motivation">
            <p><i>Education that Transforms Dreams into Reality.<br> Inspiration 1% and Perspiration 99%.</i></p>
          </li>
        </ul>
      </nav>
  <br>
  <div class="app">
    <h3 id="quiz_top_heading"></h3>
    <br>
    <div class="quiz">
      <h2 id="question">Loading</h2>
      <div id="ansBtn">
        <button class="btn">answer 1</button>
        <button class="btn">answer 2</button>
        <button class="btn">answer 3</button>
        <button class="btn">answer 4</button>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <button id="prevBtn">Previous</button>
        <button id="nextBtn">Next</button>
      </div>
      <br>
      <h4 id="explanation"></h4>
      <br>
      <button id="doubtBtn">Do you have any doubt?</button><br>
    </div>
  </div>

`;
