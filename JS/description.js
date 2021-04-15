

/* console.log(window.location.search.slice(4)); */


var settings = {
    "url": "https://cors.bridged.cc/https://jobs.github.com/positions.json?id="+window.location.search.slice(4),
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(settings.url);
    console.log(response);
  });