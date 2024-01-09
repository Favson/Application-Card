// function apply() {
//     if (typeName.value ==" " || otherName.value=="" || surname.value == "" || email.value == ""){
//         document.getElementById("app").value =```<h6 style ="color:red">Pls fill the empty spaces</h6>```
//     }else{
//         alert("i dey woth you oga mhy")
//     }
// }

function apply() {
    var typeName = document.getElementById("typeName").value.trim();
    var otherName = document.getElementById("otherName").value.trim();
    var surname = document.getElementById("surname").value.trim();
    var email = document.getElementById("email").value.trim();
    var mobileNumber = document.getElementById('mobileNumber').value.trim();
    var Password = document.getElementById("choosePassword").value.trim();
    var Passwordconfirm = document.getElementById("confirmPassword").value.trim();

    if (typeName === "" || otherName === "" || surname === "" || email === "" || mobileNumber === "" || Password === "" ||Passwordconfirm=== "") {
        document.getElementById("app").innerHTML = '<h6 style="color:red; width:100%;">Please fill in all the required fields.</h6>';
        if(Password.length <6 || Passwordconfirm.length <6){
            document.getElementById("pass").innerHTML = '<h6 style="color:red;font-size:14px; width:100%;">Password must be at least 6 characters long</h6>';
        }else if(Password !== Passwordconfirm) {
            alert("Go back");
            return;
        }
    } else {
        document.getElementById("app").innerHTML = '';
        alert("Application submitted successfully!");
    }
    // document.getElementById("typeName").value = ""
    // document.getElementById("otherName").value = ""
    // document.getElementById("surname").value = ""
    // document.getElementById("email").value = ""
    // document.getElementById('mobileNumber').value = ""
    // document.getElementById("choosePassword").value = ""
    // document.getElementById("confirmPassword").value = ""
}
