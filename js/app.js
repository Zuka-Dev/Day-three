const weight= document.querySelector("#weight"),
      height=document.querySelector("#height"),
      lbs=document.querySelector("#wunit"),
      calculate=document.querySelector(".btn"),
      reset=document.querySelector(".btn1"),
      myBMI= document.querySelector('.container1')
      ft=document.querySelector("#hunit");
const x= weight.value;
const y= height.value;
const empty = ()=> {
          if (weight.value==="" || height.value==="") {
                    alert("Incomplete Input");
          }
}
const calculation = (e)=>{
          empty();
          let x= weight.value
          let y= height.value
          let BMIs = x/y**2
          const BMI =BMIs.toFixed(2);
          console.log(BMI);
const myWeight= ()=>{
          if (BMI >= 30.0) {
                    console.log('obese');
                    const obese = document.createElement('p');
                 obese.appendChild(document.createTextNode(`Your Body Mass Index is ${BMI}, and you are OBESE try visiting the GYM, unless you want to burst`));
                 obese.style.color='red';
                 weight.style.borderColor='red';
                 height.style.borderColor='red';
                 myBMI.append(obese);
          }
          if (BMI >= 25.0 && BMI < 30.0) {
                    console.log('oweight');
                 const overweight = document.createElement('p');
                 overweight.appendChild(document.createTextNode(`Your Body Mass Index is ${BMI}, and you are OVERWEIGHT try simple workouts and eat healthy`));
                 overweight.style.color ='orangered';
                 weight.style.borderColor='orangered';
                 height.style.borderColor='orangered';
                 myBMI.append(overweight);
          }
          if (BMI >= 18.5 && BMI < 25.0) {
                    console.log('reg');
                 const regular = document.createElement('p');
                 regular.appendChild(document.createTextNode(`Your Body Mass Index is ${BMI}, and you are HEALTHY try and maintain your Fitness level`));
                 regular.style.color="green";
                 weight.style.borderColor='green';
                 height.style.borderColor='green';
                 myBMI.append(regular);
          }
          if (BMI < 18.5) {
                    console.log('uweight');
                 const underweight = document.createElement('p');
                 underweight.appendChild(document.createTextNode(`Your Body Mass Index is ${BMI}, and you are UNDERWEIGHT try eating more`));
                 underweight.style.color= "yellow";
                 weight.style.borderColor='yellow';
                 height.style.borderColor='yellow';
                 myBMI.append(underweight);
          }
                 
}
myWeight();
e.preventDefault();
}
const reseter = (e)=>{
window.location.reload();
}

const loadEventListener = ()=>{
          calculate.addEventListener("click", calculation);
          reset.addEventListener("click", reseter)
}
loadEventListener();