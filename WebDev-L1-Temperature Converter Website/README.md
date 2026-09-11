# 🌡️ Temperature Converter Website

A simple, interactive, and responsive **Temperature Converter Website** built using **HTML5, CSS3, and Vanilla JavaScript**.

The application allows users to convert temperature values between **Celsius, Fahrenheit, and Kelvin** with real-time input validation and absolute-zero error handling.

---

## 📌 Project Overview

The Temperature Converter is a web-based utility that accepts a temperature value and an input unit. After clicking the **Convert Temperature** button, the application calculates and displays the equivalent values in:

- Celsius (°C)
- Fahrenheit (°F)
- Kelvin (K)

The application also validates user input and prevents temperatures below **absolute zero**.

---

## 🎯 Objective

The objective of this project is to build an interactive temperature conversion tool that demonstrates:

- HTML5 form elements
- CSS3 responsive UI design
- JavaScript DOM manipulation
- User input validation
- Mathematical calculations
- Error handling
- Event handling in JavaScript

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure and content |
| CSS3 | Styling, layout and responsive design |
| JavaScript | Conversion logic and validation |

No external libraries or frameworks are required.

---

## ✨ Features

### 1. Temperature Input

Users can enter a numeric temperature value.

Example:

```text
25
```

Both positive and negative values are supported.

---

### 2. Unit Selection

Users can select the input temperature unit from a dropdown:

- Celsius (°C)
- Fahrenheit (°F)
- Kelvin (K)

---

### 3. Temperature Conversion

The application converts the entered value into all three temperature units.

For example:

```text
Input: 25 °C

Celsius:     25.00 °C
Fahrenheit:  77.00 °F
Kelvin:      298.15 K
```

---

### 4. Real-Time Input Validation

The application checks the input while the user is typing.

If the user enters an invalid value such as:

```text
abc
```

the application displays:

```text
Please enter a valid numeric value.
```

---

### 5. Absolute Zero Validation

The application prevents temperatures below absolute zero.

Absolute zero is:

```text
-273.15 °C
-459.67 °F
0 K
```

If the entered temperature is below absolute zero, the application displays a user-friendly warning.

Example:

```text
⚠️ Invalid Temperature

The temperature cannot be below absolute zero
(−273.15°C / −459.67°F / 0 K).
```

---

### 6. Responsive Design

The interface is designed to work on:

- Desktop
- Laptop
- Tablet
- Mobile devices

---

## 🧮 Conversion Formulas

### Celsius to Fahrenheit

```text
°F = (°C × 9/5) + 32
```

### Celsius to Kelvin

```text
K = °C + 273.15
```

### Fahrenheit to Celsius

```text
°C = (°F − 32) × 5/9
```

### Kelvin to Celsius

```text
°C = K − 273.15
```

---

## 📂 Project Structure

```text
temperature-converter/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### File Description

**`index.html`**

Contains the structure of the temperature converter, including:

- Temperature input
- Unit dropdown
- Convert button
- Result section
- Error messages

**`style.css`**

Contains the complete styling for:

- Converter card
- Input fields
- Buttons
- Result cards
- Error messages
- Responsive layout

**`script.js`**

Contains:

- Temperature conversion formulas
- Input validation
- Absolute-zero validation
- DOM manipulation
- Event handling

**`README.md`**

Contains project documentation and instructions.

---

## 🚀 How to Run the Project

### Step 1: Download or Clone the Project

Download all project files into the same folder.

### Step 2: Open the Project

Open:

```text
index.html
```

in any modern web browser.

### Step 3: Use the Converter

1. Enter a temperature value.
2. Select the input unit.
3. Click **Convert Temperature**.
4. View the converted values.

No server or installation is required.

---

## 💻 Example

### Example 1 — Celsius

```text
Input:
25 °C

Output:
25.00 °C
77.00 °F
298.15 K
```

### Example 2 — Fahrenheit

```text
Input:
32 °F

Output:
0.00 °C
32.00 °F
273.15 K
```

### Example 3 — Kelvin

```text
Input:
273.15 K

Output:
0.00 °C
32.00 °F
273.15 K
```

---

## ⚠️ Error Handling

The application handles the following invalid conditions:

### Empty Input

```text
Please enter a temperature.
```

### Non-Numeric Input

```text
Please enter a valid numeric value.
```

### Temperature Below Absolute Zero

```text
Invalid Temperature

The temperature cannot be below absolute zero.
```

---

## 🎨 UI Design

The interface uses a clean and minimal design with:

- Centered converter card
- Rounded corners
- Clear labels
- Simple icons
- Responsive layout
- Clearly separated result cards
- User-friendly error messages

The design focuses on usability and readability.

---

## 🔐 Security & Privacy

This project runs completely in the browser.

- No user data is collected.
- No database is required.
- No external API is used.
- No information is sent to a server.

---

## 📱 Browser Compatibility

The project works with modern browsers such as:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Opera

---

## 📚 Learning Outcomes

By completing this project, the following concepts can be practiced:

- HTML forms
- CSS Flexbox and Grid
- Responsive web design
- JavaScript variables and functions
- Conditional statements
- Regular expressions
- DOM manipulation
- Event listeners
- Form submission handling
- Input validation
- Mathematical operations

---

## 🔮 Future Improvements

Possible future enhancements include:

- Add automatic re