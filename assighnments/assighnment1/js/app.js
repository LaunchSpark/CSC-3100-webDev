

// Helper function to toggle between login and registration views
function toggleView(blnShowRegister) {
    var divLogin = document.querySelector('#divLogin');
    var divRegister = document.querySelector('#divRegister');

    if (blnShowRegister) {
        divLogin.style.display = 'none';
        divRegister.style.display = 'block';
    } else {
        divRegister.style.display = 'none';
        divLogin.style.display = 'block';
    }
}

// Login click handler (placeholder interaction)
document.querySelector('#btnLogin').addEventListener('click', () => {
    strEmail = document.querySelector('#txtEmail').value.trim();
    strPassword = document.querySelector('#txtPassword').value.trim();

    // Provide simple feedback so users know the button is active
    Swal.fire({
        title: 'Login',
        text: `Thanks for signing in, ${strEmail || 'user'}!`,
        icon: 'success'
    });

    // Console logging for class demonstration
    console.log(`Email from login form: ${strEmail}`);
    console.log(`Password from login form: ${strPassword}`);
});

// Switch to registration view
btnRegister = document.querySelector('#btnRegister');
btnRegister.addEventListener('click', () => {
    toggleView(true);
});

// Cancel registration and return to login
btnCancel = document.querySelector('#btnCancel');
btnCancel.addEventListener('click', () => {
    toggleView(false);
});

// Registration validation and submission
const btnCreateAccount = document.querySelector('#btnCreateAccount');
btnCreateAccount.addEventListener('click', () => {
    
    // Gather all required fields except Street 2
    strFirstName = document.querySelector('#txtFirstName').value.trim();
    strLastName = document.querySelector('#txtLastName').value.trim();
    strStreet1 = document.querySelector('#txtStreet1').value.trim();
    strCity = document.querySelector('#txtCity').value.trim();
    strState = document.querySelector('#selState').value.trim();
    strZip = document.querySelector('#txtZip').value.trim();
    strPhone = document.querySelector('#txtPhone').value.trim();
    strEmail = document.querySelector('#txtRegisterEmail').value.trim();
    strPassword = document.querySelector('#txtRegisterPassword').value.trim();
    arrErrors = [];

    // Validate required fields and build a friendly error list
    if (!strFirstName) arrErrors.push('First Name is required.');
    if (!strLastName) arrErrors.push('Last Name is required.');
    if (!strStreet1) arrErrors.push('Street 1 is required.');
    if (!strCity) arrErrors.push('City is required.');
    if (!strState) arrErrors.push('State is required.');
    if (!strZip) arrErrors.push('ZIP is required.');
    if (!strPhone) arrErrors.push('Phone is required.');
    if (!strEmail) arrErrors.push('Email is required.');
    if (!strPassword) arrErrors.push('Password is required.');

    if (arrErrors.length > 0) {
        Swal.fire({
            title: 'Please fix the following',
            html: `<ul class="text-start">${arrErrors.map((strError) => `<li>${strError}</li>`).join('')}</ul>`,
            icon: 'error'
        });
        return;
    }

    Swal.fire({
        title: 'Registration Complete',
        text: 'All required information is present. You are now registered!',
        icon: 'success'
    });
});
