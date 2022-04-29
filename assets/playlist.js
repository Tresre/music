function setPlaylist(playlistChoice) {
  if (playlistChoice == undefined) {
    setPlaylist("pop");
    return;
  }
  console.log("choice " + playlistChoice);
  if (music !== undefined) {
    var setmusic = music;
    setmusic.pause();
  }
  var playedSongs = [];
  var dupeSongs = [];
  
  if (playlistChoice == "pop") {
    console.log("pop loaded");
    playlist = [
      "All_About_You$The_Knocks",
      "All_Alone$Fun",
      "Bitter_Sweet_Symphony$The_Verve",
      "Gotta_Get_Up$Harry_Nilsson",
      "Hallucinations$PVRIS",
      "Heat_Waves$Glass_Animals",
      "Levitating$Dua_Lipa",
      "Live_In_The_Moment$Portugal",
      "Nice_To_Meet_Ya$Niall_Horan",
      "No_Rest_For_The_Wicked$Cage_The_Elephant",
      "Only_Human$Jonas_Brothers",
      "Parking_Lot_View$Almost_Monday",
      "Sunflower$Post_Malone",
      "Talk$Two_Door_Cinema",
      "Thunder$SHAED"
    ];
  }
  
  if (playlistChoice == "country") {
    console.log("country loaded");
    playlist = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ];
  }
  
  if (playlistChoice == "electronic") {
    console.log("electronic loaded");
    playlist = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ];
  }
  
  if (playlistChoice == "rock") {
    console.log("rock loaded");
    playlist = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ];
  }
  
  chooseSong(0);
}
