

var settings = {
  "url": "https://peaceful-ravine-72730.herokuapp.com/https://jobs.github.com/positions.json?description=python&full_time=true",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  $("#test").html(response[0].company);
  console.log(response[0].company);
});