function calculAge() {
	// Récupération de la date actuelle et de la date de naissance de l'artiste
	var dateActuelle = new Date();
	var dateArtiste = new Date(1942, 11, 27);

	// Récupération des variables nécessaires aux calculs
	var anneeActuelle = dateActuelle.getFullYear();
	var moisActuel = dateActuelle.getMonth();
	var jourActuel = dateActuelle.getDate();
	var secondeActuelle = dateActuelle.getSeconds();

	var anneeArtiste = dateArtiste.getFullYear();
	var moisArtiste = dateArtiste.getMonth();
	var jourArtiste = dateArtiste.getDate();
	var secondeArtiste = dateArtiste.getSeconds();

	// ** CALCULS **
	// Calcul de l'année
	var annee = anneeActuelle - anneeArtiste; 
	// Cas particulier, si on est pas encore le bon mois
	if(moisArtiste > moisActuel) {
		// Décrémentation
		annee = annee - 1;
	}

	// Calcul du mois
	var mois = moisActuel - moisArtiste;
	if(mois < 0) {
		// <-> le calcul change
		mois = mois + 12;
	}

	// Calcul du jour (pour simplifier, on va dire qu'un mois = 30 jours)
	var jours = jourActuel - jourArtiste;
	if(jours < 0) {
		jours = jours + 30;
	}

	// Calcul du nombre de seconde 
	var secondes = secondeActuelle - secondeArtiste;
	if(secondes < 0) {
		secondes = secondes + 60;
	}

	// Affichage du résultat avec jQuery
	var affichage = annee + "ans " + mois + "mois " + jours + "jours " + secondes + "secondes";
	$('#resAge').html(affichage);
}


function changerCouleur() {
	if($('#rectangleOrange').html() == "Orange") {
		// Changement du fond de la page en orange
		$('body').css("background-color", "orange");

		// Changement du rectangle
		$('#rectangleOrange').html("Noir").css("background-color", "black");
	} else {
		// Remise à l'état initial
		// Changement du fond de la page en noir
		$('body').css("background-color", "black");

		// Changement du rectangle
		$('#rectangleOrange').html("Orange").css("background-color", "orange");
	}
}

function schuffle() {

	// Appel de la méthode shuffle
	$res = _.shuffle($('#listeOeuvres').children());

	for(var i = 0;i<$res.length;i++) {
		var item = $res[i];
		$('#listeOeuvres').append(item);
	}

}



// Code qui permet le changement de l'image toutes les 5 secondes
// On cherche la liste des images
$images = $('#listeImages img');
// On ne les affiche pas
$images.css('display', 'none');

// On initialise la première
$images.eq(0).fadeIn('fast');
i = 0;

// Appel de fonctions
setInterval(function() {
  $images.eq(i - 1).fadeOut('slow', function() {
    $images.eq(i).fadeIn('slow', function() {
      i++;
      if (i === $images.length) {
        i = 0;
      }
    });
  });
}, 5000);