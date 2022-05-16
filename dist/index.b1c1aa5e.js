"use strict";
document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector('.menu_hamburguesa');
    let movil = document.querySelector(".menu_movil");
    menu.addEventListener('click', ()=>{
        movil.classList.toggle('mostrar');
    });
});

//# sourceMappingURL=index.b1c1aa5e.js.map
