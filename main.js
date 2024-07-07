const calories = document.querySelector("#calories");
const calculateBtn = document.querySelector("#calculate-btn");
const age = document.querySelector("#age");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const gender = document.querySelector("#gender");

const calculareBMR = (weight, height, age, gender) => {
    if(gender == 1){
        return 10 * weight + 6.25 * height - 5 * age + 5;
      }else{
        return 10 * weight + 6.25 * height - 5 * age - 161;}
};


calculateBtn.addEventListener("click", ()=>{
    let BMR = calculareBMR(weight.value, height.value, age.value, gender.value);
    calories.innerHTML = BMR;
});