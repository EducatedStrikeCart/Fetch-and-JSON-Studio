// TODO: add code here

window.addEventListener("load", () => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then((response) => response.json())
        .then((data) => {
            let container = document.getElementById("container")
            for (entry in data) {
                let astronaut = data[entry];
                container.innerHTML += `
                <div class="astronaut">
                  <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                      <li>Hours in space: ${astronaut.hoursInSpace}</li>
                      <li>Active: ${astronaut.active}</li>
                      <li>Skills: ${astronaut.skills}</li>
                    </ul>
                  </div>
                  <img class="avatar" src="${astronaut.picture}">
                </div>
                `
            };
        });
});