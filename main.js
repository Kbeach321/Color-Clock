//--------------------  JS VARIABLES ----------------------//
var now, hours, minutes, seconds, percent,
 hoursHex, minutesHex, secondsHex, hexTime, hexBkg,
 hoursPadded, minutesPadded, secondsPadded;
var hover = false;
//--------------------  HTML VARIABLES ----------------------//
var $clock = document.querySelector(".clock");
var $container = document.querySelector(".container");
var $progress_bar = document.querySelector(".progress_bar");
//--------------------  HTML FUNCTIONS ----------------------//
$container.onmouseover = function(){
  hover = true;
};
$container.onmouseout = function(){
  hover = false;
};
//--------------------  JS FUNCTIONS ----------------------//
setInterval(function(){
  now = new Date();
//----------------- GENERATE HEX CODES ------------------//
// toString(16) = hex translation // slice()
  hoursHex = ("0" + now.getHours().toString(16)).slice(-2);
  minutesHex = ("0" + now.getMinutes().toString(16)).slice(-2);
  secondsHex = ("0" + now.getSeconds().toString(16)).slice(-2);
//------------------- HEX AS VALUE ------------------------//
  hexTime = hoursHex + ":" + minutesHex + ":" + secondsHex;
//------------------- HEX AS COLOR ------------------------//
  hexBkg = "#" + hoursHex + minutesHex + secondsHex;
  $container.style.backgroundColor=hexBkg ;
//------------------ GETS & PADS HOURS ------------------//
  hours = now.getHours();
  hoursPadded = hours.toString().padStart(2,'0');
//------------------ GETS & PADS MINS ------------------//
  minutes = now.getMinutes();
  minutesPadded = minutes.toString().padStart(2,'0');
//------------------ GETS & PADS SECONDS ------------------//
  seconds = now.getSeconds();
  secondsPadded = seconds.toString().padStart(2,'0');
//------------------ DISPLAY ON .CLOCK ------------------//
if(hover) {
  $clock.textContent = hexTime;
} else {
  $clock.textContent = hoursPadded + ":" + minutesPadded + ":" + secondsPadded;
}
//------------------ PERCENT FOR BAR ------------------//
  percent = (now.getSeconds() / 60) * 100;
  percent = Math.round(percent);
  $progress_bar.style.width = percent + "%";

},1000);
