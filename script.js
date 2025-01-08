import {barcelona, roma, paris, londres } from './ciudades.js';

//Objetener los enlaces del DOM
let link = document.querySelectorAll('a');
let title= document.getElementById('title');
let subtitle= document.getElementById('subtitle');
let paragraph= document.getElementById('paragraph');


//console.log(link);
//innerHTML :  "Barcelona"
//innerText :  "Barcelona"

link.forEach (function (element) {
    element.addEventListener('click', function () {
        //Remover la clase activo
        link.forEach(function (element2) {
            element2.classList.remove('active');
        })
        //Añadir la clase activo
        element.classList.add('active');

        //Obtenemos el objeto a partir del enlace
        let city= cityObject(element.innerText);
        
        //Traer el contenido de cada ciudad
        title.innerHTML = city.title;
        subtitle.innerHTML = city.subtitle;
        paragraph.innerHTML = city.paragraph;
        

        
    })
})

function cityObject(link) {
    let cities = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return cities[link];
}

