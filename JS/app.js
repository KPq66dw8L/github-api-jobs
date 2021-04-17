//Initial search to fill the page with elements
window.addEventListener('load', (event) => {
  document.getElementById("startSearch").click();
});

//Search when pressing enter for job-name input
// Get the input field
var input = document.getElementById("job-name");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("startSearch").click();
  }
});
//For the location input
var input2 = document.getElementById("location");
input2.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("startSearch").click();
  }
});


$('a:first-child').click( function(e) {
  //remove previous search when new search loads
  $("#results").empty();

  e.preventDefault(); 
  let jobName = encodeURIComponent(document.getElementById('job-name').value);
  let locationName = encodeURIComponent(document.getElementById('location').value);
  console.log(encodeURIComponent(jobName), encodeURIComponent(locationName));
  // Set the cursor ASAP to "Wait" -> 63
  document.body.style.cursor='wait';
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
        
        $("#results").append("<div class='element' id='"+i+"' ><img class='companyLogo' src='"+response[i].company_logo+"'><a href='description.html?id="+response[i].id+"' style='color:black;'><p>"+response[i].type+"</p><h2>"+response[i].title+"</h2><p>"+response[i].company+"</p><h4>"+response[i].location+"</h4></a></div>");  
      /* Event handler for job offer */
      $(document).ready(function() {
        $(".element").click(function() {
            console.log(response[this.id]);
            /* setCookie('jobOffer', response[this.id], 7); */
            sessionStorage.setItem('jobOffer', JSON.stringify(response[this.id]));
        });
      });
      // When the search has finished loading, set cursor back to default...
      document.body.style.cursor='default'
   });
   
  });
  return false; 
});

/* function dark_theme() {
  document.body.classList.toggle("dark-mode");
} */


const chk = document.getElementById('chk');

chk.addEventListener('click', () => {
  chk.checked?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode");
  localStorage.setItem('darkModeStatus', chk.checked);
});

window.addEventListener('load', (event) => {
  if(localStorage.getItem('darkModeStatus')=="true"){
    document.body.classList.add("dark-mode"); 
    document.getElementById('chk').checked = true;
  }
});