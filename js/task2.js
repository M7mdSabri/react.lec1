alert('💰💵💸💲  شــخــلل 😎 عشان تعدي   💲💸💵💰');

function convertCurrency(){
    var dollar = document.getElementById('dollarinput').value;
    var result = document.getElementById('result');
    
    if(dollar==""){
        result.innerHTML = "أدخل قيمة  عشان احولهالك";
    }else if (isNaN(dollar)){
        result.innerHTML = "لازم تكتب رقم طال عمرك";
    }else if(dollar<0){
        result.innerHTML = "ادخل رقم أزيد من صفر يا حلاوه";
    }else if(dollar==0){
        result.innerHTML = "وبعدين معاك ما تكتب رقم يا جدع انت";
    }else{
        result.innerHTML = " لحلوح مصري " + dollar*50;
}
return false
}