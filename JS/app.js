
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


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
    document.getElementById("results").style.gridTemplateRows = "repeat("+(Math.floor(response.length / 3)+1)+", 300px)";
    /* Fill result's elements */
    $(document).ready(function(){
      for(var i = 0; i< response.length; i++)
        $("#results").append("<div class='element' id='"+i+"'><a href='description.html?id="+response[i].id+"' style='color:black;'><p>Xh ago . "+response[i].type+"</p><h2>"+response[i].title+"</h2><p>"+response[i].company+"</p><h4>Location</h4></a></div>");  
      /* Event handler for job offer */
      $(document).ready(function() {
        $(".element").click(function() {
            console.log(response[this.id]);
            /* setCookie('jobOffer', response[this.id], 7); */
            sessionStorage.setItem('jobOffer', JSON.stringify(response[this.id]));
        });
      });
   });
   
  });

  return false; 
});
