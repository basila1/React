var axios = require('axios');


//take in a language, ping the github api and get the popular resutls for that specific language
//making a request to the github api, getting back the response, before we retun the response, format it using response. data.items
module.exports = {
  fetchPopularRepos: function (language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI) //this going to retun as a promise
      .then(function (response) {
        return response.data.items;
      });

  }
};
