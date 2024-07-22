let myCheckBox=document.querySelector ('#myCheckBox')
let masterCard=document.querySelector ('#masterCard')
let visaCard=document.querySelector ('#visaCard')
let debitCard=document.querySelector ('#debitCard')



let mySubmit=document.querySelector('.mySubmit').onclick=function(){

    if(myCheckBox.checked){

        document.querySelector('.result').textContent='You Are Subscribed'
    }

    

    else{
        document.querySelector('.result').textContent='You Are NOt Subscribed'

    }

    if(masterCard.checked){

        document.querySelector('.result2').textContent='You Are Paying with Master Card'


    }

    else if(visaCard.checked){

        document.querySelector('.result2').textContent='You Are Paying with Visa Card'



    }

    else if(debitCard.checked){

document.querySelector('.result2').textContent='You Are Paying with Debit Card'



}

else{
    document.querySelector('.result2').textContent='You Must Select The Payment Method'


}
}