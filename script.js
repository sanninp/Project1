val = document.getElementsByClassName('form-group row mb-25');
for (j=0 ; j<val.length;j++){
    array = val[j].querySelectorAll('input')
    for(i=0;i<array.length;i++){
        array[i].value= Math.floor((Math.random() * 10) );
    }
    
}

val = document.getElementsByClassName('form-group row mb-25');
for (j=3 ; j<val.length;j++){
    array = val[j].querySelectorAll('input')
    for(i=0;i<array.length;i++){
        array[i].value= Math.floor((Math.random() * 10) );
    }
    
}


document.getElementById("schoolName").value=("Test School")
document.getElementById("villageName").value=("villageName")
document.getElementById("gramPanchayatShow1").value=("gramPanchayat B")
document.getElementById("pinCode").value=("350124")
document.getElementById("crcName").value=("crcName C")
document.getElementById("nameOfTheCommunityDevelopment").value=("Community Development C")
document.getElementById("habitationName").value=("habitation C")
document.getElementById("nameOfEduBlock").value=("EduBlock C")
document.getElementById("nameOfTheAssembly").value=("The Assembly C")
document.getElementById("nameOfTheParl").value=("The Parl C")
document.getElementById("nameOfmunicipality").value=("Municipality C")
document.getElementById("nameOfCity").value=("Banka C")
document.getElementById("address").value=("Banka C")

