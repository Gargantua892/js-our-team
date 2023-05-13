let teamContainer = document.getElementById("team-container");

let teamArray = [
    {
       "nome": "Wayne Barnett",
       "ruolo": "Founder & CEO",
       "immagine": "wayne-barnett-founder-ceo.jpg",
    },

    {
       "nome": "Angela Caroll",
       "ruolo": "Chief Editor",
       "immagine": "angela-caroll-chief-editor.jpg",
    },


    {
       "nome": "Walter Gordon",
       "ruolo": "Office Manager",
       "immagine": "walter-gordon-office-manager.jpg",
    },

    {
       "nome": "Angela Lopez",
       "ruolo": "Social Media Manager",
       "immagine": "angela-lopez-social-media-manager.jpg",
    },

    {
       "nome": "Scott Estrada",
       "ruolo": "Developer",
       "immagine": "scott-estrada-developer.jpg",
    },

    {
       "nome": "Barbara Ramos",
       "ruolo": "Graphic Designer",
       "immagine": "barbara-ramos-graphic-designer.jpg",
    },

];

for(let i = 0; i < teamArray.length; i++){
    let varAppoggio = teamArray[i];

    let newElement = generateElement("div");
    newElement.classList.add("team-member");
    teamContainer.append(newElement);

    let cardPhoto = generateElement("img");
    newElement.append(cardPhoto);
    let cardHeading = generateElement("h2");
    newElement.append(cardHeading);
    let cardPosition = generateElement("h5");
    newElement.append(cardPosition);



    for (let key in varAppoggio){
        cardHeading.innerHTML = varAppoggio.nome;
        cardPosition.innerHTML = varAppoggio.ruolo;
        cardPhoto.setAttribute("src", `./img/${varAppoggio.immagine}`);
}
}

//Funzione per creare nuovi elementi 
function generateElement(tagType){
    let newElement = document.createElement(tagType);
    return newElement;
}
