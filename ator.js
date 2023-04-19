
let yAtor = 367
let xAtor = 100
let colisao = false
let meusPontos = 0

function mostraAtor(){
    image(imagemAtor, xAtor, yAtor, 30, 30);
  }
  function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
        yAtor -= 3;  
    }

    if (keyIsDown(DOWN_ARROW)){
        if(podeMover()){
          yAtor += 3;
        } 
    }
  
}

function verificacolisao(){

   for(let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)

    if(colisao){
      voltaAtoPosicaoInicial ()
      somColisao.play();
      if(pontosMaiorQueZero()){
        meusPontos -= 1;
        }
    }
  }

}

function voltaAtoPosicaoInicial (){
  yAtor = 367;
}

 function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  
  if( yAtor < 15){
    meusPontos +=1
    somPontos.play();
    voltaAtoPosicaoInicial()
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}   
function podeMover(){
 return yAtor < 367;
}