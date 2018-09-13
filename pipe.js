function pipe(){
  var length = Math.random()*height-70;
  this.breite = 40;
  var distance = 110;
  var corrected_start = 20;
  var succeed = true;
  this.speed = 5;
  this.highlight = false;
  this.x = width-this.breite;
  this.y = height-(height-length-distance);
  this.show = function(){
    fill(200);

    if(this.highlight===true){
      fill(20,20,20);
    }
    image(Rocket_down,this.x,-corrected_start,this.breite,length);
    image(Rocket_up,this.x,this.y,this.breite,height-this.y+corrected_start);

  }

  this.move = function(){
    this.x-= this.speed;
  }
  this.offscreen = function(){
    if(this.x<0){
      return true;
    }
    else{
      return false;
    }
  }
  this.hit = function(){
    if(bird.x+bird.width>this.x && bird.x+bird.width <this.x+this.breite && bird.y<length-corrected_start ||
      bird.x+bird.width>this.x && bird.x+bird.width<this.x+this.breite && bird.y+bird.height > this.y+corrected_start ){
        this.highlight=true;
        game_over=true;
        return true;
      ;
    }
  this.punkte = function(){
    if(bird.x+bird.width>this.x&& bird.x+bird.width <this.x+this.breite && bird.y>length-corrected_start
        && bird.x+bird.width>this.x && bird.x+bird.width<this.x+this.breite && bird.y+bird.height < this.y+corrected_start&&succeed){
          points +=1;
          succeed = false;

        }

  }
  }



}
