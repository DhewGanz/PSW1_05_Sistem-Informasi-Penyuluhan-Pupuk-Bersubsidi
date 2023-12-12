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
     if (username.length < 6) {
        errorDiv.textContent = "Username harus minimal 6 karakter.";
        return false;
   }

   if (password.length < 8 || !(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(password))) {
        errorDiv.textContent = "Password harus minimal 8 karakter dan berisi kombinasi huruf, angka, dan karakter khusus.";
        return false;
   }
     return true;
}