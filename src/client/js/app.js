/* Global Variables */
const endpoint = "http://api.geonames.org/findNearbyPostalCodes?postalcode=8775&country=";
const key = "&radius=10&username=magregor";
var zip;
const entries = [];
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
document.getElementById("generate").addEventListener('click',action);

async function action (e) {
    e.preventDefault();
    e.stopPropagation();
    city = document.getElementById("country").value;
    const content = document.getElementById('feelings').value;
    const data = await getData(endpoint, city, key);
    Object.assign(data, { 
        newDate,
        content
    });
    const entry = await postData('/', data);
    const element = document.getElementById("entryHolder");
    elementKeys = Object.keys(entry);
    elementKeys.forEach(info => {
        let createDiv = document.createElement("div");
        createDiv.setAttribute("id",info);
        createDiv.appendChild(document.createTextNode(entry[info]));
        element.appendChild(createDiv);
        
    });
}
const getData = async(endpoint, zip, key) => {
    const fetchApi = endpoint+zip+key;
    const res = await fetch(fetchApi);
    try {
            const data = await res.json();
            console.log(data)
            return data;
        }
    catch(error){
            console.log("error", error);
        }
};

const postData = async(url ='/', data = {})=>{
    console.log(JSON.stringify(data));
    const res = await fetch(url,{
        method:'POST',
        credentials: 'same-origin',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await res.json();
        console.log("Client" , newData);
        return newData;
    }
catch(error){
        console.log("error", error);
    }
};



