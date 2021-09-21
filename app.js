function computeLoan(){
    const amount = document.querySelector('#loan-amount').value;
    const interest_rate = document.querySelector('#interest-rate').value;
    const months = document.querySelector('#duration').value;
    const interest = (amount * (interest_rate * 0.01)) / months;
    let payment = ((amount / months) + interest).toFixed(2); 
    document.querySelector('#payment').innerHTML = `Monthly Payment = ${payment}`; 
    
}