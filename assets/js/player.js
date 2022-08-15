var music;
var songChoice;
var shuffleChoice;
var playlist = [];
var playedSongs = [];
var dupeSongs = [];

var hidden = window.location.href;
if (hidden.includes("?") == true) {
  var url = hidden.substring(hidden.indexOf("?")+1);
  var text = String(url);
  if (text.includes("song") == true) {
    var song = text.split("=")[1];
    mots(song);
  } else {
    setPlaylist(text);
  }
} else {
  setPlaylist();
}


function chooseSong(p) {
  var lastSong = songChoice;
  document.getElementById("musicSpeed").checked = false;

  if (document.getElementById("musicShuffle").checked == true) {
    var randomItem = playlist[Math.floor(Math.random()*playlist.length)];
  } else {
    var lastIndex = playlist.indexOf(lastSong);
    var nextIndex = lastIndex;
    ++nextIndex;
    console.log(lastIndex + " " + nextIndex + " " + lastSong);
    if (nextIndex >= playlist.length) {
      nextIndex = 0;
      dupeSongs = [];
    }
    if (lastIndex == undefined) {
     var randomItem = playlist[0];
    } else {
      var randomItem = playlist[nextIndex];
    }
  }
  
  var setmusic = music;
  if (setmusic !== undefined) {
    setmusic.pause();
  }
  
  if (lastSong === randomItem) {
    chooseSong(1);
    return;
  } else {
    songChoice = randomItem;
    
    if (dupeSongs.includes(songChoice) === true) {
      chooseSong(1);
      if (dupeSongs.length >= playlist.length) {
        dupeSongs = [];
      }
      return;
    } else {
      const splitSong = songChoice.split("$");
      songName = splitSong[0];
      songName = songName.replace(/_/g, " ");
      songArtist = splitSong[1];
      songArtist = songArtist.replace(/_/g, " ");
      document.getElementById("songName").innerHTML = songName;
      console.log(songName);
      document.getElementById("songArtist").innerHTML = songArtist;
      console.log(songArtist);
      music = new Audio('https://tresre.dev/music/assets/mp3/' + randomItem + '.mp3');
      document.title = songName + " - " + songArtist;
      document.getElementById("songCover").innerHTML = "<img src='https://tresre.dev/music/assets/covers/" + randomItem + ".png' style='height: 200px;' class='cover'>";
      updateMetadata();
      dupeSongs.push(songChoice);
      playedSongs.push(songChoice);
      console.log(playedSongs);
      console.log(dupeSongs);
      
      startBar();
      
      if (window[songChoice] == undefined) {
  	window[songChoice] = 0;
      }
      window[songChoice] = ++window[songChoice];
      console.log(songChoice + ' - ' + window[songChoice]); 
      
      music.onended = function() {
      	if (document.getElementById("musicRepeat").checked == true) {
          if (document.getElementById("musicToggle").checked == true) {
            music.play();
            music.currentTime = 0;
            window[songChoice] = ++window[songChoice];
            console.log(songChoice + ' - ' + window[songChoice]); 
          }
          if (document.getElementById("musicMute").checked == true) {
            music.muted = false;
          } else {
            music.muted = true;
          }
        } else {
      	  chooseSong(1);
        }
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
      } else {
      	document.getElementById("musicToggle").checked = false;
      }
    }
  }
}


