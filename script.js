function checkPassword() {
  var password = document.getElementById("passwordInput").value;

  // Inserisci qui la password corretta
  var correctPassword = "password123";

  var messageContainer = document.getElementById("messageContainer");

  if (password === correctPassword) {
    messageContainer.innerHTML = "<p class='successMessage'><span class='successIcon'>&#10004;</span>Password corretta</p><button onclick='prosegui()'>Prosegui</button>";
  } else {
    messageContainer.innerHTML = "<p class='errorMessage'><span class='errorIcon'>&#10060;</span>Password errata. Riprova.</p>";
    document.getElementById("passwordInput").value = ""; // Resetta il campo password
  }
}

function prosegui() {
  window.location.href = "forum.html"; // Reindirizza alla pagina "testo.html"
}

function addItem(event) {
  event.preventDefault();

  // Recupera il nome e la descrizione dell'oggetto
  var itemName = document.getElementById("item-name").value;
  var itemDescription = document.getElementById("item-description").value;

  // Crea un nuovo elemento della lista
  var newItem = document.createElement("li");
  newItem.classList.add("item");

  var itemNameElement = document.createElement("h4");
  itemNameElement.classList.add("item-name");
  itemNameElement.textContent = itemName;

  var itemDescriptionElement = document.createElement("p");
  itemDescriptionElement.classList.add("item-description");
  itemDescriptionElement.textContent = itemDescription;

  newItem.appendChild(itemNameElement);
  newItem.appendChild(itemDescriptionElement);

  // Aggiungi l'elemento alla lista degli oggetti
  var itemList = document.getElementById("item-list");
  itemList.appendChild(newItem);

  // Resetta i campi del modulo
  document.getElementById("item-name").value = "";
  document.getElementById("item-description").value = "";
}
