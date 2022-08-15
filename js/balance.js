
//deposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    //get value from input
    const depositField = document.getElementById('deposit-field');
    const depositAmount = parseFloat(depositField.value);
    //display deposit amount
    const depositDisplay = document.getElementById('deposit-display');
    const previousAmount = depositDisplay.innerText;
    const totalDeposit = depositAmount + parseFloat(previousAmount);
    depositDisplay.innerText = totalDeposit;
    //clear field
    depositField.value = '';
    //add to balance
    const balanceDisplay = document.getElementById('Balance-display');
    const balance = parseFloat(balanceDisplay.innerText);
    const totalBalance = balance + depositAmount;
    balanceDisplay.innerText = totalBalance;
})
//Withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //get value from input
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(withdrawField.value);
    //display withdraw amount
    const withdrawDisplay = document.getElementById('withdraw-display');
    const previousAmount = withdrawDisplay.innerText;
    const totalWithdraw = withdrawAmount + parseFloat(previousAmount);
    withdrawDisplay.innerText = totalWithdraw;

    //clear field
    withdrawField.value = '';

    //Sub to balance
    const balanceDisplay = document.getElementById('Balance-display');
    const balance = parseFloat(balanceDisplay.innerText);
    const totalBalance = balance - withdrawAmount;
    balanceDisplay.innerText = totalBalance;

})