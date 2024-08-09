const Form =  document.querySelector('form')

Form.addEventListener('submit' , (e)=>{

    e.preventDefault();

    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;
    const results = document.querySelector('#result');
    const feedback = document.querySelector('#feedback');

    const BMI = (weight/((height*height)/10000)).toFixed(2)
    
    if (isNaN(height) || height === '') {
        results.innerHTML = "Please Fill Input🙄"
    } else if(isNaN(weight) || weight === ''){
         results.innerHTML = "Please Fill Input🙄"

    }else{
        results.innerHTML = BMI;
    }
   
    



    if ( BMI < 18.4) {
        feedback.innerHTML = "Underweight 😟";

    } else if (BMI >= 18.5 && BMI <= 24.9) {
        feedback.innerHTML = "Normal 😃";
    } else if (BMI >= 25.0 && BMI <= 39.9) {
        feedback.innerHTML = "Overweight 😞 ";
    } else if (BMI >= 40.0) {
        feedback.innerHTML = "Obese 😲";
    }

})



document.getElementById("refreshButton").addEventListener("click", function() {
    location.reload();
});