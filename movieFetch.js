
const axios = require("axios").default;
const { fetchCountryData } = require('./countryFetch.js');


async function getMovies (movie) {
  //const countryData = await fetchCountryData();
  let movieCountries;
  const options = {
    method: 'GET',
    url: 'https://unogsng.p.rapidapi.com/search',
    params: {
      type: 'series',
      start_year: '1972',
      orderby: 'rating',
      audiosubtitle_andor: 'and',
      limit: '100',
      subtitle: '',
      countrylist: '',
      query: movie,
      audio: 'english',
      country_andorunique: 'or',
      offset: '0',
      end_year: '2021'
    },
    headers: {
      'x-rapidapi-host': 'unogsng.p.rapidapi.com',
      'x-rapidapi-key': '9b5be7600amshd85ba186806556fp1343d2jsn084211cd9e9a'
    }
  };

  const movieData = await axios.request(options).then(async function (response) {
	  //console.log(response.data.results[0].clist);
    //fetchCountryData();
    return response.data;
  })
  .catch(function (error) {
	  console.error(error);
  });
  //console.log('movie data', movieData);
  //console.log('countryData', countryData);
  
  const parseCountries = (countryList) => {
    console.log('parse', countryList.replace(/['"]+/g, ''));
    const countryListWithoutQuotes = countryList.replace(/['"]+/g, '');
    const countryObj = {};
    let keyString = '';
    let valueString = '';
    let codeOrName = false;
    for(let i = 0; i < countryListWithoutQuotes.length; i++) {
      if(countryListWithoutQuotes[i] === ':') {
        codeOrName = true;
      } else if(countryListWithoutQuotes[i] === ',') {
        countryObj[keyString] = valueString;
        codeOrName = false;
        keyString = '';
        valueString = '';
      } else if(codeOrName === false) {
        keyString += countryListWithoutQuotes[i];
      } else if(codeOrName === true) {
        valueString += countryListWithoutQuotes[i];
      }

    }
    return countryObj;
  
  }

  movieData.results.forEach(el => {
    const movieCountry = parseCountries(el.clist);
    //const remainingCountries = [];
    //console.log('from parsing', movieCountry);
    /*
    countryData.results.forEach(element => {
      if(!movieCountry.hasOwnProperty(element.countrycode)) {
        remainingCountries.push(element);
      } 
    })*/
    //console.log(remainingCountries);
    el.clist = movieCountry;
    //console.log(el)
  })
  console.log(movieData);
  return(movieData.results);
}
//getMovies();
module.exports = { getMovies }


