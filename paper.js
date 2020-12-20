class Paper{

    constructor(x,y,radius){

        var paper_options={

           isStatic:false,
            restitution:0.2,
            density:1.2,
            friction:0.3
        }

        this.body=Bodies.circle(x,y,radius,paper_options);
        this.radius=radius;
        this.image=loadImage("paper.png");
        World.add(world,this.body);

    }

    display(){
  
        var pos=this.body.position;
        //circleMode(CENTER);
        fill("white");
        circle(pos.x,pos.y,this.radius);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,53,53);

    }

}