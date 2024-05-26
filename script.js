function checkEmail(){
    let emailInput = document.getElementById("email").value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let submitButton = document.getElementById("submitButton");
    let emailForm = document.getElementById("emailForm");
    if(!emailPattern.test(emailInput)){
        submitButton.classList.remove('pseudo');
        emailForm.classList.remove('pseudo');
        console.log(emailInput)
        return false;
    }
    else{
        emailForm.preventDefault();
       window.location.href="old.html";
    }
}
