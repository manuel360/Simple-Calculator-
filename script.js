let main = document.querySelector('#main');
let buttons= document.querySelectorAll('button')
let display = document.querySelector('#display');
let calc;
let firstnum = ''
let secnum = ''
let operator = null;



function show(value) {
    display.innerHTML=value;

        return display.innerHTML;
}
function clear() {
display.innerHTML = '';
firstnum =''
secnum = ''
operator = null;
}
buttons.forEach(btn =>{
        btn.addEventListener('click', ()=>{
                let inputEl = btn.getAttribute('data-value')
                if (inputEl ==='C') {
                        clear();
                }
                else if(!isNaN(inputEl)){
                    if (operator===null) {
                        firstnum+=inputEl;
                        show(firstnum)
                    }
                        
                    else {
                        secnum+=inputEl;
                        show(secnum)
                    }
                }
                else if(isNaN(inputEl)&&inputEl!=='='){
                        operator = inputEl;
                        show(inputEl)
                     
                }
              
                else if(inputEl ==='='){
                  let result =  show(operate(parseFloat(firstnum), (operator), parseFloat(secnum)))
                 firstnum = result.toString();
                 secnum = ''
                 operator = null;
        
                 
                }
              
        })
})



function operate(first,operation,sec) {
        if (operation ==='+') {
             calc = add(first,sec)
        }
        else if (operation==='-') {
                calc= subtract(first,sec)
        }
        else if (operation ==='/') {
                calc = divide(first,sec)}
        else if(operation ==='x'){
                calc = multiply(first,sec)
        }
      
        
        return calc;
        }
        



function add(a,b) {
let addRes = a+b;
return addRes;
}

function subtract(a,b) {
    let subRes = a-b;
    return subRes;
    }
    
function divide(a,b) {
        let divideRes = a/b;
        if (b ==0) {
               let message = 'error';
                return message;
        }
        return divideRes
}
        
function multiply(a,b) {
        let multiRes = a*b;
         return multiRes;
         }
     
        

  