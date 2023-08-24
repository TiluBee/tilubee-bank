let balance = document.getElementById("balance")
let accit = document.getElementById("accit")
let sentAmount = document.getElementById("sentAmount")
let userinfo = JSON.parse(localStorage.getItem('userinfo')) ||[]
let CurrentUser = JSON.parse(localStorage.getItem("CU")) || []
let CurrentTime = JSON.parse(localStorage.getItem("CT")) || []
let Current = JSON.parse(localStorage.getItem("UserPin")) || []
let beneficiary = JSON.parse(localStorage.getItem("beneficiary")) || []
let result2 = localStorage.getItem("pfImg")
let arr = []
let Benef = []
if(CurrentUser == ""){
    window.location.href = "signin.html"; 

}
    arr.push(CurrentUser)
    Benef.push(beneficiary)
    for (i =0; i < arr.length; i++){
        balance.innerHTML = `${Number(CurrentUser.accountBalance).toLocaleString()}`

    }
function backhom(){
    window.location.href = "homepage.html"; 
}
function settings(){
    window.location.href = "profile.html"; 
}
function Paccount(){
    document.getElementById("tran").style.right = "0px"
}
function backTF(){
    document.getElementById("tran").style.right = "-1500px"
}
let beneficiaryAccount;
function verifyaccount(){
    if(accit.value.length == 11){
        beneficiaryAccount = accit.value
        let beneficiary = userinfo.find((f)=> f.accountNumber == beneficiaryAccount) 
        console.log(beneficiary) 
        if(beneficiary){
            setTimeout(() => {
                for(i =0; i < Benef.length; i++){
                    document.getElementById("nim").innerHTML = `${beneficiary.fullname}`
                    document.getElementById("accy").innerHTML = `${beneficiary.accountNumber}`
                }
            
            document.getElementById("bank1").style.visibility = "visible"
            localStorage.setItem('beneficiary', JSON.stringify(beneficiary))
        },1000)  
    }else{
        document.getElementById("bodiu").style.display = "block"
        document.getElementById("prmt").style.display = "block"
        document.getElementById("head").innerHTML = "Invalid Account Number"
        document.getElementById("message").innerHTML = "Please enter a valid account number and retry"       
        // document.getElementById("tran").style.backgroundColor = "rgba(0,0, 0, 0.5)"

    }
    for(i =0; i < Benef.length; i++){
        document.getElementById("nimi").innerHTML = `${beneficiary.fullname}`
        document.getElementById("accyy").innerHTML = `${beneficiary.accountNumber}`
    }
    
}
}
function oka(){
    document.getElementById("bodiu").style.display = "none"
    document.getElementById("prmt").style.display = "none"

}
function proceed(){
    document.getElementById("trany").style.right = "0px"
}
function backAS(){
    document.getElementById("trany").style.right = "-1500px"
}

