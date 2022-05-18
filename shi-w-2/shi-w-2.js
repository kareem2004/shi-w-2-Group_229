const emailField = document.getElementById("Email");
const button = document.getElementById("button");
const togglePassword1 = document.querySelector("#togglePassword1");
const togglePassword2 = document.querySelector("#togglePassword2");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");
const tele = document.getElementById("tele");
const txt = document.getElementById("txt")

button.addEventListener("click", function () {
    if (txt.value.length==0){
        alert("Username is required");
    }
    if ((password.value)!==(cpassword.value)){
        alert("Your password must be the same");
    }
    if ((password.value.length==0)||(cpassword.value.length==0)){
        alert("Your password is required twice");
    }
    const email = emailField.value;
    if (validateEmail(email)) {
      response.innerHTML = "Hiya Cowboy, this email will work for us 🤠";
    } else {
      alert('Invalid Email Address');
    }
    var phoneno = /^\d{11}$/;
    var phonenom = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (tele.value.match(phoneno) || tele.value.match(phonenom))
        {
            return true;
        }
            else
        {
        alert("Invalid Phone Number");
        return false;
        }
    });
  
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
        togglePassword1.addEventListener("click", function () {
            // toggle the type attribute
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("bi-eye");
        });
        togglePassword2.addEventListener("click", function () {
            // toggle the type attribute
            const ctype = cpassword.getAttribute("type") === "password" ? "text" : "password";
            cpassword.setAttribute("type", ctype);
            
            // toggle the icon
            this.classList.toggle("bi-eye");
        });

        // prevent form submit
        const form = document.querySelector("form");
        form.addEventListener('submit', function (e) {
            e.preventDefault();
        });