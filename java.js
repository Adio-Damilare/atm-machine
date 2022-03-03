var bal = 20000
var disp = 'Welcome, click on any button to start'

function turnOn(){
    userBalance.innerText = "Your balance is: #" +  bal 
    userDetail.innerText = disp
    alert( "welcome to our bank ")
    userBalance.style.backgroundColor = "pink"
    userBalance.style.padding = "20px"

  
}

function depositMoney(){
    userDetail.innerText = 'Kindly enter the amount to deposit'
}

function withDraw(){
    userDetail.innerText = 'Kindly enter the amount to withdraw'
}


function enter(){ 
    if (userDetail.innerText =='Kindly enter the amount to deposit' && userInput.value > 0 ) {
        bal = Number(userInput.value) + bal
        userBalance.innerText = "Your balance is: #" +  bal
        alert("Transaction successful")
        userDetail.innerText = disp 
        userInput.value = ''
        
    }
    else if(userDetail.innerText =='Kindly enter the amount to withdraw' && userInput.value > 0 ){
        bal = bal - Number(userInput.value)  
        userBalance.innerText = "Your balance is: #" +  bal
        alert("Transaction successful")
        userDetail.innerText = disp 
        userInput.value = ''
    }
    else{
        bal = bal 
        alert("invalid")
        userInput.value = ''

    }
}

function cancel(){
    userInput.value = ''

}

function airtime(){
    prompt("Enter your password here ")
}

function checkBalance(){
    userBalance.innerText = " Your total balance is: #" + bal
    userDetail.innerText = ""
    
}