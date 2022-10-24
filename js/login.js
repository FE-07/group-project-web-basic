// let loginForm = document.getElementById('form-login')

// loginForm.addEventListener('submit', (ev) => {
//     ev.preventDefault()
//     let username = document.getElementById('username').value
//     let password = document.getElementById('password').value
    
//     var requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//     };
      
//     fetch("https://6353ff98ccce2f8c02010974.mockapi.io/api/web-basic/v1/Users", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));

//     result.forEach(element => {
//         console.log (username + " " + password);
//         console.log(element.username + ' ' + element.password);
//     });    
// })