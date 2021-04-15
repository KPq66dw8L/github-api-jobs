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
    /* $("#test").html(response); */
    console.log(response.length);

    /* Setting the grid size depending on the number of results */
    document.getElementById("results").style.gridTemplateRows = "repeat("+(Math.floor(response.length / 3)+1)+", 1fr)";

    $(document).ready(function(){
      for(var i = 0; i< response.length; i++)
        $("#results").append("<div class='element'><p>Xh ago . "+response[i].type+"</p><h2>"+response[i].title+"</h2><p>"+response[i].company+"</p><h4>Location</h4></div>");  
   });
  });

  

  return false; 
});
