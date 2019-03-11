






// Met deze functie wordt de tijd weergeven:
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23 de uren
    var m = date.getMinutes(); // 0 - 59 de minuten
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    
    var time = h + ":" + m + session;
    document.getElementById("MyClockDisplay").innerHTML = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();





// De is de masterTimeline. Deze zorgt ervoor dat zowel de eerste timeline als de tweede timeline worden uitgevoerd
var masterTimeline = new TimelineMax({});
masterTimeline
  .add(part1())
  .add(part2());

 //Dit is de timeline dat geld voor de animaties van het logo, de klok(letters) en de (laagstaande) zon of maan.
 function part1() {
  var tl = new TimelineMax();

  tl.fromTo(".logo", 2, {x:-300, scale:0.1}, {x:0, scale:1})
    .fromTo(".clock", 2, {x:-300, scale:0.1}, {x:0, scale:1}, "-=2")
    .fromTo(".moon, .sun, sun-laag", 4, {x:-10, y:0, opacity:0.0}, {ease: Back.easeOut.config(1.7), x:70, y:120 , opacity:1.0, rotation: 360}, "-=1");
  return tl;
}

// Dit is de timeline dat ervoor moet zorgen dat wolken continue richting de rechterkant bewegen.
function part2() {
  var tl = new TimelineMax({repeat: -1, repeatDelay: 1});

  tl.fromTo(".wolk1", 10, {xPercent:10, y:60, opacity:0.5}, {xPercent:100, y:60, opacity:0.0})
     fromTo(".wolk2", 10, {xPercent:10, y:200, opacity:0.5}, {xPercent:100, opacity:0.0});
  return tl;
}




