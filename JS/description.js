

/* console.log(window.location.search.slice(4)); */


/* var settings = {
    "url": "https://cors.bridged.cc/https://jobs.github.com/positions.json?id="+window.location.search.slice(4),
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(settings.url);
    console.log(response);
  }); */

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

let job = $.parseJSON(sessionStorage.getItem('jobOffer'));

console.log(job);