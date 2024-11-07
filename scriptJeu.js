
/*  function askNotificationPermission() {
    // Vérifier si le navigateur prend en charge les notifications
    if (!("Notification" in window)) {
        console.log("Ce navigateur ne prend pas en charge les notifications.");
        return;
    }
    
    // Gestion de la permission de notification
    function handlePermission(permission) {
        // Afficher ou non le bouton en fonction de la réponse
        if (permission === "denied" || permission === "default") {
            console.log("Permission de notification refusée ou par défaut.");
        } else {
            console.log("Permission de notification accordée.");
            // Vous pouvez ajouter votre logique de notification ici
            new Notification('Bonjour');
        }
    }

    // Vérifier l'état actuel de la permission
    if (Notification.permission === "granted") {
        console.log('Permission de notification déjà accordée.');
        new Notification('Bonjour');
    } else if (Notification.permission !== "denied") {
        // Si la permission n'est pas refusée, demander la permission
        Notification.requestPermission().then(handlePermission);
    } else {
        console.log("La permission de notification est refusée.");
    }
}*/

  
//définir le début du chrono
const TimeStart = Date.now();
let Best =  localStorage.getItem('Best');

//cadre de jeux (la page)
const container = document.createElement("div");
container.classList.add('container');
document.body.appendChild(container);

//div ronde
const cible = document.createElement("div");
cible.classList.add('cible');
container.appendChild(cible);

//position aléatoire de la cible
cible.style.top = Math.floor(Math.random() * 95) + '%';
cible.style.left = Math.floor(Math.random() * 95) + '%';
container.appendChild(cible);

//conteur de coup 
let nbCoups = 0
const compteur = document.createElement('div')
compteur.style.color = "white"
container.appendChild(compteur);

//conteur de temps
const timeur = document.createElement('div')
timeur.style.color = "white"
container.appendChild(timeur);
setInterval(() => {
    timeur.innerText = (Date.now()-TimeStart)/1000
}, 500)

//actions au clic
cible.addEventListener('click', (event) =>{ 
    nbCoups = nbCoups + 1
    compteur.innerText = nbCoups
    //ajout audio
    const audioElement = new Audio("tap-notification-180637.mp3");
    audioElement.play();
     
    cible.style.top = Math.floor(Math.random() * 100) + '%';
    cible.style.left = Math.floor(Math.random() * 100) + '%';

    if (nbCoups===10){
        cible.remove()
        //enregistre nbr de coup pour recup dans une autre page
        localStorage.setItem('nbCoups', nbCoups);
        //enregistre temps a la fin de l'objectif et donne le temps entre stert et end en second
        const TimeEnd = Date.now();
        const Time = (TimeEnd-TimeStart)/1000
        localStorage.setItem('Time', Time);
        //sauvegarde du meilleur score 
        if (!Best || Best > Time) {
            Best = Time
        }
        localStorage.setItem('Best', Best);

        //notification
        //askNotificationPermission()
          

        //envoie a une page avce un délai (pour son)
        setTimeout(() => {
            window.location.href='fin.html'
        }, 200)
        
    }

});



/*// This example takes 2 seconds to run
const start = Date.now();

console.log('starting timer...');
// Expected output: "starting timer..."

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  // Expected output: "seconds elapsed = 2"
}, 2000);*/
