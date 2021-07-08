const calcy = () =>{
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let grades = "";
    let total = parseFloat(wd)+ parseFloat(maths)+ parseFloat(comp)+ parseFloat(phy);
    // alert(total);
    let perc = (total/400)*100;

    if(perc <=100 && perc >=80){
        grades = "A";
    }
    else if(perc <= 79  && perc >= 60){
    grades = 'B';
    }else if(perc <= 59  && perc >= 40){
    grades = 'C';
    }else{
    grades = 'F';
    }
      if(wd >100 || maths > 100 || comp >100 || phy > 100){
        document.getElementById('showData').innerHTML = `Please enter marks bewteen 1 to 100.`
      }
     else if(perc >= 39.5){
        document.getElementById('showData').innerHTML = `Out of 400 your total is ${total} and percentage is ${perc}% . <br> Your grade is ${grades}. You are Pass.`
      }
      else{
        document.getElementById('showData').innerHTML = `Out of 400 your total is ${total} and percentage is ${perc}% . <br> Your grade is ${grades}. You are Fail.`
      }


}