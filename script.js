const games = [
    {
        title: "Star Wars: Knights of the Old Republic (2004)",
        description: "Pas l'ombre d'un Skywalker ou d'un Palpatine dans le plus grand jeu Star Wars jamais créé. La sublime histoire imaginée par Bioware.",
        image: "assets/images/100 best games_0000_Starwars knights of the old republic.webp",
    },
    {
        title: "Civilization V (2010)",
        description: "Deux jeux de stratégie figurent sur notre liste, et Civilization V mérite pleinement cette distinction. La cinquième entrée de Firaxis dans la franchise Sid Meier a complètement remodelé le genre 4X.",
        image: "assets/images/100 best games_0014_Civiliastion V.webp",
    },
    {
        title: "Age Of Empires II: The Age of Kings (1999)",
        description: "À tous ces gamins de 12 ans qui ont tenté (et échoué) de livrer bataille à la tête d'une unique escouade exclusivement constituée de catapultes hors de prix.",
        image: "assets/images/100 best games_0014_Civiliastion V.webp",
    },
    {
        title: "Star Wars: Knights of the Old Republic (2004)",
        description: "Pas l'ombre d'un Skywalker ou d'un Palpatine dans le plus grand jeu Star Wars jamais créé. La sublime histoire imaginée par Bioware.",
        image: "assets/images/100 best games_0000_Starwars knights of the old republic.webp",
    },
    {
        title: "Civilization V (2010)",
        description: "Deux jeux de stratégie figurent sur notre liste, et Civilization V mérite pleinement cette distinction. La cinquième entrée de Firaxis dans la franchise Sid Meier a complètement remodelé le genre 4X.",
        image: "assets/images/100 best games_0010_Super Mariokart.webp",
    },
    {
        title: "Age Of Empires II: The Age of Kings (1999)",
        description: "À tous ces gamins de 12 ans qui ont tenté (et échoué) de livrer bataille à la tête d'une unique escouade exclusivement constituée de catapultes hors de prix.",
        image: "assets/images/100 best games_0009_GAT 4.webp",
    },
    {
        title: "Star Wars: Knights of the Old Republic (2004)",
        description: "Pas l'ombre d'un Skywalker ou d'un Palpatine dans le plus grand jeu Star Wars jamais créé. La sublime histoire imaginée par Bioware.",
        image: "assets/images/100 best games_0013_Supermario odyssey.webp",
    },
    {
        title: "Civilization V (2010)",
        description: "Deux jeux de stratégie figurent sur notre liste, et Civilization V mérite pleinement cette distinction. La cinquième entrée de Firaxis dans la franchise Sid Meier a complètement remodelé le genre 4X.",
        image: "assets/images/100 best games_0015_Final fantasy 14 a realm reborn.webp",
    },
    {
        title: "Age Of Empires II: The Age of Kings (1999)",
        description: "À tous ces gamins de 12 ans qui ont tenté (et échoué) de livrer bataille à la tête d'une unique escouade exclusivement constituée de catapultes hors de prix.",
        image: "assets/images/100 best games_0014_Civiliastion V.webp",
    }
];

let i = 0;
const likedGames = [];

function displayGame() {
    if (i < games.length) {
        document.getElementById('edd-game-Title').innerText = games[i].title;
        document.getElementById('edd-game-Desc').innerText = games[i].description;
        document.getElementById('edd-game-Card').querySelector('img').src = games[i].image;
    } else {
        alert("Fin de la liste de jeux !");
    }
}

document.getElementById('edd-like-Button').addEventListener('click', () => {
    likedGames.push(games[i]);
    i++;
    displayGame();
    updateLikedGames();
});

document.getElementById('edd-dislike-Button').addEventListener('click', () => {
    i++;
    displayGame();
});

function updateLikedGames() {
    const likedGamesList = document.getElementById('edd-liked-List');
    likedGamesList.innerHTML = '';
    for (let i = 0; i < likedGames.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="edd-flex-box">
            <div>
                <img src="${likedGames[i].image}"alt="image de la premier projet">
            </div>
            <div class="edd-title-box">
                <P>${likedGames[i].title}</P>
            </div>
            <div class="edd-desc-box">
                <p>${likedGames[i].description}</p>
            </div>
        </div>
        
        `
        likedGamesList.appendChild(div);
    }
}




displayGame();