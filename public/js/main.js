const submitBtn = document.getElementById("submitBtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");
const datahide = document.querySelector(".middle_layer")

const day = document.getElementById("day");
const today_day = document.getElementById("today_day");

        const getCurrentDay = () =>{
            let currentTime = new Date();
            var weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            return weekday[currentTime.getDay()];
        };
        const getCurrentTime = () =>{
            var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
            var now = new Date();
            var month = months[now.getMonth()];
            var date = now.getDate();

            return `${month}${date}`;
        };
        day.innerText = getCurrentDay();
        today_day.innerText = getCurrentTime();















const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityname.value;
    console.log(cityVal);
    if(cityVal === "")
    {
        city_name.innerText = `PLS write city name before searching`;
        datahide.classList.add("data_hide");
    }
    else
    {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=5be2eb95964ac0c9d7869c84c31037d3`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            temp_real_val.innerText = arrData[0].main.temp;
            //temp_status.innerText = arrData[0].weather[0].main;
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            const tempMood = arrData[0].weather[0].main;

            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class= 'fas fa-sun' style = 'color: #eccc68;'></i>";
            }
            else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class= 'fas fa-cloud' style = 'color: #f1f2f6;'></i>";
            }
            else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class= 'fas fa-cloud-rain' style = 'color: #a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML = "<i class= 'fas fa-sun' style = 'color: #eccc68;'></i>";
            }
        datahide.classList.remove("data_hide");


        } catch {
            city_name.innerText = `PLS enter city name properly`;
            datahide.classList.add("data_hide");
            
        }

    }
} 

submitBtn.addEventListener("click",getInfo);