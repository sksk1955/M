let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// track_lists songs
let curr_track = document.createElement('audio');


let track_list = [
  {
    name: " Jai Shri Ram",
    artist: " Ajay Atul        ",
    image: "output/images/JSR.jpg",
    path: "output/songs/Jai Shri Ram.mp3",
  },
  
  {
    name: "Cruiser",
    artist: "Espirit",
    image: "https://i1.sndcdn.com/avatars-000125808250-ip1ds1-t200x200.jpg",
    path: "output/songs/ESPRIT 空想 CRUISER.mp3"
  },
  {
    name: "Highway",
    artist: "Elusin",
    image: "https://lh3.googleusercontent.com/O6HKirsEh8ddms9y7gFmoWDJEq0H49ohr4lWXNhD1QsPIAzPmbXMEFDsLPI8bn2q3wTQQ5ekZtBGdM3a",
    path: "output/songs/Highway.mp3",
  },
  {
    name: "Deva Deva",
    artist: "Jonita Gandhi and Arijit Singh,",
    image: "output/images/DD.jpg",
    path: "output/songs/Deva Deva.mp3"
  },
  {
    name: "The Unknowing",
    artist: "Jfarrari",
    image: "https://lh3.googleusercontent.com/J-ObyJwiFlgP4euxQ9_x-P6yHpIVOuto3Rhz_hIIfSqlDywP4GqsRxRmK5PGMBCSySfHc7lZ0HESorY2",
    path: "output/songs/The Unknowing.mp3",
  },
  {
    name: "Dusk",
    artist: "Sleepy Opiate",
    image: "https://lh3.googleusercontent.com/hqWo2VW6dCrJ4iKoHJS_F0QLCy0Zt13ZfeRcgYw81OYfyflie8_5cg4pKrlsIiGLXdgdNsjMBh4bhiE",
    path: "output/songs/Dusk.mp3",
  },
  {
    name: "i like the way you kiss me",
    artist: "Artemas",
    image: "https://lh3.googleusercontent.com/0tzQNxMXkhmfBS0zaluhQv0vSYbGkXeRKplAXYRkhVZwu1B3RCvbaWcx7OAhLBTfrMmiBLomYroGJoMY",
    path: "output/songs/i like the way you kiss me.mp3",
  },
  {
    name: "Badal Pe Paon Hain",
    artist: "Salim-Sulaiman",
    image: "output/images/CDI.jpg",
    path: "output/songs/Badal Pe Paon Hain.mp3",
  },
  {
    name: "No Wind Resistanance!",
    artist: "Kinneret",
    image: "https://lh3.googleusercontent.com/xL4_njYZJcnh7_EXuZoaEnJusneTX_Y4OefpxnexA8cqzrjanl2cM0f3agoe15SQ7iL1Ly2_hnQtjfQ",
    path: "output/songs/Kinneret - No Wind Resistanance.mp3",
  },
  {
    name: "Badhte Chalo",
    artist: "Divya Kumar and Shankar Mahadevan",
    image: "output/images/SB.jpg",
    path: "output/songs/Badhte Chalo.mp3",
  },
  {
    name: "Dance Floor Dolor",
    artist: "Mareux",
    image: "https://lh3.googleusercontent.com/YqBKphySFYjUtxU3ga6Npm3TGV0ay1-t1cDaNG73z_2FpF0Z2X9flUJxD7UEcVHb7y8SRswmudleJB5u2g",
    path: "output/songs/Dance Floor Dolor.mp3",
  },
  {
    name: "Be a Body",
    artist: "Grimes",
    image: "https://lh3.googleusercontent.com/ph93RMtzqisATCOJWHtG0LviaHhgt0R3_C6MMFhaeTXSLLGEQpTpXrYD7uM7cYODP2EGFSVwBChYSwfNLQ",
    path: "output/songs/Be a Body.mp3",
  },
 
  {
    name: "Avalon",
    artist: "Zeruel",
    image: "https://lh3.googleusercontent.com/sjRRYo_n2nF8kKp_uXpZvFEz0C4kIpiEVJ3guzArFAgvkRY2YFIPDwZXk8nXH29424eheY62DG7KUfk",
    path: "output/songs/Avalon.mp3",
  },
  {
    name: "Mother",
    artist: "Anzu",
    image: "https://lh3.googleusercontent.com/zLFXHnfAUcdOkx2Z7jkZ0RpJb1hNGPBbJp9j2UiaMRKl6CJjogXuMEL6aUVtY4vWQxokgQuvsZzGJiU",
    path: "output/songs/Mother.mp3",
  },
  {
    name: "Kar Har Maidaan",
    artist: "Shreya Ghoshal and Sukhwinder Singh",
    image: "output/images/S.jpg",
    path: "output/songs/Kar Har Maidaan.mp3",
  },
 
  {
    name: "Andro",
    artist: "Oneohtrix Point Never",
    image: "https://lh3.googleusercontent.com/fLBanMadxMSm1LjKCEoOe3AcjUC_Lj4zx_3DOJZpNOeQZGTvnTHTP90jVueDLoeho78CTlwX7Ry_9wZz",
    path: "output/songs/Andro.mp3",
  },
  {
    name: "Principio De Lucha",
    artist: "Anime de Japan",
    image: "https://lh3.googleusercontent.com/9J6rWIXCv6GImlQZ1nYdnd9v-kvMVHBPN1BQjBPEiK3IlVTtFP3h1nlBdRyVIsIrRMwT_QyMPsPx150",
    path: "output/songs/Anime de Japan - Principio De Lucha.mp3",
  },
  {
    name: "Bhar Do Jholi Meri",
    artist: "Pritam, Imran Aziz Mian",
    image: "output/images/BB.jpg",
    path: "output/songs/Bhar Do Jholi Meri.mp3",
  },
  {
    name: "7 Creeping shadows",
    artist: "Bleach",
    image: "https://st.cdjapan.co.jp/pictures/l/15/00/SVWJ-70611.jpg",
    path: "output/songs/7 Creeping Shadows.mp3",
  },
  {
    name: "Tantrum",
    artist: "Riovaz",
    image: "https://st.cdjapan.co.jp/pictures/l/15/00/SVWJ-70611.jpg",
    path: "output/songs/Riovaz - Tantrum.mp3",
  },
  {
    name: "Sultan",
    artist: "Sukhwinder Singh",
    image: "output/images/a1.png",
    path: "output/songs/Sultan.mp3",
  },
  {
    name: "Havana",
    artist: "Camila Cabello",
    image: "output/images/a2.png",
    path: "output/songs/havana.mp3",
  },
  {
    name: "On My Way",
    artist: "Alan Walker",
    image: "output/images/a3.png",
    path: "output/songs/onmyway.mp3",
  }
];
const youtubeArtImages = ['output/images/a1.png', 'output/images/a2.png', 'output/images/a3.png','output/images/a4.png', 'output/images/a5.png', 'output/images/a6.png'];
// Function to generate a random gradient background
function getRandomGradient() {
  const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1",
    "#FF8C33", "#8CFF33", "#33FF8C", "#8C33FF",
    "#338CFF", "#FF338C", "#FF3333", "#33FF33"
  ];
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor3 = colors[Math.floor(Math.random() * colors.length)];

  return `linear-gradient(to right, ${randomColor1}, ${randomColor2}, ${randomColor3})`;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();

  const currentTrack = track_list[track_index];

  if (currentTrack.isYouTube) {
    // Load YouTube video
    if (youtubePlayer) {
      youtubePlayer.loadVideoById(currentTrack.videoId);
      youtubePlayer.playVideo();
    } else {
      // Initialize YouTube player if not already done
      youtubePlayer = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: currentTrack.videoId,
        playerVars: {
          'autoplay': 1,
          'controls': 0
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }
    
    // Set random image for YouTube track
    const randomImage = youtubeArtImages[Math.floor(Math.random() * youtubeArtImages.length)];
    track_art.style.backgroundImage = `url(${randomImage})`;
  } else {
    // Load local audio file
    curr_track.src = currentTrack.path;
    curr_track.load();
    track_art.style.backgroundImage = "url(" + currentTrack.image + ")";
  }

  track_name.textContent = currentTrack.name;
  track_artist.textContent = currentTrack.artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  // Apply a random gradient background
  document.body.style.background = getRandomGradient();
  updateTrackListDisplay();

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

document.addEventListener("DOMContentLoaded", function() {
  // Initialize default playlists
  initializePlaylists();
  
  // Load track list
  loadTrack(track_index);
});
function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
    if (track_list[track_index].isYouTube) {
      if (youtubePlayer && youtubePlayer.playVideo) {
        youtubePlayer.playVideo();
      }
    } else {
      curr_track.play();
    }
    isPlaying = true;
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
  }
  
  function pauseTrack() {
    if (track_list[track_index].isYouTube) {
      if (youtubePlayer && youtubePlayer.pauseVideo) {
        youtubePlayer.pauseVideo();
      }
    } else {
      curr_track.pause();
    }
    isPlaying = false;
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
  }
