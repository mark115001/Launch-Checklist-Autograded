// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

// const { addDestinationInfo } = require("./scriptHelper");

// const { addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function(event) {
  event.preventDefault();

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse=myFetch();
  listedPlanetsResponse.then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
  }).then(function () {
      // console.log(listedPlanets);
      let planet=pickPlanet(listedPlanets)
      // alert(planet.name)
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    })
    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let fd = new FormData(form);  //Takes all form responses and creates key/value pairs

      formAnswers = []
      for (item of fd) {       //Read the key:value pairs created above. 
        formAnswers.push(item[1])
      }
      // alert(formAnswers)

      
      formSubmission(document, document.getElementById("faultyItems"), formAnswers[0], formAnswers[1], formAnswers[2], formAnswers[3], document.q)


    })

  });

 
  