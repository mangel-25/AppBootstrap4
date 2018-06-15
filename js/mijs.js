/*
function funcion_tercera(){ alert("Se ha lanzado la TERCERA función");}

if (document.addEventListener){
    window.addEventListener('load',funcion_tercera,false);
} else {
    window.attachEvent('onload',funcion_tercera);    
}*/

    window.sr = ScrollReveal();
    
    sr.reveal('.navbar', {
        duration: 2000,
        origin: 'bottom'
    });

    sr.reveal('#login', {
        duration: 2000,
        origin: 'top',
        distance: '300px'
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        });
    });          


