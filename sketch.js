var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  Pista = loadImage ("path.png")
  //loadAnimation (carregarAnimação) de corrida para o menino
 Runner = loadAnimation ("Runner-1.png", "Runner-2.png")
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 Path = createSprite (200,200)
//adicione uma imagem para a pista
Path.addImage("Pista", Pista)
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
Path.scale=1.2;

//crie um sprite de menino
Menino = createSprite (100,200)
//adicione uma animação de corrida para ele
Menino.addAnimation ("Runner", Runner)
Menino.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible=false

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible=false
}

function draw() {
  background(0);
  Path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  Menino.x = World.mouseX
  edges= createEdgeSprites();
  Menino.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  Menino.collide(leftBoundary, rightBoundary)
  
  //código para redefinir o fundo
  if(Path.y > 400 ){
    Path.y = height/2;
  }
  
  drawSprites();
}
