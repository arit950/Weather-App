let weather = {
    "apiKey":"4737555839f29a311b172d23af820fb5",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=metric&appid="
        +this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather:function(data){
        const { name } = data;
        const {  description }=data.weather[0];
        const { temp, humidity }=data.main;
        const { speed }= data.wind;
        
        document.querySelector(".city").innerText = "Weather in" + name;
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText = temp +"℃";
        document.querySelector(".humidity").innerText ="Humidity:"+ humidity +"%";
        document.querySelector(".wind").innerText ="Wind Speed:"+ speed +"km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/featured/1920*1080/?"+ name + "')"
       
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
 if(event.key == "Enter"){
    weather.search();
 }
});