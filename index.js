// index.js
const adminPassword = "admin123";
const auditorPassword = "auditor123";

function showAdminLogin() {
    showLoginForm('admin');
}

function showAuditorLogin() {
    showLoginForm('auditor');
}

function showLoginForm(role) {
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'block';
    document.getElementById('submitLogin').onclick = function() {
        const authString = document.getElementById('authString').value;
        if (role === 'admin' && authString === adminPassword) {
            navigateToPage('admin.html');
        } else if (role === 'auditor' && authString === auditorPassword) {
            navigateToPage('auditor.html');
        } else {
            alert('Invalid authentication string!');
        }
    }
}

function hideLoginForm() {
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'none';
}

function navigate(page) {
    if (page === 'admin.html') {
        showAdminLogin();
    } else if (page === 'auditor.html') {
        showAuditorLogin();
    } else {
        navigateToPage(page);
    }
}

function navigateToPage(page) {
    window.location.href = page;
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired");
});
