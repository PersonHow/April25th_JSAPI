const btn = document.querySelector(".btn");
const xxx = document.querySelector(".xxx");
const sourceData = {}; // 搭配 12 ~ 14 行

fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-DCCC3299-0DA4-4054-BA67-B0B6B0942484")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)

        for (var key in data) {
            sourceData[key] = data[key];
        };

        console.log(sourceData) //先淺層複製
    })
    .catch(function(error){
    
    })
 

btn.addEventListener("click", function(i){

const mel = JSON.parse(JSON.stringify(sourceData))//在深層複製
console.log(mel)

})