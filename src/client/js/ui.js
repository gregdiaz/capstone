export function Container(){
    const container = document.createElement("div");
    container.classList.add("container");
    return container;
};

export function WeatherEntry(postCodeData) {
    const entries = postCodeData.map(function ({ countryCode, lat, lng }) {
        const entry = document.createElement("div");
        const country = document.createElement("p");
        const latText = document.createElement("p");
        const lngText = document.createElement("p");
        
        country.innerText = `Contry Code: ${countryCode}`;
        latText.innerText = `Latitud: ${lat}`;
        lngText.innerText = `Longitud: ${lng}`;

        entry.classList.add("entry");
        entry.appendChild(country);
        entry.appendChild(latText);
        entry.appendChild(lngText);
        return entry;
    });

    return entries;
}
