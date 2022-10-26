window.setTimeout(() => {
    var matches = []; 

    //find the bottom drawer at the left side (the one with all the livestreams)
    var sideMenu = document.querySelectorAll('[class*="PrivateLeftSideBarstyle"]');
    if(sideMenu.length > 0){
        var lastElement = sideMenu[sideMenu.length -1];
    
        matches.push(lastElement);
    
        lastElement.remove();
    }
    
    //find the popoup video player
    var popup = document.querySelectorAll('[class*="VideoPopupstyle"]');
    for(var pop of popup){
        matches.push(pop);
        pop.remove();
    }
    
    //find the live-stream-section
    var streams = document.querySelectorAll('[class*="live-steam-section"]');
    for(var pop of streams){
        matches.push(pop);
        pop.remove();
    }

    var iframes = document.querySelectorAll('iframe[src*="https://player.twitch.tv"]');
    for(var pop of iframes){
        matches.push(pop);
        pop.remove();
    }
    
    //find all iframes
    // var iframes = document.querySelectorAll('iframe');
    // for(var pop of iframes){
    //     matches.push(pop);
    //     pop.remove();
    // }
    
    console.log(matches);
}, 5000)