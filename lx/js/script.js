var chess = document.getElementById('chess');
var context = chess.getContext('2d');
var me = true;

//建立二维数组，代表棋盘本身,并初始化所有交叉点为0
var chessBoard = [];
for(var i=0;i<15;i++){
  chessBoard[i]=[];
  for(var j=0;j<15;j++){
    chessBoard[i][j] = 0;
  }
}

context.strokeStyle = "#bfbfbf";

var logo = new Image();
logo.src = "./images/logo.png";
logo.onload = function(){
  context.drawImage(logo,0,0,600,600);
  drawChessBoard();
}

var drawChessBoard = function(){
  for(var i=0;i<15;i++){
    context.moveTo(20,20+40*i);
    context.lineTo(580,20+40*i);
    context.stroke();
    context.moveTo(20+40*i,20);
    context.lineTo(20+40*i,580);
    context.stroke();
  }
}

var oneStep = function(i,j,me){
  context.beginPath();
  context.arc(20+40*i,20+40*j,17,0,2*Math.PI);
  context.closePath();
  var gradient = context.createRadialGradient(20+40*i,20+40*j,17,20+40*i,20+40*j,0);
  if(me){
    gradient.addColorStop(0,"#0a0a0a");
    gradient.addColorStop(1,"#636766");
  } else{
    gradient.addColorStop(0,"#d1d1d1");
    gradient.addColorStop(1,"#f9f9f9");
  }
  context.fillStyle = gradient;
  context.fill();
}

chess.addEventListener('click',function(e){
  var x = e.offsetX;
  var y = e.offsetY;
  var i = Math.floor(x/40);
  var j = Math.floor(y/40);


  if(chessBoard[i][j]==0){
    oneStep(i,j,me);
    if(me){
      chessBoard[i][j] = 1;
    }else{
      chessBoard[i][j] = 2;
    }
    me = !me;
  }


})
