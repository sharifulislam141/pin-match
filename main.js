function generatePin(){
    const pin =  Math.round(Math.random()*10000);
    return pin;
     
     

}

function getPin(){
    const pin = generatePin() + '';
    if( pin.length === 4){
        return pin;

    }
    else{
       return generatePin();
    }

       
        
    }
    

document.getElementById('generate-pin').addEventListener('click',function(){


    const  currentPinField =document.getElementById('display-pin');
    const currentPin = currentPinField.value;
    const newPin = getPin()
    currentPinField.value = newPin;    
})

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText
    const typedNumberField= document.getElementById('typed-number');
    const previousNumber = typedNumberField.value;
    if( isNaN(number)){
        if( number === 'C'){
            typedNumberField.value = '';
        }
        else if( number === '<'){
            const digits = previousNumber.split('');
            digits.pop();
            const remainDigit = digits.join('');
            typedNumberField.value = remainDigit;


        }
    }
    else{
       
       const newNumber = previousNumber+ number;
       typedNumberField.value = newNumber;
    }
    
   
})

document.getElementById('submit').addEventListener('click',function(){
     const generatePin = document.getElementById('display-pin').value;
     const typedPin = document.getElementById('typed-number').value;
     if( generatePin === typedPin){
         document.getElementById('pin-success').style.display = 'block';
         document.getElementById('pin-failed').style.display = 'none';
     }
     else{
        document.getElementById('pin-success').style.display = 'none';
        document.getElementById('pin-failed').style.display = 'block';
     }
})
