/*
 * 1. Go to https://www.youtube.com/feed/channels  
 * 2. run the following code on the console. 
 * 3. sit back and watch
*/

// automatically scrolls to the bottom of the page
var scrollInterval = setInterval(function() {
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
}, 50);

let i = 0;
let myVar = setInterval(myTimer, 1000);

function myTimer () {
    let els = document.getElementById("grid-container").getElementsByClassName("ytd-expanded-shelf-contents-renderer");
    if (i < els.length) {
        els[i].querySelector("[aria-label^='Unsubscribe from']").click();
        setTimeout(function () {
            let unSubBtn = document.getElementById("confirm-button").click();
        }, 2000);
        setTimeout(function () {
            els[i].parentNode.removeChild(els[i]);
        }, 2000);
    }

    i++;

    console.log(i + " channels unsubscribed");
    console.log(els.length + " channels remaining");

}

