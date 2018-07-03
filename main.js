var now, hours, minutes, seconds, percent;
var $clock = document.querySelector(".clock");

// Displays Initial Time //
var timeDisplay = hours + ":" + minutes + ":" + seconds
console.log(timeDisplay);

//var hoursHex = ("0" + now.getHours().tostring(16)).slice(-2)
//console.log(hoursHex)



setInterval(function(){
  now = new Date();



// Gets Hours --> Pads Hours //
  hours = now.getHours();
  var hoursPadded = hours.toString().padStart(2,'0');
  // console.log('seconds padded', hoursPadded);

// Gets Minutes --> Pads Hours //
  minutes = now.getMinutes();
  var minutesPadded = minutes.toString().padStart(2,'0');
  // console.log('seconds padded', minutesPadded);

// Gets Seconds --> Pads Hours //
  seconds = now.getSeconds();
  var secondsPadded = seconds.toString().padStart(2,'0');
  // console.log('seconds padded', secondsPadded);

// Prints the padded content into the HTML //
  $clock.textContent = hoursPadded + ":" + minutesPadded + ":" + secondsPadded;

// Making a percent for the bar //
  percent = (now.getSeconds() / 60) * 100 ;
  percent = Math.round(percent)
  console.log(percent)

},1000);
