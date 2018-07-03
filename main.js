var now, hours, minutes, seconds, percent;
var $clock = document.querySelector(".clock");

var timeDisplay = hours + ":" + minutes + ":" + seconds



console.log(timeDisplay);

setInterval(function(){
  now = new Date();

// Making a percent for the bar // 
  percent = (now.getSeconds() / 60) * 100 ;
  precent = Math.round(percent)
  console.log(percent)



  hours = now.getHours();
  var hoursPadded = hours.toString().padStart(2,'0');
  console.log('seconds padded', hoursPadded);

  minutes = now.getMinutes();
  var minutesPadded = minutes.toString().padStart(2,'0');
  console.log('seconds padded', minutesPadded);

  seconds = now.getSeconds();
  var secondsPadded = seconds.toString().padStart(2,'0');
  console.log('seconds padded', secondsPadded);

  $clock.textContent = hoursPadded + ":" + minutesPadded + ":" + secondsPadded;
},1000);
