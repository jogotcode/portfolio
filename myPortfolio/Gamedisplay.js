 

fetch('games.json')
  .then(response => response.json())
  .then(gamedata => {
    gamedata.forEach(game => {
       // use game var here to see fetched data
       AddProject(game);
    });
  })
  .catch(error => console.error('Error fetching Game data:', error));

  function AddProject(Gameobj){
    const GameElm = `<div class="ProjectSlot">
        <h1 class="ProjectTitle">${Gameobj.Title}</h1>
        <img class="ProjectImage" src="${Gameobj.Image}" alt="Project Image">
        <div class="frosted" ></div>
    </div>`;

    const gamescontainer = document.getElementById('ProjectContainer');
    gamescontainer.insertAdjacentHTML('beforeend', GameElm);

    // Get the last element added
    const lastProject = gamescontainer.lastElementChild;

    // Add click event
    lastProject.addEventListener('click', () => {
        sessionStorage.setItem('selectedGame', JSON.stringify(Gameobj));
        window.location.href = 'GameDisplay.html';
    });
}