function validateForm() {
     var username = document.getElementById("username").value;
     var password = document.getElementById("password").value;
     var errorDiv = document.getElementById("errorDiv");

     // Validasi username tidak boleh kosong
     if (username.trim() === "") {
          errorDiv.textContent = "Username tidak boleh kosong.";
          return false;
     }

     if (password.trim() === "") {
          errorDiv.textContent = "Password tidak boleh kosong.";
          return false;
     }
     return true;
}