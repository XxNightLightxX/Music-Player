


//Listening for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {


  //if user presses play, this is executed
  if(msg.name == "trackPlay"){

    var trackName = msg.track;
    var audioFile = document.querySelector('.audio-element');
    audioFile.src = 'track-'+trackName+'.mp3';
    audioFile.play();

  }


  //If user presses pause, this segment is executed 
  if(msg.name == "trackPause"){

    var audioFile = document.querySelector('.audio-element');
    audioFile.pause();
  }

});
