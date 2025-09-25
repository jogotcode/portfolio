 // Wait until DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    // Get the data from sessionStorage
    const gameData = sessionStorage.getItem('selectedGame');

    if (!gameData) {
        console.log("No game data found!");
        return;
    }

    // Convert it back into an object
    const game = JSON.parse(gameData);

    console.log(game); // { Title: "Cool Game", Image: "coolgame.jpg" }

   

    const titleEl = document.querySelector('.GameTitle'); // selects the first element with this class
    titleEl.textContent = game.Title;

    const DiscriptionEL = document.querySelector('.GameDescription');
    DiscriptionEL.textContent = game.Description;

    const videoEl = document.querySelector('.GameVideo'); // first element with class
    videoEl.src = game.VideoList;

     function addtags(){
        const tagsEl = document.querySelector('.GameTagsBox');
        game.Tags.split(',').forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.textContent = tag.trim();
            tagsEl.appendChild(tagSpan);
            tagSpan.classList.add('GameTags');
        });
    }

    addtags();
    document.body.style.backgroundImage = `url('${game.Image}')`;
   
});