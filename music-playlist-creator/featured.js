var playlistImage = document.getElementById("playlist-image");
var playlistName = document.getElementById("playlist-name");
var playlistCreator = document.getElementById("playlist-creator");

//generate random playlist
let randomPlaylist = data['playlists'][Math.floor(data['playlists'].length * (Math.random()))]

// generate random playlist details
playlistName.innerHTML = randomPlaylist["playlist_name"]
playlistImage.src = randomPlaylist["playlist_art"]
playlistCreator.innerHTML = randomPlaylist["playlist_creator"]
