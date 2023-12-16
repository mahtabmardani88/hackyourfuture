
function showCreateAccount() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('createAccountSection').style.display = 'block';
}

function submitAccount() {
    document.getElementById('createAccountSection').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
     // Debugging: Check if the function is being called

    
    console.log('submitAccount function called successfully');

// Alert to notify the user (optional)
alert('Success! You can now log in.');}