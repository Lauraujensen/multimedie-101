'use strict';

let on = document.querySelector('.on');
let body = document.querySelector('body');

on.addEventListener('click', () => { // Toggle gør, at man kan skifte mellem to tilstande. On/off eller nat/dag f.eks.
    body.classList.toggle('night');
})


function fadeInOnScroll() {
    let containers = document.querySelectorAll('.container, .container-ux');
    
    containers.forEach(container => {
        let position = container.getBoundingClientRect();
        let screenHeight = window.innerHeight;

        if (position.top < screenHeight - 80 && position.bottom > 0) {
            // Hvis elementet er synligt i viewport
            container.classList.add('show');
        } else {
            // Hvis det er scrollet ud af viewport
            container.classList.remove('show');
        }
    });
}

// Kør funktionen når man scroller
window.addEventListener('scroll', fadeInOnScroll);

// Kør den én gang, når siden loader
fadeInOnScroll();
