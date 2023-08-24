let userinfo = JSON.parse(localStorage.getItem('userinfo')) ||[]
let CurrentUser = JSON.parse(localStorage.getItem("CU")) || []
let CurrentTime = JSON.parse(localStorage.getItem("CT")) || []
let Current = JSON.parse(localStorage.getItem("UserPin")) || []


function dropdown(){
    if(document.getElementById("dop").style.display != "block"){
        document.getElementById("dop").style.display = "block"
        document.getElementById("c").innerHTML = '<i class="icofont-caret-up"></i>'
    }else{
        document.getElementById("dop").style.display = "none"
        document.getElementById("c").innerHTML = '<i class="icofont-caret-down"></i>'

    }
}
function airtel(){
    if(document.getElementById("but").style.backgroundColor != "green"){
        document.getElementById("buty").style.backgroundColor = "white"
        document.getElementById("buty").style.border = "1px solid black"
        document.getElementById("butyy").style.backgroundColor = "white"
        document.getElementById("butyyy").style.backgroundColor = "white"
        document.getElementById("butyyy").style.border = "1px solid black"
        document.getElementById("butyy").style.border = "1px solid black"
    document.getElementById("but").style.backgroundColor = "green"
    document.getElementById("but").style.border = "none"
    document.getElementById("imgi").innerHTML = '<img class="net" src="airtel.png">'
    document.getElementById("dop").style.display = "none"
        document.getElementById("c").innerHTML = '<i class="icofont-caret-down"></i>'
    }else{
        document.getElementById("but").style.backgroundColor = "white"
    document.getElementById("but").style.border = "1px solid black"

    }
}
function mobil(){
    if(document.getElementById("buty").style.backgroundColor != "green"){
        document.getElementById("but").style.backgroundColor = "white"
        document.getElementById("but").style.border = "1px solid black"
        document.getElementById("butyy").style.backgroundColor = "white"
        document.getElementById("butyyy").style.backgroundColor = "white"
        document.getElementById("butyyy").style.border = "1px solid black"
        document.getElementById("butyy").style.border = "1px solid black"
        document.getElementById("buty").style.backgroundColor = "green"
        document.getElementById("buty").style.border = "none"
        document.getElementById("imgi").innerHTML = '<img class="net" src="9mobile.png">'
        document.getElementById("dop").style.display = "none"
            document.getElementById("c").innerHTML = '<i class="icofont-caret-down"></i>'
        }else{
            document.getElementById("buty").style.backgroundColor = "white"
        document.getElementById("buty").style.border = "1px solid black"
    
        }
}
function glo(){
    if(document.getElementById("butyy").style.backgroundColor != "green"){
        document.getElementById("but").style.backgroundColor = "white"
        document.getElementById("but").style.border = "1px solid black"
        document.getElementById("buty").style.backgroundColor = "white"
        document.getElementById("buty").style.border = "1px solid black"
        document.getElementById("butyyy").style.backgroundColor = "white"
        document.getElementById("butyyy").style.border = "1px solid black"
        document.getElementById("butyy").style.backgroundColor = "green"
        document.getElementById("butyy").style.border = "none"
        document.getElementById("imgi").innerHTML = '<img class="net" src="glo.jpg">'
        document.getElementById("dop").style.display = "none"
            document.getElementById("c").innerHTML = '<i class="icofont-caret-down"></i>'
        }else{
            document.getElementById("butyy").style.backgroundColor = "white"
        document.getElementById("butyy").style.border = "1px solid black"
    
        }

}
function mtn(){
    if(document.getElementById("butyyy").style.backgroundColor != "green"){
        document.getElementById("but").style.backgroundColor = "white"
        document.getElementById("but").style.border = "1px solid black"
        document.getElementById("buty").style.backgroundColor = "white"
        document.getElementById("buty").style.border = "1px solid black"
        document.getElementById("butyy").style.backgroundColor = "white"
        document.getElementById("butyy").style.border = "1px solid black"
        document.getElementById("butyyy").style.backgroundColor = "green"
        document.getElementById("butyyy").style.border = "none"
        document.getElementById("imgi").innerHTML = '<img class="net" src="mtn.png">'
        document.getElementById("dop").style.display = "none"
            document.getElementById("c").innerHTML = '<i class="icofont-caret-down"></i>'
        }else{
            document.getElementById("butyyy").style.backgroundColor = "white"
        document.getElementById("butyyy").style.border = "1px solid black"
    
        }

}
let rechargenum = document.getElementById("rechargenum")
document.getElementById("rechargenum").value = CurrentUser.number
function fifty(a){
    document.getElementById("bodiu").style.display = "block"
    document.getElementById("confirm").style.display = "block"
                let amountRec = document.getElementById("amtt").innerHTML
    document.getElementById("amtt").innerHTML = Number(a).toLocaleString() 
    document.getElementById("amtty").innerHTML = Number(a).toLocaleString()
    document.getElementById("balance").innerHTML = Number(CurrentUser.accountBalance).toLocaleString()
    if(document.getElementById("butyyy").style.backgroundColor == "green"){
       document.getElementById("dimg").innerHTML = '<img class="net" src="mtn.png">'
    }else if(document.getElementById("butyy").style.backgroundColor == "green"){
        document.getElementById("dimg").innerHTML = '<img class="net" src="glo.jpg">'
    }else if(document.getElementById("buty").style.backgroundColor == "green"){
        document.getElementById("dimg").innerHTML = '<img class="net" src="9mobile.png">'
    }else if(document.getElementById("but").style.backgroundColor == "green"){
        document.getElementById("dimg").innerHTML = '<img class="net" src="airtel.png">'
    }
}
function proceedd(){
    document.getElementById("bodiu").style.display = "block"
    document.getElementById("confirm").style.display = "block"
    document.getElementById("bodiu").style.display = "block"
    document.getElementById("confirm").style.display = "block"
    let amountrechar = document.getElementById("amountrechar").value
    // let amountRec = document.getElementById("amtt").innerHTML
    document.getElementById("amtt").innerHTML = Number(amountrechar).toLocaleString() 
    document.getElementById("amtty").innerHTML = Number(amountrechar).toLocaleString()
    document.getElementById("balance").innerHTML = Number(CurrentUser.accountBalance).toLocaleString()
    if(document.getElementById("butyyy").style.backgroundColor == "green"){
       document.getElementById("dimg").innerHTML = '<img class="net" src="mtn.png">'
    }else if(document.getElementById("butyy").style.backgroundColor == "green"){
        document.getElementById("dimg").innerHTML = '<img class="net" src="glo.jpg">'
    }else if(document.getElementById("buty").style.backgroundColor == "green"){
        document.getElementById("dimg").innerHTML = '<img class="net" src="9mobile.png">'
    }else if(document.getElementById("but").style.backgroundColor == "green"){
        document.getElementById("dimg").innerHTML = '<img class="net" src="airtel.png">'
    }

}
function pay(){
    document.getElementById("confirm").style.display = "none"
    document.getElementById("soil").style.display = "block"
}
function back(){
    document.getElementById("confirm").style.display = "none"
    document.getElementById("bodiu").style.display = "none"
}
function bacck(){
    document.getElementById("confirm").style.display = "block"
    document.getElementById("soil").style.display = "none"

}