function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
function initializePlaylists() {
  const playlistsContainer = document.getElementById('playlists');
  
  Object.keys(playlists).forEach(playlistName => {
    const playlistDiv = document.createElement('div');
    playlistDiv.className = 'playlist-container';
    playlistDiv.innerHTML = `<h3>${playlistName}</h3><ul id="${playlistName}-songs"></ul><button onclick="playPlaylist('${playlistName}')">Play Playlist</button>`;
    
    playlists[playlistName].forEach(track => {
      const li = document.createElement('li');
      li.textContent = `${track.name} by ${track.artist}`;
      playlistDiv.querySelector(`#${playlistName}-songs`).appendChild(li);
    });
    
    playlistsContainer.appendChild(playlistDiv);
  });
}
function updateTrackListDisplay() {
  let availableSongs = document.getElementById('available-songs');
  availableSongs.innerHTML = '';
  track_list.forEach((track, index) => {
    let li = document.createElement('li');
    li.classList.add('song-item');
    li.innerHTML = `<span class="song-name">${track.name}</span><br><span class="song-artist">${track.artist}</span>`;
    
    if (index === track_index) {
      li.classList.add('playing');
      let button = document.createElement('button');
      button.textContent = 'Add to Playlist';
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        addToPlaylist(index);
      });
      li.appendChild(button);
    }
    
    li.addEventListener('click', function() {
      track_index = index;
      loadTrack(track_index);
      playTrack();
    });
    availableSongs.appendChild(li);
  });
}
    
   
  const playlists = {
    "English": [
      track_list[1],  
      track_list[2],
      track_list[21],  
      track_list[22]    
    ],
    "Hindi": [
      track_list[0],  
      track_list[3],  
      track_list[7],  
      track_list[9], 
      track_list[14]  ,
      track_list[17]  ,
      track_list[20]  
    ]
  };
