// Write your JavaScript code here!

window.addEventListener("load", function() {
    // alert("Beginning Document Window")

    let form=document.querySelector("form")
    // console.log(form)
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let fd = new FormData(form)
        // this.fetch('https://httpbin.org/post', {
        //     method: "POST",
        //     body:   fd,
        // })
        //     .then(res => res.json())
        //     .then(res => console.log(res))

        //     alert(res.pilotName)

        let dataCheck = ""
        for (item of fd) {
            dataCheck = validateInput(item[1]);
           }
        })



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

})