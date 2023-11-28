const form =document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
   const weight= parseInt(document.querySelector('#weight').value)
   const height= parseInt(document.querySelector('#height').value)
   const result = document.querySelector('#result')
   

   if(height==='' || height<0 ){
    result.innerHTML=`please give valid height ${height}`



   }
   else if(weight==='' || weight<0 ){
    result.innerHTML=`please give valid weight ${weight}`

   }
   else{
     const BMI=(weight/((height/100)**2) ).toFixed(2);
     result.innerHTML= `<span>${BMI}</span>`;
   }
});