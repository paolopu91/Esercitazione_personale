
// Inserimento html dentro un'altro tag

const ulContainer = document.getElementById("ulContainer");

ulContainer.innerHTML += "<li></li>";

// Inserimento nuovo elemento HTML tramite append o prepend
// Creerà l'elemento "<li></li>"
const newLi = document.createElement("li");
newLi.classList.add("pippo");
newLi.id = "nuovo_li";
newLi.style.backgroundColor = "red";

// Aggiunge alla pagina l'elemento appena creato
ulContainer.append(newLi); // Alla fine
ulContainer.prepend(newLi); // All'inizio