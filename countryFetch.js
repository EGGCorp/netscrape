const axios = require("axios").default;

async function fetchCountryData() {
	let countryData = 'hello world'
  const options = {
    method: 'GET',
    url: 'https://unogsng.p.rapidapi.com/countries',
    headers: {
      'x-rapidapi-host': 'unogsng.p.rapidapi.com',
      'x-rapidapi-key': '9b5be7600amshd85ba186806556fp1343d2jsn084211cd9e9a'
    }
  };
    
  countryData = await axios.request(options).then(function (response) {
    //console.log(response.data);
		countryData = response.data;
		return response.data;
  }).catch(function (error) {
    console.error(error);
  });
	return countryData;
};

module.exports = { fetchCountryData };