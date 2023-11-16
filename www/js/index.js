this.pageInscrCo = document.getElementById("choixInscrCo");
this.btnInscriptionInscrCo = document.getElementById("inscriptionBtn");
this.btnConnexionInscrCo = document.getElementById("connexionBtn");

this.pageInscription = document.getElementById("inscription");
this.revenirBtnInscr = document.getElementById("revenirBtnInscr");
this.validerBtnInscr = document.getElementById("validerBtnInscr");

this.pageConnexion = document.getElementById("connexion");
this.revenirBtnCo = document.getElementById("revenirBtnCo");
this.validerBtnCo = document.getElementById("validerBtnCo");

this.pageAccueil = document.getElementById("accueil");
let timer = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");

////////////////////////////////////////////////////////////////
// page choix inscription connexion
////////////////////////////////////////////////////////////////
btnInscriptionInscrCo.addEventListener("click", (event) => {
  pageInscrCo.style.display = "none";
  pageInscription.style.display = "flex";
});
btnConnexionInscrCo.addEventListener("click", (event) => {
  pageInscrCo.style.display = "none";
  pageConnexion.style.display = "flex";
});

////////////////////////////////////////////////////////////////
//page d'inscription
////////////////////////////////////////////////////////////////
revenirBtnInscr.addEventListener("click", (event) => {
  pageInscrCo.style.display = "flex";
  pageInscription.style.display = "none";
});
validerBtnInscr.addEventListener("click", (event) => {
  // enregistrer les infos dans la BDD

  //si infos vide, ne pas faire disparaitre l'écran
  pageInscription.style.display = "none";
  pageAccueil.style.display = "flex";
});

////////////////////////////////////////////////////////////////
//page de connexion
////////////////////////////////////////////////////////////////
revenirBtnCo.addEventListener("click", (event) => {
  pageInscrCo.style.display = "flex";
  pageConnexion.style.display = "none";
});
validerBtnCo.addEventListener("click", (event) => {
  // vérifier les infos dans la BDD
  //si mauvaise ne pas faire disparaitre l'écran
  pageConnexion.style.display = "none";
});

////////////////////////////////////////////////////////////////
//page d'accueil
////////////////////////////////////////////////////////////////

// ajout de l'évènement click du bouton pour lancer le timer
startBtn.addEventListener("click", function () {
  let decompte = 30; // depart à 30 secondes

  timer.style.visibility = "visible";
  // Mise à jour du décompte
  let timerInterval = setInterval(function () {
    decompte--;
    timer.textContent = decompte;
    // Si le compte à rebours atteint zéro, arrêtez le minuteur
    // A TERMINER : ici, on pourra gérer si un autre joueur a été trouvé ou pas dans le if
    // si décompte = 0 ET que personne n'a été trouvé, afficher un message,
    // sinon si quelqu'un a été trouvé avant la fin, on arrête le timer
    if (decompte === 0) {
      clearInterval(timerInterval); // faire cesser le décompte
      alert("Aucun joueur trouvé pour vous affrontez...");
    }
  }, 1000); // Intervale de 1000 milisecondes soit 1 seconde
});
