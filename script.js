// // Write your JavaScript code here!

// window load event
window.addEventListener("load", function() {  
 // fetching planetary data
      fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       response.json().then( function(json) {     
          console.log(json);       
      //mission destination display
      let target = document.getElementById("missionTarget");
      target.innerHTML =           
      `<h2>Mission Destination</h2>
       <ol>
       <li>Name: ${json[0].name}</li> 
       <li>Diameter: ${json[0].diameter}</li> 
       <li>Star: ${json[0].star}</li> 
       <li>Distance from Earth: ${json[0].distance}</li> 
       <li>Number of Moons: ${json[0].moons}</li>
       </ol> 
       <img src="${json[0].image}">
       `;     
       });

       //form input
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
       //preventing form submission if inputs are invalid
      event.preventDefault();
      //getting reference to input elements & their value property
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let cargoInput = document.querySelector("input[name=cargoMass]"); 

      //Conditional statements; alerts user that all fields must have input 
      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === ""){
      alert("All fields must be completed!");
      } else if (isNaN(pilotInput.value) === false || isNaN(copilotInput.value) === false){
      alert("Pilot Name and Co-Pilot Name must only contain letters!");
      } else if (isNaN(fuelInput.value) || isNaN(cargoInput.value)){
      alert("Fuel Level and Cargo Mass must only contain numbers!");
      }   

      if (fuelInput.value < 10000){
                  faultyItems.style.visibility = "visible";
                  pilotStatus.innerHTML = `Pilot ${pilotInput.value + ' '} is ready for launch.`;
                  copilotStatus.innerHTML = `Co-Pilot ${copilotInput.value + ' '} is ready for launch`;
                  fuelStatus.innerHTML = 'Not enough fuel for the journey';       
                  launchStatus.innerHTML = "Shuttle not ready for launch";
                  document.getElementById('launchStatus').style.color = "red";
      }  else if (cargoInput.value > 10000){   
                  faultyItems.style.visibility = "visible";
                  pilotStatus.innerHTML = `Pilot ${pilotInput.value + ' '} is ready for launch.`;
                  copilotStatus.innerHTML = `Co-Pilot ${copilotInput.value+ ' '} is ready for launch`;
                  cargoStatus.innerHTML = 'Too much mass for the shuttle to take off';
                  launchStatus.innerHTML = "Shuttle not ready for launch";    
                  document.getElementById('launchStatus').style.color = "red";       
      } else {
                  faultyItems.style.visibility = "visible";
                  pilotStatus.innerHTML = `Pilot ${pilotInput.value + ' '} is ready for launch.`;
                  copilotStatus.innerHTML = `Co-Pilot ${copilotInput.value + ' '} is ready for launch`;
                  fuelStatus.innerHTML = 'There is enough fuel for the journey'; 
                  cargoStatus.innerHTML = 'Cargo mass is low enough for launch';
                  launchStatus.innerHTML= 'Shuttle is ready for launch';
                  document.getElementById('launchStatus').style.color = "green";
      }
     
         //button click
         let button = document.getElementById("formSubmit");
         button.addEventListener("click", function(){
         let input = document.getElementById("formSubmit");
         console.log(input.value);
         });

   });
});
});
    

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/