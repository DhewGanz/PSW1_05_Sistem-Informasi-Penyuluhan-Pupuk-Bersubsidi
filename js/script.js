var contentDiv = document.getElementById("content");
var homeLink = document.getElementById("homeLink");
var registerLink = document.getElementById("registerLink");
var listLink = document.getElementById("listLink");
var searchLink = document.getElementById("searchLink");

homeLink.addEventListener("click", function(event) {
    event.preventDefault();
    showHomePage();
});

registerLink.addEventListener("click", function(event) {
    event.preventDefault();
    showRegistrationPage();
});

listLink.addEventListener("click", function(event) {
    event.preventDefault();
    showStudentListPage();
});

searchLink.addEventListener("click", function(event) {
    event.preventDefault();
    showSearchPage();
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

function showStudentListPage() {
    // Render student list here
    contentDiv.innerHTML = "<h2>Daftar Mahasiswa</h2>";
    // Fetch and display student data from the server or local storage
}

function showSearchPage() {
    contentDiv.innerHTML = `
        <div class="form-container">
            <h2>Cari Mahasiswa</h2>
            <label for="searchTerm">Cari berdasarkan nama:</label>
            <input type="text" id="searchTerm" required><br>
            <button type="button" id="searchButton">Cari</button>
            <div id="searchResult"></div>
        </div>
    `;

    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", function() {
        // Handle search logic here and display results in the searchResult div
        var searchTerm = document.getElementById("searchTerm").value;
        var searchResultDiv = document.getElementById("searchResult");
        // Perform search and update searchResultDiv
        // Example: searchResultDiv.innerHTML = "Search results for " + searchTerm;
    });
}

// Show home page by default
showHomePage();
