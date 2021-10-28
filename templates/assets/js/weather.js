const submitBtn = document.getElementById("submitBtn");
const cityname = document.getElementById("cityname");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const city_name = document.getElementById("city_name");
const data_hide = document.getElementById("data_hide");
const day = document.getElementById("day");
const today_date = document.getElementById("today_date");

// Hide data
data_hide.classList.add("data_hide");

// Occured this function when user click search button
const getData = async (event) => {
  event.preventDefault();
  const inputVal = cityname.value;
  if (inputVal === "") {
    city_name.innerHTML = "Please Enter Your City Name";
    data_hide.classList.add("data_hide");
  } else {
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=be67fada588f5e5c609485aeea7da880`;
    const data = await fetch(url);
    const response = await data.json();
    const arrData = [response];

    temp.innerHTML = `${arrData[0].main.temp} °c`;
    let temp_status_icon = arrData[0].weather[0].main;
    if (temp_status_icon == "Haze") {
      temp_status.innerHTML = `<i class="bi bi-cloud-haze2-fill"></i>`;
    } else if (temp_status_icon == "Rain") {
      temp_status.innerHTML = `<i class="bi bi-cloud-lightning-rain-fill"></i>`;
    } else if (temp_status_icon == "Clouds") {
      temp_status.innerHTML = `<i class="bi bi-cloud-fill"></i>`;
    } else {
      temp_status.innerHTML = `<i class="bi bi-sun"></i>`;
    }

    data_hide.classList.remove("data_hide");
    city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;

    } catch{
        city_name.innerHTML = "Please Enter Your City Name Properly";
        data_hide.classList.add("data_hide");
    }
  }
};

/***** Date logic ******/
let date = new Date();
let days = date.getDay();

let dateArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
let monthArr = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const finalDay = dateArr[days];
const finalDate = date.getDate();
const finalMonth = monthArr[date.getMonth()];

day.innerHTML = finalDay;
today_date.innerHTML = `${finalDate} ${finalMonth}`;

submitBtn.addEventListener("click", getData);
