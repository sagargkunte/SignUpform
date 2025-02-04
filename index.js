document.getElementById('form').addEventListener('submit', function(event) {

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    
    if(username && email) {
        alert('your user name is '+username+' email is '+ email);
    } else if(username && !(email)) {
        alert('you did not enter email');
    } else if(email && !(username)) {
        alert('you did not enter username');
    } else {
        alert('you did not entered both'); 
    }
})