//variaveis da bolinha
let xBolinha = 300;
let yBolinha= 200;
let diametro= 20;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 2;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete Oponente
let xOponente = 590;
let yOponente = 150;
let OponenteComprimento = 10;
let OponenteAltura = 90;
let velocidadeYOponente =0; 

//placar jogo 
let meusPontos =0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

//chance de errar
let chanceDeErrar = 0;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup(){
  createCanvas(600,400);
  trilha.loop()
}

function draw(){
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete();
    movimentaMinhaRaquete();
    verificaColisaoRaquete();
    mostraOponente();
    movimentaOponente();
    incluiPlacar();
    marcaPonto();
}  

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
  
}
  
function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
  }

function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
        velocidadeXBolinha *= -1;
    }
  
if (yBolinha + raio > height || yBolinha - raio < 0){
        velocidadeYBolinha *= -1;
  
  }

}
  
function mostraOponente(){
    rect(xOponente, yOponente, OponenteComprimento, OponenteAltura);
} 
  
function movimentaOponente(){
 velocidadeYOponente = yBolinha - yOponente - raqueteComprimento /2 -30;
  yOponente += velocidadeYOponente
    }

function mostraRaquete(){
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}  
  
function movimentaMinhaRaquete(){
    if (keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
        yRaquete += 10;
    }
}

function verificaColisaoRaquete(){
    if (xBolinha - raio < xRaquete + raqueteComprimento
        && yBolinha - raio <yRaquete + raqueteAltura
        && yBolinha + raio > yRaquete
        && xOponente - raio < xOponente + OponenteComprimento
        && yOponente- raio < yOponente + OponenteAltura
        && yOponente + raio > yOponente) {velocidadeXBolinha *= -1;}
        
}

function incluiPlacar(){
    stroke (300);
    textAlign (CENTER);  
    textSize(16);
    fill(color(255,140,0));
    rect(450,9,40,20);
    fill(color(255,140,0));
    rect(150,9,40,20);
    fill(255);
    text(meusPontos,170,26);
    fill(255);
    text(pontosOponente,470,26);
}

function marcaPonto(){
    if (xBolinha>595){
      meusPontos +=1;
      ponto.play();
    }
    if (xBolinha<12){
      pontosOponente +=1;
      ponto.play();
    }
}