function musicBack() {
  var currentSong = songChoice;
  document.getElementById("musicSpeed").checked = false;
  
  if (document.getElementById("musicShuffle").checked == true) {
    if (playedSongs.length > 1) {
      var lastIndex = --playedSongs.length;
      var nextIndex = --lastIndex;
      var randomItem = playedSongs[nextIndex];
    } else {
      var randomItem = playedSongs[0];
      return;
    }
  } else {
    var lastIndex = playlist.indexOf(currentSong);
    var nextIndex = --lastIndex;
    dupeSongs.splice(lastIndex, 1);
    if (nextIndex < 0) {
      var nextIndex = playlist.length;
      --nextIndex;
      dupeSongs = [];
    }
    if (lastIndex == undefined) {
      var randomItem = playlist[0];
    } else {
      var randomItem = playlist[nextIndex];
    }
  }
  
  console.log(playedSongs);
  console.log(dupeSongs);
  songChoice = randomItem;
  
  var setmusic = music;
  if (setmusic !== undefined) {
    setmusic.pause();
  }
  
  var splitpre = String(songChoice);
  const splitSong = splitpre.split("$");
  songName = splitSong[0];
  songName = songName.replace(/_/g, " ");
  songArtist = splitSong[1];
  songArtist = songArtist.replace(/_/g, " ");
  document.getElementById("songName").innerHTML = songName;
  console.log(songName);
  document.getElementById("songArtist").innerHTML = songArtist;
  console.log(songArtist);
  music = new Audio('https://tresre.dev/music/assets/mp3/' + randomItem + '.mp3');
  document.title = songName + " - " + songArtist;
  document.getElementById("songCover").innerHTML = "<img src='https://tresre.dev/music/assets/covers/" + randomItem + ".png' style='height: 200px;' class='cover'>";
  updateMetadata();
      
  startBar();
      
  if (window[songChoice] == undefined) {
    window[songChoice] = 0;
  }
  window[songChoice] = ++window[songChoice];
  console.log(songChoice + ' - ' + window[songChoice]); 
    
  music.onended = function() {
    if (document.getElementById("musicRepeat").checked == true) {
      if (document.getElementById("musicToggle").checked == true) {
        music.play();
        music.currentTime = 0;
        window[songChoice] = ++window[songChoice];
        console.log(songChoice + ' - ' + window[songChoice]); 
      }
      if (document.getElementById("musicMute").checked == true) {
        music.muted = false;
      } else {
        music.muted = true;
      }
    } else {
      chooseSong(1);
    }
  };

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


function musicShuffle() {
  if (document.getElementById("musicShuffle").checked == true) {
    if (document.getElementById("musicToggle").checked == true) {
      playedSongs = [];
      dupeSongs = [];
      chooseSong(1);
    } else {
      playedSongs = [];
      dupeSongs = [];
      chooseSong(0);
    }
  }
}


function musicSpeed() {
  var setmusic = music;
  if (setmusic.playbackRate > 1) {
    setmusic.playbackRate = 1; 
    setmusic.preservesPitch = true;
  } else {
    setmusic.playbackRate = 1.25; 
    setmusic.preservesPitch = false;
  }
}


function musicVolume(vol) {
  var checkBox = document.getElementById("musicMute");
  var setmusic = music;
  if (vol === undefined) {
    if (checkBox.checked == true) {
      volumeUp();
    } else {
      volumeDown();
    }
  } else {
    setmusic.muted = false;
    setmusic.volume = vol;
  }
}


function volumeUp() {
  var setDelay = 0;
  for (var i=1;i<=10; i++) {
    setDelay += 10;
    setTimeout(function() {
      music.volume += 0.1;
    }, setDelay)
  }
  setTimeout(function() {
    music.muted = false;
  }, 100)
}


function volumeDown() {
  var setDelay = 0;
  for (var i=1;i<=10; i++) {
    setDelay += 10;
    setTimeout(function() {
      music.volume -= 0.1;
    }, setDelay)
  }
  setTimeout(function() {
    music.muted = true;
  }, 100)
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


function mots(mots) {
  var setmusic = music;
  if (setmusic !== undefined) {
    setmusic.pause();
  }

  songChoice = mots;
  const splitSong = songChoice.split("$");
  songName = splitSong[0];
  songName = songName.replace(/_/g, " ");
  songArtist = splitSong[1];
  songArtist = songArtist.replace(/_/g, " ");
  document.getElementById("songName").innerHTML = songName;
  console.log(songName);
  document.getElementById("songArtist").innerHTML = songArtist;
  console.log(songArtist);
  music = new Audio('https://tresre.dev/music/assets/mp3/' + songChoice + '.mp3');
  document.title = songName + " - " + songArtist;
  document.getElementById("songCover").innerHTML = "<img src='https://tresre.dev/music/assets/covers/" + songChoice + ".png' style='height: 200px;' class='cover'>";
  updateMetadata();
  music.play();
  music.muted = false;
  document.getElementById("musicMute").checked = true;
  document.getElementById("musicToggle").checked = true
      
  startBar();
      
  if (window[songChoice] == undefined) {
    window[songChoice] = 0;
  }
  window[songChoice] = ++window[songChoice];
  console.log(songChoice + ' - ' + window[songChoice]); 
  
  music.onended = function() {
    if (document.getElementById("musicRepeat").checked == true) {
      if (document.getElementById("musicToggle").checked == true) {
        music.play();
        music.currentTime = 0;
      }
      if (document.getElementById("musicMute").checked == true) {
        music.muted = false;
      } else {
        music.muted = true;
      }
    } else {
      chooseSong(1);
    }
  };
}


function startBar () {
  const start = document.querySelector('.start');
  const end = document.querySelector('.end');
  const progressBar = document.querySelector('.progress-bar');
  const now = document.querySelector('.now');

  function conversion (value) {
    let minute = Math.floor(value / 60)
    minute = minute.toString().length === 1 ? ('0' + minute) : minute
    let second = Math.round(value % 60)
    second = second.toString().length === 1 ? ('0' + second) : second
    return `${minute}:${second}`
  }

  music.onloadedmetadata = function () {
    end.innerHTML = conversion(music.duration)
    start.innerHTML = conversion(music.currentTime)
  }

  progressBar.addEventListener('click', function (event) {
    let coordStart = this.getBoundingClientRect().left
    let coordEnd = event.pageX
    let p = (coordEnd - coordStart) / this.offsetWidth
    now.style.width = p.toFixed(3) * 100 + '%'

    music.currentTime = p * music.duration
    
  })
  
  setInterval(() => {
    start.innerHTML = conversion(music.currentTime)
    now.style.width = music.currentTime / music.duration.toFixed(3) * 100 + '%'
  }, 1000)
}


navigator.mediaSession.setActionHandler('nexttrack', function() {
  console.log('User clicked "Next Track" icon.');
  chooseSong(1);
});

navigator.mediaSession.setActionHandler('previoustrack', function() {
  console.log('User clicked "Previous Track" icon.');
  musicBack();
});

navigator.mediaSession.setActionHandler('play', async function() {
  console.log('User clicked "Play" icon.');
  sessionToggle();
});

navigator.mediaSession.setActionHandler('pause', function() {
  console.log('User clicked "Pause" icon.');
  sessionToggle();
});


function sessionToggle() {
  var checkBox = document.getElementById("musicToggle");
  var setmusic = music;
  if (checkBox.checked == true) {
    document.getElementById("musicToggle").checked = false;
    setmusic.pause();
  } else {
    document.getElementById("musicToggle").checked = true;
    setmusic.play();
  }
}


function updateMetadata() {
  const splitSong = songChoice.split("$");
  songName = splitSong[0];
  songName = songName.replace(/_/g, " ");
  songArtist = splitSong[1];
  songArtist = songArtist.replace(/_/g, " ");
  
  navigator.mediaSession.metadata = new MediaMetadata({
    title: songName,
    artist: songArtist,
    artwork: [
      { src: 'https://tresre.dev/music/assets/covers/' + songChoice + '.png', sizes: '96x96',   type: 'image/png' },
      { src: 'https://tresre.dev/music/assets/covers/' + songChoice + '.png', sizes: '128x128', type: 'image/png' },
      { src: 'https://tresre.dev/music/assets/covers/' + songChoice + '.png', sizes: '192x192', type: 'image/png' },
      { src: 'https://tresre.dev/music/assets/covers/' + songChoice + '.png', sizes: '256x256', type: 'image/png' },
      { src: 'https://tresre.dev/music/assets/covers/' + songChoice + '.png', sizes: '384x384', type: 'image/png' },
      { src: 'https://tresre.dev/music/assets/covers/' + songChoice + '.png', sizes: '512x512', type: 'image/png' },
    ]
  });
}


document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 74:
            musicBack();
            break;
        case 75:
            sessionToggle();
            break;
        case 76:
            chooseSong(1);
            break;
        case 77:
	    var checkBox = document.getElementById("musicMute");
            if (checkBox.checked == true) {
	      checkBox.checked = false;
      	      volumeDown();
    	    } else {
	      checkBox.checked = true;
      	      volumeUp();
    	    }
            break;
	case 220:
            mots("Je_Te_Laisserai_Des_Mots$Patrick_Watson");
            break;
        default:
            return;
    }
};
