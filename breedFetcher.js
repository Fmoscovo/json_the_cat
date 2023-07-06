///////////////////////////////////staring the code //////////////////////// const request = require("request");

// const searchEndpoint = "https://api.thecatapi.com/v1/breeds/search?q=Siberian";

// request(searchEndpoint, (error, response, body) => {
//   if (error) {
//     console.error("Error:", error);
//   } else {
//     const data = JSON.parse(body);
//     console.log(data);
//   }
// });
////////////////////////////////////////Node inplmenting

// const request = require("request");

// const searchEndpoint = "https://api.thecatapi.com/v1/breeds/search?q=Siberian";

const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  const searchEndpoint = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(searchEndpoint, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        const breed = data[0];
        callback(null, breed.description);
      } else {
        callback(null, null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };

// request(searchEndpoint, (error, response, body) => {
//   if (error) {
//     console.error("Error:", error);
//   } else {
//     console.log("Response body:", body);
//     console.log("Type of body:", typeof body);
//   }
// });
