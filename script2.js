var contentDiv = document.getElementById("content");
var homeLink = document.getElementById("homeLink");
var registerLink = document.getElementById("registerLink");
var loginLink = document.getElementById("loginLink");
var searchLink = document.getElementById("searchLink");
var paymentLink = document.getElementById("paymentLink");
var rulesLink = document.getElementById("rulesLink");
var scheduleLink = document.getElementById("scheduleLink");
var logoutLink = document.getElementById("logoutLink");

homeLink.addEventListener("click", function(event) {
    event.preventDefault();
    showHomePage();
});

registerLink.addEventListener("click", function(event) {
    event.preventDefault();
    showRegistrationPage();
});

loginLink.addEventListener("click", function(event) {
    event.preventDefault();
    showLoginPage();
});

searchLink.addEventListener("click", function(event) {
    event.preventDefault();
    showSearchPage();
});

paymentLink.addEventListener("click", function(event) {
    event.preventDefault();
    showPaymentPage();
});

rulesLink.addEventListener("click", function(event) {
    event.preventDefault();
    showRulesPage();
});

scheduleLink.addEventListener("click", function(event) {
    event.preventDefault();
    showSchedulePage();
});

logoutLink.addEventListener("click", function(event) {
    event.preventDefault();
    logout();
});

function showHomePage() {
    contentDiv.innerHTML = "<h2>Selamat Datang di Aplikasi Administrasi Asrama</h2>";
}

function showRegistrationPage() {
    contentDiv.innerHTML = `
        <div class="form-container">
            <h2>Formulir Pendaftaran Mahasiswa</h2>
            <form id="registrationForm">
                <label for="name">Nama:</label>
                <input type="text" id="name" required><br>

                <label for="room">Nomor Kamar:</label>
                <input type="text" id="room" required><br>

                <button type="submit">Daftar</button>
            </form>
        </div>
    `;

    var registrationForm = document.getElementById("registrationForm");
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Handle registration logic here
    });
}

function showLoginPage() {
    contentDiv.innerHTML = `
        <div class="form-container">
            <h2>Formulir Login</h2>
            <form id="loginForm">
                <label for="username">Username:</label>
                <input type="text" id="username" required><br>

                <label for="password">Password:</label>
                <input type="password" id="password" required><br>

                <button type="submit">Login</button>
            </form>
        </div>
    `;

    var loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Handle login logic here
    });
}

function showSearchPage() {
    // Implement search page here
    contentDiv.innerHTML = "<h2>Cari Mahasiswa</h2>";
    // Add search functionality and display results
}

function showPaymentPage() {
    contentDiv.innerHTML = "<h2>Halaman Pembayaran</h2>";
    // Implement payment functionality and display payment options
}

function showRulesPage() {
    contentDiv.innerHTML = "<h2>Daftar Peraturan Asrama</h2>";
    // Display rules and regulations of the dormitory
}

function showSchedulePage() {
    contentDiv.innerHTML = "<h2>Jadwal Piket Asrama</h2>";
    // Display duty schedule for dormitory residents
}

function logout() {
    // Implement logout functionality here
    alert("Anda telah keluar dari sesi.");
    showHomePage();
}
