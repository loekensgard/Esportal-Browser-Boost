window.setTimeout(() => {
    var elementToRemove = document.getElementById("right-side-info-content").querySelector(".live-streams");
    
    if(elementToRemove !== null){
        elementToRemove.remove();
    }
    
}, 5000);

// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.executeScript(null, {file: "remove.js"});
//  });
