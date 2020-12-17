// Write your JavaScript code here!

// Validation
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener ("submit", function (event){
       let pilotName = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoMass = document.querySelector("input[name=cargoMass]"); 
       
      let launchStatus = document.getElementById('launchStatus');
		let fuelStatus = document.getElementById('fuelStatus');
		let cargoStatus = document.getElementById('cargoStatus')
 
       // Conditional statement; alerts user that all fields must have input 
       if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
            alert("All fields must be completed!");
       } else if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false){
            alert("Pilot Name and Co-Pilot Name must only contain letters!");
       } else if(isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
          alert("Fuel Level and Cargo Mass must only contain numbers!");
       }
          //   To prevent form submission until all inputs are in:
           event.preventDefault();
 
             if (fuelLevel < 10000){
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("pilotStatus") = `Pilot ${pilotName + ' '} is ready for launch.`;
            document.getElementById("copilotStatus") = `Co-Pilot ${copilotName + ' '} is ready for launch`;
            document.getElementById("fuelStatus") = 'Not enough fuel for the journey';       
            document.getElementById("launchStatus") = "Shuttle not ready for launch";
            document.h2.style.color = "red";
         } else {            
            document.getElementById("fuelStatus") = 'There is enough fuel for the journey'; 
            document.getElementById("launchStatus")= 'Shuttle is ready for launch';
            document.h2.syle.color = "green";
         }

         if (cargoMass > 10000){   
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("pilotStatus") = `Pilot ${pilotName + ' '} is ready for launch.`;
            document.getElementById("copilotStatus") = `Co-Pilot ${copilotName + ' '} is ready for launch`;
            document.getElementById("cargoStatus") = 'Too much mass for the shuttle to take off';
            document.getElementById("launchStatus") = "Shuttle not ready for launch";    
            document.h2.style.color = "red";       
         } else {
            document.getElementById("pilotStatus") = `Pilot ${pilotName + ' '} is ready for launch.`;
            document.getElementById("copilotStatus") = `Co-Pilot ${copilotName + ' '} is ready for launch`;
            document.getElementById("cargoStatus") = 'Cargo mass is low enough for launch';
            document.getElementById("launchStatus")= 'Shuttle is ready for launch';
            document.h2.syle.color = "green";
         }

   let button = document.getElementById("formSubmit");
   button.addEventListener("click", function(){
   let input = document.getElementById("formSubmit");
   console.log(input.value);
   });

   fetch("https://handlers.education.launchcode.org/static/planets.json").then((response) => {
    return response.json();
     })
     .then((data) => {
        console.log(data);
     })
     .catch((err) => {
        console.log.error(err);
     });
                                
            let target =  document.getElementById("missionTarget") = 
          `<h2>Mission Destination</h2>
           <ol>
           <li>Name: ${target.name}</li> 
           <li>Diameter: ${target.diameter}</li> 
           <li>Star: ${target.star}</li> 
           <li>Distance from Earth: ${target.distance}</li> 
           <li>Number of Moons: ${target.moons}</li>
           </ol> 
           <img src="${target.image}">
           `;
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