let noche = document.querySelector('.noche');

noche.addEventListener('click', function(){
    darkMode();
})

const darkMode = () =>{
    document.body.classList.toggle('dark')
}