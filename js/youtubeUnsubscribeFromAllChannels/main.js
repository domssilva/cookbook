/*
 * 1.
 * Go to https://www.youtube.com/feed/channels and scroll to the 
 * bottom of the page to populate all items to the screen. 
 *
 * 2.
 * run the following code on the console.
*/

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

    console.log(i + " unsubscribed by YOGIE");
    console.log(els.length + " remaining");

}

