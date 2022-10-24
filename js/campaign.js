let url = 'https://63555cf8da523ceadc002d20.mockapi.io/testing/v1/buatCampaign'



async function dataCampaign (){
    let response = await fetch(url)
    let result = await response.json()

    if(result.length == 0){
        document.querySelector('.card-kosong').classList.remove('hilang')
    } else {
        document.querySelector('.card-kosong').classList.add('hilang')
        document.querySelector('.card-isi').classList.remove('hilang')  
    }
    
    document.querySelector('.card-isi h4').innerText = result[0].namaCampaign
    document.querySelector('.card-isi div p').innerText = result[0].deskripsi

    // console.log(result[0].namaCampaign)
    // console.log(result.length)
}

dataCampaign()


