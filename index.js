var iframeMap = {
    "Dashboard": "https://docs.google.com/document/d/e/2PACX-1vRRCU4PUvB_wtGfXlDvmlJ1jgXgvdZTruy_4eGW70i4a3yixU4XIY9aZxEz8FJaU5-OoJddGJIO91xW/pub?embedded=true",
    "Map": "https://www.google.com/maps/d/u/6/embed?mid=1kWBQ9SNwwDjUrEqiFN1LQ6r5q6pWpGw&ehbc=2E312F&noprof=1",
    "Misc": "https://docs.google.com/document/d/e/2PACX-1vQB3aoK1ks-cDKkrYvW1mSHQBZvb806UR7yJNOkw8M39ZOahSprImaA_CyXdc7Ycy4uQj9ClsSa9nKg/pub?embedded=true"
}

var countDownDate = new Date("Dec 27, 2024 16:00:00 GMT-5").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var countdownString = "~";

    if (days == 0 && hours == 0 && minutes == 0) {
        countdownString += seconds + "s";
    } else if (days == 0 && hours == 0) {
        countdownString += minutes + "m " + seconds + "s";
    } else if (days == 0) {
        countdownString += hours + "h " + minutes + "m " + seconds + "s";
    } else {
        countdownString += days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }

    countdownString += " till Operation Echo"

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Operation Echo is In Progress";
    } else {
        document.getElementById("countdown").innerHTML = countdownString;
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
    document.getElementById("datetime").innerHTML = "Montreal (GMT-5)<br>" + formatter.format(new Date());
}, 1000);


function reloadIFrame() {
    document.getElementById("dashboard").src = "https://docs.google.com/document/d/e/2PACX-1vRRCU4PUvB_wtGfXlDvmlJ1jgXgvdZTruy_4eGW70i4a3yixU4XIY9aZxEz8FJaU5-OoJddGJIO91xW/pub?embedded=true";
    document.getElementById("map").src = "https://www.google.com/maps/d/u/6/embed?mid=1kWBQ9SNwwDjUrEqiFN1LQ6r5q6pWpGw&ehbc=2E312F&noprof=1";
    document.getElementById("traffic").src = "https://www.google.com/maps/vt/data=XHPXLaEuKujieiEd8RwyvMDhzojV5_gjWQSbPscZ_9NX2yhhyRiMCpfJoDhfSpm9eD6RZPEjKQbe1ppLMbogrTVPaicCJiBPBHmHz766KpQ3_mtYMRmd-vxBMjBbWLuO6sG_CNtcqwIHw7Dt0UNQGQGzvFshZg5HVLXmyoWyYsdRE0_vY1mezqVGFLn80Lk2KefwGc1a2Rh3tcFqNPd6p5lbeJZ6_R1qYFuQx0STM_4sx8m1u4IfFLYq1sCSj4XYgDSgS_zcwpgzDO7w5A";
    document.getElementById("misc").src = "https://docs.google.com/document/d/e/2PACX-1vQB3aoK1ks-cDKkrYvW1mSHQBZvb806UR7yJNOkw8M39ZOahSprImaA_CyXdc7Ycy4uQj9ClsSa9nKg/pub?embedded=true";
}


var cameraIds = ['3814', '3410', '3411', '3412', '3413', '3414', '3415', '3416', '3417', '3419', '3420', '3421', '3422', '3423', '3369', '3815', '3816', '3319', '3322', '3324', '3325', '3326', '3327', '3328', '3329', '3330', '3331', '3332', '3333', '3334', '3335', '3336', '3337', '3338', '3339', '3342', '3343', '3344', '3345', '3347', '3348', '3349', '3350', '3351', '3352', '3353', '3361', '3362', '3363', '3364', '3365', '3366', '3367', '3370', '3373', '3374', '3375', '3376', '3377', '3378', '3379', '3380', '3381', '3382', '3383', '3385', '3386', '3387', '3388', '3389', '3390', '3391', '3393', '3394', '3395', '3397', '3398', '3399', '3400', '3371', '3372', '3426', '3427', '3428', '3429', '3430', '3431', '3432', '3433', '3434', '3435', '3436', '3438', '3439', '3440', '3441', '3443', '3444', '3446', '3451', '3452', '3418', '3341', '3360', '3392', '3442', '3340', '3445', '3598', '3599', '3600', '3346', '3716', '3717', '3718', '3719', '3720', '3721', '3722', '3723', '3724', '3726', '3727', '3728', '3729', '3730', '3731', '3732', '3733', '3734', '3735', '3736', '3737', '3738', '3739', '3368', '3384', '3437', '3396', '3323', '3402', '3798', '3799', '3800', '3801', '3802', '3803', '3804', '3808', '3809', '3810', '3811', '3805', '3424', '3425', '3401', '3403', '3404', '3405', '3406', '3407', '3408', '3409', '3828', '3829', '3830', '3853', '3866', '3900', '3901', '3855', '3875', '3899', '3917', '3918', '3919', '3854', '3891', '3892', '3894', '3895', '3927', '3935', '3959', '3960', '3961', '3962', '3963', '4018', '4023', '4019', '4020', '4035', '4021', '4022', '4024'];


let myArray = [];

function randomNumbers(number, max) {
    var arr = [];
    while (arr.length < number) {
        var r = Math.floor(Math.random() * max) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }

    return arr;
}

function randomiseCctv () {
    let cctvVideos = Array.from(document.getElementsByClassName("cctv-reload"));
    var cctvIds = randomNumbers(cctvVideos.length, cameraIds.length);
    cctvVideos.forEach(
        function (element, index, array) {
            element.src = "https://www.quebec511.info/diffusion/fr/camera/camera.ashx?format=mp4&id=" + cameraIds[cctvIds[index]];
        }
    );
}


var x = setInterval(randomiseCctv, 30000);

document.addEventListener("DOMContentLoaded", (event) => {
    randomiseCctv();
});

function openModal(block) {
    document.body.setAttribute("class", "modal-open");

    document.getElementById('card-modal').style.display = "block";
    document.getElementById("modal-title").innerHTML = block;
    document.getElementById("modal-iframe").src = iframeMap[block];
}


function closeModal() {
    document.getElementById('card-modal').style.display = "none";
    document.body.setAttribute("class", "");
    document.getElementById("modal-iframe").src = "";
}