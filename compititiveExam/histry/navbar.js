document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
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
    `;
  
    // Inject at the top of body
    document.body.insertAdjacentHTML("afterbegin", navbar);
  });

  

