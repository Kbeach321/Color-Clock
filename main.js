var now, hours, minutes, seconds, percent;
var $clock = document.querySelector(".clock");
console.log('$clock', $clock);

// Displays Initial Time //
var timeDisplay = hours + ":" + minutes + ":" + seconds
console.log(timeDisplay);

var hover = false;

var $container = document.querySelector(".container");
$container.onmouseover = function(){
  hover = true;
};
$container.onmouseout = function(){
  hover = false;
};


setInterval(function(){
  now = new Date();

  var hoursHex = ("0" + now.getHours().toString(16)).slice(-2);
  var minutesHex = ("0" + now.getMinutes().toString(16)).slice(-2);
  var secondsHex = ("0" + now.getSeconds().toString(16)).slice(-2);

  var hexTime = hoursHex + ":" + minutesHex + ":" + secondsHex;

  var hexbkg = "#" + hoursHex + minutesHex + secondsHex;
  $container.style.backgroundColor=hexbkg ;
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
if(hover) {
  $clock.textContent = hexTime;
} else {
  $clock.textContent = hoursPadded + ":" + minutesPadded + ":" + secondsPadded;
}


// Making a percent for the bar //
  percent = (now.getSeconds() / 60) * 100;
  percent = Math.round(percent);
  document.querySelector(".progress_bar").style.width=percent + "%";

},1000);
