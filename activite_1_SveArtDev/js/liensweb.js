/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
	{
		titre: "So Foot",
		url: "http://sofoot.com",
		auteur: "yann.usaille"
    },
	{
		titre: "Guide d'autodéfense numérique",
		url: "http://guide.boum.org",
		auteur: "paulochon"
    },
	{
		titre: "L'encyclopédie en ligne Wikipedia",
		url: "http://Wikipedia.org",
		auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web
// La "fiche" avec des infos sera reutilisée en boucle
listeLiens.forEach(function (lien){
	var ficheElt = document.createElement("p");

	var titreElt = document.createElement("a");
	titreElt.href = lien.url;
	titreElt.textContent = lien.titre + " ";
	titreElt.style.color = "#428bca";
	titreElt.style.textDecoration = "none";
	titreElt.style.fontWeight = "600";
	
	var urlElt = document.createElement("span");
	urlElt.style.color = "#000";
	// Ajout d'un noeud textuel "url"
	urlElt.appendChild(document.createTextNode(lien.url));
	urlElt.appendChild(document.createElement("br"));

	// L'auteur
	var auteurElt = document.createElement("span");
	auteurElt.appendChild(document.createTextNode("Ajouté par " + lien.auteur));
	
	ficheElt.appendChild(titreElt);
	ficheElt.appendChild(urlElt);
	ficheElt.appendChild(auteurElt);
	
	// Ajout les fiches à la page
	document.getElementById("contenu").appendChild(ficheElt);
	
});

// Application du style
const ficheStyle = document.getElementsByTagName("p");
for (const ficheStyle of document.querySelectorAll("p")) {
	ficheStyle.style.background = "white";
	ficheStyle.style.padding = "10px";
	ficheStyle.style.marginBottom = "10px";
};






