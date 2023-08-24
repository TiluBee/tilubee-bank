let ref = document.getElementById("ref")
let Email = document.getElementById("Email")
let Password = document.getElementById("Password")
let message = document.getElementById("message")
let head = document.getElementById("head")
let namy = document.getElementById("name")
let userinfo = JSON.parse(localStorage.getItem('userinfo')) ||[]
let CurrentUser = JSON.parse(localStorage.getItem("CU")) || []
let CurrentTime = JSON.parse(localStorage.getItem("CT")) || []
function okay(){
    prmt.style.display = "none"
    body.style.display = "none"

}
function okayy(){
    window.location.href = "homepage.html";
}
function reff(){
    window.location.href = "index.html"; 
}



function login(){
    let found = userinfo.find((f)=> (f.address == Email.value || f.number == Email.value) && f.password == Password.value)
    if(Email.value == ""){
        prmt.style.display = "block"
        body.style.display = "block"
    }
    else if(Password.value == ""){
        prmt.style.display = "block"
        body.style.display = "block"
        message.innerHTML = "Please fill in your Password and retry"
    }else if( found){
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
        localStorage.setItem('CU', JSON.stringify(found));
        localStorage.setItem('CT', JSON.stringify(formattedDate))
        prmt1.style.display = "block"
        prmt1.style.color = "blue"
        body.style.display = "block"
        setTimeout(() => {
            window.location.href = "homepage.html";
        }, 10000);  
    } else{
        prmt.style.display = "block"
        body.style.display = "block"
        head.innerHTML = "User not found"
        message.innerHTML = `oops we could not find your accound please <b class = "sign" onclick = 'signup()'>signup now</b>`

    }
}
function signup(){
    window.location.href = "index.html"; 

}
