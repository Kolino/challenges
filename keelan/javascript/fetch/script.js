const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", async e => {
    e.preventDefault();

    // Removing any results from prior calls
    const resultsSctn = document.querySelector("#resultsSctn");
    if (resultsSctn.hasChildNodes) 
        resultsSctn.removeChild(resultsSctn.lastChild);

    // Retrieving API's data
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countryData = await response.json();

    // Getting user's choice of country
    const countryInput = document.querySelector("#countryInput");
    const tarCountry = countryInput.value;

    // Finding the country in API's data
    const countryObj = countryData.find(country => {
        return country.name.common === tarCountry
    });

    // console.log(countryObj);

    // Displaying country's info to user
    const resultsDiv = document.createElement("div");
    const resultsPara = document.createElement("p");
    const displayText = `${countryObj.name.common}'s capital is ${countryObj.capital[0]}.`;
    const resultsTextNode = document.createTextNode(displayText);
    resultsPara.appendChild(resultsTextNode);
    resultsDiv.appendChild(resultsPara);
    resultsSctn.appendChild(resultsDiv);

    // Resetting form's input
    countryInput.value = "";
});

