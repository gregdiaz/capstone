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
    const data = await getData(endpoint);

    Object.assign(data, { 
        newDate
    });
    //const entry = await postData('/', data);
    //console.log(entry);
    const element = document.getElementById("entryHolder");
    elementKeys = Object.keys(data);

//     for(let i=0; elementKeys >= i; i++){
//         let createDiv = document.createElement("div");
//         createDiv.setAttribute("id",info);
//         for(let j=0; elementKeys[i]< j; j++){
//             var createDivInter = document.createElement("div");
//             var Space = document.createElement("hr");
//         };      
//     };
// }

    
    elementKeys.forEach(info => {
        let createDiv = document.createElement("div");
        createDiv.setAttribute("id",info);
        let createDivInter = document.createElement("div");
        createDivInter.appendChild(document.createTextNode(data[info]));
        createDiv.appendChild(createDivInter);
        console.log(document.createTextNode(data[info]));
        element.appendChild(createDiv);
        });     
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