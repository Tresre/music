var PATH_SEGMENTS_TO_SKIP = 1;

function redirect() {
  var location = window.location;
  var playlist = location.pathname.split("/")[
    PATH_SEGMENTS_TO_SKIP + 1
  ];
  if (playlist.includes("song") == true) {
    var song = location.pathname.split("=")[1];
    console.log("https://tresre.dev/music/?" + playlist + "/" + song);
    window.location.href = "https://tresre.dev/music/";
    mots(song);
    console.log(song);
  } else {
    console.log("https://tresre.dev/music/?" + playlist);
    window.location.href = "https://tresre.dev/music/?" + playlist;
  }
}

redirect();
