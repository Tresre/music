var music;
var songChoice;
playedSongs = [];
chooseSong(0);

function chooseSong(p) {
  var lastSong = songChoice;
  var lastIndex = window[songChoice];
  var playlist = [
  "All_About_You$The_Knocks",
  "All_Alone$Fun",
  "Heat_Waves$Glass_Animals",
  "Live_In_The_Moment$Portugal",
  "Nice_To_Meet_Ya$Niall_Horan",
  "No_Rest_For_The_Wicked$Cage_The_Elephant",
  "Only_Human$Jonas_Brothers",
  "Sunflower$Post_Malone",
  "Talk$Two_Door_Cinema",
  "Thunder$SHAED",
  "Gotta_Get_Up$Harry_Nilsson",
  "Parking_Lot_View$Almost_Monday",
  "Levitating$Dua_Lipa",
  "Hallucinations$PVRIS",
  "Bitter_Sweet_Symphony$The_Verve"
  ];

  var randomItem = playlist[Math.floor(Math.random()*playlist.length)];
  
  var setmusic = music;
  if (setmusic !== undefined) {
  	setmusic.pause();
  }
  
  if (lastSong === randomItem) {
    chooseSong(1);
    return;
  } else {
    songChoice = randomItem;
    
    if (playedSongs.includes(songChoice) === true) {
      chooseSong(1);
      if (playedSongs.length === playlist.length) {
        playedSongs = [];
      }
      return;
    } else {
      const splitSong = songChoice.split("$");
      songName = splitSong[0];
      songName = songName.replace(/_/g, " ");
      document.getElementById("songChoice").innerHTML = songName;
      music = new Audio('https://tresre.dev/music/assets/mp3/' + randomItem + '.mp3');
      playedSongs.push(songChoice);
      console.log(playedSongs);
      
      if (window[songChoice] == undefined) {
  	    window[songChoice] = 0;
      }
      window[songChoice] = ++window[songChoice];
      console.log(songChoice + ' - ' + window[songChoice]); 
      
      music.onended = function() {
        chooseSong(1);
      };

      if (p === 1) {
        if (document.getElementById("musicToggle").checked == true) {
          music.play();
          music.currentTime = 0;
        }
        if (document.getElementById("musicMute").checked == true) {
          music.muted = false;
        } else {
          music.muted = true;
        }
      }
    }
  }
}

function musicVolume(vol) {
  var checkBox = document.getElementById("musicMute");
  var setmusic = music;
  if (vol === undefined) {
  	if (checkBox.checked == true) {
      setmusic.muted = false;
    } else {
      setmusic.muted = true;
    }
  } else {
    setmusic.muted = false;
    setmusic.volume = vol;
  }
}

function musicPlayer() {
  var checkBox = document.getElementById("musicToggle");
  var setmusic = music;
  if (checkBox.checked == true) {
    setmusic.play();
  } else {
    setmusic.pause();
  }
}
