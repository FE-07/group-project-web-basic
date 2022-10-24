
// --------- buat Campaign
let form = document.getElementById('input-form')

form.addEventListener('submit',(event) => {
    const kategori = document.getElementsByName('kategori')

    event.preventDefault()
    let namaCampaign = document.getElementById('nama-campaign').value
    let deskripsi = document.getElementById('Deskripsi').value
    let email = document.getElementById('email').value
    let noRek = document.getElementById('no-rek').value

    for(let i = 0; i < kategori.length; i++){
        var inpkategori
        if(kategori[i].checked)
        inpkategori = kategori[i].value
    }

    console.log(inpkategori)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("namaCampaign", namaCampaign);
    urlencoded.append("kategori", inpkategori);
    urlencoded.append("deskripsi", deskripsi);
    urlencoded.append("email", email);
    urlencoded.append("noRekening", noRek);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch("https://63555cf8da523ceadc002d20.mockapi.io/testing/v1/buatCampaign", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    setTimeout(function(){
        window.location.href = "campaign.html"
    }, 2000);
})