const $ = require('jquery');

const sayHello = () => console.log(`hello`);
sayHello();

$(document).ready( () => {
    $(`h1`).replaceWith(`<h3>Welcome to this webpage!</h3><p>There's nothing special other than the fact you are here.</p>`);
    $(`p`).first().append(`<p>If you see me, then JQuery is indeed operational on this site.</p>`);
});