window.setTimeout(() => {
    //find the bottom drawer at the left side (the one with all the livestreams)
    var sideMenu = document.querySelectorAll('[class*="PrivateLeftSideBarstyle"]');
    if(sideMenu.length > 0){
        var lastElement = sideMenu[sideMenu.length -1];
        lastElement.remove();
    }

    //find the popoup video player
    var popup = document.querySelectorAll('[class*="VideoPopupstyle"]');
    if(popup.length > 0){
        popup.forEach(x => x.remove());
    }
}, 5000)