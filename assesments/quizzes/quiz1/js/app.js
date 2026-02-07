// validate
document.getElementById("btnValidate").addEventListener("click", () => {
    console.log("i was clicked");

    const strFullName = document.querySelector('#strFullName').value.trim();
    const strPhone = document.querySelector('#strPhone').value.trim();
    const strEmail = document.querySelector('#strRegisterEmail').value.trim();
    const selServices = document.getElementById("selServices");

    const arrErrors = [];

    // Required field checks (trim already prevents blank spaces)
    if (!strFullName) arrErrors.push('Full Name is required.');
    if (!strPhone) arrErrors.push('Phone is required.');
    if (!strEmail) arrErrors.push('Email is required.');
    if (selServices.value === "") arrErrors.push('Please select a service.');

    // Email regex (simple, practical, not insane RFC-level)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (strEmail && !emailRegex.test(strEmail)) {
        arrErrors.push('Please enter a valid email address.');
    }

    if (arrErrors.length > 0) {
        Swal.fire({
            title: 'Please fix the following',
            html: `<ul class="text-start">
                     ${arrErrors.map(err => `<li>${err}</li>`).join('')}
                   </ul>`,
            icon: 'error'
        });
        return;
    }

    // If you reach here → validation passed
    Swal.fire({
        title: 'Success!',
        text: 'Form looks good.',
        icon: 'success'
    });
});