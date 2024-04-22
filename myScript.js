const popup = document.getElementById("content");
    function togglePopup() {
        popup.classList.toggle("active");
    }
    function removeClass() {
        popup.classList.remove("active");
    }

    function updateClock() {
      let currentTime = new Date().toLocaleTimeString(); // Get current local time
      document.querySelector('#clock span').innerText = currentTime;
  }
  
  // Update the clock initially and then every second
  updateClock();
  setInterval(updateClock, 1000);
  