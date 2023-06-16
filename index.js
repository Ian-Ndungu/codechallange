function grading(){
      let points = parseInt(prompt("Enter marks")) // prompt allows user to enter marks 
    if(points > 79 && points <= 100){
         document.write("A"); //prints out the grade of range >79 && <=100 points
    }else if(points >= 60 && points <=79 ){
         document.write("B") //prints out the grade of range >=60 && <=79 points
    }else if (points >= 49 && points <= 59){
         document.write("C") // prints out the grade of range >=49 && <=59 points
    }else if (points >= 40 && points <= 49){
         document.write("D") //prints out the grade of range >=40 && <=49 points
    }else if (points < 40){
         document.write("E") //prints out the grade of range <40 points
    }
}

//grading();
