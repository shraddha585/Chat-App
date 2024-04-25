function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML=hintMsg;
}

function validateSignUpInputCredentials(){
   // console.log("mmmmmm")
    //event.preventDefault();
    username=document.getElementById("name").value;
    email=document.getElementById("email_address").value;
    password=document.getElementById("password").value;
    confirmpassword=document.getElementById("confirm_password").value;
    var nameErr= emailErr=passwordErr=confirmpasswordErr=true;

    //validate email address
    if(username==""){
        printError("nameErr","Please enter your emial address");
    }else{
        //Regular expression for basic email validation
        var regex=/^[A-Za-z]+$/;
        if(regex.test(username)===false){
            printError("nameErr","Please Enter a valid Name");
        }else{
            printError("nameErr","");
            nameErr=false;
        }
    }

    //Validate email address
    if(email==""){
        printError("emailErr","Please enter email address");
    }else{
        //Regular expression for basic email validation
        var regex=/^\S+@\S+\.\S+$/;
        if(regex.test(email)===false){
            printError("emailErr","Please enter valid email address");
        }else{
            printError("emailErr","");
            emailErr=false;
        }
    }

    if(password ==""){
        printError("passwordErr","Please enter password");
    }else{
            printError("passwordErr","");
            passwordErr=false;
        }

        if(confirmpassword==""){
            printError("confirmPasswordErr","Please confirm password");
        }else{
                printError("confirmPasswordErr","");
                confirmpasswordErr=false;
            }

            if((nameErr||emailErr||passwordErr||confirmpasswordErr)==true){
                return false;
            }else{
                return true;
            }
        }

    function validateLoginInputCredentials(){
       //event preventDefault();
       email=document.getElementById("email_address").value;
       password=document.getElementById("password").value;
       var emailErr=passwordErr=true;

       //validate email address
       if(email==""){
        printError("emailErr","please enter your email address");
       }else{
        //Regular expression for basic email validation
        var regex=/^\S+@\S+\.\S+$/;
        if(regex.test(email)===false){
            printError("emailErr","Please enter a valid email address");
        }else{
            printError("emailErr","");
            emailErr=false;
        }
       }

       if(password===""){
        printError("passwordErr","Please enter your password");
       }else{
        printError("passwordErr","");
        passwordErr=false;
       }
       if((emailErr||passwordErr==true)){
        return false;
       }else{
        return true;
       }
    }
