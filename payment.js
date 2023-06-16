function taxes(){
    var taxableIncome = parseInt(prompt("Enter taxable income")); //promt allows user to enter taxableincome
    
    
    let rates ;
    
    if(taxableIncome <= 24000){
        let rates = 0.1
        document.writeln(taxableIncome*rates) // returns the rate
    }else if (taxableIncome >=24001 && taxableIncome <= 32333){
        let rates = 0.25
        document.writeln (taxableIncome*rates) // returns the rate
    }else if (taxableIncome > 32333){
        let rates = 0.3
        document.writeln(taxableIncome*rates) // returns the rates
    }


let benefits;
let loan = parseInt(prompt("Enter\n 1:No loan \n 2:Taken Loan"))// promt allows user to enter if he/she has taken a loan

if (loan === 1){
    benefits = 0
    if (benefits = 0){
        document.writeln("0")
    }
}
let months = parseInt(prompt("Enter\n 1:January to March \n 2: April to June \n 3:July to September \n 4:October to December")) //prompt allows user to choose month range
if (loan ===2){
if (months = 1){
    benefits = (taxableIncome*0.07);
    document.writeln(taxableIncome*0.07); //returns benefits of the user
    }else if (months = 2){
    benefits = (taxableIncome*0.07);
    document.writeln(taxableIncome*0.07); //returns benefits of the user
    }else if (months = 3){
        benefits = (taxableIncome*0.08);
        document.writeln(taxableIncome*0.08); //returns benefits of the user
    }else if (months = 4){
        benefits = (taxableIncome*0.09);
        document.writeln(taxableIncome*0.09); //returns benefits of the user
    }
}

let NHIF; // calculates the amount deducted for NHIF
if (taxableIncome <= 5999){
    let NHIF = 150
    document.writeln(taxableIncome - NHIF) //returns NHIF deductions in the range stated
}else if (taxableIncome >= 6000 && taxableIncome <= 7999){
    let NHIF = 300
    document.writeln(taxableIncome - NHIF) //returns NHIF deductions in the range stated
}else if (taxableIncome >= 8000 && taxableIncome <= 11999){
    let NHIF = 400
    document.writeln(taxableIncome - NHIF) //returns NHIF deductions in the range stated
}else if (taxableIncome >= 12000 && taxableIncome <= 14999){
    let NHIF = 500
    document.writeln(taxableIncome - NHIF) //returns NHIF deductions in the range stated
}else if (taxableIncome >= 15000 && taxableIncome <= 19999){
    let NHIF = 600
    document.writeln(taxableIncome -NHIF) //returns NHIF deductions in the range stated
}else if (taxableIncome >= 20000 && taxableIncome <= 24999){
    let NHIF = 750
    document.writeln(taxableIncome - NHIF) //returns NHIF deductions in the range stated
}else if (taxableIncome >= 25000 && taxableIncome <= 29999){
    let NHIF = 850
    document.writeln(taxableIncome - NHIF) //returns NHIF deductions in the range stated
}else if (taxableIncome >= 30000 && taxableIncome <= 34999){
    let NHIF = 900
    document.writeln(taxableIncome - NHIF) //returns NHIF deductions in the range stated
}else if (taxableIncome >= 35000 && taxableIncome <= 39999 ){
    let NHIF =950 
    document.writeln(taxableIncome - NHIF) //returns NHIF deductions in the range stated
}else if (taxableIncome >= 40000 && taxableIncome <= 44999 ){
    let NHIF =1000
    document.writeln(taxableIncome - NHIF) //returns NHIF deductions in the range stated
}else if (taxableIncome >= 45000 && taxableIncome <= 49999 ){
    let NHIF =1100
    document.writeln(taxableIncome - NHIF) //returns NHIF deductions in the range stated
}else if (taxableIncome >= 50000 && taxableIncome <= 59999 ){
    let NHIF =1200
    document.writeln(taxableIncome - NHIF) //returns NHIF deductions in the range stated
}else if (taxableIncome >= 60000 && taxableIncome <= 69999 ){
    let NHIF =1300
    document.writeln(taxableIncome - NHIF) //returns NHIF deductions in the range stated
}else if (taxableIncome >= 70000 && taxableIncome <= 79999 ){
    let NHIF =1400
    document.writeln(taxableIncome - NHIF) //returns NHIF deductions in the range stated
}else if (taxableIncome >= 80000 && taxableIncome <= 89999 ){
    let NHIF =1500
    document.writeln(taxableIncome - NHIF) //returns NHIF deductions in the range stated
}else if (taxableIncome >= 90000 && taxableIncome <= 99999 ){
    let NHIF =1600
    document.writeln(taxableIncome - NHIF) //returns NHIF deductions in the range stated
}else if (taxableIncome >= 100000 ){
    let NHIF =1700
    document.writeln(taxableIncome - NHIF) //returns NHIF deductions in the range stated
}


let NSSF ; //calculates the NSSF deductions

var Tier = parseInt(prompt("choose you NSSF tier group\n 1:Tier 1\n 2:Tier 2")) // Allows user to choose the Tire he/she is in
if (Tier ===1){
NSSF = taxableIncome*0.06
if (NSSF <= 360){
    document.writeln(NSSF) // calculates the NSSF deductions in tier 1
}else{
    (NSSF = 360)
    document.writeln(NSSF) // calculates the NSSF deductions in tier 1

    }    
 } 
else if (Tier ===2){
    NSSF = taxableIncome*0.06
    if(NSSF <= 1080){
        document.writeln(NSSF) // calculates the NSSF deductions in tier 2
    }else{
        (NSSF = 1080)
            document.writeln(NSSF) // calculates the NSSF deductions in tier 2
      
    }
}

}
taxes();

