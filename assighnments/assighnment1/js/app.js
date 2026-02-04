// Assignment 1 - Registration form interactions
// All variables use naming prefixes from class (btn, txt, div, sel, arr, str, bln).

// Helper function to show or hide the SPA sections
const toggleView = (blnShowRegister) => {
    const divLogin = document.querySelector('#divLogin');
    const divRegister = document.querySelector('#divRegister');

    if (blnShowRegister) {
        divLogin.style.display = 'none';
        divRegister.style.display = 'block';
    } else {
        divRegister.style.display = 'none';
        divLogin.style.display = 'block';
    }
};

// Login click handler (placeholder interaction)
document.querySelector('#btnLogin').addEventListener('click', () => {
    const strEmail = document.querySelector('#txtEmail').value.trim();
    const strPassword = document.querySelector('#txtPassword').value.trim();

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
const btnRegister = document.querySelector('#btnRegister');
btnRegister.addEventListener('click', () => {
    toggleView(true);
});

// Cancel registration and return to login
const btnCancel = document.querySelector('#btnCancel');
btnCancel.addEventListener('click', () => {
    toggleView(false);
});

// Registration validation and submission
const btnCreateAccount = document.querySelector('#btnCreateAccount');
btnCreateAccount.addEventListener('click', () => {
    // Gather all required fields except Street 2
    const strFirstName = document.querySelector('#txtFirstName').value.trim();
    const strLastName = document.querySelector('#txtLastName').value.trim();
    const strStreet1 = document.querySelector('#txtStreet1').value.trim();
    const strCity = document.querySelector('#txtCity').value.trim();
    const strState = document.querySelector('#selState').value.trim();
    const strZip = document.querySelector('#txtZip').value.trim();
    const strPhone = document.querySelector('#txtPhone').value.trim();
    const strEmail = document.querySelector('#txtRegisterEmail').value.trim();
    const strPassword = document.querySelector('#txtRegisterPassword').value.trim();

    const arrErrors = [];

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
