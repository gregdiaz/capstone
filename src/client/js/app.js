// import {createElements} from './weatherbi.js';
import { Container, GeonamesEntry, WeatherBi, PixaBay } from '/src/client/js/ui.js';

/* Global Variables */
const picKey = "16477521-cf7894caf3d4932481ff6d4e3";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
document.getElementById("generate").addEventListener('click',action);

// export function formValue(){
//     var country = document.getElementById("country").value;
//     var zip = document.getElementById("zip").value;
//     // var r = [];
//     // r = push.country;
//     // r = push.zip;
//     // return r;
//     const endpoint = `http://api.geonames.org/postalCodeLookupJSON?postalcode=${zip}&country=${country}&username=magregor`
//     action(endpoint)
// }

// function createElements(){
//     let createDiv = document.createElement("div");
//     createDiv.setAttribute("id","value");
//     var createhr = document.createElement("hr");
//     }

export async function action (e) {
    var country = document.getElementById("country").value;
    var zip = document.getElementById("zip").value;
    const container = Container();

    const endPoint = `http://api.geonames.org/postalCodeLookupJSON?postalcode=${zip}&country=${country}&username=magregor`
    const endpointWeatherBi = `http://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=8ecd20f53453441b9064673acf586e0e`;
    const picendpoint = `https://pixabay.com/api/?key=${picKey}&q=yellow+flowers&image_type=photo`;

    var dataPostal = await getData(endPoint);
    var data = await getData(endpointWeatherBi);
    var Pics = await getData(picendpoint);

    console.log(data);
   Object.assign(dataPostal, { 
       newDate
   });

    const entries = GeonamesEntry(dataPostal.postalcodes);
    debugger;
    const weather = WeatherBi(data.data);
    const pic = PixaBay(Pics.hits);

    entries.forEach(function (entry) {
        container.appendChild(entry);
    });

    weather.forEach(function (entry){
        container.appendChild(entry);

    });

    pic.forEach(function (entry){
        container.appendChild(entry);

    });



    document.getElementById("entryHolder").appendChild(container);

//     let createDiv = document.createElement("div");
//     createDiv.setAttribute("id","value");
//     var createhr = document.createElement("hr");

//     data.postalcodes.forEach(info => {
//         createDivInter = document.createElement("div");
//         createDivInter.appendChild(document.createTextNode(JSON.stringify(info,undefined,2)));
//         createDiv.appendChild(createDivInter);
//         createDivInter.setAttribute("id",info.placeName); 
//     });
//         element.appendChild(createDiv);
//         element.appendChild(createhr);

//         let createDivWeather = document.createElement("div");
//         createDivWeather.setAttribute("id","Weather");
//         const weather = await getData(endpointweatherbi);

//         weather.data.forEach(info => {
//             let createDivInter = document.createElement("div");
//             createDivInter.appendChild(document.createTextNode(JSON.stringify(info,undefined,2)));
//             createDivInter.setAttribute("id",info.country_code);
//             createDivWeather.appendChild(createDivInter);  
//         });
//         element.appendChild(createDivWeather);
//         element.appendChild(createhr);

//         let createDivpic= document.createElement("div");
//         createDivpic.setAttribute("id","Pic");
//         const picapi = await getData(picendpoint);
//         picapi.hits.forEach(info => {
//             let createDivInter = document.createElement("div");
//             createDivInter.appendChild(document.createTextNode(JSON.stringify(info,undefined,2)));
//             createDivInter.setAttribute("id",info.user);
//             createDivpic.appendChild(createDivInter);  
//         });
//         element.appendChild(createDivpic); 

 }
const getData = async(endpoint) => {
    const res = await fetch(endpoint);
    try {
            const data = await res.json();
            return data;
        }
    catch(error){
            console.log("error", error);
        }
};