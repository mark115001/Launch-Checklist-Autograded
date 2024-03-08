// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

// const { addDestinationInfo } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {
  // alert("Beginning Document Window")

  let form = document.querySelector("form");
  let eventCount = 0;   //Only do plant choice once 
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let fd = new FormData(form);
    

    let dataCheck = "";
    validAnswers = [];
    for  (item of fd) {
        dataCheck = validateInput(item[0], item[1])
            if(dataCheck !== "Empty") {
              validAnswers.push(item[1])
            } else {
              return   //Stop Processing to fill in empty form fields               
          }
        }  

        documentDiv = document.getElementById("faultyItems")
        statusList = [document.getElementById("pilotStatus"), document.getElementById("copilotStatus"),document.getElementById("fuelStatus"),document.getElementById("cargoStatus"),document.getElementById("launchStatus")]
        formSubmission(documentDiv, statusList, validAnswers[0], validAnswers[1], validAnswers[2], validAnswers[3])
        
    //  // })
    
    if (eventCount === 0) {
    //-----TASK 3 Begins Here
    // alert("Listed Planets")
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
      listedPlanets = result;
    //   console.log(listedPlanets);
    }).then(function () {
      console.log(listedPlanets);
     
      
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      
      let planetChoice = pickPlanet(listedPlanets);
      
      // let missionTarget = document.getElementById("missionTarget")
      // addDestinationInfo(missionTarget,

      addDestinationInfo(document.getElementById("missionTarget"),
      listedPlanets[planetChoice].name,
      listedPlanets[planetChoice].diameter,
      listedPlanets[planetChoice].star,
      listedPlanets[planetChoice].distance,
      listedPlanets[planetChoice].moons,
      listedPlanets[planetChoice].image,
      )


    });
  }
  eventCount += 1
  // Task 3 Ends Here 
  });
});
