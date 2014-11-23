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

	var secondes = secondeActuelle - secondeArtiste;
	if(secondes < 0) {
		secondes = secondes + 60;
	}


	// Affichage du résultat
	var affichage = annee + "ans " + mois + "mois " + jours + "jours " + secondes + "secondes";
	document.getElementById("resAge").innerHTML = affichage;
}


function changerCouleur() {

	// On récupère le rectangle orange
	var element = document.getElementById("rectangleOrange");

	// Si le texte est Orange, alors on change la page en orange
	if(element.innerHTML == "Orange") {
		// Changement du body
		document.body.style.backgroundColor = "orange";

		// Changement du rectangle
		element.style.backgroundColor = "black";
		element.innerHTML = "Noir";
	} else {
		// Sinon, on remet tout à l'initial
		// Changement du body
		document.body.style.backgroundColor = "black";

		// Changement du rectangle
		element.style.backgroundColor = "orange";
		element.innerHTML = "Orange";
	}
	
}

function schuffle() {
	// Appel de la méthode shuffle
	var liste = document.getElementById('listeOeuvres');
	var res = _.shuffle(liste.children);

	for(var i = 0;i<res.length;i++) {
		liste.appendChild(res[i]);
	}

}