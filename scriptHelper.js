// Write your helper functions here!

const { toBeEmptyDOMElement } = require('@testing-library/jest-dom/matchers');

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
//    let missionTarget = document.getElementById("missionTarget")
//    missionTarget.innerHTML += `<h2>Mission Destination</h2>
   document.innerHTML += `<h2>Mission Destination</h2>
   <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of moons: ${moons}</li>  
  </ol>
        <img src=${imageUrl}></img>`
}
 
 function validateInput(item0, testInput) {
    // alert(testInput)
    let statusValue = ""

    if (testInput === "" || testInput === null) {
        alert(`${item0} is a required field`)
        statusValue = "Empty"
    }

    if (parseFloat(testInput)) {
        if (item0==="fuelLevel" || item0==="cargoMass") {
        statusValue = "Is a Number"
        } else {
            alert(`${item0} cannot be a number`)
            statusValue = "Empty"
        }
    }

    if (isNaN(testInput)) {
        if (item0==="pilotName" || item0==="copilotName") {
        statusValue = "Not a Number"
        } else {
            alert(`${item0} cannot be letters`)
            statusValue = "Empty"
        }
    }
        return statusValue;
}

 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchReadyStatus;
  
    list[0].innerHTML = `Pilot ${pilot} is ready for launch`
    list[1].innerHTML = `Co-pilot ${copilot} is ready for launch`

    if(fuelLevel < Number(10000)) {
        list[2].innerHTML = `Fuel level too low for launch`
        launchReadyStatus = false
    } else {
        list[2].innerHTML = `Fuel level high enough for launch`
    }

    if (cargoLevel > Number(10000)) {
        // document.style.visibility = "visible"
        list[3].innerHTML = `Cargo mass too heavy for launch`
        launchReadyStatus = false
    } else {
        list[3].innerHTML = `Cargo mass low enough for launch`
    }

    if (launchReadyStatus === false) {
        document.style.visibility = "visible"
        list[4].innerHTML = "Shuttle not ready for launch"
        list[4].style="color: red"
    } else {
        document.style.visibility = "hidden"
        list[4].innerHTML = "Shuttle is ready for launch"
        list[4].style="color: green"

        }
        
    }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json')

     .then(res => {
        return res.json();
    })

    // .then(data => {
    //     console.log(data)
    // })
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let planetsResponse = Math.floor(Math.random() * 7)

    return planetsResponse;


 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;