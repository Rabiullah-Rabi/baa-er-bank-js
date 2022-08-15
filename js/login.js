document.getElementById('log-in').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if (email === 'rabiullah@baaperbank.com' && password === 'rabiullah') {
        window.location.href = 'user-profile.html'
    }
    else {
        alert('Tui keda? cini na . Ja vag')
    }
})