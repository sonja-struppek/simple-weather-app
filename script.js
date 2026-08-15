// Weather App – Main JavaScript Logic
// Handles API requests, DOM updates, and user interactions


const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=de&q=";

        // Select DOM elements
        const searchBox = document.querySelector(".search input");
        const searchIcon = document.querySelector(".search-icon");
        const searchButton = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        // Fetch weather data for a given city
        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            // Handle invalid city name (404 error)
            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            } else {
                // Convert response to JSON
                var data = await response.json();

            // Update weather information in the UI
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            // Change weather icon based on weather condition
            if(data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/clouds.png";
            } else if(data.weather[0].main == "Clear") {
                weatherIcon.src = "images/clear.png";
            } else if(data.weather[0].main == "Rain") {
                weatherIcon.src = "images/rain.png";
            } else if(data.weather[0].main == "Drizzle") {
                weatherIcon.src = "images/drizzle.png";
            } else if(data.weather[0].main == "Mist") {
                weatherIcon.src = "images/mist.png";
            }

            // Show weather section and hide error message
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            }

        }

        // Trigger weather search when clicking the search icon
        searchIcon.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        });

        // Trigger weather search when pressing Enter inside the input field
        searchBox.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
            checkWeather(searchBox.value);
        }
        });

    