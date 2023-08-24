let time = document.getElementById("time")
let namy = document.getElementById("name")
let balance = document.getElementById("balance")
let next = document.getElementById("next")
let addcash = document.getElementById("addcash")
let amount = document.getElementById("amount")
let userinfo = JSON.parse(localStorage.getItem('userinfo')) ||[]
let CurrentUser = JSON.parse(localStorage.getItem("CU")) || []
let CurrentTime = JSON.parse(localStorage.getItem("CT")) || []
let result2 = localStorage.getItem("pfImg")
console.log(CurrentUser)
// for (let index = 0; index < CurrentUser.length; index++) {
//     const element = CurrentUser[index];
//     namy.innerHTML = `good` 
// }
let arr = []
let Ctime = []
// if (result2){
//     // reader.readAsDataURL(result2)
//     // fileBtn.style.backgroundImage = `url(${result2})`
//     document.getElementById("userpp").= `<img id = "ppt" src= "${result2}>"`
// }
if(CurrentUser == ""){
    window.location.href = "signin.html"; 

}
function displayProfileImage() {
    document.getElementById("userpp").innerHTML = `
    <img id = "ppt" src="${result2}" alt="" class="avatar rounded-circle" onclick="gotoSettings()">
    `
}

displayProfileImage();
    arr.push(CurrentUser)
    // namy.innerHTML = `wow`
    for (i =0; i < arr.length; i++){
        namy.innerHTML = `${CurrentUser.fullname}`
        balance.innerHTML = `${Number(CurrentUser.accountBalance).toLocaleString()}`
        
        time.innerHTML = `${CurrentUser.time}`
        document.getElementById("Account").innerHTML = `${CurrentUser.accountNumber}`
        document.getElementById("Uname").innerHTML = `${CurrentUser.fullname}`
    }
    Ctime.push(CurrentTime)
    for(i =0; i < Ctime.length; i++){
        next.innerHTML = `<div class = "ei">
        <div><img id="logg" src="logg.png"></div>
        <div class="jin">
            <p>Just Login</p><br>
            <a id="time">${CurrentTime}</a>
        </div>
                             
                          </div>`
    }
function addmoney(){
    addcash.style.visibility = "visible"
    addcash.style.right = "0px"
}
function backHM(){
    addcash.style.right = "-1500px"
}
function backPV(){
    document.getElementById("bankT").style.right = "-1500px"

}
function backTM(){
    document.getElementById("topup").style.right = "-1500px"

}
function topup(){
    document.getElementById("topup").style.visibility = "visible"
    document.getElementById("topup").style.right = "0px"

}
function transfer(){
    window.location.href = "transfer.html"; 

}
function history(){
    window.location.href = "history.html"; 
}
function tobank(){
    // addcash.style.right = "-1500px"
    document.getElementById("bankT").style.visibility = "visible"
    document.getElementById("bankT").style.right = "0px"
}
    function makePayment() {
        FlutterwaveCheckout({
          public_key: "FLWPUBK_TEST-b36a552be87deb676a4c6578ca68e63c-X",
          tx_ref: "titanic-48981487343MDI0NzMx",
          amount: amount.value,
          currency: "NGN",
          payment_options: "card, banktransfer, ussd",
        //   redirect_url: "C:\Users\Hp\Desktop\piggyvest(project)\homepage.html",
          
          meta: {
            consumer_id: 23,
            consumer_mac: "92a3-912ba-1192a",
          },
          customer: {
            email: "rose@unsinkableship.com",
            phone_number: "08102909304",
            name: "Rose DeWitt Bukater",
          },
          customizations: {
            title: "The Titanic Store",
            description: "Payment for an awesome cruise",
            logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
          },
        });
      }
      function settings(){
        window.location.href = "profile.html"; 
    
    }
