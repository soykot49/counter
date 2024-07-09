const counterElement=document.getElementById('counter')
const plusBtn=document.getElementById('plusBtn')
const minusBtn=document.getElementById('minusBtn')

let counter=0

let updateValue=(value)=>{
    
//plus-button
counter=counter+value;
counterElement.innerText=counter
if(counter >= 10){
plusBtn.setAttribute('disabled',true)
}else{
plusBtn.removeAttribute('disabled',true)
}

//minus-button
if(counter <= 0){
minusBtn.setAttribute('disabled',true)
}else{
minusBtn.removeAttribute('disabled',true)
}
}

plusBtn.addEventListener('click',()=>{
  updateValue(1)

});

minusBtn.addEventListener('click',()=>{
    updateValue(-1)
});