function demeritPoints(){
    let speed = parseInt(prompt("Enter Speed")) //prompt allows input of speed of vehicle
    let speedLimit = 70;
    let tempo = (speed - speedLimit)
    let points = tempo*0.2;
    if (speed <= 70){
        document.writeln("Ok"); //Prints ok if speed <=70
    }else{ 
         if (points > 12 ){
              document.writeln("Licence suspended") //prints licence suspended if the points exceed 12
    }else {
         document.writeln (points) //prints out the points earned if speed >70
    }
        
    
    }
}
//demeritPoints();