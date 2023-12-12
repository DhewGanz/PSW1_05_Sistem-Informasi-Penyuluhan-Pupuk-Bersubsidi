function openPage(page) {
  var infoPupuk = document.getElementById('infoPupuk');
  var pupukDropdown = document.getElementById('pupukDropdown');
  infoPupuk.href = page;
  window.location.href = page;
}
function liveSearch() {
  var input = document.getElementById('searchInput').value.toLowerCase();
  var searchResultsContainer = document.getElementById('searchResults');
  searchResultsContainer.innerHTML = '';

  var cards = document.querySelectorAll('.card');
  cards.forEach(function (card) {
      var cardText = card.querySelector('.card-text').textContent.toLowerCase();
      if (cardText.includes(input)) {
          var clonedCard = card.cloneNode(true);
          searchResultsContainer.appendChild(clonedCard);
      }
  });
}
