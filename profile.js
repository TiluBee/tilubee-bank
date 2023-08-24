let pin = document.getElementById("pin")
let bodiu = document.getElementById("bodiu")
let prmt = document.getElementById("prmt")
let body = document.getElementById("body")
let newpin = document.getElementById("pinnew")
let NewName = document.getElementById("NewName")
let NewAdd = document.getElementById("NewAdd")
let NewNum = document.getElementById("NewNum")
let NewPass = document.getElementById("NewPass")
let userinfo = JSON.parse(localStorage.getItem('userinfo')) ||[]
let CurrentUser = JSON.parse(localStorage.getItem("CU")) || []
let Current = JSON.parse(localStorage.getItem("UserPin")) || []
// let CurrentUser1 = []
let edit = []
let arr = []
if(CurrentUser == ""){
    window.location.href = "signin.html"; 

}

    // for (i =0; i < arr.length; i++){
    //     if(arr.pin == undefined){
    //         // alert("good")
    //         document.getElementById("bodiu").style.display = "block"
    //         document.getElementById("prmt").style.display = "block"
            
    //     }else{
    //         document.getElementById("body").style.display = "block"
    //         document.getElementById("prmt1").style.display = "block"
    //         }
    // }



function oka(){
   
    if(pin.value.length < 4){
        alert("Your pin should be 4 numbers")
    }else if(pin.value.length > 4){
        alert("Your pin should be 4 numbers")
    }else if(isNaN(pin.value)){
        alert("your pin should be 4 numbers")
    }else{
    let piny = {
        pin: pin.value,
    }
    //findind the index of the currentCustomer from the allBankEaseUser local storage
let currentCustomerIndex = userinfo.findIndex(user => user.accountNumber == CurrentUser.accountNumber)
console.log(currentCustomerIndex);
userinfo[currentCustomerIndex].transactionpin.push(piny);
CurrentUser.transactionpin.push(piny)
    // Current.push(piny)
    // console.log(Current)
                //updating the current user details in the local storage
                localStorage.setItem('CU', JSON.stringify(CurrentUser));

                //updating all the bankEase users details in the local storage
                localStorage.setItem('userinfo', JSON.stringify(userinfo));
    // localStorage.setItem("UserPin", JSON.stringify(Current))
    alert("Transaction Pin has been set")
    document.getElementById("bodiu").style.display = "none"
        document.getElementById("prmt").style.display = "none"
}
}
function setpin(){
    // if(CurrentUser.transactionpin == ""){
    // arr.push(Current)
    // console.log(arr)
    // }
    if(CurrentUser.transactionpin== ""){
        bodiu.style.display = "block"
        prmt.style.display = "block"
    }else{
        body.style.display = "block"
        document.getElementById("prmt1").style.display = "block"
        }
    }
    function okayy(){
        body.style.display = "none"
        document.getElementById("prmt1").style.display = "none"
        document.getElementById("biv").style.display = "block"
        document.getElementById("prt").style.display = "block"
    }
    function okai(){
        // alert("wise")
        document.getElementById("body").style.display = "none"
        document.getElementById("prmt1").style.display = "none"
    
    }
function okk(){
    if(newpin.value.length > 4){
        alert("Your Transaction pin must be 4 numbers")
    }else if(newpin.value.length < 4){
        alert("Your Transaction pin must be 4 numbers")
    }else{
    let NP = {
        pin: newpin.value,
    }
    let i = 0
    CurrentUser.transactionpin.splice(i, 1, NP)
    console.log(CurrentUser.transactionpin)
    let currentCustomerIndex = userinfo.findIndex(user => user.accountNumber == CurrentUser.accountNumber)
console.log(currentCustomerIndex);
userinfo[currentCustomerIndex].transactionpin.splice(i, 1, NP);
// CurrentUser.transactionpin.push(piny)
    // Current.push(piny)
    // console.log(Current)
                //updating the current user details in the local storage
                localStorage.setItem('CU', JSON.stringify(CurrentUser));

                //updating all the bankEase users details in the local storage
                localStorage.setItem('userinfo', JSON.stringify(userinfo));
    alert("Your pin has been reset successfully")
    document.getElementById("biv").style.display = "none"
        document.getElementById("prt").style.display = "none"

}
}
function homey(){
    window.location.href = "homepage.html"; 
}
function transfer(){
    window.location.href = "transfer.html"; 

}
function settings(){
    window.location.href = "profile.html"; 

}
function history(){
    window.location.href = "history.html"; 
}
function editProfile(){
    // alert("good")
    document.getElementById("bankT").style.display = "block";
    edit.push(CurrentUser)
    console.log(edit)
    for (i =0; i < edit.length; i++){
        // console.log(CurrentUser.fullname)
        NewName.value= CurrentUser.fullname
        NewAdd.value= CurrentUser.address
        NewNum.value= CurrentUser.number
        NewPass.value= CurrentUser.password
        
    }
}
function update(){
    CurrentUser.fullname = NewName.value
    CurrentUser.address = NewAdd.value
    CurrentUser.number = NewNum.value
    CurrentUser.password = NewPass.value
    console.log(CurrentUser)
    localStorage.setItem("CU", JSON.stringify(CurrentUser))
    alert("Your Profile has been edited successfully")

}
let fileBtn = document.getElementById("file")
let result2 = localStorage.getItem("pfImg")
if (result2){
    fileBtn.style.backgroundImage = `url(${result2})`
    document.getElementById("filey").style.backgroundImage = `url(${result2})`
}
function upload(){
    
    let reader = new FileReader()
    let file = fileBtn.files[0]
    console.log(file)
    reader.addEventListener("load", (e) =>{
        let result = e.target.result
        fileBtn.style.backgroundImage = `url(${result})`
        // document.getElementById("filey").style.backgroundImage = `url(${result})`
        localStorage.setItem("pfImg", result)
    })
    if (file){
        reader.readAsDataURL(file)
    }
}
function logout(){
    localStorage.removeItem("CU")
    window.location.href = "signin.html"; 
}
function noneback(){
    document.getElementById("bankT").style.display = "none"
}
function Referfriends(){
    document.getElementById("Refer").style.display = "block"
    document.getElementById("show").innerHTML = CurrentUser.Referralcode
}
function referrals(){
    document.getElementById("Referrals").style.display = "block"
}
let trans = []
let hi = []
function ReferralHistory(){
    CurrentUser.transactionHistory.forEach((element, index) =>{
    let transactionAmount = element.transferAmount
    console.log(transactionAmount)
    // let transactions = CurrentUser.transactionHistory
    // console.log(element.senderAccountName)
        if(element.senderAccountName == "Referral Bonus" ){
            // alert("good")
            trans.push(element)
            console.log(trans)
            hi.push(element.transferAmount)
            console.log(hi)
            let totalanswer = `#${trans.length * 1000}`
            // let totalanswer = hi.reduce((total, num) => total + num)
            document.getElementById("tot").innerHTML = totalanswer

            document.getElementById("inff").innerHTML +=`<div class = "infos"><a>${element.receipientAccountName}</a><a>#${element.transferAmount}</a><a>${element.transactionTime}</a></div><br>`
            document.getElementById("tit").innerHTML = `${trans.length}`
            // document.getElementById("tit").innerHTML = 
    }})}
    ReferralHistory()
function nonback(){
    document.getElementById("Refer").style.display = "none"
}
function noback(){
    document.getElementById("Referrals").style.display = "none"
}