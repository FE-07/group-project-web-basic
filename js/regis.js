let daftar = document.getElementById("btn-daftar")
let form = document.getElementById("input-form")

form.addEventListener("submit", (event) => {
  const radiobtn1 = document.getElementsByName('kategori')
  const radiobtn2 = document.getElementsByName('kondisi')

  event.preventDefault()
  let nama = document.getElementById("nama").value
  let ttl = document.getElementById("ttl").value
  let nohp = document.getElementById("nohp").value
  let email = document.getElementById("email").value
  let alamat = document.getElementById("alamat").value
  let username = document.getElementById("username").value
  let password = document.getElementById("password").value
  let repassword = document.getElementById("repassword").value

  let passvalidate = document.getElementById('passvalidate')
  let regsuccess = document.getElementById('regis-success')

  for(let i = 0; i < radiobtn1.length; i++){
    var inpkategori

    if(radiobtn1[i].checked)
    inpkategori = radiobtn1[i].value
  }

  for(let i = 0; i < radiobtn2.length; i++){
    var inpkondisi

    if(radiobtn2[i].checked)
    inpkondisi = radiobtn2[i].value
  }

  if(password != repassword){
    passvalidate.innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>WARN!</strong> Password Not Match<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    // alert("Password tidak sama")
    return false
  }else {
    // return true
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("nama", nama);
    urlencoded.append("ttl", ttl);
    urlencoded.append("phone", nohp);
    urlencoded.append("email", email);
    urlencoded.append("alamat", alamat);
    urlencoded.append("username", username);
    urlencoded.append("password", password);
    urlencoded.append("kategori", inpkategori);
    urlencoded.append("kondisi", inpkondisi);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    fetch("https://6353ff98ccce2f8c02010974.mockapi.io/api/web-basic/v1/Users", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result), regsuccess.innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>GOOD!</strong> Registration Success<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>')
      .catch(error => console.log('error', error));
  }

})        

