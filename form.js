class Form{
 constructor(){
     this.title=createElement('h1')
     this.button=createButton("PLAY")
 }
     display(){

         this.title.html("THE ANIMAL DOCTOR")
         this.title.position(displayWidth/2-400,displayHeight/4)
         this.title.style('font-size', '70px');
         this.title.style('color', 'black');
         this.button.position(displayWidth/2-100,displayHeight/2+200)
         this.button.style('width', '200px');
         this.button.style('height', '47px');
         this.button.style('background', 'lightpink');
         this.button.style('font-size','20px')
         

         this.button.mousePressed(()=>{
             gameState="Intro"
             this.button.hide()
             this.title.hide()
         })
         /*this.reset.mousePressed(()=>{
            gameState="Start";
        })*/
        
     }

}

