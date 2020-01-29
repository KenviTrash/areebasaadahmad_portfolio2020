function snake()
{
  this.x = 0;
  this.y = 0;
  this.xspeed = 0;
  this.yspeed = 0;
  this.total = 0;
  this.trail = [];
  colorR = 102;
  colorB = 0;
  colorG = 105;
  
  this.eat=function(pos)
  {
    var d = dist(this.x,this.y,pos.x,pos.y);
    if (d < 1) 
    {
      this.total++;
      if (colorR === 255)  {
        colorR = 102;
        colorB = 0;
        colorG = 105;    
      }
      else {
        colorR += 25;
        colorB += 15;
        colorG += 5;
      }
      return true;
    }
    else 
    {
      return false;
    }
  }
  
  this.eattrail=function(pos)
  {
    var r = dist(this.x,this.y,pos.x,pos.y);
    if (r < 1)
    {
      this.trail++;
      return true
    }
    else
    {
      return false;
    }
  }
  
  this.dir = function(x, y)
  {
    this.xspeed=x;
    this.yspeed=y;
  }
  
  this.die=function()
  {
    for(var i = 0; i>this.trail; i++)
    {
      var pos=this.trail[i];
      var d = dist(this.x,this.y,pos.x,pos.y);
      if(d<1)
      {
        this.total = 0;
        this.trail=[];
      }
    }
  }
  
  this.update = function()
  {
    if(this.total === this.trail.length){
      for(var i = 0; i < this.trail.length - 1; i++)
      {
        this.trail[i]=this.trail[i+1];
      }
    }
    this.trail[this.total-1] = createVector(this.x,this.y);
    this.x=this.x+this.xspeed*scl;
    this.y=this.y+this.yspeed*scl;
    
    this.x=constrain(this.x,0,width-scl);
    this.y=constrain(this.y,0,height-scl);
  }
  
  this.show=function()
  {
    
    fill(colorR, colorB, colorG);
    for(var i = 0; i<this.trail.length; i++)
    {
      rect(this.trail[i].x,this.trail[i].y,scl,scl);
    }
    rect(this.x,this.y,scl,scl);
  }
}
