function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let caseNumber= productInput.value;
    if(isIncreasing){
    caseNumber= parseInt(caseNumber)+1;
    } else if(caseNumber>0){
        caseNumber= parseInt(caseNumber)-1;
    }
   productInput.value = caseNumber;
   const ProductTotal= document.getElementById (product + '-price');
   ProductTotal.innerText= caseNumber * price;

calCulation();
}
//get input for calculation
function getInputProduct(product){
    const getPhoneNumber= document.getElementById(product + '-number');
    const productNumberValue = parseInt(getPhoneNumber.value);
    return productNumberValue;
}
//passing price
function calCulation(){
    const phonePrice = getInputProduct('phone') * 1221;
    const casingPrice = getInputProduct ('case') * 59;
    const subTotal = phonePrice+casingPrice;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

//Event Handelar for phone
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1221, true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1221, false);
})


// Event Handeler for casing 
document.getElementById('plus-btn').addEventListener('click',function(){
    updateProductNumber('case',59, true);

})
document.getElementById('minus-btn').addEventListener('click',function(){
    updateProductNumber('case',59, false);
 
})