function confi(){
    if(sentAmount.value == ""){
        document.getElementById("bodiyt").style.display = "block"
        document.getElementById("prmtoo").style.display = "block"
        document.getElementById("tran").style.backgroundColor = "rgba(0,0, 0, 0.5)"

    }else if(sentAmount.value < 10){
        document.getElementById("bodi1").style.display = "block"
        document.getElementById("prmto1").style.display = "block"
        document.getElementById("heady").innerHTML = "Invalid Amount"
        document.getElementById("messagey").innerHTML = "Please enter an amount that is more than #10"       
        document.getElementById("tran").style.backgroundColor = "rgba(0,0, 0, 0.5)"

    }
    
    else{
    document.getElementById("soil").style.right = "0px"
    document.getElementById("bodiy").style.display = "block"
    document.getElementById("tran").style.backgroundColor = "rgba(0,0, 0, 0.5)"
    document.getElementById("min").innerHTML = Number(sentAmount.value).toLocaleString();
    document.getElementById("miny").innerHTML = Number(sentAmount.value).toLocaleString();
    document.getElementById("minyy").innerHTML = Number(sentAmount.value).toLocaleString();
    document.getElementById("minyyy").innerHTML = Number(sentAmount.value).toLocaleString();
    document.getElementById("nimt").innerHTML = beneficiary.fullname
    document.getElementById("vee").innerHTML =  `${Number(CurrentUser.accountBalance).toLocaleString()}`
    
    }
    console.log(beneficiary)
}
function okay(){
        document.getElementById("bodiyt").style.display = "none"
        document.getElementById("prmtoo").style.display = "none"
        document.getElementById("tran").style.backgroundColor = "white"
        // console.log(document.getElementById("bodie"))
        // alert("Hello")


}
function backyy(){
    document.getElementById("soil").style.right = "-1500px"
    document.getElementById("bodiy").style.display = "none"
    document.getElementById("tran").style.backgroundColor = "white"

}
function pay(){
    if(CurrentUser.transactionpin == ""){
        document.getElementById("bod22").style.display = "block"
        document.getElementById("prmt22").style.display = "block"
    }else{
    document.getElementById("soily").style.right = "0px"
    }
}
function yes(){
    window.location.href = "profile.html"; 

}
function no(){
    document.getElementById("bod22").style.display = "none"
    document.getElementById("prmt22").style.display = "none"
}
function backP(){
    document.getElementById("soily").style.right = "-1500px"

}
function history(){
    window.location.href = "history.html"; 
}
function okayiu(){
    document.getElementById("bodi1").style.display = "none"
        document.getElementById("prmto1").style.display = "none"
        document.getElementById("tran").style.backgroundColor = "white"
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

//getting the beneficiary details by searcining with the beneficiary account number
let foundbeneficiary = userinfo.find((f)=> f.accountNumber == beneficiaryAccount) 
console.log(foundbeneficiary);

//passing the beneficiary first name and last name inside a variable
let beneficiaryName = foundbeneficiary.fullname
console.log(beneficiaryName);

//passing the current customer first name and last name inside a variable
let currentCustomerName = CurrentUser.fullname 
console.log(currentCustomerName);

//findind the index of the currentCustomer from the allBankEaseUser local storage
let currentCustomerIndex = userinfo.findIndex(user => user.accountNumber == CurrentUser.accountNumber)
console.log(currentCustomerIndex);

//finding the index of the recipient from the allBankEaseUser local storage
let recipientIndex = userinfo.findIndex(user => user.accountNumber == foundbeneficiary.accountNumber)
console.log(recipientIndex);

console.log('PIN entered:', pinDigits);
let foundpin = CurrentUser.transactionpin.find((f)=> f.pin == pinDigits) 
    if (foundpin) {
        //transaction is successful

        if (CurrentUser.accountBalance < sentAmount.value) {
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
            CurrentUser.accountBalance -= sentAmount.value;
            console.log("currentUser accountBalance: " + CurrentUser.accountBalance);

            //getting the recipient account balance after a successful transaction
            foundbeneficiary.accountBalance += Number(sentAmount.value);
            console.log("beneficiary accountBalance: " + foundbeneficiary.accountBalance);

            //updating the currentCustomer account balance after a successful transaction
            userinfo[currentCustomerIndex].accountBalance = CurrentUser.accountBalance;

            //updating the recipient account balance after a successful transaction
            userinfo[recipientIndex].accountBalance = foundbeneficiary.accountBalance;

            localStorage.removeItem('beneficiary');

            document.getElementById("bod211").style.display = "block";
                document.getElementById("ldd").style.display = "block";
            setTimeout(() => {
                document.getElementById("bod211").style.display = "none";
                document.getElementById("ldd").style.display = "none";
                document.getElementById("soily").style.display = "none";

                document.getElementById('trvv').style.right = "0px";
                // document.getElementById("transfer-successful-amount").innerHTML = Number(transferAmount.innerHTML).toLocaleString();
            }, 2000);

            //creating instant of Date() class
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

            console.log(formattedDate);
            //generating a reference ID for the transaction
            let referenceID = Math.floor(Math.random() * Number(1000000000000000));

             //pushing some of the transaction data to transactionHistory local storage
             let moneySentData = {
                transactionType: "Money Sent",
                receipientAccountName: beneficiaryName,
                receipientAccountNumber: foundbeneficiary.accountNumber,
                senderAccountName: currentCustomerName,
                senderAccountNumber: CurrentUser.accountNumber,
                transactionTime: formattedDate,
                transactionYear: date.getFullYear(),
                transferAmount: Number(sentAmount.value).toLocaleString(),
                transactionReference: referenceID
            }

            let moneyReceivedData = {
                transactionType: "Money Received",
                receipientAccountName: beneficiaryName,
                receipientAccountNumber: foundbeneficiary.accountNumber,
                senderAccountName: currentCustomerName,
                senderAccountNumber: CurrentUser.accountNumber,
                transactionTime: formattedDate,
                transactionYear: date.getFullYear(),
                transferAmount: Number(sentAmount.value).toLocaleString(),
                transactionReference: referenceID

            }

            //printing all the required data on the receipt
            document.getElementById("usedfor").innerHTML = usedfor.value
            document.getElementById("amitt").innerHTML = Number(sentAmount.value).toLocaleString();
            document.getElementById("receipt-at").innerHTML = Number(sentAmount.value).toLocaleString();
            document.getElementById("receipt-amount").innerHTML =  Number(sentAmount.value).toLocaleString();
            document.getElementById("receipt-transaction-type").innerHTML = "Money Sent";
            document.getElementById("dt").innerHTML = formattedDate;
            document.getElementById("receipient-name").innerHTML = beneficiaryName;
            document.getElementById("receipient-account").innerHTML = foundbeneficiary.accountNumber;
            document.getElementById("sender-name").innerHTML = currentCustomerName;
            document.getElementById("sender-account").innerHTML = CurrentUser.accountNumber;
            document.getElementById("reference").innerHTML = referenceID;

            document.getElementById("cft").innerHTML = sentAmount.value
            document.getElementById("ddt").innerHTML = formattedDate
            document.getElementById("mtype").innerHTML = "Money Sent"
            document.getElementById("repname").innerHTML = beneficiaryName
            document.getElementById("recpacc").innerHTML = foundbeneficiary.accountNumber;
            // document.getElementById("sennname").innerHTML = currentCustomerName;
            document.getElementById("senacc").innerHTML = CurrentUser.accountNumber;
            document.getElementById("referency").innerHTML = referenceID;

            

            //pushing the transaction data of the money sent into the currentCustomer transactionHistory field after a successful transaction
            userinfo[currentCustomerIndex].transactionHistory.push(moneySentData);

            //updating the current user transactionHistory by pushing the data of the money sent into the currentCustomer transactionHistory field after a successful transaction
            CurrentUser.transactionHistory.push(moneySentData);

            //pushing the transaction data of the money received into the beneficiary transactionHistory field after a successful transaction
            userinfo[recipientIndex].transactionHistory.push(moneyReceivedData);

            //updating the current user details in the local storage
            localStorage.setItem('CU', JSON.stringify(CurrentUser));

            //updating all the bankEase users details in the local storage
            localStorage.setItem('userinfo', JSON.stringify(userinfo));

        }

    } else {
        alert("Invalid Transaction Pin")
        for (let i = 0; i < pinInputs.length; i++) {
            pinInputs[i].value = '';
        }
        pinInputs[0].focus();
    }
}
let PDFImageModal = document.getElementById("pdfImageModal");
// PDFImageModal.style.display = "none";

