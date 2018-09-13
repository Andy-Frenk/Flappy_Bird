var duke;
var pipes = [];
var sequenceFlames;
var flames = [];
var flames_sound;
var points = 0;
var fr = 50;
var game_over = false;
var game_over_sound_played=false;






function preload(){
  /*for(i=0;i<4;i++){
  flames.push(loadImage("flames_"+str(i)+"png"));
  flames[i] = image()
}*/
  flames_sound = loadSound("sounds/flamethrower.mp3");
  duke_nukem_sound = loadSound("sounds/Damn Im good..mp3");
  duke_nukem_sound_game_over = loadSound("sounds/Game over.mp3");
  var score = document.getElementById("score");
  game_over_pic = loadImage("pics/game_over_bearbeitet.png");
  duke = loadImage("pics/DukeNukem.png");
  sequenceFlames = loadAnimation("pics/flames_1.png","pics/flames_4.png");
  Hintergrund = loadImage("pics/background.jpg");
  Rocket_up = loadImage("pics/Rocket_up.png");
  Rocket_down = loadImage("pics/Rocket_down.png");
}
function setup(){
  createCanvas(600,400);
  score.innerHTML ="Score: " +  points;
  frameRate(fr);


  bird = new bird;
  pipes.push(new pipe());
}

function draw(){
if(!game_over){

  background(Hintergrund,[255]);
  bird.move();
  bird.display();
  for(var i=pipes.length-1;i>=0;i--){
    pipes[i].show();
    pipes[i].move();
    pipes[i].hit();
    pipes[i].punkte();

    if(pipes[i].offscreen()){
      pipes.slice(i,1);



    }
  }
  if(pipes.length>20){
    pipes = pipes.slice(0,1);
  }

  if(frameCount%100===0){
    pipes.push(new pipe());
  }



score.innerHTML ="Score: " +  points;
/*if(points%10===0 && points>0 && !duke_nukem_sound.isPlaying()){
  duke_nukem_sound.play();
}*/

}
else{
  background(game_over_pic,[130]);
  textSize(30);
  fill(20);
  text("Press r to play again!",180,50);
  if(game_over_sound_played===false){
      duke_nukem_sound_game_over.play();
      game_over_sound_played = true;
    document.addEventListener("keydown",function(event){
      if(event.keyCode==82){
        location.reload();
      }
    })
      }
  }


}
