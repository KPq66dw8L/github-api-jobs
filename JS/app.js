/* Obternir data du Form; -> pas besoin ici*/
/* $("#research").serialize(); */

$('a:first-child').click( function(e) {
  e.preventDefault(); 
  let jobName = encodeURIComponent(document.getElementById('job-name').value);
  let locationName = encodeURIComponent(document.getElementById('location').value);
  console.log(encodeURIComponent(jobName), encodeURIComponent(locationName));

  var settings = {
    "url": "https://cors.bridged.cc/https://jobs.github.com/positions.json?description="+jobName+"&location="+locationName,
    "method": "GET",
    "timeout": 0,
  };
  console.log(settings.url);
  $.ajax(settings).done(function (response) {
    $("#test").html(response);
    console.log(response);
  });

  return false; 
});

