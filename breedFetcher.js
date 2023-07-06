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

// request(searchEndpoint, (error, response, body) => {
//   if (error) {
//     console.error("Error:", error);
//   } else {
//     console.log("Response body:", body);
//     console.log("Type of body:", typeof body);
//   }
// });
////////////////////////////////////////////////////////Search for breed + Breed Not Found Error
const request = require("request");

const breedName = process.argv[2]; // get breed from command line

const searchEndpoint = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(searchEndpoint, (error, response, body) => {
  if (error) {
    console.error("Request failed:", error);
  } else {
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);

    if (data.length > 0) {
      const firstEntry = data[0];
      console.log("Description:", firstEntry.description);
    } else {
      console.log("That breed was not found.");
    }
  }
});
