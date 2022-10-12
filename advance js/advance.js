// Question-1 Start
document.getElementById("btn_1").addEventListener("click", function () {
    alert("Thanks For Clicking You Have Sucessfully Showed an Alert");
});
// Question-1 End
// --------------------------------------------------------------------------------
// Question-2 Start
// Expr-1 start
document.getElementById("Q_21_demo").innerHTML = "Result = " + Boolean(5 > 4);
// Expr-1 end
// Expr-2 start
document.getElementById("Q_22_demo").innerHTML = "Result = " + Boolean("apple" > "pineapple");
// Expr-2 end
// Expr-3 start
document.getElementById("Q_23_demo").innerHTML = "Result = " + Boolean("2" > "12");
// Expr-3 end
// Expr-4 start
document.getElementById("Q_24_demo").innerHTML = "Result = " + Boolean(undefined == null);
// Expr-4 end
// Expr-5 start
document.getElementById("Q_25_demo").innerHTML = "Result = " + Boolean(undefined === null);
// Expr-5 end
// Expr-6 start
document.getElementById("Q_26_demo").innerHTML = "Result = " + Boolean(null == "\n0\n");
// Expr-6 end
// Expr-7 start
document.getElementById("Q_27_demo").innerHTML = "Result = " + Boolean(null === +"\n0\n");
// Expr-7 end
// Question-2 End
// --------------------------------------------------------------------------------
// Question-3 Start
document.getElementById("btn_3").addEventListener("click", function () {
    if ("0") { alert('Yes, It will show an Alert.'); }
});
// Question-3 End
// --------------------------------------------------------------------------------
// Question-4 Start
document.getElementById("btn_4").addEventListener("click", function () {
    alert(null || 2 || undefined);
});
// Question-4 End
// --------------------------------------------------------------------------------
// Question-5 Start
document.getElementById("btn_5").addEventListener("click", function () {
    var age = document.getElementById("age").value;
    if (age >= 18) {
        return alert('Access granted');
    } else {
        return permission();
    }
});
function permission() {
    var result = confirm('Do you have permission from your parents?');
    if (result == true) {
        return alert('Access Granted');
    } else {
        return alert('Access Denied');
    }
}
// Question-5 End
// --------------------------------------------------------------------------------
// Question-6 Start
function convert() {
    document.getElementById("converted_arrow_fun").innerHTML = `function ask(question, yes, no) {
        if (confirm(question)) yes();
        else no();
    }
    
    ask(
        "Do you agree?",
        () => alert("You agreed."),
        () => alert("You canceled the execution.")
    );`
}
// Question-6 End
// --------------------------------------------------------------------------------
// Question-7 Start
function showHide() {
    var target = document.getElementById("password");
    if (target.type === 'password') {
        target.type = 'text';
    } else {
        target.type = 'password';
    }
}

// Question-7 End
// --------------------------------------------------------------------------------
// Question-8 Start
// define all UI variable
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
    // toggler icon click event
    navToggler.addEventListener("click", togglerClick);
    // nav links click event
    navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

// togglerClick function
function togglerClick() {
    navToggler.classList.toggle("toggler-open");
    navMenu.classList.toggle("open");
}

// navLinkClick function
function navLinkClick() {
    if (navMenu.classList.contains("open")) {
        navToggler.click();
    }
}

// Question-8 End
// --------------------------------------------------------------------------------
// Question-10 Start
function showP() {
    var target = document.getElementById("realpassword");
    var btnvalue = document.getElementById("show");
    if (target.type === 'password') {
        target.type = 'text';
        btnvalue.value = 'Hide'
    } else {
        target.type = 'password';
        btnvalue.value = 'Show'
    }
}

function showPa() {
    var target = document.getElementById("confirmpassword");
    var btnvalue = document.getElementById("showc");
    if (target.type === 'password') {
        target.type = 'text';
        btnvalue.value = 'Hide'
    } else {
        target.type = 'password';
        btnvalue.value = 'Show'
    }
}
// Question-10 End
// --------------------------------------------------------------------------------
// Question-11 Start
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Question-11 End
// --------------------------------------------------------------------------------
// Question-12 Start
$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
    });
});
// Question-12 End
// --------------------------------------------------------------------------------
// Question-13 Start
let submitTarget = document.getElementById("myform");

submitTarget.addEventListener("submit", function (e) {
    e.preventDefault()
    alert("From Is Submitted.")

    var firstname = document.getElementById("firstname")
    var lastname = document.getElementById("lastname")
    var email = document.getElementById("email")

    alert("Name: " + firstname + lastname + '<br>' + "E-mail: " + email)
});
// Question-13 End
// --------------------------------------------------------------------------------
// Question-14 Start
const myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function (value) {
    document.getElementById("demo").innerHTML = value;
});
// Question-14 End