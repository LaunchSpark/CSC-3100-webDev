/*
// Option 1 to add click event
document.querySelector('#btnLogin').onclick = function() {
    alert(`This is an alert`)
}

// Option 2 to add a click event
document.querySelector('#btnLogin').addEventListener('click',function(){
    alert('This is also an alert')
})

// Option 3 to add a click event
document.getElementById('btnLogin').addEventListener('click',()=>{
    alert("This is another way to do an alert")
})

// Most common way
document.querySelector(`#btnLogin`).addEventListener('click',()=>{
    alert('Likely the most common way')
})
*/
// My super secret password is Mickey2026!
// How to log to the console
document.querySelector('#btnLogin').addEventListener('click',()=>{
    const strEmail = document.querySelector('#txtEmail').value
    const strPassword = document.querySelector('#txtPassword').value
    // One way to concat a literal string with a variable
    //console.log('Email from login form: ' + strEmail)

    // Using template literals
    console.log(`Email from login form: ${strEmail}`)
    console.log(`Password from login form: ${strPassword}`)

    // Other variable naming conventions
    var strTest = `This is a globally scoped variable`
    let strTest2 = "This is a locally scoped variable"
    Swal.fire({
        title: "Login",
        text: "Congratulations you are logged in",
        icon: "success"
    });
})

document.querySelector('#btnRegister').addEventListener('click',()=>{
    document.querySelector('#divLogin').style = "display:none"
    document.querySelector('#divRegister').style = "display:block"

})

document.querySelector('#btnCancel').addEventListener('click',()=>{
    document.querySelector('#divRegister').style = "display:none"
    document.querySelector('#divLogin').style = "display:block"

})