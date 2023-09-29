async function moduleProject4() {
  // 👇 WORK WORK BELOW THIS LINE 👇
  const footer = document.querySelector("footer");
  const currentYear = new Date().getFullYear();
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;

  let descriptions = [
    ["Sunny", "☀️"],
    ["Cloudy", "☁️"],
    ["Rainy", "🌧️"],
    ["Thunderstorm", "⛈️"],
    ["Snowy", "❄️"],
    ["Partly Cloudy", "⛅️"],
  ];

  // 👉 Tasks 1 - 5 go here
  document.querySelector("#weatherWidget").style.display = "none";
  document
    .querySelector("#citySelect")
    .addEventListener("change", async (evt) => {
      console.log("selection changed");
      try {
        document
          .querySelector("#citySelect")
          .setAttribute("disabled", "disabled");
        document.querySelector("#weatherWidget").style.display = "none";
        document.querySelector(".info").textContent =
          "Fetching weather data...";

        console.log(evt.target.value);
        let city = evt.target.value;
        let url = `http://localhost:3003/api/weather?city=${city}`;
        console.log(url);

        const res = await axios.get(url);
        console.log(res.data);
      } catch (err) {
        console.log('The promise was rejected with an err.message --> ', err.message)
      }
    });
  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== "undefined" && module.exports)
  module.exports = { moduleProject4 };
else moduleProject4();
