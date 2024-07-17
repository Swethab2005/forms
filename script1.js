function validate_form() {
    var emailid = document.getElementById("emailid").value;
    var password = document.getElementById("password").value;
    var error_emailid = document.getElementById("error_emailid");
    var error_password = document.getElementById("error_password");
    error_emailid.innerHTML = "";
    error_password.innerHTML = "";
    let success=true;
    let a=false;
    if (emailid === "") {
      success = false;
      error_emailid.innerHTML = " * Email is required";
    } else if (!validateEmail(emailid)) {
      success = false;
      error_emailid.innerHTML = "* please enter valid Email Id";
    } else {
      a = true;
    }
    if (password === "") {
      success = false;
      error_password.innerHTML = " * Password is required";
    } else if (password.length < 8) {
      success = false;
      error_password.innerHTML =
        " * Password must be at least 8 characters long.";
    }
    // Check if the password contains at least one uppercase letter, one lowercase letter, and one digit
    else if (!passwordRegex.test(password)) {
      success = false;
      error_password.innerHTML =
        "* Password must contain at least one uppercase letter, one lowercase letter, and one digit";
    } else {
      a = true;
    }
    //alert("form submitted successfully.you can login now");
    return success;
  }
  var text1;
  
  function validation() {
    
    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;
    var emailid = document.getElementById("emailid").value;
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    var phno = document.getElementById("phno").value;
    var s_add1 = document.getElementById("s_add1").value;
    var city = document.getElementById("city").value;
    var district = document.getElementById("district").value;
    var number = document.getElementById("number").value;
    var abtu = document.getElementById("abtu").value;
    var pic = document.getElementById("pic").value;
    var error_fname = document.getElementById("error_fname");
    var error_lname = document.getElementById("error_lname");
    var error_emailid = document.getElementById("error_emailid");
    var error_password = document.getElementById("error_password");
    var error_password1 = document.getElementById("error_password1");
    var error_phno = document.getElementById("error_phno");
    var error_s_add1 = document.getElementById("error_s_add1");
    var error_s_add2 = document.getElementById("error_s_add2");
    var error_city = document.getElementById("error_city");
    var error_district = document.getElementById("error_district");
    var error_number = document.getElementById("error_number");
    var error_abtu = document.getElementById("error_abtu");
    var error_file = document.getElementById("error_file");
  
    error_fname.innerHTML = "";
    error_lname.innerHTML = "";
    error_emailid.innerHTML = "";
    error_password.innerHTML = "";
    error_password1.innerHTML = "";
    error_phno.innerHTML = "";
    error_s_add1.innerHTML = "";
    error_s_add2.innerHTML = "";
    error_city.innerHTML = "";
    error_district.innerHTML = "";
    error_number.innerHTML = "";
    error_abtu.innerHTML = "";
    error_file.innerHTML="";
    let success = true;
    let a = true;
  
    var nameRegex = /^[A-Za-z\s]+$/;
    const pinCodeRegex = /^\d{6}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (name === "") {
      success = false;
      error_fname.innerHTML = " * name is required";
    } else if (!nameRegex.test(name)) {
      success = false;
      error_fname.innerHTML =
        " * please enter a valid name (only letters and spaces allowed)";
    } else {
      a = true;
    }
    if (lname === "") {
      success = false;
      error_lname.innerHTML = " * name is required";
    } else if (!nameRegex.test(lname)) {
      success = false;
      error_lname.innerHTML =
        " * please enter a valid name (only letters and spaces allowed)";
    } else {
      a = true;
    }
    if (emailid === "") {
      success = false;
      error_emailid.innerHTML = " * Email is required";
    } else if (!validateEmail(emailid)) {
      success = false;
      error_emailid.innerHTML = "* please enter valid Email Id";
    } else {
      a = true;
    }
    if (password === "") {
      success = false;
      error_password.innerHTML = " * Password is required";
    } else if (password.length < 8) {
      success = false;
      error_password.innerHTML = " * Password must be at least 8 characters long.";
    }
    // Check if the password contains at least one uppercase letter, one lowercase letter, and one digit
    else if (!passwordRegex.test(password)) {
      success = false;
      error_password.innerHTML =
        "* Password must contain at least one uppercase letter, one lowercase letter, and one digit";
    } else {
      a = true;
    }
    if (password1 === "") {
      success = false;
      error_password1.innerHTML = "* password is required";
    }
  
    // Check if the password and confirm password match
    else if (password !== password1) {
      success = false;
      error_password1.innerHTML = " * Password and confirm password do not match";
    } else {
      a = true;
    }
    if (phno === "") {
      success = false;
      error_phno.innerHTML = " *contact number is required";
    } else if (isNaN(phno) || phno.length != 10) {
      success = false;
      error_phno.innerHTML = " * please enter valid phone number";
    } else {
      a = true;
    }
    if (s_add1 === "") {
      success = false;
      error_s_add1.innerHTML = " *address is required";
    } else {
      a = true;
    }
  
    if (city === "") {
      success = false;
      error_city.innerHTML = " *city is required";
    } else if (!nameRegex.test(city)) {
      success = false;
      error_city.innerHTML = " *please enter a valid city";
    } else {
      a = true;
    }
    if (district === "") {
      success = false;
      error_district.innerHTML = " *district is required";
    } else if (!nameRegex.test(district)) {
      success = false;
      error_district.innerHTML = "please enter a valid district";
    } else {
      a = true;
    }
    if (number === "") {
      success = false;
      error_number.innerHTML = " *pincode is required";
    }
    //   const pinCodeRegex = /^\d{6}$/;
    else if (!pinCodeRegex.test(number)) {
      success = false;
      error_number.innerHTML = "enter a valid 6 digit code";
    } else {
      a = true;
    }
    if (abtu === "") {
      success = false;
      error_abtu.innerHTML= " *required";
    } else if (abtu.length <= 10) {
      success = false;
      error_abtu.innerHTML = " *please enter more than 10 characters";
    } else {
      a = true;
    }
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  
    if (!allowedExtensions.exec(pic)) {
      success = false;
      error_file.innerHTML = " * required";
    } 
    else {
      a = true;
    }
    if (text1 === "false") {
      success = false;
    } else {
      a=true;
    }
    if(success===true){
      alert("form submitted successfully.you can login now");
      
    }
    else{
      return success;
    }
  
    return success;
  }
  const validateEmail = (emailid) => {
    return String(emailid)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    refreshCaptcha();
  });
  
  function generateCaptcha() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
  
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters.charAt(randomIndex);
    }
  
    return captcha;
  }
  
  function refreshCaptcha() {
    const captchaElement = document.getElementById("captcha");
    const newCaptcha = generateCaptcha();
    captchaElement.textContent = newCaptcha;
    text1 = undefined;
  }
  
  function submitForm() {
    
    const captchaInput = document.getElementById("captchaInput");
    const enteredCaptcha = captchaInput.value;
  
    const captchaElement = document.getElementById("captcha");
    const actualCaptcha = captchaElement.textContent;
  
    if (enteredCaptcha === actualCaptcha) {
      text1 = "true";
      // alert("CAPTCHA is correct. Form will be submitted!");
    } else {
      alert("CAPTCHA is incorrect. Please try again.");
      refreshCaptcha();
      text1 = "false";
    }
  }