const words = [""];
function scrollWords() {
  const words = ["une couleur", "un animal", "un pays", "un sport", "un élément", "un métier", "une star "];
  const scrollingWords = document.getElementById('scrolling-words');
  let index = 0;

  setInterval(() => {
    scrollingWords.textContent = `Si Ramata était ${words[index]}`;
    index = (index + 1) % words.length;
  }, 1000); // Change de mot toutes les 2 secondes
}

// Appel de la fonction pour démarrer le défilement
scrollWords();
        
    // FORMULAIRE 
    var champsAnalogie = document.querySelectorAll(".space");

    // Ajout d'un écouteur d'événement pour l'événement keyup
    champsAnalogie.forEach(function (champAnalogie) {
        champAnalogie.addEventListener("keyup", function (event) {
            // La touche a été relâchée, vous pouvez effectuer des actions ici
            console.log("Touche relâchée !");

            // Vous pouvez également obtenir la touche spécifique qui a été relâchée
            console.log("Touche relâchée : " + event.key);
            console.log(words)
            words[1] = document.querySelector("#analogie").value
        });
    });

function afficherModal(titre, image, description) {
  const text= document.getElementById ("text");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
console.log(description);
  modalImage.src = image;
  modalDescription.innerText = description;
  modal.style.display = "flex";
}

function fermerModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}


//FORMULAIRE

document.querySelector('.Envoyer').addEventListener("click", function (event) {
  console.log('ok')
  event.preventDefault();

  var analogieValue = document.querySelector("#analogie").value;
  var valeuranalogieValue = document.querySelector("#valeurAnalogie").value;
  var detailValue = document.querySelector("#why").value;
  var valeurImage = document.querySelector('#image').value;


  document.querySelector('#nouvelleanalogie').innerHTML +=
    '<img class="nouvelimg" src=' + valeurImage + '"><p class="si-jetais">Si Ramata était ' + analogieValue + ', elle serait ' + valeuranalogieValue + '<p class="text">' + detailValue + '</p></p></section>';

  fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=ramata.wagne&courriel=&message=Si j'étais " + analogieValue + ", je serais " + valeuranalogieValue + "Parce que " + detailValue)
    .then(function (response) {
      response.json().then(function (data) {
        console.log(data)
        if (data.status == "success") {
          document.querySelector("#confirmation").innerHTML = "Bien reçu";
        } else {
          document.querySelector("#confirmation").innerHTML = "Erreur";
        }
      })
    });
});


//MENTIONS FOOTER
function ouvrirMentionsLegales() {
            document.getElementById('mentionsLegalesPopup').style.display = 'block';
        }

        function fermerMentionsLegales() {
            document.getElementById('mentionsLegalesPopup').style.display = 'none';
        }

        document.getElementById('mentionsLegalesBtn').addEventListener('click', ouvrirMentionsLegales);