const renderWeather = function (data, image, className = "") {
    removeCard();
    let colour = weatherColor(convertTemp(data.main.temp));
    console.log(colour);
    body.style.backgroundColor = colour;
    // colorTemperatureToRGB(data.main.temp);
    // const tempC = convertTemp(data.main.temp);
    // const tempF = ((data.main.temp - 273.15) * 9) / 5 + 32;
  
    const html = `
     
          
          <div class=" card max-w-xl rounded overflow-hidden shadow-lg my-2">
              <img class="w-full" src="${image}" alt="Sunset in the mountains">
              <div class=" grid grid-cols-3 gap-4 px-6 py-4">
                <div class="font-bold bg-gray-200 text-xl text-center py-2 mb-2 rounded-lg">${
                  data.name
                }</div>
                <p class="text-gray-600 text-base text-center">
                  <span class = "text-black" >Discription:</span> <br>
                   ${data.weather[0].description}
                </p>
                <p class="text-gray-600 text-base text-center">
                  <span class = "text-black" >Temperature:</span> <br>
                   ${convertTemp(data.main.temp)}°C
                </p>              
                <p class="text-gray-600 text-base text-center">
                  <span class = "text-black" >Feels like:</span> 
                  ${convertTemp(data.main.feels_like)}°C
                </p> 
                <p class="text-gray-600 text-base text-center">
                  <span class = "text-black" >Wind:</span> 
                  ${data.wind.speed}mph
                </p> 
                <p class="text-gray-600 text-base text-center">
                   <span class = "text-black" >Wind direction:</span> 
                   ${convertDegToDirection(data.wind.deg)}
                </p> 
              </div>
          </div>
      
    
    `;