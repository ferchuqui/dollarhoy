// NO vamos a usar async y await, pero esta es la forma tradicional de usar una promesa de fetch

fetch('https://crossorig.in/https://economy-follower.herokuapp.com/currencies/dollar')
  .then(res => res.json()) //lo parseamos a json, el .json() devuelve otra promesa, por eso podemos hacer el .then abajo. La promesa que devuelve esta relacionada al "terminar de parsear el json"
  .then(res => {
     console.log(res);
     // res ahora contiene el objeto que venia en el json
     // Aca se tienen que procesar esos datos y usarlos en algo util, probablemente interactuando con el dom
     document.getElementById("compra").innerHTML = res.buy;
     document.getElementById("venta").innerHTML = res.sell;
     
  })
  .catch(err => {
     // Aca err va a estar lleno de la razon por la que fallo, por ahora no te preocupes del catch hasta que no sepas hacer funcionar el then :P
  })

