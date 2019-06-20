




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
var masterTimeline = new TimelineMax();
masterTimeline
  .add(part1())
  .add(part2(),"-=10");

 //Dit is de timeline dat geld voor de animaties van het logo, de klok(letters) en de (laagstaande) zon of maan.
function part1() {
  var tl = new TimelineMax();

  tl.fromTo(".logo", 2, {x:-400, scale:0.1}, {x:0, rotation: 360, scale:1});
  tl.fromTo(".clock", 2, {x:-400, scale:0.1}, {x:0, rotation: 360, scale:1},"-=2");
  tl.fromTo(".sun", 3, {x:-400,  scale:0.1, opacity:0.0}, {x:0 , scale:1, ease: Bounce.easeOut, opacity:1});
  tl.fromTo(".moon", 3, {x:-400,  scale:0.1}, {x:0 , scale:1, ease: Bounce.easeOut});
  tl.fromTo(".laagstaande-sun", 3, {x:-400,  scale:0.1}, {x:0 , scale:1, ease: Bounce.easeOut});
  return tl;
}

// Dit is de timeline dat ervoor moet zorgen dat wolken opkomen en weer verdwijnen.
function part2() {
  var tl = new TimelineMax({repeat: -1, repeatDelay: 1});

  tl.fromTo(".wolk1", 7, {opacity:0.0}, {opacity:0.4});
  tl.fromTo(".wolk2", 7, {opacity:0.4}, {opacity:0.0}),"-=7";
  tl.fromTo(".wolk1", 7, {opacity:0.4}, {opacity:0.0});
  tl.fromTo(".wolk2", 7, {opacity:0.0}, {opacity:0.4},"-=7");
  
  return tl;
}





