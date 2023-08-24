let nam = document.getElementById("name")
let add = document.getElementById("add")
let num = document.getElementById("num")
let pas = document.getElementById("pas")
let body = document.getElementById("body")
let prmt = document.getElementById("prmt")
let message = document.getElementById("message")
let head = document.getElementById("head")
let prmt1 = document.getElementById("prmt1")
let timy = document.getElementById("time")
let referral = document.getElementById("referral")

let accountNumber  = Math.floor(Math.random()*100000000000)
let Referralcode = Math.floor(Math.random()*1000000)

// console.log(timee.format(today))
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
let userinfo = JSON.parse(localStorage.getItem("userinfo")) || []

function okay(){
    prmt.style.display = "none"
    body.style.display = "none"

}
function okayy(){
    window.location.href = "signin.html";
}
function login(){
    window.location.href = "signin.html";

}
let uplineacc;
function verifycode(){
    if(referral.value.length == 6){
        uplineacc = referral.value
        let upline = userinfo.find((f)=> f.Referralcode == uplineacc)
        console.log(upline)
        if(upline){
            setTimeout(() => {
                document.getElementById("show").innerHTML = upline.fullname
            localStorage.setItem('upline', JSON.stringify(upline))
        },1000) 
        }else{
            alert("inalid referral code")
        }
    }
}
function signup(){
    let infos = {
        fullname: nam.value,
        address : add.value,
        number : num.value,
        password : pas.value,
        accountBalance: 500000.00,
        time : formattedDate,
        accountNumber : accountNumber,
        Referralcode : Referralcode,
        ReferralHistory : [],
        transactionHistory: [],
        transactionpin : [],
        profilePicture: [],

    }
    let upline = userinfo.find((f)=> f.Referralcode == uplineacc)
console.log(upline);
// alert("sick")

//passing the beneficiary first name and last name inside a variable
// let uplineName = upline.fullname
// console.log(uplineName);

//passing the current customer first name and last name inside a variable
let currentCustomerName = nam.value 
console.log(currentCustomerName);


//finding the index of the recipient from the allBankEaseUser local storage
let uplineIndex = userinfo.findIndex(user => user.Referralcode == upline.Referralcode)
console.log(uplineIndex);

    let isEmailExists = userinfo.some(function (obj) {
        return obj.address === add.value;
    });

    let isPhoneNumberExists = userinfo.some(function (obj) {
        return obj.number === num.value;
    });

    if(nam.value == ""){
        prmt.style.display = "block"
        body.style.display = "block"
    }
    else if(add.value == ""){
        prmt.style.display = "block"
        body.style.display = "block"
        message.innerHTML = "Please fill in the Email Address field and retry"
    }
    else if (isEmailExists) {
        prmt.style.display = "block"
        body.style.display = "block"
        head.innerHTML = "Email already registered"
        message.innerHTML = "Your email address has already been used.Please use another email and retry"

    }
    else if(num.value == ""){
        prmt.style.display = "block"
        body.style.display = "block"
        message.innerHTML = "Please fill in the Phone Number field and retry"
    }
    else if (isNaN(num.value) || num.value.length < 11) {
        prmt.style.display = "block"
        body.style.display = "block"
        head.innerHTML = "Invalid Phone Number"
        message.innerHTML = "Please fill in a valid phone number and retry"  
    }
    else if (isPhoneNumberExists) {
        prmt.style.display = "block"
        body.style.display = "block"
        head.innerHTML = "Phone Number already registered"
        message.innerHTML = "Your phone number has already been used.Please use another phone number and retry"
    }
    else if(pas.value == ""){
        prmt.style.display = "block"
        body.style.display = "block"
        head.innerHTML = "Empty Field"
        message.innerHTML = "Please fill in the Password field and retry"
    }
    else if(pas.value.length < 8){
        prmt.style.display = "block"
        body.style.display = "block"
        head.innerHTML = "Invalid Password"
        message.innerHTML = "Your password must be at least 8 characters long"

    }
    

    
    else{
        userinfo.push(infos)
        
                    //getting the recipient account balance after a successful transaction
                    upline.accountBalance += 1000;
                    console.log("upline accountBalance: " + upline.accountBalance);
        
                    //updating the recipient account balance after a successful transaction
                    userinfo[uplineIndex].accountBalance = upline.accountBalance;
        
                    localStorage.removeItem('upline');
        localStorage.setItem("userinfo", JSON.stringify(userinfo))
        console.log(userinfo)
        const date = new Date();

        const options = {
            month: 'long',
            day: 'numeric',
            // hour: 'numeric',
            // minute: 'numeric',
            // hour12: true
        };

        //formatting the date to this format May 28 at 12:50 PM
        const formattedDate = date.toLocaleString('en-US', options);

        console.log(formattedDate);

        //generating a reference ID for the transaction
        let referenceID = Math.floor(Math.random() * Number(1000000000000000));
        let ReferralCommission = {
            transactionType: "Money Received",
            receipientAccountName: nam.value,
            senderAccountName: "Referral Bonus",
            transactionTime: formattedDate,
            transactionYear: date.getFullYear(),
            transferAmount: "1,000",
            transactionReference: referenceID

        }

        //pushing the transaction data of the money received into the beneficiary transactionHistory field after a successful transaction
        userinfo[uplineIndex].transactionHistory.push(ReferralCommission);
        // userinfo[uplineIndex].ReferralHistory.push(ReferralCommission);

        //updating all the bankEase users details in the local storage
        localStorage.setItem('userinfo', JSON.stringify(userinfo));
        document.getElementById("body").style.display = "block"
        document.getElementById("prmt1").style.display = "block"
        document.getElementById("prmt1").style.color = "blue"

        setTimeout(() => {
            window.location.href = "signin.html";
        }, 10000);
    }   
}