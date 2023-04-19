let xCarros = [750, 750, 750, 750, 750, 750];
let yCarros = [40, 100, 155, 210, 270, 318];
let velocidadesCarro = [2, 2.5, 3.2, 5, 3.3, 2.5];
let comprimentoCarro = 50
let alturaCarro = 30

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}
  
  function movimentaCarro(){
    for ( let i = 0; i < imagemCarros.length; i++ ){
      xCarros[i] -= velocidadesCarro[i];
    }
  }

  function voltaPosicaoInicial(){
    for (let i = 0; i < imagemCarros.length; i++){
      if(passouTodaTela(xCarros[i])){
        xCarros[i] = 750;
      } 
    }
  }
  

function passouTodaTela(xCarros){
    return xCarros < -50;
  }
  
