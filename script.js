const key = "64cb6ff62e18d049b46fe2db49f1a869";
const username = "robatortas";
const apiURL = "last.fm/api/auth";

fetch(apiURL).then(response => response.json()).then(data => {
    console.log("Recent Tracks: ", data.recenttracks.track);
}).catch(error => {
    console.error('Error fetching recent tracks:', error);
  });