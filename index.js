const { fetchBreedDescription } = require("./breedFetcher");

const breedName = process.argv[2]; // get breed from command line

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(description);
  } else {
  console.log("Breed is invalid or not found:", error);
  } 

});
