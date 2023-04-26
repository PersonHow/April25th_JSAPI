const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2")

// let sourceData = [];

// fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-DCCC3299-0DA4-4054-BA67-B0B6B0942484")
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         sourceData = data;
//         // console.log(sourceData) //先淺層複製
//         console.log("inside/12")
//         xxx();
//     })
//     .catch(function(error){
    
//     })

// console.log("outside");

// function xxx(){
//     console.log("This's xxx!!")
//     console.log(sourceData)
// }

// xxx();

// -------------------------------------------------------------------
let mel = []
    
btn.addEventListener('click', function(i){
    fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-DCCC3299-0DA4-4054-BA67-B0B6B0942484")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // for (var key in data) {
        //     sourceData[key] = data[key];
        // };   //物件的淺層複製
        mel = data;
        console.log(mel) //先淺層複製
        yyyy();
    })
    .catch(function(error){
    
    })


    console.log("outside/45")
    console.log("mel")
    yyyy();
})
   

function yyyy(){
    console.log("This's yyyy!!")
    console.log(mel)
}


// -------------------------------------------------------------------

// let pop = []

// fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-DCCC3299-0DA4-4054-BA67-B0B6B0942484")
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         pop = data;
//         // console.log(sourceData) //先淺層複製
//         console.log("inside/72")
//         console.log(pop)
//     })
//     .catch(function(error){
    
//     })

// console.log(pop)

// function kzk(){
//     console.log("This's Pop!!")
//     console.log(pop);
// }

// console.log("按下去之前")
// kzk();

// btn2.addEventListener('click', function(i){
//     console.log("=========")
//     console.log("點擊按鈕後")
//     kzk();
// })