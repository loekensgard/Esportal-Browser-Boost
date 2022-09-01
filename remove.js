window.setTimeout(() => {
    //try to remove the parent element
    var elementToRemove = document.getElementById("right-side-info-content").querySelector(".live-streamz");
    if(elementToRemove !== null){
        elementToRemove.remove();
    }
    
    //if the parent element is null, find all iframes and hide them.
    var frames = document.getElementsByTagName('iframe');
    for (let i = 0; i < frames.length; i++) {
        frames[i].style.display = "none"
    }

}, 5000)