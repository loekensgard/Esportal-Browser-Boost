window.setTimeout(() => {
    //find all livestream sections
    var livestreams = document.querySelectorAll("a[href*='/twitch']");
    for(var stream of livestreams){
        stream.style.display = 'none';
    }

    //remove popup
    var iframes = document.querySelectorAll('iframe[src*="https://player.twitch.tv"]');
    for(var iframe of iframes){
        iframe.style.display = 'none';
    }

    //find live streams text
    var text = 'live streams';
    for (var div of document.querySelectorAll('div')) {
        if (div.textContent.toLowerCase() === text) {
            div.style.display = 'none';
        }
    }

    //find livestream section
    var liveStreamSection = document.querySelectorAll("[class*='live-ste']");
    for (var section of liveStreamSection){
        section.style.display = 'none';
    }
}, 5000)
