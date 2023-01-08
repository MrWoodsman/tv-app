var t

function time() {
    t = new Date()

    var h, m, s
    h = t.getHours()
    m = t.getMinutes()
    s = t.getSeconds()

    if (h < 10) { h = '0' + h }
    if (m < 10) { m = '0' + m }
    if (s < 10) { s = '0' + s }

    const final_time = `${h}:${m}:${s}`

    document.querySelectorAll('.time_js').forEach((e) => {
        e.innerHTML = final_time
    })
    
    //!
    var daysName = ['niedziela','poniedziałek','wtorek','środa','czwartek','piątek','sobota']
    var monthName = ['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień']
    var final_date = `${daysName[t.getDay()]}, ${t.getDate()} ${monthName[t.getMonth()]} ${t.getFullYear()}`

    document.querySelectorAll('.date_js').forEach((e) => {
        e.innerHTML = final_date
    })

    createCalendar()
}
time()
var intetvalTime = setInterval(time,500)

function createCalendar() {
    try {
        console.warn();
        document.querySelector('.calendar_js').innerHTML = ``
        const weekDay = new Date(t.getFullYear(), t.getMonth(), 1).getDay()
        //! Tworzenie spacji
        const lastDay = daysInMonth(t.getMonth()-1, t.getFullYear());
        for (let b = 0; b < lastDay; b++) {
            const box = document.createElement('p')
            box.innerHTML = b
            box.setAttribute('class','day empty')
            if ( b > lastDay - 7 + weekDay) {
                document.querySelector('.calendar_js').appendChild(box)
            }
        }
        //! Tworzenie dni
        const lastActuaal = daysInMonth(t.getMonth(), t.getFullYear())
        for (let a = 1; a <= lastActuaal.getDate();  a++) {
            const box = document.createElement('p')
            box.setAttribute('class','day')
            if (t.getDate() == a) { box.classList.add('today')}
            box.innerHTML = a
            document.querySelector('.calendar_js').appendChild(box)
        }
        console.warn(lastActuaal);
        for (let c = 0; c < 7 - lastActuaal.getDay(); c++) {
            const box = document.createElement('p')
            box.innerHTML = c
            box.setAttribute('class','day empty')
            document.querySelector('.calendar_js').appendChild(box)
        }
    } catch (error) {
        
    }
}
createCalendar()
function daysInMonth (month, year) {
    if (month == -1) {
        return new Date(year-1, 12, 0).getDate();
    } else {
        return new Date(year, month+1, 0);
    }
}

//! SLIDE SHOW
let weather = {
    apiKey: "f3e96ff271a2a483f1620d7d1a347913",
    fetchWeather: function (city) {
    fetch(
        // "https://api.openweathermap.org/data/2.5/weather?q=" +
        // city +
        // "&units=metric&appid=" +
        // this.apiKey + "&lang=pl"
        "https://api.openweathermap.org/data/2.5/weather?lat=50.9833294&lon=22.1499994&exclude=hourly,daily&units=metric&appid=" + this.apiKey + "&lang=pl"
    )
        .then((response) => {
        if (!response.ok) {
            //alert("No weather found.");
            throw new Error("No weather found.");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    // console.warn(temp + "°C");
    document.querySelectorAll('.temperature_js').forEach((e) => {
        e.innerHTML = temp + "°C"
    })
    document.querySelectorAll('.loaction_js').forEach((e) => {
        e.innerHTML = name
    })
    document.querySelectorAll('.description_js').forEach((e) => {
        e.innerHTML = description
    })
    //   document.querySelector(".city").innerText = "Pogoda w " + name;
    //   document.querySelector(".icon").src =
    //     "https://openweathermap.org/img/wn/" + icon + ".png";
    //   document.querySelector(".description").innerText = description;
    //   document.querySelector(".temp").innerText = temp + "°C";
    //   document.querySelector(".humidity").innerText =
    //     "Wilgotność: " + humidity + "%";
    //   document.querySelector(".wind").innerText =
    //     "Prędkość wiatru: " + speed + " km/h";
    //   document.querySelector(".weather").classList.remove("loading");
    //   document.body.style.backgroundImage =
    //     "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

//   document.querySelector(".search button").addEventListener("click", function () {
    // weather.search();
//   });

//   document
//     .querySelector(".search-bar")
//     .addEventListener("keyup", function (event) {
//       if (event.key == "Enter") {
//         weather.search();
//       }
//     });

weather.fetchWeather("Urzędów");

function reload() {
    weather.fetchWeather("Urzędów");
}
var intervalReload = setInterval(reload,15000)
