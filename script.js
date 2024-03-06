// Write your JavaScript code here!

window.addEventListener("load", function () {
  // alert("Beginning Document Window")

  let form = document.querySelector("form");
  // console.log(form)
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let fd = new FormData(form);
    // this.fetch('https://httpbin.org/post', {
    //     method: "POST",
    //     body:   fd,
    // })
    //     .then(res => res.json())
    //     .then(res => console.log(res))

    //     alert(res.pilotName)

    let dataCheck = "";
    for (item of fd) {
      if (item[1] !== "" && item[1] !== null) {
        dataCheck = validateInput(item[1]);
      } else {
        this.alert(`'${item[0]} is empty'...all form fields must be completed`);
      }
      if (dataCheck === "Not a Number") {
        if (item[0] === "pilotStatus") {
            this.document.getElementById(item[0]).innerHTML = (`Pilot '${item[1]}' ready`)
        } else {
            this.document.getElementById(item[0]).innerHTML = (`Co-pilot '${item[1]}' ready`)
        }
      }

      let readyToLaunch = ""
      if (item[0] === "fuelStatus") {
        if(item[1] < 10000) {
            this.document.getElementById(item[0]).innerHTML = (`Insufficient fuel for launch`)
            readyToLaunch = "NO"
        }
      } 
      
      if (item[0] === "cargoStatus") {
        if (item[1] > 10000) {
        this.document.getElementById(item[0]).innerHTML = (`Shuttle to heavy to launch`)
        readyToLaunch = "NO"
            }
        }


        if (readyToLaunch === "NO") {
            this.document.getElementById("launchStatus").innerHTML = (`Shuttle is not ready for launch`)
            this.document.getElementById("launchStatus").style="color: red"
            this.document.getElementById("faultyItems").style.visibility = 'visible'
        } else {
            this.document.getElementById("launchStatus").style="color: green"
        }


        }
     // })
    });

  // alert("Listed Planets")
  // let listedPlanets;
  // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  // let listedPlanetsResponse = myFetch();
  // listedPlanetsResponse.then(function (result) {
  //     listedPlanets = result;
  //     console.log(listedPlanets);
  // }).then(function () {
  //     console.log(listedPlanets);
  //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
});
