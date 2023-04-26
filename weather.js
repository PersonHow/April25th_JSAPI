// select 捕捉
const city = document.querySelector("#city");
const time = document.querySelector("#time");

// 文字顯示
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const text3_1 = document.querySelector(".text3-1");
const text3_2 = document.querySelector(".text3-2");
const text4 = document.querySelector(".text4");

//抓資料
let sourceData = [];

fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-DCCC3299-0DA4-4054-BA67-B0B6B0942484")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)

        // for (var key in data) {
        //     sourceData[key] = data[key];
        // };   //物件的淺層複製
        sourceData = data;
        console.log(sourceData) //先淺層複製
    })
    .catch(function(error){
    
    })

    
     console.log(sourceData)
    

    function cityWeather(){
        //資料取出來用
    const copyData = JSON.parse(JSON.stringify(sourceData))
    let Wx =[];
    let Pop = [];
    let MinT =[];
    let CI =[];
    let MaxT = [];
    copyData.records.location.forEach(function(i){

        if(i.locationName === city.value){
            text1.innerHTML = city.value
            for(let j = 0; j < i.weatherElement.length ; j++){
                // console.log(i.weatherElement[j])
                if( j === 0){
                    Wx = i.weatherElement[j];
                }
                if(j === 1){
                    Pop = i.weatherElement[j]
                }
                if(j === 2){
                    MinT = i.weatherElement[j]
                }
                if(j === 3){
                    CI = i.weatherElement[j]
                }
                    MaxT = i.weatherElement[j]
                
            }
            console.log(Wx, Pop, MinT, CI, MaxT)

            time.addEventListener('change' , function(z){
                const WxPara = Wx.time[time.value].parameter;
                text2.innerHTML = WxPara.parameterName;

                const MinTPara = MinT.time[time.value].parameter;
                text3_1.innerHTML = MinTPara.parameterName;

                const MaxTPara = MaxT.time[time.value].parameter;
                text3_2.innerHTML = MaxTPara.parameterName;

                const PopPara = Pop.time[time.value].parameter;
                text4.innerHTML = PopPara.parameterName;
            })
        }
    })
    
    }

    city.addEventListener('change', function(i){

        console.log(city.value);
        cityWeather();
    })