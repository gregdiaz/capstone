export function Container(){
    const container = document.createElement("div");
    container.classList.add("container");
    return container;
};

export function GeonamesEntry(postCodeData = []) {
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
export function WeatherBi(data){
    const entries = data.map(function ({ timezone, ob_time, city_name }) {
        const entry = document.createElement("div");
        const timeZoneP = document.createElement("p");
        const timeText = document.createElement("p");
        const cityText = document.createElement("p");
        
        timeZoneP.innerText = `Time Zone: ${timezone}`;
        timeText.innerText = `Time: ${ob_time}`;
        cityText.innerText = `City: ${city_name}`;

        entry.classList.add("entry");
        entry.appendChild(timeZoneP);
        entry.appendChild(timeText);
        entry.appendChild(cityText);
        return entry;
    });
    return entries;
}

export function PixaBay(data){
    const entries = data.map(function ({ id, previewURL, user }) {
        const entry = document.createElement("div");
        const idInfo = document.createElement("p");
        const previewImg = document.createElement("img");
        
        const userinfo = document.createElement("p");
        
        idInfo.innerText = `Id: ${id}`;
        previewImg.setAttribute("src", previewURL );
        userinfo.innerText = `User Name: ${user}`;

        entry.classList.add("entry");
        entry.appendChild(idInfo);
        entry.appendChild(previewImg);
        entry.appendChild(userinfo);
        return entry;
    });
    return entries;
}
