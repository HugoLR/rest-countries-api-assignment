const request = superagent;
request.get("https://restcountries.eu/rest/v2/all")
.then(function(result){
  //Obtendemos nuestro array y lo guardamos en una variable
  var countries = result.body
  console.log(result.header)
  //Obtenemos a nuestro div container donde metermos todos nuestros elementos
  var countrieContainer = document.querySelector('.countries-container')

    //Iteramos en nuetro array
    countries.forEach(function(country){
      var img = country.flag
      var {name} = country
      var {capital} = country
      var countryCard = document.createElement("div")
      countryCard.classList.add ("country-card")
      countrieContainer.appendChild(countryCard)
      countryCard.innerHTML = `<img class="country-flag" src="${img}" alt="flag">
      <h4 class="country-name">${name}</h4>
      <p class="country-capital">${capital}</p>`
    })
})
