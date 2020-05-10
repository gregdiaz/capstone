/* Global Variables */
const entries = [];
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
document.getElementById("generate").addEventListener('click',action);

async function action (e) {
    e.preventDefault();
    e.stopPropagation();
    let country = document.getElementById("country").value;
    let zip = document.getElementById("zip").value;
    const endpoint = `http://api.geonames.org/postalCodeLookupJSON?postalcode=${zip}&country=${country}&username=magregor`
    const endpointweather = `http://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=8ecd20f53453441b9064673acf586e0e`;
    const data = await getData(endpoint);

    Object.assign(data, { 
        newDate
    });

    const element = document.getElementById("entryHolder");
    let createDiv = document.createElement("div");
    createDiv.setAttribute("id","EntryInfo");
    data.postalcodes.forEach(info => {
        let createDivInter = document.createElement("div");
        createDivInter.appendChild(document.createTextNode(JSON.stringify(info,undefined,2)));
        createDiv.appendChild(createDivInter);
        createDivInter.setAttribute("id",info.placeName);
    });
        element.appendChild(createDiv);    
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

// const postData = async(url ='/', data = {})=>{
//     console.log(JSON.stringify(data));
//     const res = await fetch(url,{
//         method:'POST',
//         credentials: 'same-origin',
//         headers:{
//             'Content-Type':'application/json',
//         },
//         body: JSON.stringify(data),
//     });
//     try {
//         const newData = await res.json();
//         console.log("Client" , newData);
//         return newData;
//     }
// catch(error){
//         console.log("error", error);
//     }
// };