var PATH_SEGMENTS_TO_SKIP = 1;

function redirect() {
  var location = window.location;
  var playlist = location.pathname.split("/")[
    PATH_SEGMENTS_TO_SKIP + 1
  ];
  window.location.href = playlist;
}

redirect();
