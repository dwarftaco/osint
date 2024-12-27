var iframeMap = {
    "Dashboard": "https://docs.google.com/document/d/e/2PACX-1vRRCU4PUvB_wtGfXlDvmlJ1jgXgvdZTruy_4eGW70i4a3yixU4XIY9aZxEz8FJaU5-OoJddGJIO91xW/pub?embedded=true",
    "Map": "https://www.google.com/maps/d/u/6/embed?mid=1kWBQ9SNwwDjUrEqiFN1LQ6r5q6pWpGw&ehbc=2E312F&noprof=1",
    "Misc": "https://docs.google.com/document/d/e/2PACX-1vQB3aoK1ks-cDKkrYvW1mSHQBZvb806UR7yJNOkw8M39ZOahSprImaA_CyXdc7Ycy4uQj9ClsSa9nKg/pub?embedded=true"
}

// Estimated datetime for now
var countDownDate = new Date("Dec 27, 2024 12:00:00 GMT-5").getTime();

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
    document.getElementById("datetime").innerHTML = "Montreal (GMT-5)<br>" + formatter.format(new Date());
}, 1000);


// window.setInterval("reloadIFrame();", 5000);
function reloadIFrame() {
    document.getElementById("dashboard").src = "https://docs.google.com/document/d/e/2PACX-1vRRCU4PUvB_wtGfXlDvmlJ1jgXgvdZTruy_4eGW70i4a3yixU4XIY9aZxEz8FJaU5-OoJddGJIO91xW/pub?embedded=true";
    document.getElementById("map").src = "https://www.google.com/maps/d/u/6/embed?mid=1kWBQ9SNwwDjUrEqiFN1LQ6r5q6pWpGw&ehbc=2E312F&noprof=1";
    document.getElementById("traffic").src = "https://www.google.com/maps/vt/data=XHPXLaEuKujieiEd8RwyvMDhzojV5_gjWQSbPscZ_9NX2yhhyRiMCpfJoDhfSpm9eD6RZPEjKQbe1ppLMbogrTVPaicCJiBPBHmHz766KpQ3_mtYMRmd-vxBMjBbWLuO6sG_CNtcqwIHw7Dt0UNQGQGzvFshZg5HVLXmyoWyYsdRE0_vY1mezqVGFLn80Lk2KefwGc1a2Rh3tcFqNPd6p5lbeJZ6_R1qYFuQx0STM_4sx8m1u4IfFLYq1sCSj4XYgDSgS_zcwpgzDO7w5A";
    document.getElementById("misc").src = "https://docs.google.com/document/d/e/2PACX-1vQB3aoK1ks-cDKkrYvW1mSHQBZvb806UR7yJNOkw8M39ZOahSprImaA_CyXdc7Ycy4uQj9ClsSa9nKg/pub?embedded=true";
}


var x = setInterval(function () {
    Array.from(document.getElementsByClassName("cctv-reload")).forEach(
        function (element, index, array) {
            element.load()
        }
    );
}, 30000);


let proxyUrl = 'https://api.allorigins.win/get?url='; // Public CORS proxy
let rssFeeds = {
    //'Montreal Gazette': 'http://www.montrealgazette.com/montrealgazette/blogs/metropolitannews/rss.aspx',
    'CTV': 'https://montreal.ctvnews.ca/rss/ctv-news-montreal-1.822366',
    //'CityNews': 'https://montreal.citynews.ca/feed/'
}
var rssFeedItems = [];

async function fetchRSSWithProxy(proxyUrl, rssUrl) {
    try {
        const response = await fetch(`${proxyUrl}${encodeURIComponent(rssUrl)}`);
        if (!response.ok) {
            throw new Error(`${rssUrl} HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.contents;
    } catch (error) {
        console.error(`Error fetching RSS feed ${rssUrl} through proxy:`, error);
    }
}

// Function to parse RSS feed using DOMParser
function parseRSS(rssText) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(rssText, 'application/xml');
    return xmlDoc;
}

// Function to extract items from the parsed XML
function extractFeedItems(xmlDoc) {
    const items = xmlDoc.getElementsByTagName('item');
    const feedItems = [];

    const icon = xmlDoc.getElementsByTagName('image')[0]?.getElementsByTagName('url')[0]?.textContent;

    for (let i = 0; i < items.length; i++) {
        const title = items[i].getElementsByTagName('title')[0].textContent;
        const link = items[i].getElementsByTagName('link')[0].textContent;
        const pubDate = items[i].getElementsByTagName('pubDate')[0]?.textContent;
        feedItems.push({ title, link, pubDate, icon });
    }

    return feedItems;
}

function displayFeedItems(feedItems) {
    const container = document.getElementById('newsfeeds');
    container.innerHTML = feedItems
        .map(
            (item) => `
            <li class="newsfeed-item">
                <img class="newsfeed-icon" src="${item.icon}" height="32" width="32" alt="Icon"" />
                <div class="newsfeed-details">
                    <a href="${item.link}" target="_blank" title="${item.title}">${item.title}</a>
                    <div class="newsfeed-pub-date">${item.pubDate}</div>
                </div>
            </li>
        `
        )
        .join('');
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    Array.from(document.getElementsByClassName("cctv-reload")).forEach(
        function (element, index, array) {
            element.addEventListener('loadstart', function () {
                element.setAttribute("class", "cctv-reload loading");
                console.log("loading");
            });
            element.addEventListener('canplay', function () {
                element.setAttribute("class", "cctv-reload");
            });
        }
    );

    Object.entries(rssFeeds).forEach(([rssName, rssUrl]) => {
        fetchRSSWithProxy(proxyUrl, rssUrl).then((rssText) => {
            const xmlDoc = parseRSS(rssText);
            const feedItems = extractFeedItems(xmlDoc);
            // add to rssFeedItems sorted by pubDate:
            rssFeedItems = rssFeedItems.concat(feedItems);
            rssFeedItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
            displayFeedItems(rssFeedItems);
        });
    });

    // // Load RSS feeds
    // Object.entries(rssFeeds).forEach(([key, value]) => {
    //     fetch(`https://api.allorigins.win/get?url=https://rssjson.com/v1.1/${encodeURIComponent(value)}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             let output = '';
    //             data.items.forEach(item => {
    //                 output += `<li><a href="${item.link}" target="_blank"><img src=${item.favicon} height='32px' width='32px'/>${item.pubDate} - ${key} - ${item.title}</a></li>`;
    //             });
    //             document.getElementById("newsfeeds").innerHTML += output;
    //         })
    //         .catch(error => console.error(`Error fetching the ${key} RSS feed:`, error));
    // });
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