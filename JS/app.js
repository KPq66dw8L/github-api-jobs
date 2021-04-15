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
    
    /* Set the grid size depending on the number of elements to load */
    document.getElementById("results").style.gridTemplateRows = "repeat("+(Math.floor(response.length / 3)+1)+", 1fr)";
    /* Fill result's elements */
    $(document).ready(function(){
      for(var i = 0; i< response.length; i++)
        $("#results").append("<div class='element'><p>Xh ago . "+response[i].type+"</p><h2>"+response[i].title+"</h2><p>"+response[i].company+"</p><h4>Location</h4></div>"); 
        
        console.log(response[0].created_at); 
   });

  });

  return false; 
});