function enterPin(btn) {
    firstPinInput.focus();
    firstPinInput.value = btn;
}
function moveToNext(currentInput, nextInputId) {
    var inputValue = currentInput.value;

    if (inputValue.length === 1) {
        document.getElementById(nextInputId).focus();
    }

}
function under(){
    document.getElementById("bodi12").style.display = "none"
        document.getElementById("prmto12").style.display = "none"
}
function validatePin() {
    let pinDigits = '';
    let pinInputs = document.querySelectorAll('input[type="password"]');

    for (let i = 0; i < pinInputs.length; i++) {
        if (pinInputs[i].value === '') {
            document.getElementById("bodi12").style.display = "block"
        document.getElementById("prmto12").style.display = "block"
            return;
        }
        pinDigits += pinInputs[i].value;
        // console.log(pinDigits)
    }
    let currentCustomerIndex = userinfo.findIndex(user => user.accountNumber == CurrentUser.accountNumber)
console.log(currentCustomerIndex);

    console.log('PIN entered:', pinDigits);
let foundpin = CurrentUser.transactionpin.find((f)=> f.pin == pinDigits) 
    if (foundpin) {
        //transaction is successful

        if (CurrentUser.accountBalance < 50) {
            document.getElementById("bod211").style.display = "block";
            document.getElementById("ldd").style.display = "block";
            setTimeout(() => {
                document.getElementById("bod211").style.display = "none";
                document.getElementById("ldd").style.display = "none";
            }, 2000);
            setTimeout(() => {
                alert("Insufficient Fund");
                for (let i = 0; i < pinInputs.length; i++) {
                    pinInputs[i].value = '';
                }
            }, 2500);
        } else {
            //getting the currentCustomer account balance after a successful transaction
            CurrentUser.accountBalance -= 50;
            console.log("currentUser accountBalance: " + CurrentUser.accountBalance);
            //updating the currentCustomer account balance after a successful transaction
            userinfo[currentCustomerIndex].accountBalance = CurrentUser.accountBalance;
            document.getElementById("bod211").style.display = "block";
                document.getElementById("ldd").style.display = "block";
            setTimeout(() => {
                document.getElementById("bod211").style.display = "none";
                document.getElementById("ldd").style.display = "none";
                // document.getElementById("soily").style.display = "none";
                let amountRec = document.getElementById("amtt").innerHTML
                document.getElementById("amitt").innerHTML = amountRec
                // alert("good")

                document.getElementById('trvv').style.display = "block";
                // document.getElementById("transfer-successful-amount").innerHTML = Number(transferAmount.innerHTML).toLocaleString();
            }, 2000);
            const date = new Date();

            const options = {
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            };

            //formatting the date to this format May 28 at 12:50 PM
            const formattedDate = date.toLocaleString('en-US', options);
            if(document.getElementById("butyyy").style.backgroundColor == "green"){
                operatoryy = "MTN"
             }else if(document.getElementById("butyy").style.backgroundColor == "green"){
                 operatoryy = "GLO"
                // alert("GLO")
             }else if(document.getElementById("buty").style.backgroundColor == "green"){
                 operatoryy = "9MOBILE"
             }else if(document.getElementById("but").style.backgroundColor == "green"){
                 operatoryy = "AIRTEL"
             }else{
                operatoryy = "MTN"

             }
            console.log(formattedDate);
                        //generating a reference ID for the transaction
                        let referenceID = Math.floor(Math.random() * Number(1000000000000000));
                        let amountRec = document.getElementById("amtt").innerHTML
                        let AirtimeData = {
                            transactionType: "Airtime Purchased",
                            PurchasedAmount: amountRec,
                            Operator: operatoryy,
                            PhoneNumber: rechargenum.value,
                            Status: "Successful",
                            transactionTime: formattedDate,
                            transactionYear: date.getFullYear(),
                            transactionReference: referenceID
                        }
                                    //pushing the transaction data of the money sent into the currentCustomer transactionHistory field after a successful transaction
            userinfo[currentCustomerIndex].transactionHistory.push(AirtimeData);

            //updating the current user transactionHistory by pushing the data of the money sent into the currentCustomer transactionHistory field after a successful transaction
            CurrentUser.transactionHistory.push(AirtimeData);

            localStorage.setItem('CU', JSON.stringify(CurrentUser));

            //updating all the bankEase users details in the local storage
            localStorage.setItem('userinfo', JSON.stringify(userinfo));
                    }}
            else {
                alert("Invalid Transaction Pin")
                for (let i = 0; i < pinInputs.length; i++) {
                    pinInputs[i].value = '';
                }
                pinInputs[0].focus();
            }
        }
        function norm(){
            window.location.href = "transfer.html"; 
        }
        function done(){
            document.getElementById("trvv").style.display = "none"
            document.getElementById("soil").style.display = "none"
            document.getElementById("bodiu").style.display = "none"
            document.getElementById("confirm").style.display = "none"
        }