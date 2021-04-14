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
  });

  return false; 
});

/* set le nombre de row à taille array divisé par 3, et recopier la div element le nombre de taille array en modifiant les infos */

/* document.getElementById("results").style.gridTemplateRows = "repeat(5, 1fr)"; */

/* https://stackoverflow.com/questions/30267973/how-to-repeat-div-element-n-times-in-html */

