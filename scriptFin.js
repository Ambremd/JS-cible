//boutton rejouer
const button = document.createElement("button");
button.innerText='rejouer';
button.style.backgroundColor='white'
button.style.color='black';

button.addEventListener('click', (event) =>{ 
    //console.log('start',button)
    window.location.href='jeu.html'
});
document.body.appendChild(button);

/*const rcompteur = document.querySelector('div')
rcompteur.innerText = nbCoupss
rcompteur.style.color = "white"*/

//div pour afficher le nombreux de coup
const rcompteur = document.createElement('div');
rcompteur.style.color = "white";
document.body.appendChild(rcompteur);

// Récupérer le nombre de coups depuis localStorage
const nbCoupss = localStorage.getItem('nbCoups');
rcompteur.innerText = `Nombre de coups: ${nbCoupss}`;

//div pour afficher le temps
const rtime = document.createElement('div');
rtime.style.color = "white";
document.body.appendChild(rtime);

//Récupérer le chronomètre depuis localStorage
const Time = localStorage.getItem('Time');
//setTimeout(() => {
    rtime.innerText = `temps de la partie: ${Time}`;
//}, 2000)

//div pour afficher le meilleur temps
const rbest = document.createElement('div');
rbest.style.color = "white";
document.body.appendChild(rbest);

//Récupérer le meilleur temps depuis localStorage
const Best = localStorage.getItem('Best');
//setTimeout(() => {
    rbest.innerText = `meilleur temps: ${Best}`;
//}, 2000)