function setAsBackground() {
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.body.style.backgroundImage = `url(${e.target.result})`;
        document.body.style.backgroundSize = 'cover';
      };
      reader.readAsDataURL(file);
    }
  }

    const openPopupBtn = document.getElementsById("openPopup");
    const popup = document.getElementsById("popup");

        openPopupBtn.addEventListener("click", functionOpen);

        function functionOpen() {     
            popup.style.display = "block";
        }