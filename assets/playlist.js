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
    document.getElementById("playlist5").checked = false;
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
    document.getElementById("playlist5").checked = false;
    playlist = [
      "Bonfire$Craig_Morgan",
      "Come_Back_As_A_Country_Boy$Blake_Shelton",
      "Cowboy_Killer$Ian_Munsick",
      "Fall_In_Love$Bailey_Zimmerman",
      "Fancy_Like$Walker_Hayes",
      "Holy_Water$Michael_Ray",
      "Never_Comin_Home$Bailey_Zimmerman",
      "Out_in_the_Middle$Zac_Brown_Band",
      "Shot_Glass$Randall_King",
      "Take_Me_Home_Country_Roads$John_Denver",
      "Til_You_Cant$Cody_Johnson",
      "Wagon_Wheel$Darius_Rucker",
      "What_Ifs$Kane_Brown",
      "When_It_Rains_It_Pours$Luke_Combs",
      "10000_Hours$Dan_and_Shay_and_Justin_Bieber"
    ];
  }
  
  if (playlistChoice == "electronic") {
    console.log("electronic loaded");
    document.getElementById("playlist1").checked = false;
    document.getElementById("playlist2").checked = false;
    document.getElementById("playlist3").checked = true;
    document.getElementById("playlist4").checked = false;
    document.getElementById("playlist5").checked = false;
    playlist = [
      "AllttA$20syl",
      "Atmospherica$Squiid",
      "Bite_Your_Lips$Andrew_Applepie",
      "Blue_Boi$Lakeyinspired",
      "Calling_Me$Ooyy",
      "Dansez$Fasion",
      "Faidherbe_Square$ProleteR",
      "Howling$Lupus_Nocte",
      "Intersection$Syntheticmotion",
      "Jackpot$TheFatRat",
      "Shake_Down$Jules_Gaia",
      "Time_Lapse$TheFatRat",
      "Vibe_With_Me$Joakim_Karud",
      "Will_You_Dance_With_Me$Lalinea",
      "Your_Gain$Swif7"
    ];
  }
  
  if (playlistChoice == "rock") {
    console.log("rock loaded");
    document.getElementById("playlist1").checked = false;
    document.getElementById("playlist2").checked = false;
    document.getElementById("playlist3").checked = false;
    document.getElementById("playlist4").checked = true;
    document.getElementById("playlist5").checked = false;
    playlist = [
      "Crazy_Train$Ozzy_Osbourne",
      "Dont_Stop_Believin$Journey",
      "Eye_Of_The_Tiger$Survivor",
      "Gimme_Shelter$The_Rolling_Stones",
      "House_Of_The_Rising_Sun$The_Animals",
      "I_Was_Made_For_Lovin_You$KISS",
      "Immigrant_Song$Led_Zeppelin",
      "Livin_On_A_Prayer$Bon_Jovi",
      "Paradise_City$Guns_N_Roses",
      "Send_Me_An_Angel$Real_Life",
      "Sunglasses_At_Night$Corey_Hart",
      "The_Chain$Fleetwood_Mac",
      "Walk_Like_An_Egyptian$The_Bangles",
      "We_Didnt_Start_The_Fire$Billy_Joel",
      "We_Will_Rock_You$Queen"
    ];
  }
  
  if (playlistChoice == "lofi") {
    console.log("lofi loaded");
    document.getElementById("playlist1").checked = false;
    document.getElementById("playlist2").checked = false;
    document.getElementById("playlist3").checked = false;
    document.getElementById("playlist4").checked = false;
    document.getElementById("playlist5").checked = true;
    playlist = [
      "Blue_Boi$LAKEY_INSPIRED",
      "The_Final_Blow$aKu",
      "Biscuit$Lukrembo",
      "Lighter$midsummer",
      "Serenity$Riddiman",
      "Bread$Lukrembo",
      "My_Sacrifice$Homie_Cat",
      "Destination_Unknown$Aimes",
      "Herbal_Tea$Artificial_Music",
      "FLOAT$Smino_Ft_KOTA",
      "www_is_a_thing$Dj_Quads",
      "Autumn$Lee",
      "Chilling$Meister_Beats",
      "Eternal_Youth$RUDE",
      "Grace$Tenno"
    ];
  }
  
  chooseSong(0);
}
