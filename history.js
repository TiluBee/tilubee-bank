
function homey(){
    window.location.href = "homepage.html"; 
}
function transfer(){
    window.location.href = "transfer.html"; 

}
function settings(){
    window.location.href = "profile.html"; 

}
function details(){
    document.getElementById("bankT").style.display = "block"
}
function back(){
    document.getElementById("bankT").style.display = "none"

}
let CurrentUser = JSON.parse(localStorage.getItem("CU")) || []
let CurrentTime = JSON.parse(localStorage.getItem("CT")) || []
let arr = []
// let transactions = []
if(CurrentUser == ""){
    window.location.href = "signin.html"; 

}
    document.getElementById("TT").innerHTML = CurrentUser.time
    document.getElementById("dt").innerHTML = CurrentUser.time
    document.getElementById("Name").innerHTML = CurrentUser.fullname


    console.log(CurrentUser.transactionHistory)
    function transactionHistory(){
    CurrentUser.transactionHistory.forEach((element, index) =>{
    let transactionAmount = element.transferAmount
    // let transactions = CurrentUser.transactionHistory
        if(element.transactionType == "Money Sent"){
            document.getElementById("wei").style.color = "red"
        document.getElementById("tephis").innerHTML += `
        <div class= "bank1" onclick="transactioninfo(${index})">
        <button class="bank">
                <i class="icofont-swoosh-up"></i>
            </button>
            <div class="ov">
            <div>
            <b>${element.transactionType}</b><br>
            <br><a class="date">${element.transactionTime} - ${element.receipientAccountName}</a>
            </div>
            <div class="min">
                <b>- #${transactionAmount}.00</b><br>
                <a>successful</a>
            </div>
            </div>
            </div>
        `
        } else if(element.transactionType == "Money Received"){
            // alert("good")
            document.getElementById("tephis").innerHTML += `
            <div class="bank1" onclick="detailserec(${index})">
            <button class="bank">
                <i id="rcs" class="icofont-swoosh-down"></i>
            </button>
            <div class="ov">
            <div><b id="rcs">${element.transactionType}</b><br>
                <br><a class="date">${element.transactionTime} - ${element.senderAccountName}</a></div>
            <div class="min">
                <b id="rcs">+ #${transactionAmount}.00</b><br>
                <a>successful</a>
            </div>
            </div>
        </div><br>
            `
        }else if(element.transactionType == "Airtime Purchased"){
            document.getElementById("tephis").innerHTML += `
        <div class= "bank1" onclick="transactioninfy(${index})">
        <button class="bank">
                <i class="icofont-swoosh-up"></i>
            </button>
            <div class="ov">
            <div>
            <b>${element.transactionType}</b><br>
            <br><a class="date">${element.transactionTime}</a>
            </div>
            <div class="min">
                <b>- #${element.PurchasedAmount}.00</b><br>
                <a>successful</a>
            </div>
            </div>
            </div>
        `
        }
    }
    )}
    transactionHistory()
    function transactioninfo(index){
        document.getElementById("bankTy").style.display = "block"
        let found = CurrentUser.transactionHistory[index];
        console.log(found)
        if (found.transactionType == "Money Sent" || found.transactionType == "Money Received") {
        let transactionAmount = found.transferAmount
        
        document.getElementById("receipt-amount").innerHTML = transactionAmount
        document.getElementById("receipt-at").innerHTML = transactionAmount
        document.getElementById("dty").innerHTML = `${found.transactionTime}`
        document.getElementById("sender-name").innerHTML = `${found.senderAccountName}`
        document.getElementById("receipient-name").innerHTML = `${found.receipientAccountName}`
        document.getElementById("receipient-account").innerHTML = `${found.receipientAccountNumber}`
        document.getElementById("usedfor").innerHTML = `nill`
        document.getElementById("sender-account").innerHTML = `${found.senderAccountNumber}`
        document.getElementById("reference").innerHTML = `${found.transactionReference }`


        }
    }
    function detailserec(index){
        document.getElementById("wei").style.color = "green"
        document.getElementById("bankTy").style.display = "block"
        let found = CurrentUser.transactionHistory[index];
        console.log(found)
        if (found.transactionType == "Money Sent" || found.transactionType == "Money Received") {
        let transactionAmount = found.transferAmount  
        document.getElementById("receipt-amount").innerHTML = transactionAmount
        document.getElementById("receipt-at").innerHTML = transactionAmount
        document.getElementById("dt").innerHTML = `${found.transactionTime}`
        document.getElementById("sender-name").innerHTML = `${found.senderAccountName}`
        document.getElementById("receipient-name").innerHTML = `${found.receipientAccountName}`
        document.getElementById("receipient-account").innerHTML = `${found.receipientAccountNumber}`
        document.getElementById("usedfor").innerHTML = `nill`
        document.getElementById("sender-account").innerHTML = `${found.senderAccountNumber}`
        document.getElementById("reference").innerHTML = `${found.transactionReference }`
        }

    }
function transactioninfy(index){
    document.getElementById("bankTyy").style.display = "block"
        let found = CurrentUser.transactionHistory[index];
        console.log(found)
        if (found.transactionType == "Airtime Purchased") {
        let transactionAmount = found.PurchasedAmount  
        document.getElementById("receipt-amounty").innerHTML = transactionAmount
        document.getElementById("receipt-aty").innerHTML = transactionAmount
        document.getElementById("dtyy").innerHTML = `${found.transactionTime}`
        document.getElementById("operator").innerHTML = `${found.Operator}`
        document.getElementById("numb").innerHTML = `${found.PhoneNumber}`
        document.getElementById("receipient-account").innerHTML = `${found.receipientAccountNumber}`
        document.getElementById("usedfor").innerHTML = `nill`
        document.getElementById("sender-account").innerHTML = `${found.senderAccountNumber}`
        document.getElementById("referencey").innerHTML = `${found.transactionReference }`
        }
}
    function back(){
        document.getElementById("bankTy").style.display = "none"
    }
    function backy(){
        document.getElementById("bankT").style.display = "none"
    }
    function backi(){
        document.getElementById("bankTyy").style.display = "none"
        

    }

    
    