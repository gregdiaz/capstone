/* Global Variables */
const entries = [];
const picKey = "16477521-cf7894caf3d4932481ff6d4e3";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
document.getElementById("generate").addEventListener('click',action);

function formValue(){
    let country = document.getElementById("country").value;
    let zip = document.getElementById("zip").value;
    const endpoint = `http://api.geonames.org/postalCodeLookupJSON?postalcode=${zip}&country=${country}&username=magregor`
    action(endpoint)
}

function createElements(value){
    let createDiv = document.createElement("div");
    createDiv.setAttribute("id","value");
    var createhr = document.createElement("hr");
    }

async function action (endpoint) {
    // e.preventDefault();
    // e.stopPropagation();
    formValue();
    const endpointweatherbi = `http://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=8ecd20f53453441b9064673acf586e0e`;
    const picendpoint = `https://pixabay.com/api/?key=${picKey}&q=yellow+flowers&image_type=photo`;
    var data = await getData(endpoint);
    Object.assign(data, { 
        newDate
    });
    const element = document.getElementById("entryHolder");
    var dataValue= data.getvalue(0);
        createElements();
    data.postalcodes.forEach(info => {
        let createDivInter = document.createElement("div");
        createDivInter.appendChild(document.createTextNode(JSON.stringify(info,undefined,2)));
        createDiv.appendChild(createDivInter);
        createDivInter.setAttribute("id",info.placeName); 
    });
        element.appendChild(createDiv);
        element.appendChild(createhr);

        let createDivWeather = document.createElement("div");
        createDivWeather.setAttribute("id","Weather");
        const weather = await getData(endpointweatherbi);
        weather.data.forEach(info => {
            let createDivInter = document.createElement("div");
            createDivInter.appendChild(document.createTextNode(JSON.stringify(info,undefined,2)));
            createDivInter.setAttribute("id",info.country_code);
            createDivWeather.appendChild(createDivInter);  
        });
        element.appendChild(createDivWeather);
        element.appendChild(createhr);

        let createDivpic= document.createElement("div");
        createDivpic.setAttribute("id","Pic");
        const picapi = await getData(picendpoint);
        picapi.hits.forEach(info => {
            let createDivInter = document.createElement("div");
            createDivInter.appendChild(document.createTextNode(JSON.stringify(info,undefined,2)));
            createDivInter.setAttribute("id",info.user);
            createDivpic.appendChild(createDivInter);  
        });
        element.appendChild(createDivpic); 
}

export { action }

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