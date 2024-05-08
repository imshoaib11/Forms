let firstName = document.getElementById("first-name");

firstName.value = "";

let lastName = document.getElementById("last-name");

lastName.value = "";

let email = document.getElementById("mail");

email.value = "";

let address = document.getElementById("address");

address.value = "";

let pincode = document.getElementById("pincode");

pincode.value = "";

let male = document.getElementById("rb1");

male.checked = false;

let female = document.getElementById("rb2");

female.checked = false;

let other = document.getElementById("rb3");

other.checked = false;

let biriyani = document.getElementById("cb1");

biriyani.checked = false;

let rice = document.getElementById("cb2");

rice.checked = false;

let dosa = document.getElementById("cb3");

dosa.checked = false;

let idly = document.getElementById("cb4");

idly.checked = false;

let parrota = document.getElementById("cb5");

parrota.checked = false;

let state = document.getElementById("st");

state.value = "";

let country = document.getElementById("con");

country.value = "";

let SubmitButton = document.getElementById("submit");

function submit() {
    document.querySelector("#td1").innerHTML = firstName.value+" "+lastName.value;
    document.querySelector("#td2").innerHTML = address.value;
    document.querySelector("#td3").innerHTML = pincode.value;

   if (male.checked == true) {
        document.querySelector("#td4").innerHTML = "Male";
    }

    else if (female.checked == true) {
        document.querySelector("#td4").innerHTML = "Female";
    }

    if (other.checked == true) {
        document.querySelector("#td4").innerHTML = "Others";
    }

    document.querySelectorAll('[type = "checkbox"]').forEach((e) => {
         if (e.checked == true) {
             document.querySelector("#td5").innerHTML += e.value + "<br>";
         }
        //  else if (e.checked == false) {
        //     alert("Please Enter Food choice");
        //  }
     })

     document.querySelector("#td6").innerHTML = state.value;
     document.querySelector("#td7").innerHTML = country.value;
     document.querySelector("#td8").innerHTML = email.value;

    if (firstName.value == "" || lastName.value == "" || address.value == "" || pincode.value == "" ||state.value == "" || country.value == "") {
        alert("Please fill all the fields");
    } 
    else if (pincode.value.length!= 6) {
        alert("Please enter a valid pincode");
    }

    else if(male.checked == false && female.checked == false && other.checked == false) {
        alert("Please Enter Your Gender");
    }
    else if(biriyani.checked == false && rice.checked == false && dosa.checked == false && idly.checked == true && parrota.checked == false) {
        alert("Please select atleast 2 Food choice")
    }
    else if(biriyani.checked == true && rice.checked == false && dosa.checked == false && idly.checked == false && parrota.checked == false) {
        alert("Please select atleast 2 Food choice")
    }
    else if(biriyani.checked == false && rice.checked == true && dosa.checked == false && idly.checked == false && parrota.checked == false) {
        alert("Please select atleast 2 Food choice")
    }
    else if(biriyani.checked == false && rice.checked == false && dosa.checked == true && idly.checked == false && parrota.checked == false) {
        alert("Please select atleast 2 Food choice")
    }
    else if(biriyani.checked == false && rice.checked == false && dosa.checked == false && idly.checked == false && parrota.checked == true) {
        alert("Please select atleast 2 Food choice")
    }
    else {
        alert("Form Submitted");
    }


}  

function clearData() {

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    address.value = "";
    pincode.value = "";
    male.checked = false;
    female.checked = false;
    other.checked = false;
    biriyani.checked = false;
    rice.checked = false;
    dosa.checked = false;
    idly.checked = false;
    parrota.checked = false;
    state.value = "";
    country.value = "";
}

SubmitButton.addEventListener("click", submit);
SubmitButton.addEventListener("click", clearData);