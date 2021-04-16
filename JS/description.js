let job = $.parseJSON(sessionStorage.getItem('jobOffer'));

console.log(job);

$("#intro").append("<div><h2>"+job.company+"</h2><p>"+job.company_url+"</p></div> <div class='divBtn'> <a class='btn btn-2' href='"+job.company_url+"' rel='noopener noreferrer' target='_blank'>Company Site</a></div>");

$("#description").append("<div class='subDescription'><div><p>"+job.created_at+" . "+job.type+"</p><h1>"+job.title+"</h1><h4>"+job.location+"</h4></div><div class='divBtn'><a class='btn btn-1' href='"+job.how_to_apply+"' rel='noopener noreferrer' target='_blank'>Apply Now</a></div></div><p>"+job.description+"</p>");


$("#description").append("");

$("#footer").append("<div><h3>"+job.title+"</h3><p>"+job.company+"</p></div><div class='divBtn'><a class='btn btn-1' href='#' rel='noopener noreferrer' target='_blank'>Apply Now</a></div>");
