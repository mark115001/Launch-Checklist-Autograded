// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    
    document.innerHTML += `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name:${name}</li>
                     <li>Diameter:${diameter}</li>
                     <li>Star:${star}</li>
                     <li>Distance from Earth:${distance}</li>
                     <li>Number of Moons:${moons}</li>
                 </ol>
                 <img src=${imageUrl}>`
    
 }
 
 function validateInput(testInput) {

    if (testInput === "" || testInput === null) {
        return "Empty"
    }

    // if (parseInt(testInput)) {
    if (!isNaN(testInput)) {
        return "Is a Number" 
    }

    if (isNaN(testInput)) {
        return "Not a Number"
    }
}
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // alert("Hello from formSubmission")

    //Beginning validating of form information
    let formValidate = [pilot, copilot, fuelLevel, cargoLevel]
    let validCheck;
    for (field of formValidate) {
    validCheck = validateInput(field)
    //    alert(validCheck)
    if (validCheck === "Empty"){
        alert(`Required field not completed`)
        return
    }
    
    if (validCheck === "Is a Number") {
        if (field === pilot || field === copilot) {
        alert (`${field} field must use letters`)
        return
        }
    }
    
    if (validCheck === "Not a Number") {
            if (field === fuelLevel || field === cargoLevel) {
            alert(`${field} field must use numbers`)
            return
            }
        }
    }

    //Beginning "faultyItems checking"
   
    if(fuelLevel < Number(10000)) {
        list.style.visibility = "visible"
        document.innerHTML = "Shuttle Not Ready for Launch"
        document.style="color: red"
        pilotStatus.innerHTML = "Pilot Chris is ready for launch"
        copilotStatus.innerHTML = "Co-pilot Bob is ready for launch"
        fuelStatus.innerHTML = "Fuel level too low for launch"
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        }

    if (cargoLevel > Number(10000)) {
        list.style.visibility = "visible"
        document.innerHTML = "Shuttle Not Ready for Launch"
        document.style="color: red"
        pilotStatus.innerHTML = "Pilot Chris is ready for launch"
        copilotStatus.innerHTML = "Co-pilot Bob is ready for launch"
        fuelStatus.innerHTML = "Fuel level high enough for launch"
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"
        }

    if (cargoLevel >= Number(10000) && fuelLevel < Number(10000)) {
        list.style.visibility = "visible"
        document.innerHTML = "Shuttle Not Ready for Launch"
        document.style="color: red"
        pilotStatus.innerHTML = "Pilot Chris is ready for launch"
        copilotStatus.innerHTML = "Co-pilot Bob is ready for launch"
        fuelStatus.innerHTML = "Fuel level too low for launch"
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"
        }
    
    if (cargoLevel < Number(10000) && fuelLevel >= Number(10000)) {
        list.style.visibility = "visible"
        document.innerHTML = "Shuttle is Ready for Launch"
        document.style="color: green"
        pilotStatus.innerHTML = "Pilot Chris is ready for launch"
        copilotStatus.innerHTML = "Co-pilot Bob is ready for launch"
        fuelStatus.innerHTML = "Fuel level high enough for launch"
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        }
    }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
     .then(res => {
        return res.json()
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let planetChoice = Math.floor(Math.random() * 7)
    planetsResponse = planets[planetChoice]
    return planetsResponse;

 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;