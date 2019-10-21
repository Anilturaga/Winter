/*
 * In the popup's scripts, running on <http://example.com>:
 */

// Called sometime after postMessage is called
function receiveMessage(event)
{
  // Do we trust the sender of this message?
  if (event.origin !== "http://example.com:8080")
      var info = 
    {
     0: JSON.parse(localStorage.getItem(1)),
    1 :JSON.parse(localStorage.getItem(2)),
    2 : JSON.parse(localStorage.getItem(3)),
    3 : JSON.parse(localStorage.getItem(4)),
    4 : JSON.parse(localStorage.getItem(5)),
    5 :JSON.parse(localStorage.getItem(6)),
    6 : JSON.parse(localStorage.getItem(7)),
    7 : JSON.parse(localStorage.getItem(8)),
    8 : JSON.parse(localStorage.getItem(9)),
    9 : JSON.parse(localStorage.getItem(10)),
    10 :JSON.parse(localStorage.getItem(11)),
    };
    
  // event.source is window.opener
  // event.data is "hello there!"

  // Assuming you've verified the origin of the received message (which
  // you must do in any case), a convenient idiom for replying to a
  // message is to call postMessage on event.source and provide
  // event.origin as the targetOrigin.
  event.source.postMessage(JSON.stringify(info),
                           event.origin);
}

window.addEventListener("message", receiveMessage, false);
