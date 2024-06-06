var modal = document.getElementById("playlistmodal");
var span = document.getElementsByClassName("close")[0];
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
        card.appendChild(numoflikes)

        document.getElementById("playlist-grid").appendChild(card);

    })

}
function openModal(playlist) {
    document.getElementById('PlaylistName').innerText = playlist["playlist_name"];
    document.getElementById('modal-cover').src = playlist["playlist_art"];
    document.getElementById('modal-creator').innerText = playlist["playlist_creator"];
    modal.style.display = "block";
 }
 
 span.onclick = function() {
    modal.style.display = "none";
 }
 window.onclick = function(event) {
    if (event.target == modal) {
       modal.style.display = "none";
    }
 }
makeCards();
