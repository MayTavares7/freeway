
function setup() {
  createCanvas(700, 400);
  somTrilha.loop()
  somTrilha.setVolume(0.1)
}

function draw() {
  background(imagemDaEstrada);
  image(imagemAtor, xAtor, yAtor, 30, 30);
  image(imagemCarro, xCarros, yCarros, 50, 30);
  mostraCarro();
  movimentaAtor();
  movimentaCarro();
  voltaPosicaoInicial();
  verificacolisao();
  incluiPontos();
  marcaPonto();
  pontosMaiorQueZero();
}





