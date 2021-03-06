import { Container, GeonamesEntry, WeatherBi, PixaBay } from './ui.js';

/* Global Variables */
const picKey = "16477521-cf7894caf3d4932481ff6d4e3";
const whatherKey = "8ecd20f53453441b9064673acf586e0e";

// Create an Action function instance dynamically with JS

export default async function action (e) {
    var country = document.getElementById("country").value;
    var zip = document.getElementById("zip").value;
    const container = Container();
    const endPoint = `http://api.geonames.org/postalCodeLookupJSON?postalcode=${zip}&country=${country}&username=magregor`;
    const endpointWeatherBi = `https://api.weatherbit.io/v2.0/current?&postal_code=${zip}&country=${country}&key=${whatherKey}`
    const picendpoint = `https://pixabay.com/api/?key=${picKey}&q=yellow+flowers&image_type=photo`;

    var dataPostal = await getData(endPoint);
    var data = await getData(endpointWeatherBi);
    var Pics = await getData(picendpoint);

    const entries = GeonamesEntry(dataPostal.postalcodes);
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