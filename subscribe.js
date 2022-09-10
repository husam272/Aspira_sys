const modal = document.querySelector(".form");
const close2 = document.querySelector(".closing");
const close = document.querySelector("#close");
const blur = document.querySelector("#blur");


function sendMail() {
    var params = {
        from_name : document.querySelector("#fullName").value,
        email_id : document.querySelector("#email_id").value, 
        number : document.querySelector("#number").value, 
        message : document.querySelector("#message").value 
    }
    emailjs.send("service_a413atw", "template_dcrp1pc", params).then(function (res){
        alert("SuccessFully Registered!!" + res.status);
    })
}

function getMail() {
    var params = {
        to_email : document.querySelector("#to_email").value, 
    }
        emailjs.send("service_a413atw", "template_szl9kjq", params).then(function (res){
            alert("SuccessFully Registered!!" + res.status);
        })
}