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
    document.getElementById("playlist1").checked = true;
    document.getElementById("playlist2").checked = false;
    document.getElementById("playlist3").checked = false;
    document.getElementById("playlist4").checked = false;
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
    document.getElementById("playlist1").checked = false;
    document.getElementById("playlist2").checked = true;
    document.getElementById("playlist3").checked = false;
    document.getElementById("playlist4").checked = false;
    playlist = [
      "10000_Hours$Dan_and_Shay_and_Justin_Bieber",
      "Come_Back_As_A_Country_Boy$Blake_Shelton",
      "Cowboy_Killer$Ian_Munsick",
      "Fall_In_Love$Bailey_Zimmerman",
      "Fancy_Like$Walker_Hayes",
      "Holy_Water$Michael_Ray",
      "Never_Comin_Home$Bailey_Zimmerman",
      "Out_in_the_Middle$Zac_Brown_Band",
      "Remember_When$Alan_Jackson",
      "Shot_Glass$Randall_King",
      "Take_Me_Home_Country_Roads$John_Denver",
      "Til_You_Cant$Cody_Johnson",
      "Wagon_Wheel$Darius_Rucker",
      "What_Ifs$Kane_Brown",
      "When_It_Rains_It_Pours$Luke_Combs"
    ];
  }
  
  if (playlistChoice == "electronic") {
    console.log("electronic loaded");
    document.getElementById("playlist1").checked = false;
    document.getElementById("playlist2").checked = false;
    document.getElementById("playlist3").checked = true;
    document.getElementById("playlist4").checked = false;
    playlist = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15"
    ];
  }
  
  if (playlistChoice == "rock") {
    console.log("rock loaded");
    document.getElementById("playlist1").checked = false;
    document.getElementById("playlist2").checked = false;
    document.getElementById("playlist3").checked = false;
    document.getElementById("playlist4").checked = true;
    playlist = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15"
    ];
  }
  
  chooseSong(0);
}
