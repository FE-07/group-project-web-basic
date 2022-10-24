// let url = "https://63555cf8da523ceadc002d20.mockapi.io/testing/v1/kategori"

// // let buttons = document.querySelector('.filter')
// // let buttonsKesehatan = buttons.children[0]
// // let buttonsPendidikan = buttons.children[1]
// // let buttonsModalUsaha = buttons.children[2]


// async function dataKategori(){
//     let response = await fetch(url)
//     let result = await response.json()


//     console.log(result)
// }

// dataKategori()

// --------- buat Campaign

let button = document.getElementById('submit').onclick = SubmitEvent

function submit(event){
    let namaCampaign = document.getElementById('nama-Campaign').value

    console.log(namaCampaign)

    event.preventDefault()
}