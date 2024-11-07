//boutton start
const button = document.createElement("button");
button.innerText='Start';
button.style.backgroundColor='white'
button.style.color='black';

button.addEventListener('click', (event) =>{ 
    //console.log('start',button)
    window.location.href='jeu.html'
});
document.body.appendChild(button);