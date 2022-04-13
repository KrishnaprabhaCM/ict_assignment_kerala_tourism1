$(document).ready(function() {
  //Login Validations
  $("#loginButton").prop('disabled', true);
        $("#loginEmail").on('keyup',function(){
          
          var loginEmail = this.value;
          const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (loginEmail.match(validRegex)) 
          {
            $('#loginEmailErr').text('');
            $('#loginEmail').css("border", "1px solid #e9ecef");
            $("#loginButton").prop('disabled', false);
          }
          else
          {
            $('#loginEmailErr').text('Invalid Email address');
            $('#loginEmail').css("border", "1px solid red");
            flag = 0;
            $("#loginButton").prop('disabled', true);
            return false;
          }
        });
        $("#loginPwd").on('keyup',function(){
          var loginPwd = this.value;
          if(loginPwd != '')
          {
            $("#loginButton").prop('disabled', false);
          }
        });

        // Signup Validations
        $('#signUpButton').on('click',function(event){
          // event.preventDefault();
          signUpValidate();
        })
        $("#signUpPwd").keyup(function() {
          var m = $(this).val();
          var n = m.length;
          // Function for checking
          check(n, m);
        });
      }); 
      function signUpValidate()
      {
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var signUpPhone = document.getElementById('signUpPhone').value;
        var signUpEmail = document.getElementById('signUpEmail').value;
        var dob = document.getElementById('dob').value;
        var signUpPwd = document.getElementById('signUpPwd').value;
        var confPwd = document.getElementById('confPwd').value;
        const nameRegex = /^[a-zA-Z ]*$/;
        const phoneRegex = /^(\*\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(firstName == '')
        {
          document.getElementById('firstNameErr').innerText = "First Name is required";
          document.getElementById('firstName').focus();
          return false;
        }
        else if(!(firstName.match(nameRegex)))
        {
          document.getElementById('firstNameErr').innerText = "Only alphabets and spaces are allowed";
          document.getElementById('firstName').focus();
          return false;
        }
        else if(lastName == '')
        {
          document.getElementById('lastNameErr').innerText = "Last Name is required";
          document.getElementById('lastName').focus();
          return false;
        }
        else if(!(lastName.match(nameRegex)))
        {
          document.getElementById('lastNameErr').innerText = "Only alphabets and spaces are allowed";
          document.getElementById('lastName').focus();
          return false;
        }
        else if(signUpPhone == '')
        {
          document.getElementById('signUpPhoneErr').innerText = "Phone number is required";
          document.getElementById('signUpPhone').focus();
          return false;
        }
        else if(!(signUpPhone.match(phoneRegex)))
        {
          document.getElementById('signUpPhoneErr').innerText = "Invalid phone number format";
          document.getElementById('signUpPhone').focus();
          return false;
        }
        else if(signUpEmail == '')
        {
          document.getElementById('signUpEmailErr').innerText = "Email is required";
          document.getElementById('signUpEmail').focus();
          return false;
        }
        else if(!(signUpEmail.match(emailRegex)))
        {
          document.getElementById('signUpEmailErr').innerText = "Invalid email format";
          document.getElementById('signUpEmail').focus();
          return false;
        }
        else if(dob == '')
        {
          document.getElementById('dobErr').innerText = "Date of Birth is required";
          document.getElementById('dob').focus();
          return false;
        }
        else if(signUpPwd == '')
        {
          document.getElementById('signUpPassErr').innerText = "Password is required";
          document.getElementById('signUpPwd').focus();
          return false;
        }
        else if(signUpPwd != '')
        {
          var m = confPwd;
          var n = confPwd.length;
          // Function for checking
          check(n, m);
        }
        else if(confPwd == '')
        {
          document.getElementById('confPassErr').innerText = "Confirm Password is required";
          document.getElementById('confPwd').focus();
          return false;
        }
        else if(signUpPwd != confPwd)
        {
          document.getElementById('confPassErr').innerText = "Confirm Password should be same as Password";
          document.getElementById('confPwd').focus();
          return false;
        }
        else
        {
          alert("Signup Successful");
          document.getElementById('firstNameErr').innerText = "";
          document.getElementById('lastNameErr').innerText = "";
          document.getElementById('signUpPhoneErr').innerText = "";
          document.getElementById('signUpEmailErr').innerText = "";
          document.getElementById('dobErr').innerText = "";
          document.getElementById('signUpPassErr').innerText = "";
          document.getElementById('confPassErr').innerText = "";
          return true;
        }
      }
      var percentage = 0;
  
        function check(n, m) {
            if (n < 4) {
                percentage = 0;
                $(".progress-bar").css("background", "#dd4b39");
            } else if (n < 6) {
                percentage = 20;
                $(".progress-bar").css("background", "#9c27b0");
            } else if (n < 8) {
                percentage = 40;
                $(".progress-bar").css("background", "#ff9800");
            } else {
                percentage = 60;
                $(".progress-bar").css("background", "#4caf50");
                document.getElementById('passLength').innerText = '';
            }
            if(n < 8)
            {
              document.getElementById('passLength').innerText = 'Include 8 characters';
            }
            
            // Check for the character-set constraints
            // and update percentage variable as needed.
            
            //Lowercase Words only
            if ((m.match(/[a-z]/) != null)) 
            {
                percentage += 10;
                document.getElementById('lowerCase').innerText = '';
            }
            else
            {
              document.getElementById('lowerCase').innerText = 'Include atleast 1 lower case letter';
            }
            
            //Uppercase Words only
            if ((m.match(/[A-Z]/) != null)) 
            {
                percentage += 10;
                document.getElementById('upperCase').innerText = '';
            }
            else
            {
              document.getElementById('upperCase').innerText = 'Include atleast 1 upper case letter';
            }
            
            //Digits only
            if ((m.match(/0|1|2|3|4|5|6|7|8|9/) != null)) 
            {
                percentage += 10;
                document.getElementById('number').innerText = '';
            }
            else{
              document.getElementById('number').innerText = 'Include atleast 1 number';
            }
            
            //Special characters
            if ((m.match(/\W/) != null) && (m.match(/\D/) != null))
            {
                percentage += 10;
                document.getElementById('speciarCharacter').innerText = '';
            }
            else{
              document.getElementById('speciarCharacter').innerText = 'Include atleast 1 special character';
            }
  
            // Update the width of the progress bar
            $(".progress-bar").css("width", percentage + "%");
        }