//const inputUser=document.querySelector('input[id="user');
//console.log(inputUser);

// Creation de compte, les conditions sont elles remplies ??
// ---------------------------------------------------------
// 1. User 3 caractères minimum

const createAccount = document.querySelector('form');

createAccount.addEventListener('submit',(e)=>{
    e.preventDefault();
    // Si aucune condition rempli alors Message erreur User et email et image en rouge
    // if (conditionFulfilled()) {
    //     alert('création compte')
    // } else {
    //     // On affiche les erreurs
    //     displayError();

    // }
})
conditionFulfilled()

function conditionFulfilled(){
    const inputUser = document.querySelector('input[id="user').addEventListener('input',(e)=>{
           if (e.target.value.length >3) {
               document.querySelector('input[id="user').nextElementSibling.src='ressources/check.svg';
               
               //document.querySelector('input[id="user').nextElementSibling.className('.icone-verif').add('active');

           }
    });


}