// document.getElementById("btn-line").style.display = "none";

//this function closes the PDF-Image button div
function closePDFImageModal() {
    PDFImageModal.style.display = "none";
}

//this function opens the PDF-Image button div
function openPDFImageModal() {
    // alert("good")
    PDFImageModal.style.display = "block";
}

let content = document.getElementById("reciept-content");
content.style.display = "none";    

function closeReceiptModal() {
    content.style.display = "none";    
}

function openReceiptContent() {
    content.style.display = "block";    
}

function generateImage() {
    content.style.display = "block";    
    document.getElementById("share-btn-div").style.display = "none";
    // document.getElementById("btn-line").style.display = "block";
    document.getElementById("receipt-header").style.display = "none";
    document.getElementById("support-text").style.display = "none";
    document.getElementById("hr").style.display = "none";
    PDFImageModal.style.display = "none";
    setTimeout(() => {
        html2canvas(content)
            .then(function (canvas) {
                const image = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.href = image;
                link.download = 'BankEaseTransaction_Receipt.png';
                link.click();
            });        
    }, 1500);
}

function generatePDF() {

    html2canvas(content)
        .then(function (canvas) {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('page_document.pdf');
        });
}


function share(){
    document.getElementById("bankT").style.display = "block"
}


function displayProfileImage() {
    // document.getElementById("illt").innerHTML = `
    // <img id = "ppt" src="${result2}" alt="" class="avatar rounded-circle" onclick="gotoSettings()">
    // `
    document.getElementById("illt").innerHTML = `
    <img id="ppt"   src="${result2}" alt="" class="avatar rounded-circle" onclick="gotoSettings()
    `
}

displayProfileImage();

function airtime(){
    window.location.href = "airtime.html";
    
}

