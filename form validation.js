    const form=document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); // prevent form from submitting
    
    
    
    let Name = document.getElementById("name").value ;
    let email = document.getElementById("email").value ;
    let mobile= document.getElementById("mobile").value ;
    let username = document.getElementById("uName").value ;
    let password = document.getElementById("pass").value ;
    
    
    
    //validation
    
    //name error validation    
    if (Name.trim() ===""){
        document.getElementById("nameError").textContent="Name is required";

    }
    else{
        document.getElementById("nameError").textContent="";
        
    }
    
    //email error validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        document.getElementById("emailError").textContent="Enter valid email";
    }
    else{
        document.getElementById("nameError").textContent="";
        
    }
    
    //mobile error validation
    if (mobile.length<10){
        document.getElementById("mobileError").textContent="Mobile number lenght should be of 10 digit";
    }
    else{
        document.getElementById("nameError").textContent="";
        
    }

    //username error validation
    if (username.trim() === ""){
        document.getElementById("userNameError").textContent="Create your UserName"
    }
    else{
        document.getElementById("userNameError").textContent="";

    }

    //password error validation
    if (password.length<6){
        document.getElementById("passwordError").textContent="Password lenght should be atlest 6 characters."
    }
    else{
        document.getElementById("passwordError").textContent=""

    }
      
    
    // console.log(Name);
    // console.log(email);
    // console.log(mobile);
    // console.log(username);
    // console.log(password);
    
    
});
















// document.getElementById("myForm").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form submission until validation

//     let isValid = true;

//     // Getting form values
//     let name = document.getElementById("name").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let mobile = document.getElementById("mobile").value.trim();
//     let address = document.getElementById("address").value.trim();
//     let dob = document.getElementById("dob").value.trim();
//     let username = document.getElementById("userName").value.trim();
//     let password = document.getElementById("password").value.trim();

//     // Name validation
//     if (name === "") {
//         showError("nameError", "Name is required!");
//         isValid = false;
//     } else {
//         showError("nameError", "");
//     }

//     // Email validation
//     let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (email === "") {
//         showError("emailError", "Email is required!");
//         isValid = false;
//     } else if (!emailPattern.test(email)) {
//         showError("emailError", "Enter a valid email!");
//         isValid = false;
//     } else {
//         showError("emailError", "");
//     }

//     // Mobile validation
//     let mobilePattern = /^[0-9]{10}$/;
//     if (mobile === "") {
//         showError("mobileError", "Mobile number is required!");
//         isValid = false;
//     } else if (!mobilePattern.test(mobile)) {
//         showError("mobileError", "Enter a valid 10-digit mobile number!");
//         isValid = false;
//     } else {
//         showError("mobileError", "");
//     }

//     // Address validation
//     if (address === "") {
//         showError("addressError", "Address is required!");
//         isValid = false;
//     } else {
//         showError("addressError", "");
//     }

//     // DOB validation
//     if (dob === "") {
//         showError("dobError", "Date of birth is required!");
//         isValid = false;
//     } else {
//         showError("dobError", "");
//     }

//     // Username validation
//     if (username === "") {
//         alert("Username is required!");
//         isValid = false;
//     }

//     // Password validation
//     if (password.length < 6) {
//         alert("Password must be at least 6 characters long!");
//         isValid = false;
//     }

//     // If all validations pass, submit the form
//     if (isValid) {
//         alert("Form submitted successfully!");
//         document.getElementById("myForm").reset();
//     }
// });

// // Function to show error messages
// function showError(id, message) {
//     document.getElementById(id).innerText = message;
//     document.getElementById(id).style.color = "red";
// }
