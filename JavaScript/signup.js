

function validate(){

    var fullname = document.forms["SignupForm"]["fullname"].value;
    var email = document.forms["SignupForm"]["email"].value;
    var collectdate = document.forms["SignupForm"]["collectdate"].value;
    var productselect = document.forms["SignupForm"]["productselect"].value;
    var quanity = document.forms["SignupForm"]["quantity"].value;
    var termAndConditions = document.forms["SignupForm"]["termAndConditions"].value;
    var message;
    
 
    if( fullname == "" ) {
          message = "Full name can not be empty! Refresh the page and try again!";
          alert(message);
          document.getElementById("message").innerHTML = message;
          return false;
    }
 
    else if( email == "" ) {
          message = "Email can not be empty! Refresh the page and try again!" ;
          alert(message);
          document.getElementById("message").innerHTML = message;
          return false;
    }
 
    else if( productselect == ""|| productInterests == "Choose option") {
          message = "Product Interests can not be empty! Refresh the page and try again!" ;
          alert(message);
          document.getElementById("message").innerHTML = message;
          return false;
    }
 
    else if( collectdate == "") {
          message = "Birthday can not be empty! Refresh the page and try again!" ;
          alert(message);
          document.getElementById("message").innerHTML = message;
          return false;
    }
    
    else if( quanity == "" ) {
      message = "Quantity can not be empty! Refresh the page and try again!" ;
      alert(message);
      document.getElementById("message").innerHTML = message;
      return false;
      }

    else if( termAndConditions == "" || termAndConditions == "disagree") {
          message = "Term and conditions can not be empty or disagree! Refresh the page and try again!" ;
          alert(message);
          document.getElementById("message").innerHTML = message;
          return false;
      }
 
    else{
          return true
    }
 }