document.addEventListener("DOMContentLoaded", function() {
  let availableSongs = document.getElementById('available-songs');
  track_list.forEach((track, index) => {
    let li = document.createElement('li');
    li.classList.add('song-item');
    li.innerHTML = `<span class="song-name">${track.name}</span><br><span class="song-artist">${track.artist}</span> <button onclick="addToPlaylist(${index})">Add to Playlist</button>`;
    li.addEventListener('click', function() {
      track_index = index;
      loadTrack(track_index);
      playTrack();
    });
    availableSongs.appendChild(li);
  });
});
function createPlaylist() {
  const playlistName = document.getElementById('newPlaylistName').value.trim();
  if (playlistName && !playlists[playlistName]) {
    playlists[playlistName] = [];
    const playlistDiv = document.createElement('div');
    playlistDiv.className = 'playlist-container';
    playlistDiv.innerHTML = `<h3>${playlistName}</h3><ul id="${playlistName}-songs"></ul><button onclick="playPlaylist('${playlistName}')">Play Playlist</button>`;
    document.getElementById('playlists').appendChild(playlistDiv);
    document.getElementById('newPlaylistName').value = '';
  }
}

document.getElementById('createPlaylist').addEventListener('click', createPlaylist);



function addToPlaylist(trackIndex) {
  const playlistName = prompt("Enter the playlist name to add this song:");
  if (playlistName && playlists[playlistName]) {
    playlists[playlistName].push(track_list[trackIndex]);
    const ul = document.getElementById(`${playlistName}-songs`);
    const li = document.createElement('li');
    li.textContent = `${track_list[trackIndex].name} by ${track_list[trackIndex].artist}`;
    ul.appendChild(li);
  } else {
    alert("Playlist not found. Please create the playlist first.");
  }
}

function playPlaylist(playlistName) {
  const selectedPlaylist = playlists[playlistName];
  if (selectedPlaylist && selectedPlaylist.length > 0) {
    track_list = selectedPlaylist;
    track_index = 0;
    loadTrack(track_index);
    playTrack();
  } else {
    alert("Playlist is empty or not found.");
  }
}

window.addEventListener("load", () => {
  loadTrack(track_index);
});

let youtubePlayer;
const apiKey = 'ABC'; // Replace with your actual YouTube API key


function onYouTubeIframeAPIReady() {
  youtubePlayer = new YT.Player('youtube-player', {
    height: '0',
    width: '0',
    playerVars: {
      'autoplay': 0,
      'controls': 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  // Player is ready
}

function onPlayerStateChange(event) {
  // Handle player state changes if needed
}

async function searchSong() {
  const query = document.getElementById('searchQuery').value;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&key=${apiKey}&maxResults=5`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displaySearchResults(data.items);
  } catch (error) {
    console.error('Error fetching data from YouTube API:', error);
  }
}

function displaySearchResults(items) {
  const resultsContainer = document.getElementById('search-results');
  resultsContainer.innerHTML = '';

  items.forEach(item => {
    const videoId = item.id.videoId;
    const title = item.snippet.title;

    const resultItem = document.createElement('div');
    resultItem.classList.add('result-item');

    resultItem.innerHTML = `
      <h4>${title}</h4>
      <button onclick="playYouTubeVideo('${videoId}')">Play</button>
    `;

    resultsContainer.appendChild(resultItem);
  });
}

function playYouTubeVideo(videoId) {
  const youtubeTrack = {
    name: "YouTube Video",
    artist: "YouTube Artist",
    isYouTube: true,
    videoId: videoId
  };
  
  track_list.push(youtubeTrack);
  
  track_index = track_list.length - 1;
  
  loadTrack(track_index);
  playTrack();
}