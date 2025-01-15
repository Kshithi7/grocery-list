function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = "12345";  // Simple password for demo purposes

    if (password === correctPassword) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('welcome-message').style.display = 'block';
    } else {
        alert('Incorrect password!');
    }
}

function showDashboard() {
    document.getElementById('welcome-message').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}

function createList() {
    alert('You can now create a new grocery list!');
    // Add code here for creating lists, like showing a form
}

function editList() {
    alert('You can now edit an existing grocery list!');
    // Add code here for editing lists
}

function downloadList() {
    alert('Downloading the list as an image!');
    // Use a library like html2canvas for this functionality
}
