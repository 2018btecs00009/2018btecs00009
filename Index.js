const alertFunction = () => {
    var name = document.getElementById("InputName").value;
    var email = document.getElementById("InputEmail").value;
    var purpose = document.getElementById("InputPurpose").value;
    if (!ValidateEmail(email)) return;
    if (name === "" && purpose === "") alert("Enter Name and Purpose");
    else if (name === "") alert("Enter Valid Name");
    else if (purpose === "") alert("Enter Purpose");
    else alert("Form submitted successfully");
  };
  
  const ValidateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  };
