var modal = document.getElementById("playlistmodal");
var span = document.getElementsByClassName("close")[0];
const modalMusicCards= document.getElementById("playlist-grid");
const songsList = document.getElementById("song-container");

function makeCards(){
    const playlistContainer = document.getElementById("playlist-box");

    data.playlists.forEach(d => {
        const card = document.createElement("div")
        card.className = "playlist-blocks"

        card.addEventListener("click", function(){
            openModal(d)
        })

        const image = document.createElement("img");
        image.src = d["playlist_art"]
        card.appendChild(image);

        const name = document.createElement("h1");
        name.innerHTML = d["playlist_name"]
        card.appendChild(name);

        const creatorname = document.createElement("div");
        creatorname.innerHTML = d["playlist_creator"]
        card.appendChild(creatorname);


        const numoflikes = document.createElement("div");
        numoflikes.innerHTML = d["likeCount"]
        card.appendChild(numoflikes);

        var loveicon = document.createElement("span");
        loveicon.innerHTML =  
            `<i class="fa-regular fa-heart" id =${d.playlistID}></i>` 
        card.appendChild(loveicon);

        document.getElementById("playlist-grid").appendChild(card);

        //when love icon is clicked
        let count = 0
        //increase count
        loveicon.addEventListener('click', (event)=>{
            //prevent modal from being clicked when love icon is clicked
            event.stopPropagation();
            console.log('it has been clicked')
            let likes = d["likeCount"];

            //manually change colour of love icon when loev icon has been clicked 
            if (likes == 0){
                likes = likes + 1;
                numoflikes.innerHTML = Number(numoflikes.innerHTML) + 1
                loveicon.innerHTML = `<i class="fa-solid fa-heart" ></i>`
            }
            
        })

    })

}
function openModal(playlist) {
    document.getElementById('PlaylistName').innerText = playlist["playlist_name"];
    document.getElementById('modal-cover').src = playlist["playlist_art"];
    document.getElementById('modal-creator').innerText = playlist["playlist_creator"];
    
    modal.style.display = "block";
    modalContent(playlist)

    let shufflebutton = document.getElementsByClassName("shuffle-button")[0];
    shufflebutton.addEventListener('click', () => shuffleplaylist(playlist))
 }
 
 span.onclick = function() {
    modal.style.display = "none";
 }
 window.onclick = function(event) {
    if (event.target == modal) {
       modal.style.display = "none";
    }
 }

function modalContent(playlist){
    songsList.innerHTML = '';
        playlist["songs"].forEach(song => {
            const modalMusicCards = document.createElement("div");
            modalMusicCards.className = "modal-overlay-content";
            modalMusicCards.innerHTML +=
            `<div class="overlay-blocks">
                <div class ="meta-data">
                    <div class="song-images"> <img src ="${song.cover_art}"/> </div>
                    <div class ="song-data"> <h2>${song.title}</h2> <h4>${song.artist}</h4> </div>
                </div> 
                <div><h5>${song.duration}</h5></div>
            </div>`
            ;
            songsList.appendChild(modalMusicCards);
        })
}

// shuffle each playlist
let shufflebutton = document.getElementsByClassName("shuffle-button");
function shuffleplaylist(playlist){
    console.log(playlist);
        for(let i = playlist.songs.length-1; i>0; i--){
            let j = Math.floor(Math.random() * (i+1))
            let temp = playlist.songs[i];
            playlist.songs[i] = playlist.songs[j];
            playlist.songs[j] = temp;
        }
        modalContent(playlist);
}

makeCards();
