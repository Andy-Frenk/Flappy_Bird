

function bird(){
  this.x = 10;
  this.y = 100;
  this.speed = 7;
  this.fall=0;
  this.width=40;
  this.height=40;



  this.move = function(){
    this.fall+=0.4;
    if(this.fall>=5){
      this.fall=5;
    }
    if(this.y>height-40){
      this.y=height-40;
    }
    if(this.y<0){
      this.y=0;
    }

    this.y+=this.fall;
    if(keyIsPressed){
      this.y-=this.speed;
      this.fall=0;
      animation(sequenceFlames,this.x+10,this.y+80,this.width,5);
      if(!flames_sound.isPlaying()){
        //flames_sound.play();
      }

    }
    if(keyIsPressed===false){
    //flames_sound.pause();

  }

  }
  this.display = function(){
    image(duke,this.x,this.y,this.width,this.height);
  }
}
