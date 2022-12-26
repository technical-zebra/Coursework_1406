

function validate(){

   var fullname = document.forms["SignupForm"]["fullname"].value;
   var email = document.forms["SignupForm"]["email"].value;
   var birthdaydate = document.forms["SignupForm"]["birthdaydate"].value;
   var productInterests = document.forms["SignupForm"]["productInterests"].value;
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

   else if( productInterests == ""|| productInterests == "Choose option") {
         message = "Product Interests can not be empty! Refresh the page and try again!" ;
         alert(message);
         document.getElementById("message").innerHTML = message;
         return false;
   }

   else if( birthdaydate == "") {
         message = "Birthday can not be empty! Refresh the page and try again!" ;
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