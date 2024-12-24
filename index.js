// Estimated datetime for now
var countDownDate = new Date("Dec 27, 2024 12:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = "~" + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s till Operation Echo";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Operation Echo is In Progress";
    }
}, 1000);

let options = {
    timeZone: 'EST',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  },
  formatter = new Intl.DateTimeFormat([], options);

  var x = setInterval(function () {
    document.getElementById("datetime").innerHTML = formatter.format(new Date());
}, 1000);

document.getElementById("datetime").innerHTML = formatter.format(new Date());

// window.setInterval("reloadIFrame();", 5000);
function reloadIFrame() {
    document.getElementById("dashboard").src = "https://docs.google.com/document/d/e/2PACX-1vRRCU4PUvB_wtGfXlDvmlJ1jgXgvdZTruy_4eGW70i4a3yixU4XIY9aZxEz8FJaU5-OoJddGJIO91xW/pub?embedded=true";
    document.getElementById("map").src = "https://www.google.com/maps/d/u/6/embed?mid=1kWBQ9SNwwDjUrEqiFN1LQ6r5q6pWpGw&ehbc=2E312F&noprof=1";
    document.getElementById("traffic").src = "https://www.google.com/maps/vt/data=XHPXLaEuKujieiEd8RwyvMDhzojV5_gjWQSbPscZ_9NX2yhhyRiMCpfJoDhfSpm9eD6RZPEjKQbe1ppLMbogrTVPaicCJiBPBHmHz766KpQ3_mtYMRmd-vxBMjBbWLuO6sG_CNtcqwIHw7Dt0UNQGQGzvFshZg5HVLXmyoWyYsdRE0_vY1mezqVGFLn80Lk2KefwGc1a2Rh3tcFqNPd6p5lbeJZ6_R1qYFuQx0STM_4sx8m1u4IfFLYq1sCSj4XYgDSgS_zcwpgzDO7w5A";
    document.getElementById("cctv").src = "https://wxyzwebcams.com/network/joe.php?url=https://cdn3.wowza.com/5/REFkVjRKS0dzbTYr/live/group1Delayed_360p/playlist.m3u8";
    document.getElementById("misc").src = "https://docs.google.com/document/d/e/2PACX-1vQB3aoK1ks-cDKkrYvW1mSHQBZvb806UR7yJNOkw8M39ZOahSprImaA_CyXdc7Ycy4uQj9ClsSa9nKg/pub?embedded=true";
}