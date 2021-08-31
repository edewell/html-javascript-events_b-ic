
let button = document.querySelector('button')
let redBack = document.getElementById('red')
let blueBack = document.getElementById('blue')
let greenBack = document.getElementById('green')

    redBack.addEventListener("mouseover", function(evt){
        document.body.style.backgroundColor = 'red';
        console.log(`You changed the color to red}`)
    })
  
    blueBack.addEventListener("mouseover", function(evt){
        document.body.style.backgroundColor = 'blue';
        console.log(`You changed the color to blue`)
    })
  
    greenBack.addEventListener("mouseover", function(evt){
        document.body.style.backgroundColor = 'green';
        console.log(`You changed the color to green`)
    })
    
