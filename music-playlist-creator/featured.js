let playlistImage = document.getElementById("playlist-image");
let playlistName = document.getElementById("playlist-name");
let playlistCreator = document.getElementById("playlist-creator");
let featuredSongs = document.getElementById("featured-songs");

//generate random playlist
let randomPlaylist = data['playlists'][Math.floor(data['playlists'].length * (Math.random()))]

// generate random playlist details
playlistName.innerHTML = randomPlaylist["playlist_name"]
playlistImage.src = randomPlaylist["playlist_art"]
playlistCreator.innerHTML = randomPlaylist["playlist_creator"]

randomPlaylist.songs.forEach(song => {    
    let songCard = document.createElement("div");
    songCard.classList.add("song-card");

    let songImg = document.createElement("img");
    songImg.classList.add("song-image");
    songImg.src = song["cover_art"];

    let songTitle = document.createElement("div");
    songTitle.classList.add("song-title");
    songTitle.innerText = song["title"];

    let songArtist = document.createElement("div");
    songArtist.classList.add("song-artist");
    songArtist.innerText = song["artist"];

    let songAlbum = document.createElement("div");
    songAlbum.classList.add("song-album");
    songAlbum.innerText = song["album"];

    songCard.appendChild(songImg);
    songCard.appendChild(songTitle);
    songCard.appendChild(songArtist);
    songCard.appendChild(songAlbum);

    featuredSongs.appendChild(songCard);
}
)

console.log(featuredSongs)
