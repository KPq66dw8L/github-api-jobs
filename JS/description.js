let job = $.parseJSON(sessionStorage.getItem('jobOffer'));

console.log(job);

$("#intro").append("<div><h2>"+job.company+"</h2><p>"+job.company_url+"</p></div> <div class='divBtn'> <a class='btn btn-2' href='"+job.company_url+"' rel='noopener noreferrer' target='_blank'>Company Site</a></div>");

$("#description").append("<div class='subDescription'><div><p>"+job.created_at+" . "+job.type+"</p><h1>"+job.title+"</h1><h4>"+job.location+"</h4></div><div class='divBtn'><a style='visibility:hidden' class='btn btn-1' href='' rel='noopener noreferrer' target='_blank'>Apply Now</a></div></div><p>"+job.description+"</p>");


$("#how-to-apply").append("<h2>How to Apply</h2>"+job.how_to_apply);

let lien = $( "a" ).eq(3).attr( "href" );
console.log(lien);

$("#footer").append("<div class='jobFooter'><h3>"+job.title+"</h3><p>"+job.company+"</p></div><div class='divBtn'><a class='btn btn-1' href='"+lien+"' rel='noopener noreferrer' target='_blank'>Apply Now</a></div>");

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