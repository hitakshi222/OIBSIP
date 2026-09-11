const form = document.getElementById("converterForm");
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");

const inputError = document.getElementById("inputError");
const result = document.getElementById("result");
const absoluteZeroError = document.getElementById("absoluteZeroError");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");


/* -----------------------------
   Real-time Input Validation
----------------------------- */

temperatureInput.addEventListener("input", function () {

    const value = temperatureInput.value.trim();

    // Empty input
    if (value === "") {
        inputError.textContent = "";
        temperatureInput.classList.remove("invalid", "valid");
        return;
    }

    // Allow valid decimal and negative numbers
    const numberPattern = /^-?\d*\.?\d+$/;

    if (!numberPattern.test(value)) {
        inputError.textContent = "Please enter a valid numeric value.";
        temperatureInput.classList.add("invalid");
        temperatureInput.classList.remove("valid");
    } else {
        inputError.textContent = "";
        temperatureInput.classList.remove("invalid");
        temperatureInput.classList.add("valid");
    }
});


/* -----------------------------
   Temperature Conversion
----------------------------- */

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const value = temperatureInput.value.trim();
    const unit = unitSelect.value;

    // Reset messages
    inputError.textContent = "";
    absoluteZeroError.classList.add("hidden");
    result.classList.add("hidden");

    temperatureInput.classList.remove("invalid");

    // Check empty input
    if (value === "") {
        inputError.textContent = "Please enter a temperature.";
        temperatureInput.classList.add("invalid");
        return;
    }

    // Check numeric input
    const numberPattern = /^-?\d*\.?\d+$/;

    if (!numberPattern.test(value)) {
        inputError.textContent = "Please enter a valid numeric value.";
        temperatureInput.classList.add("invalid");
        return;
    }

    const temperature = Number(value);

    let celsius;
    let fahrenheit;
    let kelvin;


    /* Convert everything to Celsius first */

    if (unit === "celsius") {

        celsius = temperature;

    } else if (unit === "fahrenheit") {

        celsius = (temperature - 32) * 5 / 9;

    } else if (unit === "kelvin") {

        celsius = temperature - 273.15;
    }


    /* -----------------------------
       Absolute Zero Validation
    ----------------------------- */

    if (celsius < -273.15) {

        absoluteZeroError.classList.remove("hidden");
        temperatureInput.classList.add("invalid");

        return;
    }


    /* -----------------------------
       Convert Celsius to all units
    ----------------------------- */

    fahrenheit = (celsius * 9 / 5) + 32;
    kelvin = celsius + 273.15;


    /* -----------------------------
       Display Results
    ----------------------------- */

    celsiusResult.textContent = `${celsius.toFixed(2)} °C`;

    fahrenheitResult.textContent =
        `${fahrenheit.toFixed(2)} °F`;

    kelvinResult.textContent =
        `${kelvin.toFixed(2)} K`;

    result.classList.remove("hidden");
});


/* -----------------------------
   Clear result when unit changes
----------------------------- */

unitSelect.addEventListener("change", function () {

    result.classList.add("hidden");
    absoluteZeroError.classList.add("hidden");
});