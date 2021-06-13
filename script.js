let weather = {
    apiKey : "35b007887f8d0a34f69fa7f950fdc8cb",
    fetchWeather: function(cityname) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + cityname
            + "&units=metric&appid=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather : function(data) {
        const { name } = data;
        const { description } = data.weather[0];
        const { temp , humidity} = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in" + " " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity:" +" "+ humidity + "%";
        document.querySelector(".wind").innerText = "Wind-Speed:" +" "+ speed + "km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name + "')"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

document.querySelector(".search button").addEventListener('click',function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener('keyup',function(e) {
    if(e.key === "Enter"){
        weather.search();
    }
})

weather.fetchWeather("Japan");