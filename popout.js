
//Listening for the play button to be clicked
document.querySelector('button.play').addEventListener('click', function(){ 
  
  
  var selectTrack = document.querySelector('select').value;

  chrome.runtime.sendMessage({name: "trackPlay", track: selectTrack});

});


//Listening for the pause button to be clicked
document.querySelector('button.pause').addEventListener('click', function(){

  chrome.runtime.sendMessage({name: "trackPause"});

});
